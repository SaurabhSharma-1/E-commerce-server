import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import {getDatabase, ref, set} from "firebase/database";
import {getFirestore, collection, addDoc, doc, getDocs, getDoc, query, where} from 'firebase/firestore';
import app1 from "./utils/firebase";

const fs = getFirestore(app1);

function App() {

    // const [products, setProducts] = useState([]);

    // const getProducts = async () => {
    //     const products = await fs.collection('product').get();
    //     console.log(products);
    //     // const productsArray = [];
    //     // for(var snap of products.docs){
    //     //     var data = snap.id;
    //     //     productsArray.push({
    //     //         ...data
    //     //     })
    //     //     if(productsArray.length === products.docs.length){
    //     //         setProducts(productsArray);
    //     //     }
    //     // }
    // }
    // // useEffect(()=>{
    // //     getProducts();
    // // },[])

    const productsArray = [];
    const getProducts = async () => {
    const querySnapshot = await getDocs(collection(fs, "product"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
    }


    const getDocument = async () => {
        const ref = doc(fs, "product", "E2NsPKrlVmu0TZh8uNGi");
        const snap = await getDoc(ref);

        console.log(snap.data());
    }
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <button onClick={getDocument}> Dikha</button>
                <button onClick={getProducts}> Aur Dikha</button>
                <Routes>
                    <Route path="/" element={<Home/>} />;
                    <Route path="/category/:id" element={<Category />} />;
                    <Route path="/product/:id" element={<SingleProduct />} />;
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
