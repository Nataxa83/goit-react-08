import { Link } from "react-router-dom"
// import clsx from "clsx"
import css from "./AuthNav.module.css"


//  const isActiveClasses = ({ isActive }) =>
//     clsx(css.link, isActive && css.active);

const AuthNav = () => {
  
    return (
        <div className={css.auth}>
            <Link to="/register" >  <span className={css.link}>   Sign Up</span></Link>
            <Link to="/login" >  <span className={css.link}> Log In</span> </Link>
        </div>
    )
}

export default AuthNav