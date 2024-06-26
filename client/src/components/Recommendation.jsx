/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/videos/tags?tags=${tags}`,
        { withCredentials: true, credentials: "include" }
      );
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} type="sm" video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
