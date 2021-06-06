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
                        Centro de Tratamiento ambulatorio
                    </h1>
                    <h2 className='mt-5'>
                        Llamanos, sabemos como ayudarte <span className='d-block'>11 3049 7371</span>
                    </h2>
                </article>
            </article>
            <About/>
            <Treatment/>
            <Team/>
        </Body>
    )
}

export default Home