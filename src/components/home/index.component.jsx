import Body from '../_body'
import About from './about.component'
import Team from './team.component'
import Treatment from './treatment.component'
import Galery from './galery.component'
import { useEffect, useState } from 'react'

const Home = () => {
    const [galeryList, setGaleryList] = useState([])

    useEffect(() => {
        const galeryPhotos = [
            {
                title: 'Nuestra sede',
                img: '/img/office/office2.jpeg'
            },
            {
                title: 'Nuestra sede',
                img: '/img/office/office1.jpeg'
            },
            {
                title: 'Nuestra sede',
                img: '/img/office/office4.jpeg'
            },
            {
                title: 'Nuestra sede',
                img: '/img/office/office3.jpeg'
            },
            {
                title: 'Nuestra sede',
                img: '/img/office/office5.jpeg'
            }
        ]
        setGaleryList(galeryPhotos)
    }, [])

    return(
        <Body>
            <article className="row home-contain">
                <ul className='address-home-top col-12 col-sm-12 col-lg-3 col-xl-3'>
                    <li>Sede Villa Adelina</li>
                    <li>Soldado De Malvinas <br /> 1451 - DPTO 4</li>
                </ul>
                <ul className='address-home-top col-12 col-sm-12 col-lg-3 col-xl-3'>
                    <li>Urgencias 24hs</li>
                    <li>11 3049 7371</li>
                </ul>
                <ul className='address-home-top covid-top col-12 col-sm-12 col-lg-3 col-xl-3'>
                    <li>Nuestro centro cumple con todos los protocolos <span className='bg-success'>Covid-19</span></li>
                </ul>
                <article className="banner col-12 mt-5"/>
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
            <Galery galeryData={ galeryList }/>
        </Body>
    )
}

export default Home