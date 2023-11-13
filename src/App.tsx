import { Card } from './components/Card';
import './App.css';

function App() {
  const img = 'https://i.imgur.com/PAHiKxN.jpeg';

  return (
    <div className="container">
      <Card img={img}>
        <div className="card-body">
            <h5 className="card-title">Hey title!</h5>
            <p className="card-text">Very interesting descr</p>
            <a href='test-link' className="btn btn-primary">Click</a>
        </div>
      </Card>
    </div>
  );
}

export default App;
