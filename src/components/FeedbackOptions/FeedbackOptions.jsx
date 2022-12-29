import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <li key={index} className={css.item}>
            <button className={css.btn} type="button" onClick={()=> handleClick(option)}>{label}</button>
          </li>
        );
      })}
    </ul>
  );
};
