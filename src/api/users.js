import { setUsers } from "../store/store";

const getUsers = () => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then((res) => res.json())
      .then((users) => dispatch(setUsers(users)))
      .catch((error) => console.log("Connection error", error));
  };
};

//export default getUsers;
