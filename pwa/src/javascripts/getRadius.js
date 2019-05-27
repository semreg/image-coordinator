const getRadius = (centerCoords, edgeCoords) =>
  Math.sqrt(Math.pow(edgeCoords[0] - centerCoords[0], 2) + Math.pow(edgeCoords[1] - centerCoords[1], 2))

export default getRadius
