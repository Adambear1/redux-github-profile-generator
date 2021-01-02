import React from "react";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Searchbar from "./components/Searchbar";
import Container from "./components/Container";

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Searchbar />
      <Container />
    </Provider>
  );
}

export default App;
