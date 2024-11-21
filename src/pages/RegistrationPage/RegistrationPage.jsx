import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import css from "./RegistrationPage.module.css"

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <div className={css.regForm}>
      <RegistrationForm  />
      </div>
    </div>
  )
}

export default RegistrationPage