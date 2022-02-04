import "./App.css";
import Greet from "./components/Greet";
import MagicNumber from "./components/MagicNumber";

function App() {
  let obj = {
    wheels: 4,
    make: "Tesla",
    year: 2020,
  };

  // <div className="bg">
  return (
    <div>
      <Greet name={"Henry"} favColor={"green"} age={29} likesCoding={false} />
      <Greet
        name={"Carlos"}
        favColor={"blue"}
        age={29}
        car={obj}
        likesCoding={true}
      />

      <MagicNumber />
    </div>
  );
}

export default App;
