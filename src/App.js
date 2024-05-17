import './App.css';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Overview />
      <Portfolio />
    </>
  );
}

export default App;
