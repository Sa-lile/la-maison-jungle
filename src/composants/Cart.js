import '../styles/Cart.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Cart({ cart, updateCart }) {
	// const monsteraPrice = 8
    // const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)
    
    const total = cart.reduce(
        (accumulator, plantType) => accumulator + plantType.amount * plantType.price, 0
    )
    useEffect(() => {
        document.title = `Total price : ${total}€ d'achats`
    }, [total])

	return isOpen ? (
        <div className='lmj-cart'>
            <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}>
                Fermer
			</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount}, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
                ))}
                {/* <div>
                    Monstera : {monsteraPrice}€
                
                </div>  */}
            <h3>Total : {total}€</h3>
            <button className='vailder-button'onClick={() => updateCart([])}>Valider le panier</button>
            <br></br>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}>
                Ouvrir le Panier

            </button>

        </div>
    )
    
}

export default Cart;
