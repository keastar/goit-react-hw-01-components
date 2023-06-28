import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistics';
import FriendList from './components/Friends/Freinds';
import FriendListno from './components/Friends/Freindsno';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import profile from './user.json';
import data from './data.json';
import friends from './friends.json';
import items from './transactions.json';

export default function App() {
  const title = 'Upload stats';
  const isOnline = true;
  return (
    <div>
    < Profile
    username={profile.username}
    tag={profile.tag}
    location={profile.location}
    avatar={profile.avatar}
    followers={profile.stats.followers}
    views={profile.stats.views}
    likes={profile.stats.likes} />
      
      { title ?
        <Statistics title={title} stats={data} />
        : <Statistics stats={data} />}
      { isOnline ?
        <FriendList friends={friends} />
        : <FriendListno friends={friends} />
      }
      
      <TransactionHistory items={items} />
    </div>
  );
};
