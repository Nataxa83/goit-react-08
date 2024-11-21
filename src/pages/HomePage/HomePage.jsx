import { FaRegAddressBook } from "react-icons/fa6";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={css.homePage}>
        <FaRegAddressBook size="80" color="coral" />
        <h1 className={css.title}>Welcome to Your Phonebook  </h1>
    </div>
  )
}

export default HomePage