import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from "./Navigation.module.css"


 const isActiveClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

const AuthNav = () => {
  
    return (
        <div className={css.container}>
            <NavLink to="/register" className={isActiveClasses}>Sign Up</NavLink>
            <NavLink to="/login" className={isActiveClasses}>Log In</NavLink>
        </div>
    )
}

export default AuthNav