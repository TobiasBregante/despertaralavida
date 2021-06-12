import { useState } from "react"

const CardImg = ({ img, title }) => {
    const [openCard, setOpenCard] = useState('')

    const handlerSwitchOpen = () => openCard === '' ? setOpenCard('openImgGalery') : setOpenCard('')
    
    return(
        <article  
            onClick={ handlerSwitchOpen }
            className={`card col-12 col-sm-12 col-lg-10 col-xl-3 ${openCard}`}>
            <img src={ img } className="card-img-top" alt={ title } />
        </article>
    )
}

export default CardImg