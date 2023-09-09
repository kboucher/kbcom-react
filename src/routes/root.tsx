import { Link, Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <Outlet />
      <div className="main-navigation">
        <ul className="navbar list-inline">
          <li className="nav-item">
            <Link
              to="/resume"
              className="nav-link"
            >
              Résumé
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
