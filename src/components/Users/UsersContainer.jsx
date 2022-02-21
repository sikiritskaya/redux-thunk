import { useSelector } from "react-redux";
import Preloader from "../commonComponents/Preloader";
import Users from "./Users";

const UsersContainer = () => { 
  const users = useSelector((state)=> state.users)
 // const value = useContext(Context);

  if (!users) {
    return <Preloader />;
  }

  return <Users users={users} />;
};

export default UsersContainer;
