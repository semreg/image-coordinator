import React, { useState, useRef, useEffect } from 'react'
import { element, object } from 'prop-types'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'
import ImageCanvas from './ImageCanvas'
import Animated from '../../other/Animated'

const propTypes = {
  children: element,
  image: object,
  imageProps: object
}

function CoordinatePicker ({ children, image, imageProps }) {
  const [coords, setCoords] = useState([])
  const [removedCoords, setRemovedCoords] = useState([])
  const [currentCoords, setCurrentCoords] = useState(null)

  const [canvasProps, setCanvasProps] = useState({
    width: imageProps.width,
    height: imageProps.height
  })

  const [formContainerProps, setformContainerProps] = useState({
    width: null,
    height: null
  })

  const formContainer = useRef(null)

  useEffect(() => {
    setformContainerProps({
      width: formContainer.current.clientWidth,
      height: formContainer.current.clientHeight
    })
  }, [])

  useEffect(() => {
    console.log(getNaturalCoords(coords, canvasProps, imageProps))
  }, [coords])

  const clearCoords = () => {
    setCoords([])
    setRemovedCoords([])
    setCurrentCoords(null)
  }

  const undo = () => {
    if (coords.length >= 1) {
      setCoords(coords.slice(0, -1))
      setCurrentCoords(coords[coords.length - 2])
      setRemovedCoords([...removedCoords, coords.pop()])
    }
  }

  const redo = () => {
    if (removedCoords.length >= 1) {
      const currentRemovedCoords = removedCoords.slice(0, -1)
      const lastRemoved = removedCoords.pop()

      setRemovedCoords(currentRemovedCoords)
      setCoords([...coords, lastRemoved])
      setCurrentCoords(coords[coords.length - 2])
    }
  }

  const getNaturalCoords = (xy, currentProps, naturalProps) => (
    [
      xy[0] * (naturalProps.width / currentProps.width),
      xy[1] * (naturalProps.height / currentProps.height)
    ]
  )

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
                // Props objects
                image={image}
                canvasProps={canvasProps}
                imageProps={imageProps}
                formContainerProps={formContainerProps}
                // Functions
                setCanvasProps={setCanvasProps}
                setRemovedCoords={setRemovedCoords}
                setCoords={setCoords}
                setCurrentCoords={setCurrentCoords}
              />
              <h2 className='text-center mt-3'>Coords</h2>
              <span className='text-muted text-center size-title'>Automatically calculated for specified resolution</span>
              <div className='content-center-auto'>
                <div className="grey-text text-left">
                  <MDBInput
                    label="Last Coords"
                    icon="map-marker-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={`${currentCoords ? `${getNaturalCoords(currentCoords, canvasProps, imageProps)}` : ''}`}
                  />
                  <MDBInput
                    label="All Coords"
                    icon="map"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className='text'
                    value={`${coords.length > 0 ? `${coords.map(xy => getNaturalCoords(xy, canvasProps, imageProps)).join(' ')}` : ''}`}
                  />
                </div>
                <div className="control-buttons">
                  <MDBBtn
                    onClick={undo}
                    className={`${coords.length < 1 ? 'disabled' : ''}`}
                  >
                    <i className="fas fa-undo"></i> REDO
                  </MDBBtn>
                  <MDBBtn
                    onClick={redo}
                    className={`${removedCoords.length < 1 ? 'disabled' : ''}`}
                  >
                    <i className="fas fa-redo"></i> UNDO
                  </MDBBtn>
                  <MDBBtn
                    color='danger'
                    onClick={clearCoords}
                  >
                    <i className="fas fa-times"></i> CLEAR
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
