import Profile from './components/Profile';
import Statistics from './components/Statistics';
import profile from './user.json';
import data from './data.json';

export default function App() {
  const title = 'Upload stats';
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
        : <Statistics stats={data} /> }
    
    
    </div>
  );
};
