import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toast(
      (item) => (
        <div className={css.toastContainer}>
          <p>
            Are you sure you want to delete <strong>{name}</strong>?
          </p>
          <div className={css.toastButtons}>
            <button
              className={css.confirmBtn}
              onClick={() => {
                dispatch(deleteContact(id));
                toast.dismiss(item.id);
                toast.success(`${name} has been deleted.`);
              }}
            >
              Yes
            </button>
            <button
              className={css.cancelBtn}
              onClick={() => toast.dismiss(item.id)}
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 } 
    );
  };

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
        <button type="button" className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}