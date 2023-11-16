import Dashboard from "../Pages/backend/Dashboard";
import BrandUpdate from "../Pages/backend/Brand/BrandUpdate";
import BrandList from "../Pages/backend/Brand/BrandList";
import BrandCreate from "../Pages/backend/Brand/BrandCreate";
import BrandShow from "../Pages/backend/Brand/BrandShow";
import CategoryUpdate from "../Pages/backend/Category/CategoryUpdate";
import CategoryList from "../Pages/backend/Category/CategoryList";
import CategoryCreate from "../Pages/backend/Category/CategoryCreate";
import CategoryShow from "../Pages/backend/Category/CategoryShow";
import ProductCreate from "../Pages/backend/Product/ProductCreate";
import ProductList from "../Pages/backend/Product/ProductList";
import ProductUpdate from "../Pages/backend/Product/ProductUpdate";
import ProductShow from "../Pages/backend/Product/ProductShow";
import SLiderCreate from "../Pages/backend/Slider/SliderCreate";
import SliderList from "../Pages/backend/Slider/SliderList";
import SliderUpdate from "../Pages/backend/Slider/SliderUpdate";
import SliderShow from "../Pages/backend/Slider/SliderShow";
import TopicCreate from "../Pages/backend/Topic/TopicCreate";
import TopicList from "../Pages/backend/Topic/TopicList";
import TopicUpdate from "../Pages/backend/Topic/TopicUpdate";
import TopicShow from "../Pages/backend/Topic/TopicShow";
import ContactList from "../Pages/backend/Contact/ContactList";
import ContactShow from "../Pages/backend/Contact/ContactShow";
import MenuList from "../Pages/backend/Menu/MenuList";
import MenuCreate from "../Pages/backend/Menu/MenuCreate";
import MenuUpdate from "../Pages/backend/Menu/MenuUpdate";
import MenuShow from "../Pages/backend/Menu/MenuShow";
import UserCreate from "../Pages/backend/User/UserCreate";
import UserList from "../Pages/backend/User/UserList";
import UserUpdate from "../Pages/backend/User/UserUpdate";
import UserShow from "../Pages/backend/User/UserShow";
import PostList from "../Pages/backend/Post/PostList";
import PostCreate from "../Pages/backend/Post/PostCreate";
import PostUpdate from "../Pages/backend/Post/PostUpdate";
import PostShow from "../Pages/backend/Post/PostShow";
import ProductSaleCreate from "../Pages/backend/ProductSale/ProductsaleCreate";
import ProductSaleList from "../Pages/backend/ProductSale/ProductsaleList";
import ProductSaleUpdate from "../Pages/backend/ProductSale/ProductsaleUpdate";
import ProductSaleShow from "../Pages/backend/ProductSale/ProductsaleShow";
import LoginAdmin from "../Pages/backend/Admin/LoginAdmin";

const RouterPrivate = [
    {path:'/admin', component:Dashboard},
    

    {path:'/admin/brand', component:BrandList},
    {path:'/admin/brand/create', component:BrandCreate},
    {path:'/admin/brand/update/:id', component:BrandUpdate},
    {path:'/admin/brand/show/:id', component:BrandShow},

    {path:'/admin/category', component:CategoryList},
    {path:'/admin/category/create', component:CategoryCreate},
    {path:'/admin/category/update/:id', component:CategoryUpdate},
    {path:'/admin/category/show/:id', component:CategoryShow},

    {path:'/admin/product', component:ProductList},
    {path:'/admin/product/create', component:ProductCreate},
    {path:'/admin/product/update/:id', component:ProductUpdate},
    {path:'/admin/product/show/:id', component:ProductShow},

    {path:'/admin/productSale', component:ProductSaleList},
    {path:'/admin/productSale/create', component:ProductSaleCreate},
    {path:'/admin/productSale/update/:id', component:ProductSaleUpdate},
    {path:'/admin/productSale/show/:id', component:ProductSaleShow},

    {path:'/admin/slider', component:SliderList},
    {path:'/admin/slider/create', component:SLiderCreate},
    {path:'/admin/slider/update/:id', component:SliderUpdate},
    {path:'/admin/slider/show/:id', component:SliderShow},

    {path:'/admin/topic', component:TopicList},
    {path:'/admin/topic/create', component:TopicCreate},
    {path:'/admin/topic/update/:id', component:TopicUpdate},
    {path:'/admin/topic/show/:id', component:TopicShow},

    {path:'/admin/contact', component:ContactList},
    {path:'/admin/contact/show/:id', component:ContactShow},

    {path:'/admin/menu', component:MenuList},
    {path:'/admin/menu/create', component:MenuCreate},
    {path:'/admin/menu/update/:id', component:MenuUpdate},
    {path:'/admin/menu/show/:id', component:MenuShow},

    {path:'/admin/user', component:UserList},
    {path:'/admin/user/create', component:UserCreate},
    {path:'/admin/user/update/:id', component:UserUpdate},
    {path:'/admin/user/show/:id', component:UserShow},

    {path:'/admin/post', component:PostList},
    {path:'/admin/post/create', component:PostCreate},
    {path:'/admin/post/update/:id', component:PostUpdate},
    {path:'/admin/post/show/:id', component:PostShow},

]
export default RouterPrivate;