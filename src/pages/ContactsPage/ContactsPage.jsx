import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import TaskList from "../../components/ContactList/ContactList";
import ContactsForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

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
    { Array.isArray(contacts) && contacts.length === 0  && <p>No contacts found</p>}
    {isLoading && <Loader />}
    {error && <p>{error}</p>}
    <ContactsForm />
    <SearchBox />
    {Array.isArray(contacts) && contacts.length > 0  && <TaskList />}
    </div>
  )
}

export default ContactsPage