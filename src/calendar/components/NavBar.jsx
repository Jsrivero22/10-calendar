

export const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-dark px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Antonio
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sing-out-alt"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}
