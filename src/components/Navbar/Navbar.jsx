
import Link from "next/link";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div className="container">
      <Link className="navbar-brand" href="/">
        <img src="/images/logo.png" alt="logo image" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href ="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">
              Services
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" href="/contact-us">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about-us">
              About Us
            </Link>
          </li>
        </ul>
        <button type="button" className="rounded-pill btn-rounded">
          +1 728365413
          <span>
            <i className="fas fa-phone-alt" />
          </span>
        </button>
      </div>
    </div>
  </nav>
  
};

export default Navbar;