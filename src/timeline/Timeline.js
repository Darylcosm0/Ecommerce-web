import React, { useState } from "react";
import Post from "./posts/Post";

import Suggestions from "../suggestions/Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "__cosm0",
      postImage:
        "	https://i.pinimg.com/564x/03/75/1c/03751cc5fa89d3a2f531a84b615bd787.jpg",
      likes: 698,
      timestamp: "2d",
    },
    {
      user: "animi",
      postImage:
        "	https://i.pinimg.com/564x/91/fa/38/91fa386e212e8e8ded662dfd09733eaf.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Rickmorty",
      postImage:
        "https://i.pinimg.com/564x/66/49/64/66496401d7cd47f473afcd95861c098e.jpg",
      likes: 840,
      timestamp: "2d",
    },
    {
      user: "pathfinder",
      postImage:
        "https://i.pinimg.com/564x/29/22/ed/2922edb642f175aa608b938fa04d245b.jpg",
      likes: 614,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;