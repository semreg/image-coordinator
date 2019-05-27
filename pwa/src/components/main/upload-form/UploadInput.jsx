import React, { useState, useContext } from 'react'
import { func } from 'prop-types'
import localeContext from '../../../context/locale-context.js'

const propTypes = { readURL: func }

function UploadInput ({ readURL }) {
  const [isImageDropping, setIsImageDropping] = useState(false)

  const onDragOver = () => setIsImageDropping(true)

  const onDragLeave = () => setIsImageDropping(false)

  const context = useContext(localeContext)

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={`
        image-upload-wrap
        ${isImageDropping ? 'image-dropping' : ''}
      `}
    >
      <input
        id='file-input'
        className='file-upload-input'
        type='file'
        onChange={readURL}
        accept='image/*'
      />
      <div className='drag-text'>
        <h3>
          <i className="fas fa-file-upload"></i>
          <p className='drag-and-drop-text'>{context.content.contents.main.uploadForm.uploadInput.areaCap}</p>
        </h3>
      </div>
    </div>
  )
}

UploadInput.propTypes = propTypes

export default UploadInput
