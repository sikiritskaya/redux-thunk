const getPosts = () => {
  return fetch(process.env.REACT_APP_API_URL)
    .then((res) => res.json())
    .catch((error) => console.log("Connection error", error));
};

//export default getPosts;
