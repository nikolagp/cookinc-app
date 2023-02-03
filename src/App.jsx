import Categories from './components/Categories';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
      <Footer />
      {/* Disclaimer */}
      {console.log(`
      Hi everyone! This app is created for learning purposes and
      the API calls are limited with daily requests. In case the daily quota is
      exceeded, you may face errors or empty page. So feel free to come back
      tomorrow and try again. Thanks!`)}
    </div>
  );
}

export default App;

// https://huemint.com/back-gradient-2/#palette=1c2023-ad7e22-33b76e
