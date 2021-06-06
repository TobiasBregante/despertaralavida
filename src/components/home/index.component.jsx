import Body from '../_body'
import About from './about.component'
import Team from './team.component'
import Treatment from './treatment.component'

const Home = () => {
    return(
        <Body>
            <article className="row home-contain">
                <article className="banner col-12"/>
                <article className="col-12">
                    <h1>
                        <i>
                            <strong>
                                Centro de Tratamiento ambulatorio Para la 
                                Recuperación de Enfermedades Crónicas y 
                                Conductas Auto-destructivas
                            </strong>
                        </i>
                    </h1>
                    <h2 className='mt-5'>
                        <i>
                            <strong>
                                Llamanos, sabemos como ayudarte 11 3049 7371
                            </strong>
                        </i>
                    </h2>
                </article>
            </article>
            <About/>
            <Team/>
            <Treatment/>
        </Body>
    )
}

export default Home