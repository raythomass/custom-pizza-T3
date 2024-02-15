import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
          <div className="container">
              <h2>Welcome to Ray's Pizzaria</h2>
              <p>Experience the taste of perfection with our customized pizzas made just for you.</p>
              <a href="#menu" className="btn">Explore Menu</a>
          </div>
      </section>

      <section id="about" className="about">
          <div className="container">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo mattis est, ac aliquam lacus aliquet vel. Sed maximus magna eu ipsum viverra, et faucibus leo consequat.</p>
              <p>Nunc nec arcu commodo, fermentum mauris ut, laoreet ex. Duis sit amet augue tincidunt, vehicula nisl ac, tempor odio.</p>
          </div>
      </section>

      <section id="menu" className="menu">
          <div className="container">
              <h2>Our Menu</h2>
              <p>Explore our delicious selection of pizzas and customize them to your liking.</p>
              <Link to="/menu" className="btn">Customize Your Pizza</Link>
          </div>
      </section>

      <section id="contact" className="contact">
          <div className="container">
              <h2>Contact Us</h2>
              <p>Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.</p>
              <Link to="/contact" className="btn">Get in Touch</Link>
              
          </div>
      </section>
    </div>
  );
};

export default Home;


