// all the routes over here 
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";
console.log(import.meta.env);
const  urlConfig = {
    CATEGORIES_URL: BASE_URL + "/api/product/categories",
    LOGIN_URL: BASE_URL + "/api/auth/login",
    SIGNUP_URL: BASE_URL + "/api/auth/signup",
    ALL_PRODUCT_URL: BASE_URL + "/api/product",
    ORDR_URL: BASE_URL + "/api/booking"
}


export default urlConfig;