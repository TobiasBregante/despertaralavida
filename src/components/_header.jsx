const Header = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return(
        <>
        <header className='row'>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/img/slogan.jpeg" alt="Despertar a la Vida"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#tratamiento">Tratamiento</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#equipo">Equipo terapeutico</a>
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