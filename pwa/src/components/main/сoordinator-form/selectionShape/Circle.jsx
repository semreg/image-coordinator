/**
 * TODO: Implement Context API or Redux for managing global state
 * and reduce parent > child > parent data & functions transfer
 */

import React, { useState, useEffect, useRef } from 'react'
import { func, object, array, ReactElement } from 'prop-types'
import { drawImage, drawStrokesForRect, drawCircle } from '../../../../javascripts/draw.js'
import getCoordinates from '../../../../javascripts/getCoordinates.js'
import getRadius from '../../../../javascripts/getRadius'

const propTypes = {
  coords: array,
  coordsHistory: array,
  imageToDraw: ReactElement,
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
  const [centerCoords, setCenterCoords] = useState([])
  const [edgeCoords, setEdgeCoords] = useState([])

  const [isMousePressed, setIsMousePressed] = useState(false)
  const [areCoordsReady, setAreCoordsReady] = useState(false)

  const canvasRef = useRef(null)

  useEffect(() => {
    if (centerCoords.length > 0 && edgeCoords.length > 0) {
      setCoords([centerCoords, edgeCoords])
      setAreCoordsReady(true)
    } else {
      setAreCoordsReady(false)
    }
  }, [centerCoords, edgeCoords])

  useEffect(() => {
    if (imageToDraw) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawImage(ctx, imageToDraw, canvasProps.width, canvasProps.height)

      if (areCoordsReady && coords.length > 1) {
        coords.forEach(item => drawStrokesForRect(ctx, item, 'rgb(255, 99, 71)', 'rgb(255, 99, 71)'))

        // drawLine(ctx, coords[0], coords[1])

        drawCircle(ctx, coords[0][0], coords[0][1], getRadius(coords[0], coords[1]), 'rgba(148, 110, 110, 0.3)', 'rgba(255, 255, 255, 0')
      }
    }
  }, [coords, imageToDraw])

  const onMouseDown = e => {
    setCenterCoords(getCoordinates(e))
    setEdgeCoords([])
    setIsMousePressed(true)
  }

  const onMouseUp = () => {
    setIsMousePressed(false)

    setCoordsHistory([...coordsHistory, coords])
  }

  const onMouseMove = e => {
    if (isMousePressed) {
      setEdgeCoords(getCoordinates(e))
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
