import "./App.css";
import Fcard from "./components/Fcard";
import Scard from "./components/Scard";
import Tcard from "./components/Tcard";

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>Simple Pricing</h1>
        <div className="input-card">
          <input type="text" placeholder="your work email" />
          <button className="inputBtn">Get Started Free</button>
        </div>
        <p style={{ marginTop: "25px", fontSize: "15px", color: "grey" }}>
          Free Forever version with unlimited Users.Free 14days trial to test
          premium
        </p>
        <div className="violetCard">
          <p>Free Asana & Jira Migration! Transfer everything in seconds!</p>
        </div>
      </div>
      <div className="cards">
        <Fcard />
        <Scard />
        <Tcard />
      </div>
    </div>
  );
}

export default App;
