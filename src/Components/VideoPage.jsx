import { useParams } from "react-router-dom";
import { yotubeBox } from "../yotubeReducer";
import { useRef, useState } from "react";

export default function VideoPage() {
  const { id } = useParams();
  const video = yotubeBox.find((video) => video.id === Number(id));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const textAreaRef = useRef(null);

  function saveComment() {
    const element = textAreaRef.current.value;
    setComments([...comments, element]);
    console.log(comments);
  }

  function addLikes() {
    setLikes(likes + 1);
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
        <p> <strong> {video.channelName} </strong></p>
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
          <p>Likes: {likes}</p>
        </div>
      </div>
      <div className="video-comments">
        <span>
          {" "}
          <strong>Comments :</strong>
        </span>
        <textarea className="input" ref={textAreaRef} placeholder="Напишите ваш комментарий"></textarea>
        <button onClick={saveComment}>Add comment</button>
        {comments.map((item, index) => item && <span key={index}> {item}</span>)}
      </div>
    </div>
  );
}
