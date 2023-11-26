import css from './TaskHead.module.css'
import PropTypes from 'prop-types'

export const TaskHead = ({text}) => { 
    return <h2 className={css.Head}>{text}</h2>
};

TaskHead.propTypes = {
    text: PropTypes.string.isRequired,
}

