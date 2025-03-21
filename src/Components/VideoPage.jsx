import { useParams } from "react-router-dom";
import { yotubeBox } from "../yotubeReducer";
import { useRef, useState, useEffect } from "react";

export default function VideoPage() {
  const { id } = useParams();
  const video = yotubeBox.find((video) => video.id === Number(id));
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const textAreaRef = useRef(null);
  const [likesCount, setLikesCount] = useState(0);
  const [hasLike, setHasLike] = useState(false);

  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("history")) || [];
  });

  useEffect(() => {
    if (id && !history.includes(id)) {
      const updatedHistory = [...history, id];
      setHistory(updatedHistory);
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const comments = localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")): [];
      const filteredComments = comments.filter(item => item.videoId === id );
      setComments(filteredComments);
    }
  }, []);
  
  useEffect(() => {
    const login = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).login : null;
    const likes = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")): [];
    setLikesCount(likes.length);

    if(login && likes.some(item => item.login === login && item.videoId === id)) {
      setHasLike(true);
      console.log("dddd")
    }
    console.log(login)

  }, [likes]);



  function saveComment() {
    const userName = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).login: "anonymous";
    const comment = {
      text: textAreaRef.current.value,
      videoId: id,
      userName: userName,
    };

    setComments((prevComments) => {
      const updatedComments = [...prevComments, comment];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      return updatedComments;
    });
  }

  function addLikes() {
    if(!localStorage.getItem("user") || hasLike) {
      return false;
    }
    
    const login = JSON.parse(localStorage.getItem("user"))?.login;
    const like = {
      videoId: id,
      login: login,
    };

  const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
  const updatedLikes = [...storedLikes, like];

  setLikes(updatedLikes); // Update state
  localStorage.setItem("likes", JSON.stringify(updatedLikes)); // Store updated list

    setLikesCount((prevLikesCount) => {
      return prevLikesCount + 1;
    })
  }

  if (!video) {
    return <div>Видео не найдено</div>;
  }

  return (
    <div className="video-page">
      <iframe
        width="900"
        height="500"
        src={video.videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="video-info">
        <img
          src={video.iconUrl}
          alt={video.channelName}
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
        <p>
          {" "}
          <strong> {video.channelName} </strong>
        </p>
        <p>
          <strong>Просмотры:</strong> {video.views}
        </p>
        <p>
          <strong>Дата:</strong> {video.date}
        </p>
        <div className="video-likes">
          <button onClick={addLikes}>
            {" "}
            <i className="material-symbols-outlined">thumb_up</i>
          </button>
          <p>Likes: {likesCount}</p>
        </div>
      </div>
      <div className="video-comments">
        <span>
          {" "}
          <strong>Comments :</strong>
        </span>
        <textarea
          className="input"
          ref={textAreaRef}
          placeholder="Напишите ваш комментарий"
        ></textarea>
        <button onClick={saveComment}>Add comment</button>
        {comments.map(
          (item, index) => item && 
          <div key={index}>
            <span> <strong>{item.userName}</strong></span> :
            <span> {item.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
