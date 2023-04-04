
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import { Provider } from 'react-redux';

function App() {


  return (
    <Provider store={store}>

      <Header />
      <Body />


    </Provider>
  );
}

export default App;
