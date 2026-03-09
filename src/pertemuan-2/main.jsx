import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';

createRoot(document.getElementById("root")).render(
  <div>
    <Container>
         <img src="img/images.jpg" alt="Gambar" width="100%" />
      <HelloWorld />
    </Container>
  </div>,
);
