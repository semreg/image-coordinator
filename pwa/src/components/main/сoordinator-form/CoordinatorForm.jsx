import React, { useState, useContext } from 'react'
import './coordinator-form.scss'
import { object, func } from 'prop-types'
import { MDBBtn } from 'mdbreact'

import PropsForm from './PropsForm'
import CoordinatePicker from './CoordinatePicker'
import localeContext from '../../../context/locale-context.js'

const propTypes = {
  image: object,
  setImage: func
}

function CoordinatorForm ({ image, setImage }) {
  const [imageProps, setImageProps] = useState({
    width: undefined,
    height: undefined,
    selectionShape: 'rect',
    isConfirmed: false
  })

  const context = useContext(localeContext)

  const onCancelClick = () => setImage({
    title: image.title,
    source: image.source,
    isConfirmed: false
  })

  const onNextClick = () => setImageProps({
    width: imageProps.width,
    height: imageProps.height,
    selectionShape: imageProps.selectionShape,
    isConfirmed: true
  })

  const onEditClick = () => setImageProps({
    width: imageProps.width,
    height: imageProps.height,
    selectionShape: imageProps.selectionShape,
    isConfirmed: false
  })

  const { cancel, next, edit } = context.content.contents.main.buttons

  return (
    <>
      {!imageProps.isConfirmed
        ? (
          <PropsForm
            imageSource={image.source}
            imageProps={imageProps}
            setImageProps={setImageProps}
          >
            <div className="buttons">
              <div className="button button_cancel">
                <MDBBtn color='dark' onClick={onCancelClick} className='uppercase'>
                  <i className="fas fa-times"></i> {cancel}
                </MDBBtn>
              </div>
              <div className="button button_edit">
                <MDBBtn color='primary' onClick={onNextClick} className='uppercase'>
                  <i className="fas fa-chevron-right"></i> {next}
                </MDBBtn>
              </div>
            </div>
          </PropsForm>
        )
        : (
          <CoordinatePicker
            imageProps={imageProps}
            image={image}
          >
            <div className="buttons">
              <div className="button button_cancel">
                <MDBBtn color='dark' onClick={onCancelClick} className='uppercase'>
                  <i className="fas fa-times"></i> {cancel}
                </MDBBtn>
              </div>
              <div className="button button_edit">
                <MDBBtn onClick={onEditClick} className='uppercase'>
                  <i className="fas fa-pen"></i> {edit}
                </MDBBtn>
              </div>
            </div>
          </CoordinatePicker>
        )
      }
    </>
  )
}

CoordinatorForm.propTypes = propTypes

export default CoordinatorForm
