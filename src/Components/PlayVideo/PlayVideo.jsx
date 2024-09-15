import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import NavbarFaftube from '../NavbarFaftube/NavbarFaftube';

const PlayVideo = () => {
    const { videoId } = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVideoData = async () => {
        try {
            const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const res = await fetch(videoDetails_url);
            const data = await res.json();
            setApiData(data.items[0]);
        } catch (error) {
            console.error('Error fetching video data', error);
        }
    };

    const fetchOtherData = async () => {
        try {
            if (apiData) {
                const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
                const resChannel = await fetch(channelData_url);
                const channelData = await resChannel.json();
                setChannelData(channelData.items[0]);

                const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=60&videoId=${videoId}&key=${API_KEY}`;
                const resComments = await fetch(comment_url);
                const commentsData = await resComments.json();
                setCommentData(commentsData.items);
            }
        } catch (error) {
            console.error('Error fetching other data', error);
        }
    };

    useEffect(() => {
        setLoading(true);
        if (videoId) {
            fetchVideoData().finally(() => setLoading(false));
        }
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    }, [apiData]);

    const [sidebar, setSidebar] = useState(true);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="play-video">
            <NavbarFaftube setSidebar={setSidebar} />
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
            <div className="play-video-info">
                <p>
                    {apiData ? value_converter(apiData.statistics.viewCount) : '16K'} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
                </p>
                <div>
                    <span>
                        <img src={like} alt="" /> {apiData ? value_converter(apiData.statistics.likeCount) : 155}
                    </span>
                    <span>
                        <img src={dislike} alt="" />
                    </span>
                    <span>
                        <img src={share} alt="" /> Share
                    </span>
                    <span>
                        <img src={save} alt="" /> Save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '100M'} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'} </p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments </h4>
                {commentData.map((item) => (
                    <div key={item.id} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>
                                {item.snippet.topLevelComment.snippet.authorDisplayName}
                                <span> 2 days ago</span>
                            </h3>
                            <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo;
