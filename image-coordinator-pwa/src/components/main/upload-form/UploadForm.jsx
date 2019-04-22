import React from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { object, func } from 'prop-types'

import UploadInput from './UploadInput'
import ConfirmUpload from './ConfirmUpload'
import Animated from '../../other/Animated'

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
              <h2 className='h1 display-3'>Load Your Image</h2>
              <p>The image must have the correct extension and resolution.</p>
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
                    <i className="fas fa-chevron-right"></i> Go next
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
