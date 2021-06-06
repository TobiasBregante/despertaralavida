const Footer = () => {
    return(
        <>
        <footer className='row'>
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <ul>
                    <li>
                    <img src="/img/slogan.jpeg" className='brand-footer' alt="Despertar a la Vida"/>
                    </li>
                    <li>Copyright &copy; reserved { (new Date()).getFullYear() } www.Despertaralavida.com.ar |</li>
                    <li>Buenos Aires - Argentina |</li>
                    <li>Llamanos, sabemos como ayudarte 11 3049 7371 |</li>
                    <li>Despertar a la Vida |</li>
                    <li>    
                        Centro de Tratamiento Ambulatorio para la Recuperación de enfermedades crónicas y conductas autodestructivas
                        Tratamientos cortos |
                    </li>
                    <li>Cupos limitados |</li>
                    <li>Tratamientos personalizados |</li>
                    <li>Absoluta confidencialidad |</li>
                    <li>Powered by <a href={`https://nezzed.com?refered=${window.location.hostname}`} className='text-light' target="_blank" rel="noopener noreferrer">Nezzed IT Solutions</a></li>
                </ul>
            </article>
        </footer>
        </>
    )
}

export default Footer