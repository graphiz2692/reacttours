import './assets/styles/style.css';
import Logo from '../assets/img/logo-white.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo-box'>
                <img src={Logo} className='header__logo' alt='logo' />
            </div>
        </header>
    );
}

export default Header;