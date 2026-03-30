import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import Typography from "./Typography";
import inputField from "./inputField";  
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";


createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <TailwindCSS />
      <Typography /> 
      <inputField />   
      <UserForm /> */}
      <HitungGajiForm />
    </div>
  );