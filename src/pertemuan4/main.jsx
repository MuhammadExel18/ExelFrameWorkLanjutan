import { createRoot } from "react-dom/client";
import "./tailwind.css";
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";
import FrameworkListSerchFilter from "./FrameworkListSerchFilter";
import ResponsiveText from "./ResponsiveDesign";
createRoot(document.getElementById("root"))
  .render(
    <div>
        {/* <FrameworkList/>     */}
         {/* <FrameworkListSerchFilter/> */}
         <ResponsiveText/>
    </div>
  );