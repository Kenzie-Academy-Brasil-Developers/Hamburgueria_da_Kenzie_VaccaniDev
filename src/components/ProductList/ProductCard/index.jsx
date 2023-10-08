import styles from "./style.module.scss"

export const ProductCard = ({ product, setCartList, addCartList }) => {

    return(
        <li className={styles.li}>
            <img className="image" src={product.img} alt={product.name} />
            <div>
                <h3 className="title1">{product.name}</h3>
                <span className="paragraph">{product.category}</span>
                <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="title2" onClick={() => addCartList(product)}>Adicionar</button>
            </div>
        </li>
    )
}