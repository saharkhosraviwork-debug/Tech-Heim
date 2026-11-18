import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero";
import CategogoryList from "./sections/CategogoryList";
import SalesSection from "./sections/sale-section/SaleSection";
import NewProducts from "./sections/new-products/NewProducts";
import BanerSection from "./sections/baner-section/BanerSection";
import BestSellers from "./sections/best-sellers/BestSellers";
import TopBrands from "./sections/TopBrands";
import OurBlogs from "./sections/blogs/OurBlogs";

export default function LandingPage(){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <CategogoryList/>
            <SalesSection/>
            <NewProducts/>
            <BanerSection/>
            <BestSellers/>
            <TopBrands/>
            <OurBlogs/>
           
            
        </div>
    )
}