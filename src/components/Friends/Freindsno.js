import PropTypes from 'prop-types';
import FriendListItemno from './FriendListItemno';
import css from './Friends.module.css';

const FriendListno = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendListItemno
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendListno.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({})),
  FriendListItem: PropTypes.func,
};
export default FriendListno;
