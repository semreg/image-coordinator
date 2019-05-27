import React, { useContext } from 'react'
import { func, object } from 'prop-types'
import localeContext from '../../../context/locale-context.js'

const propTypes = {
  removeUpload: func,
  image: object
}

function ConfirmUpload ({ removeUpload, image }) {
  const context = useContext(localeContext)

  return (
    <div className='file-upload-content'>
      <img className='file-upload-image' src={image.source} alt='your content' />
      <div className='image-title-wrap'>
        <button
          type='button'
          onClick={removeUpload}
          className='remove-image btn btn-dark'
        >
          <span className='capital'><i className="fas fa-times"></i> {context.content.contents.main.uploadForm.uploadInput.removeBtnCap}</span>
          <br/>
          <span className='image-title'>{image.title}</span>
        </button>
      </div>
    </div>
  )
}

ConfirmUpload.propTypes = propTypes

export default ConfirmUpload
