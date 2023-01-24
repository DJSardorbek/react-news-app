import './App.css';
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList/NewsList";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <div className='content'>
            <NewsList/>
            <div className='content__page'>
                <NewsAddForm/>
                <NewsFilter/>
            </div>
        </div>
    </div>
  );
}

export default App;
