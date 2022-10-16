export function formatAMPM(date: Date) {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours ? hours : 12
  const minutesString = minutes < 10 ? "0" + minutes : minutes.toString()

  return `${hours}:${minutesString} ${ampm}`
}
