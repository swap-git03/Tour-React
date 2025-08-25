import React, { useState } from "react";
import data from "../Data"; // your data.js

function Cards() {
  const [places, setPlaces] = useState(data);

  // delete function
  const handleDelete = (id) => {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  };

  return (
    <div className="container my-4">
      <div className="row">
        {places.map((place) => (
          <div className="col-md-4 mb-4" key={place.id}>
            <div className="card h-100 shadow">
              <img
                src={place.image}
                className="card-img-top"
                alt={place.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.info}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="fw-bold">₹ {place.price}</span>
                <div>
                  <button className="btn btn-primary me-2">Book Now</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(place.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {places.length === 0 && (
          <p className="text-center text-muted">No places left 😢</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
