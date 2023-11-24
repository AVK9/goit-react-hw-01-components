import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import data from './data.json';

const Statistics = () => {
   const arr =  data.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
        </li>
    ));

    const container = 
<section className={css.statistics}>
   <h2 className={css.title}>Upload stats</h2>
     <ul className={css.statList}>
        {arr}
     </ul>
</section>

    return container;
};
Statistics.propTypes= {
    // id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // percentage: PropTypes.string.isRequired,
}

export default Statistics;