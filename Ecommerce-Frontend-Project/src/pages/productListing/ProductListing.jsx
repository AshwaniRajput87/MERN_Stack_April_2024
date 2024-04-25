import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Product from '../../components/product/product';
import Loader from '../../components/loader';

import './productListing.css';
import Pagination from '../../components/pagination/Pagination';

const ProductListing = () => {

    const { categoryName } = useParams();

    const url = categoryName
    ? `https://fakestoreapi.com/products/category/${categoryName}`
    : `https://fakestoreapi.com/products`;

    const {data: products, error, isLoading} = useFetchData(url, []);
    console.log(products);

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage; // 1*3 =3 -> on click of next page btn 2 -> 2*3 =
    const indexofFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexofFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length/itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            {
                isLoading ? (
                    <Loader />
                ): (
                    <>
                        <div className="product-list">
                            {
                                currentProducts && currentProducts.map((product)=>{
                                    return <Product key={product.id} product={product}/>   
                                })
                            }
                        </div>
                        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
                    </>
                )
            }
        </div>
    )

}

export default ProductListing;

