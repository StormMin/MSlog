import React from "react";
import { Link } from "react-router-dom";
import Layout from "./UI/Layout";
const dummy = [
  {
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjFfMjk0%2FMDAxNjI2ODY2NjE4ODE0.zqWqI6yHxOmPSCJpgk-dmfzu5Q7cH-UJcAQuJ19uangg.4hqkwEzKw0Ovp4-rqzqsXUJmgSf-HdSdPj9LUJLcP5cg.JPEG.sdh622%2F18599316260017631.jpg&type=a340",
    nickname: "카리나",
    title: "충격 인스타",
    likes: "12",
    id: "1",
  },
  {
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTEyMTFfMTEy%2FMDAxNTc2MDcwMDU3NzEy.2Hb3XfRAyzmGtOLGDG-DSPvL3cjqTWZqmKTiTWmv1m0g.nTCMJF8heuN-3A_MYo-GdQRoB3ebkHk0AziXVtphW-8g.PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png&type=a340",
    nickname: "한동숙",
    title: "방송 근황",
    likes: "10",
    id: "2",
  },
];

function Home() {
  return (
    <React.Fragment>
      <Layout />
      {dummy.map((prop) => (
        <Link to={`detail/${prop.id}`} key={prop.id}>
          <img src={prop.img} height="64px" width="64px" />
          <div>
            {prop.title} {prop.nickname} {prop.likes}
          </div>
        </Link>
      ))}
      <Link to={`storyAdd`}>글쓰기</Link>
    </React.Fragment>
  );
}
export default Home;
