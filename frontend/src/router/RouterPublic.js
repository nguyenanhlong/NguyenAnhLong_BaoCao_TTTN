import Home from "../Pages/frontend/home";
import Item from "../Pages/frontend/home/Items"
import Detail from "../Pages/frontend/product/Detail";
import AllCategory from "../Pages/frontend/profile/Allcategory";
import Profile from "../Pages/frontend/profile/Profile";
import Orders from "../Pages/frontend/profile/Orders";
import Cart from "../Pages/frontend/cart/Cart";
import Address from "../Pages/frontend/profile/Address";
import Wishlist from "../Pages/frontend/profile/Wishlist";
import Seller from "../Pages/frontend/profile/Seller";
import Setting from "../Pages/frontend/profile/Setting";
import CategoryGridView from "../Pages/frontend/profile/CategoryGridView";
import CategoryListView from "../Pages/frontend/profile/CategoryListView";
import Content from "../Pages/frontend/Content";
import Login from "../Pages/frontend/user/Login";
import Register from "../Pages/frontend/user/Register";
import Contact from "../Pages/frontend/user/Contact";
const RouterPublic =[
    {path: '/', component:Home},
    {path: '/trang-chu', component:Home},
    {path: '/san-pham', component:Item},
    {path: '/product-detail/:slug', component:Detail},
    {path: '/page-profile-main', component:Profile} , 
    {path: '/page-profile-orders', component:Orders}, 
    {path: '/page-shopping-cart', component:Cart}, 
    {path: '/page-profile-address', component:Address}, 
    {path: '/page-profile-wishlist', component:Wishlist}, 
    {path: '/page-profile-seller', component:Seller}, 
    {path: '/page-profile-setting', component:Setting}, 
    {path: '/page-category', component:AllCategory},
    {path: '/page-listing-grid/:parent/:children/:page', component:CategoryGridView},
    {path: '/page-listing-list/:parent/:children/:page', component:CategoryListView},
    {path: '/page-content', component:Content},
    {path: '/page-user-login', component:Login},
    {path: '/page-user-register', component:Register},
    {path: '/lien-he', component:Contact},

]
export default RouterPublic;