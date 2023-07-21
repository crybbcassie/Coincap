import "./App.css";
import Main from "./pages/Main";
import Crypto from "./pages/Crypto";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Main/>
      <Crypto/>
    </div>
  );
}

export default App;
