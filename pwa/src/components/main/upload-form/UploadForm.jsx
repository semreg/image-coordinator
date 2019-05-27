import React, { useContext } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { object, func } from 'prop-types'

import UploadInput from './UploadInput'
import ConfirmUpload from './ConfirmUpload'
import Animated from '../../other/Animated'
import localeContext from '../../../context/locale-context.js'

const propTypes = {
  image: object,
  setImage: func
}

function UploadForm ({ image, setImage }) {
  const removeUpload = () => setImage({
    title: null,
    source: null,
    confirmed: image.isConfirmed
  })

  const context = useContext(localeContext)

  const { title, note } = context.content.contents.main.uploadForm

  const readURL = e => {
    const { files } = e.target

    if (files && files[0]) {
      const reader = new FileReader()

      reader.onload = e => {
        const { result } = e.target

        setImage({
          title: files[0].name,
          source: result,
          confirmed: image.isConfirmed
        })
      }

      reader.readAsDataURL(files[0])
    } else {
      removeUpload()
    }
  }

  const onClick = () => setImage({
    title: image.title,
    source: image.source,
    isConfirmed: true
  })

  return (
    <Animated>
      <MDBContainer className='mt-5 text-center form-container'>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className='h1 display-3'>{title}</h2>
              <p>{note}</p>
              <div className='file-upload'>
                {!image.source
                  ? <UploadInput readURL={readURL}/>
                  : (
                    <ConfirmUpload
                      image={image}
                      removeUpload={removeUpload}
                    />
                  )
                }
              </div>
              <p className='lead' style={{ 'marginTop': '20px' }}>
                <MDBBtn
                  id='button'
                  color='primary'
                  className={`${!image.source ? 'disabled' : ''}`}
                  onClick={onClick}
                >
                  <span className='capital'>
                    <i className="fas fa-chevron-right"></i> {context.content.contents.main.buttons.goNext}
                  </span>
                </MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Animated>
  )
}

UploadForm.propTypes = propTypes

export default UploadForm
