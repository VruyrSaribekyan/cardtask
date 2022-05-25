import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import store from './redux/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Cards/>
    </Provider>
  );
}

export default App;
