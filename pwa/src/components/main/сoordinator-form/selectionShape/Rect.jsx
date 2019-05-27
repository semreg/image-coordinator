/**
 * TODO: Implement Context API or Redux for managing global state
 * and reduce parent > child > parent data & functions transfer
 */

import React, { useState, useEffect, useRef } from 'react'
import { func, object, array } from 'prop-types'
import { drawImage, drawStrokesForRect, drawRect } from '../../../../javascripts/draw.js'
import getCoordinates from '../../../../javascripts/getCoordinates.js'

const propTypes = {
  coords: array,
  coordsHistory: array,
  imageToDraw: object,
  canvasProps: object,
  setCoords: func,
  setCurrentCoords: func,
  setCoordsHistory: func
}

function Rect ({
  coords,
  coordsHistory,
  imageToDraw,
  canvasProps,
  setCoords,
  setCoordsHistory
}) {
  const [topLeftCoords, setTopLeftCoords] = useState([])
  const [bottomRightCoords, setBottomRightCoords] = useState([])

  const [areCoordsReady, setAreCoordsReady] = useState(false)
  const [isMousePressed, setIsMousePressed] = useState(false)

  const canvasRef = useRef(null)

  useEffect(() => {
    if (topLeftCoords.length > 0 && bottomRightCoords.length > 0) {
      setCoords([topLeftCoords, bottomRightCoords])
      setAreCoordsReady(true)
    }
  }, [topLeftCoords, bottomRightCoords])

  useEffect(() => {
    if (imageToDraw) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawImage(ctx, imageToDraw, canvasProps.width, canvasProps.height)

      coords.forEach(item => drawStrokesForRect(ctx, item, 'rgb(255, 99, 71)', 'rgb(255, 99, 71)'))

      if (areCoordsReady && coords.length > 1) {
        const rectWidth = coords[1][0] - coords[0][0]
        const rectHeight = coords[1][1] - coords[0][1]

        drawRect(ctx, coords[0][0], coords[0][1], rectWidth, rectHeight, 'rgba(148, 110, 110, 0.3)', 'rgba(255, 255, 255, 0)')
      }
    }
  }, [coords, imageToDraw])

  const onMouseDown = e => {
    setTopLeftCoords(getCoordinates(e))

    setBottomRightCoords([])

    setIsMousePressed(true)
  }

  const onMouseUp = () => {
    setIsMousePressed(false)

    setCoordsHistory([...coordsHistory, coords])
  }

  const onMouseMove = e => {
    if (isMousePressed) {
      setBottomRightCoords(getCoordinates(e))
    }
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width={canvasProps.width}
        height={canvasProps.height}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
      </canvas>
    </>
  )
}

Rect.propTypes = propTypes

export default Rect
