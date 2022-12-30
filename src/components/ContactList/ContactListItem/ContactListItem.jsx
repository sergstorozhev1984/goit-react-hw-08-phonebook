export const ContactListItem = ({name, number}) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};
