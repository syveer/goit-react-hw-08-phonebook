import style from '../styles.module.css';
import { useContacts } from './hooks/hooks';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={style.cont__container}>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
