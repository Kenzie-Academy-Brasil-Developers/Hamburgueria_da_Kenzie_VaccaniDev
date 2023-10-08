import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeCardList }) => {
   return (
      <li className={styles.li}>
         <div className={styles.divProduct}>
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className="title1">{product.name}</h3>
               <h3 className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</h3>
            </div>
         </div>
         <button onClick={() => removeCardList(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
