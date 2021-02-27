import "./App.css";
import Appcontainer from "./Appcontainer";
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";
import ErrorBounderies from "./error/ErrorBounderies";
function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ErrorBounderies>
        <Appcontainer />
      </ErrorBounderies>
    </Provider>
  );
}

export default App;
