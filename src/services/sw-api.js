const baseUrl = "https://swapi.dev/api/"

export async function getAllStarships() {
  const res = await fetch (`${baseUrl}/starships`)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}/`)
  return res.json()
}