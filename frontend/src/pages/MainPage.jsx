import Abook from '../component/Abook';
import Banner from '../component/Banner';
import Book from '../component/Book';
import Footer from '../component/Footer';
import Header from '../component/Header';
import NewBook from '../component/NewBook';
import '../css/MainPage.css'
const MainPage = () => {
    return (
        <>
            {/* <Abook/> */}
            <Header/>
            <Banner/>
            <NewBook/>
            <Book/>
            <Footer/>
        </>
    );
}

export default MainPage;