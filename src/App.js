import logo from "./logo.svg";
import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <ItemList
        items={[
          {
            id: 1,
            label: "Lamborghini",
          },
          {
            id: 2,
            label: "Tesla",
          },
          {
            id: 1,
            label: "Lamborghini",
          },
          {
            id: 2,
            label: "Tesla",
          },
          {
            id: 1,
            label: "Lamborghini",
          },
          {
            id: 2,
            label: "Tesla",
          },
          {
            id: 1,
            label: "Lamborghini",
          },
          {
            id: 2,
            label: "Tesla",
          },
          {
            id: 1,
            label: "Lamborghini",
          },
          {
            id: 2,
            label: "Tesla",
          },
        ]}
      />
    </div>
  );
}

export default App;
