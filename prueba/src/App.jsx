import { render } from "solid-js/web";
import "./index.css";

const App = () => (
  <div class="container">
    <div>Name: prueba</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>

  </div>
);
render(App, document.getElementById("app"));
