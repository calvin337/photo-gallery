import React from 'react';
import './App.css';
import PhotoGallery from "./components/PhotoGallery";
import { mockPhotos } from "./mockData/mockPhotos";

// Using mock data here but we can substitute it out for real data from an API
function App() {
  return (
    <div className="App">
      <PhotoGallery photos={mockPhotos}/>
    </div>
  );
}

export default App;
