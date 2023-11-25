// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import data from './data.json';

const Statistics = () => {
   const arr =  data.map(({ id, label, percentage }) => (
        <li className={css.item} key={id} style={{ backgroundColor: rendColor() }}>
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
// Statistics.propTypes= {
    // id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // percentage: PropTypes.string.isRequired,
// }

// function rendColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
// }
    


function rendColor() {
    let color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    return color;
};

export default Statistics;