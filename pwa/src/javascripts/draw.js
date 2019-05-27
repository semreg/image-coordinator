export const drawImage = (ctx, img, width, height) => ctx.drawImage(img, 0, 0, width, height)

export const drawStrokesForPoly = (ctx, strokesCoords, fillStyle, strokeStyle) => strokesCoords.forEach(item => {
  ctx.fillStyle = fillStyle
  ctx.strokeStyle = strokeStyle

  ctx.beginPath()

  ctx.arc(item[0], item[1], 2, 0, 2 * Math.PI)

  ctx.fill()
  ctx.stroke()
})

export function drawStrokesForRect (ctx, strokesCoords, fillStyle, strokeStyle) {
  ctx.fillStyle = fillStyle
  ctx.strokeStyle = strokeStyle

  ctx.beginPath()

  ctx.arc(strokesCoords[0], strokesCoords[1], 2, 0, 2 * Math.PI)

  ctx.fill()

  ctx.stroke()
}

export function drawPoly (ctx, coords, fillStyle) {
  if (coords.length > 2) {
    ctx.fillStyle = fillStyle

    ctx.beginPath()
    ctx.moveTo(coords[0][0], coords[0][1])

    coords.forEach(element => ctx.lineTo(element[0], element[1]))

    ctx.closePath()

    ctx.fill()
  }
}

export function drawRect (ctx, topLeftX, topLeftY, width, height, fillStyle, strokeStyle) {
  ctx.fillStyle = fillStyle
  ctx.strokeStyle = strokeStyle

  ctx.beginPath()

  ctx.rect(topLeftX, topLeftY, width, height)

  ctx.fill()

  ctx.stroke()
}

export function drawCircle (ctx, centerX, centerY, radius, fillStyle, strokeStyle) {
  ctx.fillStyle = fillStyle
  ctx.strokeStyle = strokeStyle

  ctx.beginPath()

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.fill()

  ctx.stroke()
}

export function drawLine (ctx, fromCoords, toCoords) {
  ctx.beginPath()

  ctx.moveTo(fromCoords[0], fromCoords[1])
  ctx.lineTo(toCoords[0], toCoords[1])

  ctx.stroke()
}
