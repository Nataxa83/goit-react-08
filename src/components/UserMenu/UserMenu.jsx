import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logout());
  }
 
  return (
    <div>
     <p>Welcome, {userName.name}</p>
     <p>Welcome, </p>
     <button type="button" onClick={onLogOut}>Log out</button>
    </div>
  )
}

export default UserMenu