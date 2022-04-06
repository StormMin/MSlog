import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./UI/Layout";

function Home() {
  const [user, setUser] = useState([]);
  const callApi = async () => {
    const response = await fetch("/api/blog");
    const body = await response.json();
    return body;
  };
  const componentDidMount = async () => {
    await callApi()
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    componentDidMount();
  }, []);
  return (
    <React.Fragment>
      <Layout />
      {user?.map((prop) => (
        <Link to={`Detail/${prop.idblog}`} key={prop.idblog}>
          <img src={prop.img_url} height="64px" width="64px" />
          <div>
            {prop.title} {prop.nickname} {prop.age}
          </div>
        </Link>
      ))}
      <Link to={`storyAdd`}>글쓰기</Link>
    </React.Fragment>
  );
}
export default Home;
