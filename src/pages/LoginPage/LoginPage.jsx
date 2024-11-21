import LoginForm from "../../components/LoginForm/LoginForm"
import css from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <div className={css.logForm}>
      <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage