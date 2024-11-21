import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import  css from "./UserMenu.module.css"


const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logout());
  }
 
  return (
    <div className={css.userMenu} >
     <p className={css.name} > <span className={css.greet}>Welcome, </span> {userName.name}</p>
     <button type="button" onClick={onLogOut} className={css.btn}>Log out</button>
    </div>
  )
}

export default UserMenu