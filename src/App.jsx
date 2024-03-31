import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Summary from './components/Summary';
import TransacionList from './components/TransacionList';

//Redux
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container">
          <Summary />
          <TransacionList />
          <AddTransaction />
        </div>
      </div>
    </Provider>
  );
}

export default App;
