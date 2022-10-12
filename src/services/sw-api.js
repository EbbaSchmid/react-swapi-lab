const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch (`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(apiUrl) {
  const res = await fetch(`${baseUrl}${apiUrl}`)
  return res.json()
}