import PropTypes from 'prop-types';
// import css from './Friends.module.css';
import { Item } from './Friends.staled';
import { CardItem } from './Friends.staled';
import { IsOnline, Image, About } from './Friends.staled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <CardItem>
        <IsOnline eventIsOnline={isOnline}>{isOnline}</IsOnline>
        <Image src={avatar} alt="User avatar" width="48" />
        <About>{name}</About>
      </CardItem>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
};
export default FriendListItem;
