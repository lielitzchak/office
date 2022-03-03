const BASIC_URL = "https://office-mern-app.herokuapp.com/";
const getAllEmployees = () => {
  return fetch(BASIC_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
