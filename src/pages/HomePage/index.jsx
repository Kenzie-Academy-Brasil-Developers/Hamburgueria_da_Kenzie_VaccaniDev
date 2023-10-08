import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { useEffect } from "react";
import "../../styles/index.scss"

export const HomePage = () => {
   const localCartList = localStorage.getItem("@CARDLIST");
   const [search, setSearch] = useState("");
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const timeout = setTimeout(() => {

         const getProducts = async () => {
            try {
               const { data } = await api.get("/products", { params: { search } });
               setProductList(data);
            } catch (error) {
               console.log(error);
            }
         };
         getProducts();
      }, 500);
      return () => clearTimeout(timeout)
   }, [search])

   useEffect(() => {
      localStorage.setItem("@CARDLIST", JSON.stringify(cartList))
   }, [cartList])

   const addCartList = (product) => {
      if (!cartList.some(prod => prod.id === product.id)) {
         setCartList([...cartList, product]);
      } else {
         alert("Produto já adicionado!");
      }
   };

   const removeCardList = (productId) => {
      const newCardList = cartList.filter(prod => prod.id !== productId);
      setCartList(newCardList);
   }

   const removeCard = () => {
      setCartList([]);
   }
   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header search={search} setSearch={setSearch} setIsOpen={setIsOpen} cartList={cartList}/>
         <main>
            <ProductList productList={productList} setCartList={setCartList} addCartList={addCartList} />
            {isOpen ? <CartModal cartList={cartList} removeCardList={removeCardList} setIsOpen={setIsOpen} removeCard={removeCard}/> : null}
         </main>
      </>
   );
};
