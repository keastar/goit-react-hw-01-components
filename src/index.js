import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const data = {
  username: 'Jacques Glant',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const profile = (
  <div className="profile">
    <div className="description">
      <div className="photo_avatar">
        <img src={data.avatar} alt="User avatar" className="avatar" />
      </div>
      <p className="name">{data.username}</p>
      <p className="tag">@{data.tag}</p>
      <p className="location">{data.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(profile);
