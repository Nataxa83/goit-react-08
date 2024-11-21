import Navigation from "../Navigation/Navigation"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import AuthNav from "../AuthNav/AuthNav"
import UserMenu from "../UserMenu/UserMenu"

import css from "./AppBar.module.css"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation /> 
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  )
}

export default AppBar