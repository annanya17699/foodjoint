import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Items from './Components/Items';
import { Provider } from 'react-redux';
import store from './redux/Store'
import Reviews from './Components/Reviews';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      
      <Provider store = {store}>
      <Items/>
      <Reviews/>
      </Provider>
      
      <Footer/>
    </div>
  );
}

export default App;
