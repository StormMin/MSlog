import React, { useRef, useState } from "react";
import Layout from "../UI/Layout";
import { post } from "axios";
import ContentEditable from "react-contenteditable";
import styles from "./StoryAdd.module.css";
import { response } from "express";
import res from "express/lib/response";
const StoryAdd = () => {
  const text = useRef("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
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
  };
  const addform = () => {
    const url = "/api/blog";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", nickname);
    formData.append("age", age);
    formData.append("title", title);
    formData.append("story", text);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };
  const handleForm = async (e) => {
    e.preventDefault();
    await addform().then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <Layout />
      <form onSubmit={handleForm}>
        이름:
        <input
          type="text"
          placeholder="이름"
          value={nickname}
          onChange={handleNickname}
          required
        />
        나이 :
        <input
          type="text"
          placeholder="나이"
          value={age}
          onChange={handleAge}
        />
        비밀번호:
        <input
          type="text"
          placeholder="제목"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
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
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default StoryAdd;
