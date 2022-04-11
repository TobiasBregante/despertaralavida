import Body from '../_body'
import About from './about.component'
import Treatment from './treatment.component'
import { useEffect, useState } from 'react'

const Home = () => {
    return(
        <Body>
            <article className="row home-contain">
                <ul className='address-home-top col-12 col-sm-12 col-lg-3 col-xl-3'>
                    <li>Sede Caballito - CABA</li>
                    <li>Ramon Falcon <br /> 1679</li>
                </ul>
                <ul className='address-home-top col-12 col-sm-12 col-lg-3 col-xl-3'>
                    <li>Turnos: 11 3049 7371</li>
                </ul>
                <article className="banner col-12 mt-5"/>
                <article className="col-12">
                    <h1>
                        Centro Terapéutico Bioenergético
                    </h1>
                    <h2 className='mt-5'>
                        Llamanos, sabemos como ayudarte <span className='d-block'>11 3049 7371</span>
                    </h2>
                </article>
            </article>
            <About/>
            <Treatment/>
        </Body>
    )
}

export default Home