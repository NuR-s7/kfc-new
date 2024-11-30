import React, { useEffect, useState } from 'react';

const AboutKFC = () => {
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
                <div id="loader" style={loaderStyle}>
                    <div style={spinnerStyle} />
                    <p style={loaderTextStyle}>Загрузка...</p>
                </div>
            )}

            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>О компании KFC</h1>
                <nav style={navStyle}>
                    <a href="index.html" style={navLinkStyle}>Главная</a>
                    <a href="category.html" style={navLinkStyle}>Меню</a>
                    <a href="about.html" style={{ ...navLinkStyle, ...activeLinkStyle }}>О нас</a>
                </nav>
            </header>

            <main style={mainStyle}>
                <section id="about" style={sectionStyle}>
                    <h2 style={sectionTitleStyle}>История KFC</h2>
                    <p style={paragraphStyle}>
                        Мы завоевали сердца миллионов людей по всему миру! Kentucky Fried Chicken (с англ. — «Жареная курица из Кентукки»), аббрев. KFC («Кей-эф-си») — международная сеть ресторанов общественного питания...
                    </p>
                </section>
            </main>

            <footer style={footerStyle}>
                <p>© 2024 KFC</p>
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
    color: 'white',
    zIndex: 1000
};

const spinnerStyle = {
    border: '8px solid rgba(255, 255, 255, 0.2)',
    borderTop: '8px solid #fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite'
};

const loaderTextStyle = {
    marginTop: '20px',
    fontSize: '1.5rem',
    letterSpacing: '1.5px'
};

const headerStyle = {
    backgroundColor: '#6482AD',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center'
};

const headerTitleStyle = {
    fontSize: '2.5rem'
};

const navStyle = {
    margin: '20px 0'
};

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#7FA1C3',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '0 10px',
    fontSize: '1.2rem'
};

const activeLinkStyle = {
    backgroundColor: '#E2DAD6',
    color: 'black'
};

const mainStyle = {
    padding: '20px',
    textAlign: 'center'
};

const sectionStyle = {
    margin: '40px 0'
};

const sectionTitleStyle = {
    color: '#6482AD',
    marginBottom: '20px',
    fontSize: '2rem'
};

const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5'
};

const footerStyle = {
    backgroundColor: '#3e3e3e',
    color: 'white',
    padding: '15px 0',
    marginTop: '20px',
    textAlign: 'center'
};

export default AboutKFC;
