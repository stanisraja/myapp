// Feed.jsx
import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import './../../pages/Tube/Tube.css';

const Feed = ({ category }) => {

  const [data, setData] = useState([]);


  const fetchData = async () => {

    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then(response => {
        //console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        //console.log('Data:', data);
        setData(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      }); 
  };

  useEffect(() => {
    fetchData();
  }, [category]) // Pass an empty dependency array to ensure the effect runs every time the component is rendered

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.high.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}  </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed;