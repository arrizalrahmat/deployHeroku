import ItemList from "./ItemList";
import ReactDOM from "react-dom";

test('should render "no item" when there are no items', () => {
  const container = document.createElement("div");
  ReactDOM.render(<ItemList items={[]} />, container);
  expect(container.textContent).toMatch("no item");
});

test("render items in a list", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <ItemList
      items={[
        { id: 1, label: "orange" },
        { id: 2, label: "mango" },
      ]}
    />,
    container
  );
  expect(container.textContent).toMatch("orange");
  expect(container.textContent).toMatch("mango");
});
