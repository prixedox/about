import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

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
