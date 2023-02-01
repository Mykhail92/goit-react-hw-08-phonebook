import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import Filter from 'components/Filter/filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // console.log()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2>Contacts</h2>
      <Filter />
      <Contact />
    </>
  );
}
