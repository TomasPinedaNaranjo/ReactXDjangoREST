import { Link } from "react-router";


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">CRUD Productos</Link>
                <div>
                    <Link to="/nuevo-producto" className="btn btn-primary">Nuevo Producto</Link>
                </div>
            </div>
        </nav>
    )
}