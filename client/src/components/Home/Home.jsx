import { useEffect, useContext, useState } from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import {getFirestore, collection, addDoc, doc, getDocs, getDoc, query, where} from 'firebase/firestore';
import app1 from "../../utils/firebase";

const fs = getFirestore(app1);

const Home = () => {
    const{categories, setCategories, products, setProducts} = useContext(Context);
    // const[] = useState([]);


    // const productsArray = [];
    
    // const getProducts = async () => {
    //     const querySnapshot = await getDocs(collection(fs, "product"));
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // // console.log(doc.id, " => ", doc.data());
    // productsArray.push({
    //     ...doc.data()
    // })
    // });
    // }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return <div>
                <Banner/>
                <div className="main-content">
                    <div className="layout">
                        <Category categories={categories}/>
                        <Products products= {products} 
                        headingText="Popular Products"/>
                    </div>
                </div> 
            </div>;
};

export default Home;
