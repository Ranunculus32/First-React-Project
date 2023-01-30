import Container from "react-bootstrap/Container";
import '../styles/footer.css';
const Footer = () => {
  return (
    <Container>
      <footer>
        <br />
        <br />

        <h3> Hobbies and interests</h3>
        <ul>
          <li>
            Gardening <span>👩🏼‍🌾</span>
          </li>
          <li>
            Flower arrangement <span>💐</span>
          </li>
          <li>
            Coding <span>👩‍💻</span>
          </li>
          <li>
            Climbing <span>🧗‍♂️</span>
          </li>
        </ul>
        <br />
        <br />
        <p>Copyright &copy; 2023</p>
      </footer>
    </Container>
  );
};

export default Footer;
