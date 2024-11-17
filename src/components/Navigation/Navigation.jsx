import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx"

const isActiveClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <div>
      <div className={css.container}>
            <NavLink to="/" className={isActiveClasses}>Home</NavLink>
            <NavLink to="/contacts" className={isActiveClasses}>Contacts</NavLink>
        </div>
    </div>
  )
}

export default Navigation