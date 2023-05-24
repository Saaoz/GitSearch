import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import moonIcon from '../../assets/Imgs/moon.svg';
import sunIcon from '../../assets/Imgs/sun.svg'
import './index.css';

function Header() {

    // handleButtonClick qui bascule le mode sombre si isActive est true et bascule vers le mode clair sinon.
    const { theme, toggleDarkMode, toggleLightMode } = useContext(ThemeContext);
    const isActive = theme === 'dark';
    const icon = isActive ? sunIcon : moonIcon;

    const handleButtonClick = () => {
        if (isActive) {
            toggleLightMode();
        } else {
            toggleDarkMode();
        }
    };

    return (
        <header>
            <div className='div-header'>
                <h1>devfinder</h1>
                <div className='theme-mod'>
                    <p className={isActive ? 'light' : 'dark'} onClick={handleButtonClick}>
                    {isActive ? 'LIGHT' : 'DARK'}
                    </p>
                    <img src={icon} alt={isActive ? 'sun icon' : 'moon icon'} />
                </div>
            </div>
        </header>
    );
}

export default Header;
