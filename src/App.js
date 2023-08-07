import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message></Message> */}
      <Greet name="abc" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="xyz" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="pqr" heroName="Wonderwomen"></Greet>
      <Welcome name="abc" heroName="Batnman"></Welcome>
      <Welcome name="xyz" heroName="Superman"></Welcome>
      <Welcome name="pqr" heroName="Wonderwomen"></Welcome>
      <Hello />
    </div>
  );
}

export default App;
