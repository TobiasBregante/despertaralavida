import Body from '../_body'
import About from './about.component'
import Treatment from './treatment.component'
import { useEffect, useState } from 'react'

const Home = () => {
    return(
        <Body>
            <article className="row home-contain">
                <ul className='address-home-top m-auto col-12 col-sm-12 col-lg-6 col-xl-6'>
                    <li>Ramon Falcon 1679</li>
                    <li>Caballito - CABA</li>
                </ul>
                <ul className='address-home-top col-12 col-sm-12 col-lg-6 col-xl-6'>
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