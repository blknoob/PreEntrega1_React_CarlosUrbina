import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <>
      <nav className="nav-extended grey darken-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Sok Cores
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a className="active" href="#">
                Inicio
              </a>
            </li>

            <li className="tab">
              <a href="#">Equipos</a>
            </li>
            <li className="tab">
              <a href="#">Accesorios</a>
            </li>
            <li className="tab">
              <a href="#">Equipamiento</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
