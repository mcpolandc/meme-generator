import * as React from "react";
import { render } from "react-dom";

import MainPanel from "./components/main-panel";

import "./styles.scss";

const App = () => <MainPanel />;

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;
