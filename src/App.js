import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutKFC from './pages/AboutPage'; 

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
