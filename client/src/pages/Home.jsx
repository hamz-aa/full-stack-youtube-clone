/* eslint-disable react/prop-types */
import styled from "styled-components";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  /* display: flex;
  justify-content: baseline;
  justify-items: center;
  row-gap: 45px;
  column-gap: 60px;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: repeat(auto-fit, 40%);
  row-gap: 45px;
  column-gap: 55px;
  justify-content: ${(props) => (props.size === 1 ? "unset" : "center")};

  /* display: flex;
  flex-wrap: wrap;
  gap: 45px;
  justify-content: center; */
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:8080/api/videos/${type}`, {
        withCredentials: true,
        credentials: "include",
      });
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container size={videos.length}>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
