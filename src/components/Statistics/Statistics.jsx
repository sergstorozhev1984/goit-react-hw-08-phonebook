import css from './Statistics.module.css';
export const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
    return (
        <ul className={css.statisticsList}>
            <li className={css.item}>
                <span className={css.itemTitle}>Good:</span>
                <span>{good}</span>
            </li>
            <li className={css.item}>
                <span className={css.itemTitle}>Neutral:</span>
                <span>{neutral}</span>
            </li>
            <li className={css.item}>
                <span className={css.itemTitle}>Bad:</span>
                <span>{bad}</span>
            </li>
            <li className={css.item}>
                <span className={css.itemTitle}>Total:</span>
                <span>{total}</span>
            </li>
            <li className={css.item}>
                <span className={css.itemTitle}>Positive feedback:</span>
                <span>{positivePercentage}%</span>
            </li>

        </ul>
    )
}