import Header from './_header'
import Footer from './_footer'

const Body = ({ children, navigation }) => {
    return(
        <>
        <Header/>
        { children }
        <Footer/>
        </>
    )
}

export default Body