import React from 'react';
import './App.css'; 
import cuteGhost from './components/imgs/cute_ghost.png'; 

function PortfolioItem({ title, description, imageUrl }) {
  return (
    <div className="portfolio-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
const portfolioData = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    imageUrl: 'path_to_image_1.png'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    imageUrl: 'path_to_image_2.png'
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My 8-Bit Portfolio!</h1>
      </header>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Hello, I'm a web developer with a passion for 8-bit games!</p>
          <img src={cuteGhost} alt="Ghost Boy" width="400" height="300"></img>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-items">
          {portfolioData.map(item => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Thank you for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default App;
