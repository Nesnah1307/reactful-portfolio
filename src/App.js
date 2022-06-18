import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';


function App() {
  const [currentPage, setCurrentPage] = useState("About");
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
  };

  return (
    <div>
       <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} ></Nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;


