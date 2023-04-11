
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import { Provider } from 'react-redux';

function App() {

  return (

    <Provider store={store}>  {/* Provider which provides the redux store to our app */}
      
      <Header />
      <Body />

    </Provider>
  );
}

export default App;
