const Team = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return(
        <>
        <article id='equipo' className="row contain about-contain team-contain">
            <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                <img src="/img/team.jpg" alt="Team" />
            </article>
            <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                <h2>Equipo Terapeutico</h2><hr />
                <ul>
                    <li className="mb-4">Psiquiatra</li>
                    <li className="mb-4">Psicólogos</li>
                    <li className="mb-4">Consejeros en dependencias químicas</li>
                    <li className="mb-4">Terapeutas especializados en Co-dependencia</li>
                </ul>
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
 
 export default Team