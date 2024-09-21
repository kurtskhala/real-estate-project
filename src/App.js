import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.Component}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
