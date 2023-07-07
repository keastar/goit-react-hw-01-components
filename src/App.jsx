import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistics';
import FriendLister from './components/Friends/Freinds';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import profile from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import items from './data/transactions.json';

export default function App() {

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
      
    <Statistics stats={data} />

    <FriendLister friends={friends} />
   
    <TransactionHistory items={items} />
    </div>
  );
};
