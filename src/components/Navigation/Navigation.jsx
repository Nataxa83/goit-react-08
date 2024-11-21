import css from "./Navigation.module.css"
// import clsx from "clsx"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

// const isActiveClasses = ({ isActive }) =>
//   clsx(css.link, isActive && css.active);

const Navigation = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
      <div className={css.nav}>
         <Link to="/" > <span className={css.link}> Home </span> </Link>
           
         {
            isLoggedIn && 
          <Link to="/contacts" > <span className={css.link}> Contacts  </span></Link>
          }
      </div>
  
  )
}

export default Navigation