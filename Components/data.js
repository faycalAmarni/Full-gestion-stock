export function getProducts (text, page) {
  const url = "http://localhost:8000/article/"
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
