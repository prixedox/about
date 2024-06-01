import './App.css';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Overview />
    </>
  );
}

export default App;
