import React, { useState } from 'react'
import './main.scss'

import UploadForm from './upload-form/UploadForm'
import CoordinatorForm from './сoordinator-form/CoordinatorForm'

function Main () {
  const [image, setImage] = useState({
    title: null,
    source: null,
    isConfirmed: false
  })

  return (
    <>
      {!image.isConfirmed
        ? <UploadForm image={image} setImage={setImage}/>
        : (
          <CoordinatorForm
            image={image}
            setImage={setImage}
          />
        )
      }
    </>
  )
}

export default Main
