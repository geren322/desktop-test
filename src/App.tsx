import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page1 from './Page1';
import Page2 from './Page2';


function App() {
    const [currentPage, setCurrentPage] = useState<string>('page1');

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div className={`App ${currentPage}`}>
            <header className="App-header">
                <div className="app-header-title">{currentPage === 'page1' ? 'Electron' : 'React'}</div>
                <nav>
                    <button className={currentPage === 'page1' ? 'active' : ''} onClick={() => handlePageChange('page1')}>Electron</button>
                    <button className={currentPage === 'page2' ? 'active' : ''} onClick={() => handlePageChange('page2')}>React</button>
                </nav>
            </header>
            {currentPage === 'page1' ? <Page1 /> : <Page2 />}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));