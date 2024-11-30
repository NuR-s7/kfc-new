import React, { useEffect, useState } from 'react';

const MenuKFC = () => {
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

            <div style={headerStyle}>
                <h1>KFC Меню</h1>
                <p>Выберите свою любимую категорию</p>
                <nav style={navStyle}>
                    <a href="index.html" style={navLinkStyle}>Главная</a>
                    <a href="category.html" style={{ ...navLinkStyle, ...activeLinkStyle }}>Меню</a>
                    <a href="about.html" style={navLinkStyle}>О нас</a>
                </nav>
            </div>

            <div style={containerStyle}>
                {categories.map((category, index) => (
                    <div key={index} style={categoryStyle}>
                        <img src={category.img} alt={category.title} style={imageStyle} />
                        <h3><a href={category.link} style={linkStyle}>{category.title}</a></h3>
                    </div>
                ))}
            </div>
        </>
    );
};

const categories = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYswSZlJ96kUSOMZzW-QSsXv88OlyjgBOYw&s",
        title: "Баскеты",
        link: "basket.html"
    },
    {
        img: "https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png",
        title: "Бургеры",
        link: "burger.html"
    },
    {
        img: "https://w7.pngwing.com/pngs/502/89/png-transparent-fizzy-drinks-computer-icons-cold-drink-food-text-logo-thumbnail.png",
        title: "Напитки",
        link: "drinks.html"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YJ3kV6f6BBjhQ1n56YJK7EPSBTpf0rK_AA&s",
        title: "Десерты",
        link: "desserts.html"
    }
];

const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#d32323',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    zIndex: 1000
};

const spinnerStyle = {
    border: '8px solid rgba(255, 255, 255, 0.2)',
    borderTop: '8px solid white',
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
    backgroundColor: '#d32323',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
};

const navStyle = {
    marginTop: '10px'
};

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
    fontWeight: 'bold'
};

const activeLinkStyle = {
    textDecoration: 'underline'
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
};

const categoryStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    padding: '20px'
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
};

const linkStyle = {
    color: '#d32323',
    textDecoration: 'none',
    fontWeight: 'bold'
};

export default MenuKFC;
