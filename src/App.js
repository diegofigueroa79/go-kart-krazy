import Game from './components/game.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import './App.sass'


function App() {
  return (
    <div className="container">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
