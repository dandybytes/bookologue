import React from "react";
import { Link } from "react-router-dom";
import "./CardOverlay.css";

const CardOverlay = ({ id }) => {
  return (
    <div className="book-card-overlay">
      <Link to={`/book/${id}`} className="card-overlay-button">
        Open Book Details
      </Link>
    </div>
  );
};

export default CardOverlay;
