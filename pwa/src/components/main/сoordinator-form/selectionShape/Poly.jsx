/**
 * TODO: Implement Context API or Redux for managing global state
 * and reduce parent > child > parent data & functions transfer
 */

import React, { useState, useEffect, useRef } from 'react'
import { func, object, array, ReactElement } from 'prop-types'
import { drawImage, drawStrokesForPoly, drawPoly } from '../../../../javascripts/draw.js'
import getCoordinates from '../../../../javascripts/getCoordinates.js'

const propTypes = {
  coords: array,
  coordsHistory: array,
  imageToDraw: ReactElement,
  canvasProps: object,
  setCoords: func,
  setCoordsHistory: func,
  setCurrentCoords: func
}

function Poly ({
  coords,
  coordsHistory,
  imageToDraw,
  canvasProps,
  setCoords,
  setCoordsHistory,
  setCurrentCoords
}) {
  const [isMousePressed, setIsMousePressed] = useState(false)

  const canvasRef = useRef(null)

  useEffect(() => {
    if (imageToDraw) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawImage(ctx, imageToDraw, canvasProps.width, canvasProps.height)

      drawStrokesForPoly(ctx, coords, 'rgb(255, 99, 71)', 'rgb(255, 99, 71)')

      drawPoly(ctx, coords, 'rgba(148, 110, 110, 0.3)')
    }
  }, [coords, imageToDraw])

  const onMouseDown = e => {
    const current = getCoordinates(e)

    setCurrentCoords(current)
    setCoords([...coords, current])

    setIsMousePressed(true)
  }

  const onMouseUp = () => setIsMousePressed(false)

  const onMouseMove = e => {
    if (isMousePressed) {
      const current = getCoordinates(e)

      setCurrentCoords(current)
      setCoords([...coords, current])
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
      />
    </>
  )
}

Poly.propTypes = propTypes

export default Poly
