

export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="text-white">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        Francisco
      </span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  )
}
