import React, { useRef, useState } from "react";
import Layout from "../UI/Layout";
import ContentEditable from "react-contenteditable";
import styles from "./StoryAdd.module.css";
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
    console.log(file);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.value);
    console.log(e.target.files[0]);
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
          className={styles.story}
          html={text.current}
          onChange={handleStory}
          onBlur={handleBlur}
        ></ContentEditable>
        <br />
        파일 :{" "}
        <input
          type="file"
          accept="image/*"
          value={filename}
          file={file}
          onChange={handleFile}
        />
      </form>
    </>
  );
};
export default StoryAdd;
