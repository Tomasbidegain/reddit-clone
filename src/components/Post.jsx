import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  const { author, title, created_utc, imageUrl, isVideo, postUrl } = post;

  const getTimeAgo = (timestamp) => {
    const currentTime = moment();
    const postTime = moment.unix(timestamp);
    const timeAgo = postTime.from(currentTime, true);
    return timeAgo.replace('hours', 'horas');
  };

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`mt-4 mb-4 rounded p-3 shadow shadow-sm ${darkMode ? "bg-dark" : "bg-white"}`}>
      <div className='d-flex w-100 justify-content-between'>
        <div className='d-flex w-100 gap-4'>
          <p className={`${darkMode && "text-white"}`}>Publicado por <a href={`https://www.reddit.com/user/${author}`} style={{ color: 'inherit'}}>{author}</a></p>
          <p className={`${darkMode && "text-white"}`}>Hace {getTimeAgo(created_utc)}</p>
        </div>
        <button className='btn btn-sm btn-light'>Unirse</button>
      </div>
      <h5 className={`${darkMode && "text-white"}`}><a style={{ color: 'inherit', textDecoration:'none'}} href={postUrl}>{title}</a></h5>
      {isVideo ? (
        <video controls className="w-50 h-auto">
          <source src={imageUrl} type="video/mp4" />
        </video>
      ) : (
        
        <img className="w-50 h-50" src={imageUrl} alt="Post" />
      )}
    </div>
  );
};

export default Post;
