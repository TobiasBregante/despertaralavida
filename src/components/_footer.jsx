const Footer = () => {
    return(
        <>
        <footer className='row'>
            <article id='ubicacion' className="col-12 col-sm-12 col-lg-12 col-xl-12 contain-map-footer">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.4534591746246!2d-58.54647028488866!3d-34.516737660407884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb09a8b192c87%3A0x70c278ced8a4b1fb!2sSoldado%20de%20Malvinas%201451%20DPTO%204%2C%20B1607DKY%20Villa%20Adelina%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1643929646030!5m2!1ses!2sar"  
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