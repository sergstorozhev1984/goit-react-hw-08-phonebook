import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { getContactsFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setContactsFilter(value))
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input className={css.input} type="text" value={filter} onChange={changeFilter}/>
      </label>
    </>
  );
};


