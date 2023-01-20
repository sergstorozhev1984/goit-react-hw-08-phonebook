import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';


export const ContactListItem = ({name, number, id}) => {
  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span>{number}</span>
      <button className={css.deleteBtn} type="button">Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}