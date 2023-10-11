import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, setCartList, addCartList }) => {
   return (
      <ul className={styles.ul}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setCartList={setCartList} addCartList={addCartList}/>
         ))}
      </ul>
   );
};
