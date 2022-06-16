import { render } from "solid-js/web";
import Hello from "prueba/Hello";

import "./index.css";

const App = () => (
  <div class="container">
    <div>Name: host</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Hello />
  </div>
);
render(App, document.getElementById("app"));
