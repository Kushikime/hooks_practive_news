import './App.css';
import { TopNav } from './Components/TopNav';
import { MainContent } from './Components/MainContent'
import { useState } from 'react';

function App() {

  const [news, setNews] = useState([]);


  return (
    <div className="wrapper">
      <TopNav changeNews={setNews} />
      <MainContent news={news} />
    </div>
  );
}

export default App;
