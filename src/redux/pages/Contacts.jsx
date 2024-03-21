import { ContactsForm } from '../../components/ContactsForm';
import { Filter } from '../../components/Filter';
import { ContactsList } from '../../components/ContactList';
import style from '../../styles.module.css';

const Contacts = () => {
  return (
    <div className={style.view__container}>
      <h2 className={style.home__title}>
        Enter a name and phone number to add a contact
      </h2>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
