import css from "./Navigation.module.css"
import clsx from "clsx"

import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const isActiveClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);
  return (
      <div className={css.container}>
         <NavLink to="/" className={isActiveClasses}>Home</NavLink>
           
         {
            isLoggedIn && 
          <NavLink to="/contacts" className={isActiveClasses}>      Contacts</NavLink>
          }
      </div>
  
  )
}

export default Navigation