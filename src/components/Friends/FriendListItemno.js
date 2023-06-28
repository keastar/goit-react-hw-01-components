import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendListItemno = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <div className={css.item_card}>
        <span className={css.status_no}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </div>
    </li>
  );
};

FriendListItemno.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItemno;
