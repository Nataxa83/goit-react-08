import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";


const UserMenu = () => {
  const userName = useSelector(selectUser);
 
  return (
    <div>
     <p>Welcome, {userName.name}</p>
     <button>Log out</button>
    </div>
  )
}

export default UserMenu