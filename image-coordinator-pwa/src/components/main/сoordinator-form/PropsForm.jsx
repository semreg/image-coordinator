/**
 * TODO: Find another way of getting image size without rendering it
 */

import React, { useState, useEffect, useRef } from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'
import { string, object, func, element } from 'prop-types'
import Animated from '../../other/Animated'

const propTypes = {
  imageSource: string,
  imageProps: object,
  setImageProps: func,
  children: element
}

function PropsForm ({ imageSource, imageProps, setImageProps, children }) {
  const [doDisplayImage, setDoDisplayImage] = useState(true)

  const loadedImage = useRef(null)

  useEffect(() => {
    const image = loadedImage.current

    setImageProps({
      width: image.clientWidth,
      height: image.clientHeight,
      selectionShape: imageProps.selectionShape,
      isConfirmed: imageProps.isConfirmed
    })

    setDoDisplayImage(false)
  }, [])

  const onWidthChange = e => setImageProps({
    width: e.target.value,
    height: imageProps.height,
    selectionShape: imageProps.selectionShape,
    isConfirmed: imageProps.isConfirmed
  })

  const onHeightChange = e => setImageProps({
    width: imageProps.width,
    height: e.target.value,
    selectionShape: imageProps.selectionShape,
    isConfirmed: imageProps.isConfirmed
  })

  const onClick = e => {
    const { value } = e.target

    if (value) {
      setImageProps({
        width: imageProps.width,
        height: imageProps.height,
        selectionShape: value,
        isConfirmed: imageProps.isConfirmed
      })
    }
  }

  return (
    <Animated>
      <div style={{ 'visibility': 'hidden ' }}>
        {doDisplayImage
          ? <img ref={loadedImage} src={imageSource} alt='loaded'/>
          : ''
        }
      </div>
      <MDBContainer className='mt-3 form-container text-center'>
        <div className="text-left">
          {children}
        </div>
        <MDBRow className='mt-3'>
          <MDBCol>
            <MDBJumbotron>
              <h3 className='h1 display-3 text-center'>Specify Properties</h3>
              <hr/>
              <h2 className='text-center'>Image Size</h2>
              <span className='text-muted text-center size-title'>Do not change if you want to save the natural size</span>
              <div className='content-center'>
                <form className='form'>
                  <div className="grey-text text-left">
                    <MDBInput
                      label="Width (px)"
                      icon="arrows-alt-h"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={onWidthChange}
                      value={String(imageProps.width)}
                    />
                    <MDBInput
                      label="Height (px)"
                      icon="arrows-alt-v"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={onHeightChange}
                      value={String(imageProps.height)}
                    />
                  </div>
                </form>
              </div>
              <h2 className='text-center'>Shape of the Selection Area</h2>
              <span className='text-muted text-center size-title'>Choose one of three options</span>
              <div className="content-center mt-3 text-muted">
                <form>
                  <div id="checkboxes" className='checkboxes'>
                    <div className="checkboxgroup">
                      <label htmlFor="my_radio_button_id1"><i className="far fa-square radio-icon"></i> </label>
                      <input onClick={onClick} value='1' type="radio" name="radio" id="my_radio_button_id1" disabled/>
                    </div>
                    <div className="checkboxgroup">
                      <label htmlFor="my_radio_button_id2"><i className="far fa-circle radio-icon"></i></label>
                      <input onClick={onClick} value='2' type="radio" name="radio" id="my_radio_button_id2" disabled/>
                    </div>
                    <div className="checkboxgroup mb-3">
                      <label htmlFor="my_radio_button_id3"><i className="fas fa-draw-polygon radio-icon"></i></label>
                      <input onClick={onClick} value='3' type="radio" name="radio" id="my_radio_button_id3" defaultChecked/>
                    </div>
                  </div>
                </form>
              </div>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Animated>
  )
}

PropsForm.propTypes = propTypes

export default PropsForm
