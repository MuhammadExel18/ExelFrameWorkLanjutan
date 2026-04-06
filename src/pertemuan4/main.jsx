import { createRoot } from "react-dom/client";
import "./tailwind.css";
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";
import FrameworkListSerchFilter from "./FrameworkListSerchFilter";
createRoot(document.getElementById("root"))
  .render(
    <div>
        {/* <FrameworkList/>     */}
         <FrameworkListSerchFilter/>
    </div>
  );