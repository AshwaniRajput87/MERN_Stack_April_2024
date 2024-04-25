import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import NotFound from '../pages/notFound/NotFound';
// import Loader from '../components/loader';
import useFetchData from '../hooks/useFetchData';
import ProductListing from '../pages/productListing/ProductListing';
import CartItems from '../pages/cartItems/CartItems';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import urlConfig from '../utils/urlConfig';
import useAuth from '../context/auth/useAuth';
const AppRoutes = () => {

  const {data: categories, error, isLoading } = useFetchData('https://fakestoreapi.com/products/categories', []);

  console.log(categories);

  return (
      <>
      
      {/* <Loader /> */}
        <Router>
          
            {/* { user && user.length ? <Header categories={categories.data} isLoading={isLoading}/> : <></>}  */}
            <Header categories={categories} isLoading={isLoading}/>
            <Routes>
                <Route path='/' element={<ProductListing />} />
                <Route path='/cart' element={<CartItems />} />
                <Route  path='/products/:categoryName' element={<ProductListing />}/>
                <Route path='*' element={<NotFound />} />
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </Router>
      </>
  )

}

export default AppRoutes;