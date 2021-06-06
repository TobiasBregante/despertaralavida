const About = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return(
        <>
        <article id='nosotros' className="row contain about-contain">
            <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                <img src="/img/friends.jpg" alt="Friends" />
            </article>
            <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                <h2>Nuestra comunidad</h2><hr />
                <p className="mb-4">
                    <u><i>Despertar a la Vida</i></u> es un Centro de 
                        Tratamiento Ambulatorio basado en el Modelo 
                        Minnesota. Compuesta por un equipo interdisciplinario 
                        integrado por Profesionales especializados en conductas 
                        autodestructivas humanas.
                </p>
                <p className='mb-4'>  
                        Si el paciente lo requiere y de ser necesario, contamos 
                        con 4 Casas de Internación ubicadas en zona norte, las 
                        cuales en común acuerdo con el paciente y su grupo familiar 
                        generamos la derivación. De la misma manera nuestros tratamientos 
                        residenciales están basados en el Modelo Minnesota, contando con 
                        todas las comodidades necesarias.
                </p>
                <input
                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5491130497371&text=${queryWpp}`, '_blank')} 
                    type="button" 
                    className='btn btn-contact'
                    value='Contactanos'
                />
            </article>
        </article>
        </>
    ) 
}

export default About