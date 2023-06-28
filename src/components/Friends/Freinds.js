import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.string,
    })
  ),
  FriendListItem: PropTypes.func,
};
export default FriendList;
