import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import TaskList from "../../components/ContactList/ContactList";
import ContactsForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Error from "../../components/Error/Error";

import css from "./ContactsPage.module.css"

const ContactsPage = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
    {isLoading && <Loader />}
    {error && <p><Error />  </p>}
    <ContactsForm />
    <SearchBox />
    {(Array.isArray(contacts) && contacts.length > 0 ) ? <TaskList /> :<p className={css.text}>You have no contacts yet</p> }
    </div>
  )
}

export default ContactsPage