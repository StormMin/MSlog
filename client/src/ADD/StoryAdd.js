import React, { useRef, useState } from "react";
import Layout from "../UI/Layout";
import ContentEditable from "react-contenteditable";
import "./StoryAdd.css";
const StoryAdd = () => {
  const text = useRef("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");
  const [story, setStory] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleStory = (e) => {
    text.current = e.target.value;
  };
  const handleBlur = (e) => {
    console.log(text.current);
  };
  const handleFile = (e) => {
    setFilename(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Layout />
      <form onSubmit={handleForm}>
        제목 :
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitle}
          required
        />
        <br />
        내용 :
        <ContentEditable
          html={text.current}
          onChange={handleStory}
          onBlur={handleBlur}
        />
        <br />
        파일 : <input type="file" value={filename} onChange={handleFile} />
      </form>
    </>
  );
};
export default StoryAdd;
