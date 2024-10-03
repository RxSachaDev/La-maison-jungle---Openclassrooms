import "../styles/Cart.css"

function Cart(){
    const prixMonstera = 8
    const prixLierre = 10 
    const prixBouquet = 15  

    return <div className="lmj-cart">
                <ul>
                    <li>Monstera: {prixMonstera}€</li>
                    <li>Lierre: {prixLierre}€</li>
                    <li>Bouquet de fleurs: {prixBouquet}€</li>
                </ul>
                <p>TOTAL = { prixBouquet + prixLierre + prixMonstera }€</p>
            </div>
}
export default Cart