import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="d-viewport home">
            <h1>
                <span data-shadow-text="Kevin Boucher">
                    Kevin Boucher
                </span>
                <hr />
            </h1>
            <h2>
                UI/UX Engineer<br />
                JavaScript · HTML · CSS
            </h2>
            <a
                className="icon-link about-site"
                href="https://kboucher.github.io"
                rel="noopener noreferrer"
                target="_blank"
            >
                More about this site
                <i className="material-icons ms-1">open_in_new</i>
            </a>
        </div>
        <div className="main-navigation ">
            <ul className="navbar list-inline">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    {/* <a className="nav-link" href="#/">
                        Home
                    </a> */}
                </li>
                <li className="nav-item">
                    <Link to="/resume" className="nav-link">
                        Résumé
                    </Link>
                    {/* <a className="nav-link" href="#/resume">
                        Résumé
                    </a> */}
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                    {/* <a className="nav-link" href="#/portfolio">
                        Portfolio
                    </a> */}
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                    {/* <a className="nav-link" href="#/contact">
                        Contact
                    </a> */}
                </li>
            </ul>
        </div>
    </>
  )
}

export default App
