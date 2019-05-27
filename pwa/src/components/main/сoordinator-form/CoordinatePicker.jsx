import React, { useState, useRef, useEffect, useContext } from 'react'
import { element, object } from 'prop-types'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'
import ImageCanvas from './ImageCanvas'
import getRadius from '../../../javascripts/getRadius'
import Animated from '../../other/Animated'
import localeContext from '../../../context/locale-context.js'

const propTypes = {
  children: element,
  image: object,
  imageProps: object
}

function CoordinatePicker ({ children, image, imageProps }) {
  const [coords, setCoords] = useState([])
  const [coordsToDisplay, setCoordsToDisplay] = useState(undefined)
  const [removedCoords, setRemovedCoords] = useState([])
  const [coordsHistory, setCoordsHistory] = useState([])
  const [currentCoords, setCurrentCoords] = useState(undefined)

  const [canvasProps, setCanvasProps] = useState({
    width: imageProps.width,
    height: imageProps.height
  })

  const [formContainerProps, setformContainerProps] = useState({
    width: null,
    height: null
  })

  const formContainer = useRef(null)

  const context = useContext(localeContext)

  useEffect(() => {
    setformContainerProps({
      width: formContainer.current.clientWidth,
      height: formContainer.current.clientHeight
    })
  }, [])

  useEffect(() => {
    switch (imageProps.selectionShape) {
      case 'rect':
      case 'poly': {
        setCoordsToDisplay(`${
          (coords && coords.length > 0 && coords !== [])
            ? (
              `${
                coords
                  .map(xy => getNaturalCoords(xy, canvasProps, imageProps))
                  .join(',')
              }`
            )
            : ''
        }`)
        break
      }
      case 'circle': {
        setCoordsToDisplay(`${
          (coords && coords.length > 0 && coords !== [])
            ? `${getNaturalCoords(coords[0], canvasProps, imageProps)},${Math.round(getRadius(getNaturalCoords(coords[0], canvasProps, imageProps), getNaturalCoords(coords[1], canvasProps, imageProps)))}`
            : ''
        }`)
        break
      }
      default: {
        setCoordsToDisplay(undefined)
        break
      }
    }
  }, [coords])

  const clearCoords = () => {
    setCoordsHistory([])
    setCoords([])
    setRemovedCoords([])
    setCurrentCoords(null)
  }

  const undo = () => {
    if (imageProps.selectionShape === 'poly') {
      if (coords.length >= 1) {
        setCoords(coords.slice(0, -1))
        setCurrentCoords(coords[coords.length - 2])
        setRemovedCoords([...removedCoords, coords.pop()])
      }
    } else {
      if (coordsHistory.length > 1) {
        const currentCoordsHistory = coordsHistory.slice(0, -1)

        // TODO: Refactor this code
        setCoordsHistory(currentCoordsHistory)
        setCoords(coordsHistory.slice(0, -1).pop())
        setRemovedCoords([...removedCoords, coords])
      }
    }
  }

  const redo = () => {
    if (imageProps.selectionShape === 'poly') {
      if (removedCoords.length >= 1) {
        const currentRemovedCoords = removedCoords.slice(0, -1)
        const lastRemoved = removedCoords.pop()

        setRemovedCoords(currentRemovedCoords)
        setCoords([...coords, lastRemoved])
        setCurrentCoords(coords[coords.length - 2])
      }
    } else {
      const currentRemovedCoords = removedCoords.slice(0, -1)
      const lastRemoved = removedCoords.pop()

      setCoordsHistory([...coordsHistory, lastRemoved])
      setRemovedCoords(currentRemovedCoords)
      setCoords(lastRemoved)
    }
  }

  const getNaturalCoords = (xy, currentProps, naturalProps) => (
    [
      Math.round(xy[0] * (naturalProps.width / currentProps.width)),
      Math.round(xy[1] * (naturalProps.height / currentProps.height))
    ]
  )

  const { title, note, lastCoords, allCoords } = context.content.contents.main.coordinatePickerForm
  const { undo: undoBtnCap, redo: redoBtnCap, clear } = context.content.contents.main.buttons

  return (
    <Animated>
      <MDBContainer className='mt-3 form-container text-center'>
        <div className="text-left">
          {children}
        </div>
        <MDBRow className='mt-3'>
          <MDBCol>
            <div className='jumbotron' ref={formContainer}>
              {/* TODO: Implement Context API or Redux for managing global state
           and reduce parent > child > parent data & functions transfer */}
              <ImageCanvas
              // Coords
                coords={coords}
                removedCoords={removedCoords}
                currentCoords={currentCoords}
                coordsHistory={coordsHistory}
                // Props objects
                image={image}
                canvasProps={canvasProps}
                imageProps={imageProps}
                formContainerProps={formContainerProps}
                // Functions
                setCoordsHistory={setCoordsHistory}
                setCanvasProps={setCanvasProps}
                setRemovedCoords={setRemovedCoords}
                setCoords={setCoords}
                setCurrentCoords={setCurrentCoords}
                undo={undo}
              />
              <h2 className='text-center mt-3'>{title}</h2>
              <span className='text-muted text-center size-title'>{note}</span>
              <div className='content-center-auto'>
                <div className="grey-text text-left">
                  {imageProps.selectionShape === 'poly'
                    ? (
                      <MDBInput
                        label={lastCoords}
                        icon="map-marker-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={`${currentCoords ? `${getNaturalCoords(currentCoords, canvasProps, imageProps)}` : ''}`}
                      />
                    )
                    : ''
                  }
                  <MDBInput
                    label={allCoords}
                    icon="map"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className='text'
                    value={coordsToDisplay}
                  />
                </div>
                <div className="control-buttons">
                  <MDBBtn
                    onClick={undo}
                    className={`uppercase  ${(coords.length < 1 || (imageProps.selectionShape !== 'poly' && coordsHistory.length < 2)) ? 'disabled' : ''}`}
                  >
                    <i className="fas fa-undo"></i> {undoBtnCap}
                  </MDBBtn>
                  <MDBBtn
                    onClick={redo}
                    className={`uppercase ${removedCoords.length < 1 ? 'disabled' : ''}`}
                  >
                    <i className="fas fa-redo"></i> {redoBtnCap}
                  </MDBBtn>
                  <MDBBtn
                    color='danger'
                    onClick={clearCoords}
                    className='uppercase'
                  >
                    <i className="fas fa-times"></i> {clear}
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Animated>
  )
}

CoordinatePicker.propTypes = propTypes

export default CoordinatePicker
