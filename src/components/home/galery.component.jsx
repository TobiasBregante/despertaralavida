import CardImg from './cardImg.component'

const Galery = ({ galeryData }) => {
    return(
        <>
        <article id='galeria' className="contain about-contain galery-contain row">
            <h2>Galería</h2><hr />
            {
                galeryData ? galeryData.map((element, index) => <CardImg 
                    title={ element.title } 
                    img={ element.img }
                    key={ index }
                />)
                : <p>No hay imágenes en la galería aún</p>
            }
        </article>
        </>
    )
}

export default Galery