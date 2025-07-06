import React, { useEffect, useState } from 'react';
import './Video.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from 'react-share';

const VideoHero = () => {
  const { id } = useParams();
  const [seevideo, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://pefscom-backend.onrender.com/admin/video/post/${id}`);
        setVideo(response.data);
      } catch (error) {
        toast.error('Failed to load video');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchVideo();
  }, [id]);

  if (loading) return <p>Loading video...</p>;
  if (!seevideo) return <p>Video not found.</p>;

  const shareUrl = `https://pefscomsystem.vercel.app/picturepost/${id}`;
  const shareText = seevideo.title || "Check this post from PEFSCOM!";
  const content = seevideo.content;

  return (
    <div className="kiwifruit">
      <div className="lychee">
        <video
          src={seevideo.VidUrl}
          controls
          autoPlay
          loop
          muted={false}
          className="mulberry"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="rambutan">
        <div className="jabuticaba">
          <h1>{seevideo.title}</h1>
          <p>{seevideo.content}</p>
        </div>
        <div className="santol">
          <h1>{seevideo.date}</h1>
          <p>{seevideo.price}</p>
        </div>
        <div
          className="pear"
          style={{
            marginBottom: "20px",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#222' }}>Share:</span>
          <WhatsappShareButton url={shareUrl} title={`${shareText} - ${content}`}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <FacebookShareButton url={shareUrl} quote={`${shareText} - ${content}`}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
