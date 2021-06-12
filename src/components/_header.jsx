const Header = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return(
        <>
        <header className='row'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/img/slogan.jpeg" alt="Despertar a la Vida"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#tratamiento">Tratamiento</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#equipo">Equipo terapeutico</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#galeria">Galeria</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#ubicacion">Cómo llegar</a>
                        </li>
                        <li className="nav-item">
                            <input 
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5491130497371&text=${queryWpp}`, '_blank')}
                                type="button" 
                                value="Contactar" 
                                className='btn btn-contact'
                            />
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header