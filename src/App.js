
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import Header from "./Components/Header/head.jsx"
import Mid from "./Components/MidSection/mid.js"
import Pop from "./Components/Popular/popular.jsx"
import Upcoming from './Components/Upcoming/Upcoming';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Mid />
    <Pop />
    <Upcoming />
    <Footer />
    </div>
  );
}

export default App;
