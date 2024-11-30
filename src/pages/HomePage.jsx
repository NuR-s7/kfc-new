import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div style={loaderStyle}>
                    <div style={spinnerStyle}></div>
                    <p style={loaderTextStyle}>Загрузка...</p>
                </div>
            )}

            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>Добро пожаловать в KFC</h1>
                <nav style={navStyle}>
                    <a href="index.html" style={navLinkStyle}>Главная</a>
                    <a href="category.html" style={navLinkStyle}>Меню</a>
                    <a href="about.html" style={navLinkStyle}>О нас</a>
                </nav>
            </header>

            <main style={mainStyle}>
                <section id="home">
                    <h2 style={sectionTitleStyle}>Откройте для себя KFC</h2>
                    <p style={paragraphStyle}>
                        Насладитесь легендарным вкусом курицы, приготовленной по секретному рецепту полковника Сандерса.
                    </p>
                </section>
            </main>

            <footer style={footerStyle}>
                <p>© 2024 KFC.</p>
            </footer>
        </>
    );
};

const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#6482AD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1000,
    color: 'white',
};

const spinnerStyle = {
    border: '8px solid rgba(255, 255, 255, 0.2)',
    borderTop: '8px solid white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
};

const loaderTextStyle = {
    marginTop: '20px',
    fontSize: '1.5rem',
    letterSpacing: '1.5px',
    animation: 'fadeText 2s infinite',
};

const headerStyle = {
    backgroundColor: '#6482AD',
    color: '#fff',
    padding: '20px 0',
};

const headerTitleStyle = {
    fontSize: '2.5rem',
};

const navStyle = {
    margin: '20px 0',
};

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#7FA1C3',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '0 10px',
    fontSize: '1.2rem',
};

const mainStyle = {
    flex: 1,
    padding: '20px',
};

const sectionTitleStyle = {
    color: '#6482AD',
    marginBottom: '20px',
    fontSize: '2rem',
};

const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
};

const footerStyle = {
    backgroundColor: '#3e3e3e',
    color: 'white',
    padding: '15px 0',
    marginTop: '20px',
    textAlign: 'center',
};

export default HomePage;
