import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ search, setSearch, setIsOpen, cartList}) => {

   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
               
                <MdShoppingCart size={21} />
                <span className="title2">{cartList.length}</span>
            </button>
            <form hidden>
               <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
