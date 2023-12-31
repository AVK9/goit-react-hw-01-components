import css from './Profile.module.css';
// import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: {
    followers,
    views,
    likes }
}) => (
  <div className={css.profile} key={username}>
    <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}> {followers} </span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views</span>
                     <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
                     <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
)

// Event.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     followers: PropTypes.string.isRequired,
//     views: PropTypes.string.isRequired,
//     likes: PropTypes.string.isRequired,
// }

