const Treatment = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return (
        <>
            <article id='tratamiento' className="row contain about-contain">
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <img src="/img/ARBOL DE LA VIDA.jpg" alt="ARBOL DE LA VIDA" />
                </article>
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <h2>Terapia</h2><hr />
                    <p className="mb-4">
                        Nuestra terapia está basada en sesiones individuales, donde a través de la Bioenergía
                        armonizaremos a quien está atravesando estas dolencias y/o comportamientos
                        autodestructivos, soledad, depresión, falta de voluntad, estrés, trastornos de ansiedad,
                        insomnio, generando sanidad a la persona y a todo el contexto familiar. La persona adopta
                        patrones de conducta nuevas, recuperando su vida, transitando un nuevo camino que lo lleva a
                        vivir una vida armoniosa, conectado con la serenidad y un nuevo despertar en su vida.
                    </p>
                    <input
                        onClick={() => window.open(`https://api.whatsapp.com/send?phone=5491130497371&text=${queryWpp}`, '_blank')}
                        type="button"
                        className='btn btn-contact'
                        value='Contactanos'
                    />
                </article>
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <img src="/img/CUBO METATRON.jpg" alt="CUBO METATRON" />
                </article>
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <h2>Dirigido</h2><hr />
                    <p className="mb-4">
                        Nuestra Terapia Bioenergética está dirigida a todas aquellas personas que están transitando 
                        un proceso de vida que dificulta encontrar estabilidad emocional y energética. A través de 
                        nuestra terapia bioenergética allanaran el camino que los llevara a destrabar y limpiar su 
                        sendero. Descubrir sus patrones de conducta que generan bloqueos emocionales afectando la vida cotidiana en tu totalidad, vínculos, recomponiendo relaciones familiares, sociales y laborales, mejorando su calidad de vida.
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

export default Treatment