const About = () => {
    const queryWpp = `Hola! Tengo interés en sus servicios.`
    return (
        <>
            <article id='nosotros' className="row contain about-contain">
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <img src="/img/radiestecia.jpg" alt="Radiestecia" />
                </article>
                <article className="col-12 col-sm-12 col-lg-6 col-xl-6 mb-4">
                    <h2>Nuestra comunidad</h2><hr />
                    <p className="mb-4">
                        <u><i>Despertar a la Vida</i></u> es un centro de tratamiento Individual bioenergetico.
                        Por medio de la Radiestesia y Bioenergía, técnica de medición energética, se detectan los
                        orígenes que afectan a la persona, que lo llevan a tener comportamientos autodestructivos.
                        Enfermedades obsesivas y compulsivas, dolores permanentes de cabeza, cansancio, falta de
                        voluntad, desgano, energías nocivas, depresión, trastorno de ansiedad, desgano, insomnio, que
                        generan un círculo vicioso que lo lleva a la autodestrucción, malestar y/o perdida de sus
                        vínculos, relaciones, parejas, familia, hijos, trabajo, etc.
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