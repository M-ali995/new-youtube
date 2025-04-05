import { useParams } from "react-router-dom";
import { yotubeBox } from "../yotubeReducer";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

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
      const comments = localStorage.getItem("comments")
        ? JSON.parse(localStorage.getItem("comments"))
        : [];
      const filteredComments = comments.filter((item) => item.videoId === id);
      setComments(filteredComments);
    }
  }, []);

  useEffect(() => {
    const login = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).login : null;
    const likes = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : [];

    const likesCnt = likes.filter(item => Number(item.videoId) === Number(id)).length;
    console.log(likesCnt)

    setLikesCount(likesCnt);

    if (
      login && likes.some((item) => item.login === login && item.videoId === id)
    ) {
      setHasLike(true);
      console.log("dddd");
    }
    console.log(login);
  }, [likes]);

  function saveComment() {
    const userName = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).login
      : "anonymous";
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
    if (!localStorage.getItem("user") || hasLike) {
      return false;
    }

    const login = JSON.parse(localStorage.getItem("user"))?.login;
    const like = {
      videoId: id,
      login: login,
    };

    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    const updatedLikes = [...storedLikes, like];

    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes)); 

    setLikesCount((prevLikesCount) => {
      return prevLikesCount + 1;
    });
  }

  if (!video) {
    return <div>Видео не найдено</div>;
  }

  return (
    <VideoPageBox>
      <iframe
        width="900"
        height="500"
        src={video.videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <VideoInfo>
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
        <LikesContainer>
          <LikeBtn onClick={addLikes}>
            {" "}
            <i className="material-symbols-outlined">thumb_up</i>
          </LikeBtn>
          <p>Likes: {likesCount}</p>
        </LikesContainer>
      </VideoInfo>
      <CommentsContainer>
        <span>
          {" "}
          <strong>Comments :</strong>
        </span>
        <InputComment
          ref={textAreaRef}
          placeholder="Напишите ваш комментарий"
        ></InputComment>
        <AddCommentBtn onClick={saveComment}>Add comment</AddCommentBtn>
        {comments.map(
          (item, index) =>
            item && (
              <div key={index}>
                <span>
                  {" "}
                  <strong>{item.userName}</strong>
                </span>{" "}
                :<span> {item.text}</span>
              </div>
            )
        )}
      </CommentsContainer>
    </VideoPageBox>
  );
}

const VideoPageBox = styled.div`
  padding-top: 50px;
  margin-left: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  iframe {
    border-radius: 12px;
  }

  i {
    cursor: pointer;
  }

  .input {
    height: 50px;
    border-radius: 12px;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const LikesContainer = styled.div`
  margin-left: 100px;
  display: flex;
  gap: 10px;
`;

const LikeBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const InputComment = styled.textarea`
  padding-left: 10px;
  padding-top: 10px;
  width: 50%;
  height: 100px;
`;

const AddCommentBtn = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
