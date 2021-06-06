import Body from '../_body'
import About from './about.component'
import Team from './team.component'
import Treatment from './treatment.component'

const Home = () => {
    return(
        <Body>
            <article className="row home-contain">
                <article className="banner col-12"/>
            </article>
            <About/>
            <Team/>
            <Treatment/>
        </Body>
    )
}

export default Home