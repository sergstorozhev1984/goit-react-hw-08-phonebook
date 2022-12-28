export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <li key={index}>
            <button type="button" onClick={()=> handleClick(option)}>{label}</button>
          </li>
        );
      })}
    </ul>
  );
};
