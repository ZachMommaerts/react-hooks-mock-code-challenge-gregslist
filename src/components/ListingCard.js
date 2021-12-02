import React, { useState } from "react";

function ListingCard({ item, onDelete }) {
  const [ favorited, setFavorited] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={() => setFavorited(!favorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFavorited(!favorited)}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(item)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
