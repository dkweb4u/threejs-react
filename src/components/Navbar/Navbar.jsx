import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
  return (
    <header>
        <div className="container">
            <nav>
                <div className="logo">
                    WEB4U
                </div>
                <div className="menu-icon" onClick={()=>setMenuIcon(!menuIcon)}>
                    <img src={menuIcon ? "assets/close.svg" :"assets/menu.svg"} alt="" />
                </div>
                <ul className={menuIcon ? "nav-links active" : 'nav-links' }>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>

                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar