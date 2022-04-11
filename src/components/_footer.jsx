const Footer = () => {
    return(
        <>
        <footer className='row'>
            <article id='ubicacion' className="col-12 col-sm-12 col-lg-12 col-xl-12 contain-map-footer">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55381.06275169519!2d-58.471098132654454!3d-34.63197609074281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca2f93ea9acf%3A0x9346468bfd95837b!2sCnel.%20Ram%C3%B3n%20L.%20Falc%C3%B3n%201679%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1649715466129!5m2!1ses-419!2sar"  
                    allowFullScreen 
                    loading="lazy" />
            </article>
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
                        Centro Terapeutico Bioenergetico  para la Recuperación de energías saludables que ayuden a 
                        enfermedades crónicas, y conductas autodestructivas |
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