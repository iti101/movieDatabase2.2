import { useEffect, useState } from 'react';
import './Navbar.css';

const MENU_LINKS = ['Home', 'Movies', 'Series', "Genre's", 'Log in'];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);
    
    function toggleMenu() {
        setMenuOpen((open) => !open);
        setAccountOpen(false);
    }
    
    function closeMenu() {
        setMenuOpen(false);
    }
    
    function toggleAccount() {
        setAccountOpen((open) => !open);
        setMenuOpen(false);
    }
    
    function handleSignIn() {
        alert('Sign in to your personal account — coming soon.');
        setAccountOpen(false);
    }
    
    return (
        <>
            <header className="navbar">
                <div className="navbar__inner">
                    <button
                        type="button"
                        className={`navbar__menu-btn${menuOpen ? ' navbar__menu-btn--open' : ''}`}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="navbar-fullscreen-menu"
                        onClick={toggleMenu}
                    >
          <span className="navbar__menu-icon" aria-hidden="true">
            <span className="navbar__menu-line" />
            <span className="navbar__menu-line" />
            <span className="navbar__menu-line" />
          </span>
                    </button>
                    
                    <div className="navbar__account">
                        <button
                            type="button"
                            className="navbar__account-btn"
                            aria-label="Account"
                            aria-expanded={accountOpen}
                            aria-haspopup="true"
                            onClick={toggleAccount}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                                <path
                                    d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        
                        {accountOpen && (
                            <>
                                <button
                                    type="button"
                                    className="navbar__account-backdrop"
                                    aria-label="Close account menu"
                                    onClick={() => setAccountOpen(false)}
                                />
                                <div className="navbar__account-panel" role="dialog" aria-label="Account">
                                    <p className="navbar__account-heading">Your account</p>
                                    <p className="navbar__account-text">Sign in to access your watchlist and preferences.</p>
                                    <button type="button" className="navbar__account-signin" onClick={handleSignIn}>
                                        Sign in
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
            
            <div
                id="navbar-fullscreen-menu"
                className={`navbar__overlay${menuOpen ? ' navbar__overlay--open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className="navbar__fullscreen-nav" aria-label="Main navigation">
                    {MENU_LINKS.map((link, index) => (
                        <a
                            key={link}
                            href="#"
                            className="navbar__fullscreen-link"
                            style={{ transitionDelay: menuOpen ? `${index * 60 + 80}ms` : '0ms' }}
                            onClick={closeMenu}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
