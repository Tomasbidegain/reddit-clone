import React from "react";

const CardTrend = ({ trend }) => {
  const { image, author, title, postUrl } = trend;

  return (
    <div className="card text-white bg-dark" style={{ maxWidth: "200px" }}>
      <div
        className="card-img"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px",
        }}
      ></div>
      <div className="card-body">
        <h5 className="card-title text-truncate">
          <a style={{ color: "inherit", textDecoration: "none" }} href={postUrl}>
            {title}
          </a>
        </h5>
        <p className="card-text">
          <a href={`https://www.reddit.com/user/${author}`} style={{ color: "inherit" }}>
            {author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CardTrend;
