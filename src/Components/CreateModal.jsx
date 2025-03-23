import { useState } from "react";
import styled from "styled-components";



export default function CreateModal() {
  const [formData, setFormData] = useState({
    url: "https://pbs.twimg.com/media/FO5iMqJWYAQh8Kw?format=jpg&name=large",
    videoUrl: "https://www.youtube.com/embed/um1wEp7_Vp0?si=OxV6LsKR2NNUl9XE",
    description: "Marvel, fight with Thanos",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg",
    channelName: "Marvel",
    views: "100,000",
    date: "2 years old",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    const videos = localStorage.getItem("videos")
    ? JSON.parse(localStorage.getItem("videos"))
    : [];

    formData.id = Math.max(...videos.map(video => video.id)) + 1;
    const updatedVideos = [...videos, formData];
    localStorage.setItem("videos", JSON.stringify(updatedVideos));


    console.log("Submitted Data:", formData);
  };

  return (
    <CreateModalOverlay>
    <Form onSubmit={handleSubmit}>
      <Label>URL:
        <Input type="text" name="url" value={formData.url} onChange={handleChange} />
      </Label>
      <Label>Video URL:
        <Input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
      </Label>
      <Label>Description:
        <Input type="text" name="description" value={formData.description} onChange={handleChange} />
      </Label>
      <Label>Icon URL:
        <Input type="text" name="iconUrl" value={formData.iconUrl} onChange={handleChange} />
      </Label>
      <Label>Channel Name:
        <Input type="text" name="channelName" value={formData.channelName} onChange={handleChange} />
      </Label>
      <Label>Views:
        <Input type="text" name="views" value={formData.views} onChange={handleChange} />
      </Label>
      <Label>Date:
        <Input type="text" name="date" value={formData.date} onChange={handleChange} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
    </CreateModalOverlay>
  );
}

const CreateModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
