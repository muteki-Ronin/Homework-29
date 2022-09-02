// CORE 
import { Provider } from "react-redux";
// ENGINE 
import { store } from "../../engine/store";
// PARTS
import Wrapper from './Wrapper';

function App() {
  return (
      <Provider store={store}>
        <Wrapper />
      </Provider>
      )
}

export default App;