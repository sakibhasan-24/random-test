// TripTracker.tsx
import React, { useState } from 'react';
import { createTrip } from './TripLogic';

const trip = createTrip(30); 

const TripTracker: React.FC = () => {
  const [fare, setFare] = useState(0);
  const [distance, setDistance] = useState(0);

  const handleAddDistance = () => {
    trip.addDistance(1); 
    setFare(trip.getFare());
    setDistance(trip.getDistance());
  };

  const handleReset = () => {
    trip.reset();
    setFare(0);
    setDistance(0);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>🛣️ Ride Sharing Trip Tracker</h2>
      <p>Distance: <strong>{distance} km</strong></p>
      <p>Fare: <strong>{fare} BDT</strong></p>
      <button className='cursor-pointer' onClick={handleAddDistance}>➕ Add 1 km</button>
      <button className='cursor-pointer' onClick={handleReset} style={{ marginLeft: "1rem" }}>
        🔁 Reset Trip
      </button>
    </div>
  );
};

export default TripTracker;
