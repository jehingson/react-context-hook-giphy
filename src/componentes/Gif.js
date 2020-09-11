import React from "react";
import { Link } from "wouter";

export default function Gif({ title, url, id }) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className="gif-link">
        <em>{title}</em>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
}
