import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Banner = () => {
    async function getProduct(db) {
        const productCol = collection(db, 'product');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        return productList;
      }
    
      console.log(getProduct);
    return <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                    You love your headphones, we geddit! But finding the perfect headphones today can be as difficult as finding a needle in a haystack, 
                    especially if you are not familiar with all the technology that comes with it. 
                    we know you still buy it solely on the basis of how slick it looks and how powerful the sound is.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={()=> window.scrollTo(0,5000)}>Read More</div>
                        <div className="banner-cta v2" onClick={()=> window.scrollTo(0,500)}>Shop Now</div> 
                    </div>
                </div>
                <img className="banner-img" src = {BannerImg} alt = "" />
            </div> 
           </div>
};

export default Banner;
