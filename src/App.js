import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card img='https://via.placeholder.com/285x180?text=Image cap'>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </Card>
      <Card>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
