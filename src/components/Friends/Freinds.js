import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
// import css from './Friends.module.css';
import { Friend_list } from './Friends.staled';

const FriendList = ({ friends }) => {
  return (
    <Friend_list>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Friend_list>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // isOnline: PropTypes.bool.isRequired,
    })
  ),
  FriendListItem: PropTypes.func,
};
export default FriendList;
