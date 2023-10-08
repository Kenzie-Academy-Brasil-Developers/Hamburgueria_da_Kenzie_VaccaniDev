import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, removeCardList, setIsOpen, removeCard }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.modal}>
         <div className={styles.headerModal}>
            <h2 className="modalTitle">Carrinho de compras</h2>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.ulModal}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeCardList={removeCardList}/>
               ))}
            </ul>
         </div>
         <div className={styles.footerModal}>
            <div>
               <span className="title1">Total</span>
               <span className="paragraph">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button onClick={() => removeCard()} className="title2">Remover todos</button>
         </div>
      </div>
   );
};
