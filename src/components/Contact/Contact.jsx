import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { id, name, number }}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.contactItem}>
        <div className={css.contact}>
          <div className={css.userName}>
            <FaUser size="25" />
            <p>{name}</p>
          </div>
          <div className={css.userPhone}>
            <FaPhoneAlt size="25" />
            <p>{number}</p>
          </div>
        </div>
        <button type="button" className={css.btn} 
                onClick={() => dispatch(deleteContact(id)) }
        >
                Delete
        </button>
      </div>
    </>
  );
}
