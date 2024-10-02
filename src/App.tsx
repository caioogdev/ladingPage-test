import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import { Page } from "./pages/page/page";

export function App() {
  return (
    <Router>
      <Page />
    </Router>
  )
}

