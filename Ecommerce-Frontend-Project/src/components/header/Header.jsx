import Navbar from "../navbar/Navbar";
import './header.css';

const Header = ({ categories, isLoading}) => {
    return (
        <>
          <header className="header">
            <Navbar categories= {categories} isLoading={isLoading}/>
          </header> 
        </>
    )
}

export default Header;