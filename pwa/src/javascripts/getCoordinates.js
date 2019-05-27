export default function getCoordinates (e) {
  const rect = e.target.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  return [ x, y ]
}
