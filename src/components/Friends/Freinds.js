import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
// import css from './Friends.module.css';
import { FriendList } from './Friends.staled';

const FriendLister = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};

FriendLister.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
  FriendListItem: PropTypes.func,
};
export default FriendLister;
