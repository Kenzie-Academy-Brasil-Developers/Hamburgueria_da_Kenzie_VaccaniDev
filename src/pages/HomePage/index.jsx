import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { useEffect } from "react";
import "../../styles/index.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const HomePage = () => {
   const localCartList = localStorage.getItem("@CARDLIST");
   const [search, setSearch] = useState("");
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await api.get("products");
         setProductList(data);
      }
      getProducts();
   }, [])

   useEffect(() => {
      localStorage.setItem("@CARDLIST", JSON.stringify(cartList))
   }, [cartList])

   const addCartList = (product) => {
      if (!cartList.some(prod => prod.id === product.id)) {
         setCartList([...cartList, product]);
      } else {
         toast.error("Produto já adicionado!");
      }
   };

   const removeCardList = (productId) => {
      const newCardList = cartList.filter(prod => prod.id !== productId);
      setCartList(newCardList);
   }

   const removeCard = () => {
      setCartList([]);
   }

   return (
      <>
         <Header search={search} setSearch={setSearch} setIsOpen={setIsOpen} cartList={cartList} />
         <main>
            <ProductList productList={productList} setCartList={setCartList} addCartList={addCartList} />
            {isOpen ? <CartModal cartList={cartList} removeCardList={removeCardList} setIsOpen={setIsOpen} removeCard={removeCard} /> : null}
         </main>
      </>
   );
};
