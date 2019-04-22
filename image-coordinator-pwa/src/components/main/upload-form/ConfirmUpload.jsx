import React from 'react'
import { func, object } from 'prop-types'

const propTypes = {
  removeUpload: func,
  image: object
}

const ConfirmUpload = ({ removeUpload, image }) => (
  <div className='file-upload-content'>
    <img className='file-upload-image' src={image.source} alt='your content' />
    <div className='image-title-wrap'>
      <button
        type='button'
        onClick={removeUpload}
        className='remove-image btn btn-dark'
      >
        <span className='capital'><i className="fas fa-times"></i> Remove</span>
        <br/>
        <span className='image-title'>{image.title}</span>
      </button>
    </div>
  </div>
)

ConfirmUpload.propTypes = propTypes

export default ConfirmUpload
