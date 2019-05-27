/**
 * TODO: Implement Context API or Redux for managing global state
 * and reduce parent > child > parent data & functions transfer
 */

import React, { useState, useEffect } from 'react'
import { func, object, array } from 'prop-types'
import Poly from './selectionShape/Poly'
import Rect from './selectionShape/Rect'
import Circle from './selectionShape/Circle'

const propTypes = {
  coords: array,
  coordsHistory: array,
  image: object,
  imageProps: object,
  formContainerProps: object,
  canvasProps: object,
  setCanvasProps: func,
  setCoordsHistory: func,
  setCoords: func,
  setCurrentCoords: func,
  undo: func
}

function ImageCanvas ({
  coords,
  coordsHistory,
  image,
  formContainerProps,
  imageProps,
  canvasProps,
  setCanvasProps,
  setCoords,
  setCurrentCoords,
  setCoordsHistory,
  undo
}) {
  const [imageToDraw, setImageToDraw] = useState(null)

  useEffect(() => {
    if (formContainerProps.width && formContainerProps.height) {
      if (imageProps.width > formContainerProps.width) {
        const imageRatio = imageProps.width / imageProps.height
        const newWidth = formContainerProps.width * 0.9

        setCanvasProps({
          width: newWidth,
          height: newWidth / imageRatio
        })
      } else {
        setCanvasProps({
          width: imageProps.width,
          height: imageProps.height
        })
      }
    }
  }, [formContainerProps])

  useEffect(() => {
    const baseImage = new Image()

    baseImage.src = image.source

    baseImage.width = canvasProps.width
    baseImage.height = canvasProps.height

    baseImage.onload = () => setImageToDraw(baseImage)
  }, [canvasProps])

  const { selectionShape } = imageProps

  return (
    <>
      {selectionShape === 'poly'
        ? (
          <Poly
            coords={coords}
            imageToDraw={imageToDraw}
            canvasProps={canvasProps}
            setCoords={setCoords}
            setCurrentCoords={setCurrentCoords}
          />
        )
        : selectionShape === 'rect'
          ? (
            <Rect
              coords={coords}
              coordsHistory={coordsHistory}
              imageToDraw={imageToDraw}
              canvasProps={canvasProps}
              setCoords={setCoords}
              setCoordsHistory={setCoordsHistory}
              setCurrentCoords={setCurrentCoords}
              undo={undo}
            />
          )
          : selectionShape === 'circle'
            ? (
              <Circle
                coords={coords}
                coordsHistory={coordsHistory}
                imageToDraw={imageToDraw}
                canvasProps={canvasProps}
                setCoords={setCoords}
                setCoordsHistory={setCoordsHistory}
                setCurrentCoords={setCurrentCoords}
                undo={undo}
              />
            )
            : ''
      }
    </>
  )
}

ImageCanvas.propTypes = propTypes

export default ImageCanvas
