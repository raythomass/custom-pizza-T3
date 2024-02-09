const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h4>Contact Us</h4>
          <p>123 Pizza Street</p>
          <p>Tucson, AZ 111111</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: custompizzas@google.com</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/" target="-blank" rel="">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="-blank" rel="">Instagram</a></li>
            <li><a href="https://twitter.com/" target="-blank" rel="">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pizza Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
