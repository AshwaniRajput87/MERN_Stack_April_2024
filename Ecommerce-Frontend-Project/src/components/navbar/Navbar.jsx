import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import './navbar.css'
import Loader from '../loader';
import { useCart } from '../../context/cart/useCart';

const Navbar = ({categories, isLoading}) => {

    const { totalQuantity } = useCart();

    return(
        <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    {isLoading && <Loader />}

                    {
                      categories && categories.length > 0 ? categories.map((item, idx)=>{

                        return (
                            <li className='nav-item' key={idx+1}>
                                <NavLink 
                                    to={`/products/${item}`}
                                    className="nav-link">{item}
                                </NavLink>
                            </li>
                        ) 
                      }) : <></>
                    }
                </ul>
            </div>
            <div className='nav-right'>
                <Link to="/cart" className="cart-icon-container">
                    <FaOpencart className="cart-icon" />
                    {totalQuantity ? <div className='cart-badge'>{totalQuantity}</div> : <></>}
                </Link>
            </div>
        </nav>
    )
}

export default memo(Navbar);