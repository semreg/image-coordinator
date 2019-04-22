/**
 * TODO: Implement Context API or Redux for managing global state
 * and reduce parent > child > parent data & functions transfer
 */

import React, { useState, useEffect, useRef } from 'react'
import { func, object, array } from 'prop-types'

const propTypes = {
  coords: array,
  image: object,
  imageProps: object,
  formContainerProps: object,
  canvasProps: object,
  setCanvasProps: func,
  setCoords: func,
  setCurrentCoords: func
}

function ImageCanvas ({
  coords,
  image,
  formContainerProps,
  imageProps,
  canvasProps,
  setCanvasProps,
  setCoords,
  setCurrentCoords
}) {
  const [imageToDraw, setImageToDraw] = useState(null)

  const canvasRef = useRef(null)

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

  useEffect(() => {
    if (imageToDraw) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawImage(ctx, imageToDraw, canvasProps.width, canvasProps.height)
      drawStrokes(ctx, coords)
      drawPoly(ctx, coords)
    }
  }, [coords, imageToDraw])

  // Draw functions

  const drawImage = (ctx, img, width, height) => ctx.drawImage(img, 0, 0, width, height)

  const drawStrokes = (ctx, strokesCoords) => strokesCoords.forEach(item => {
    ctx.beginPath()
    ctx.fillStyle = 'tomato'
    ctx.strokeStyle = 'tomato'
    ctx.arc(item[0], item[1], 2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
  })

  const drawPoly = (ctx, coords) => {
    if (coords.length > 2) {
      ctx.fillStyle = 'rgba(148, 110, 110, 0.22)'

      ctx.beginPath()
      ctx.moveTo(coords[0][0], coords[0][1])

      coords.forEach(element => ctx.lineTo(element[0], element[1]))

      ctx.closePath()
      ctx.fill()
    }
  }

  const getCoordinates = e => {
    const rect = e.target.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xy = [ x, y ]

    setCurrentCoords(xy)
    setCoords([...coords, xy])
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width={canvasProps.width}
        height={canvasProps.height}
        onClick={getCoordinates}
      />
    </>
  )
}

ImageCanvas.propTypes = propTypes

export default ImageCanvas
