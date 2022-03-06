const BASIC_URL =
  process.env.NODE_ENV === "production"
    ? "https://office-liel-itzchak.herokuapp.com"
    : "http://localhost:8000";
const getAllEmployees = () => {
  return fetch(BASIC_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
