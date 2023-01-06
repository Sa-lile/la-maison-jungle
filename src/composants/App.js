import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import {useState } from 'react';
// import Recommendation from './Recommendation'

function App() {
	
	const [cart, updateCart] = useState([])
	// const [isFooterShown, updateIsFooterShown] = useState([])

	/*localStorage permet de garder des objets dans le navigator, on ne voit pas juste dans le localStroge,
	/*le client aussi le voit, ce n'est pas bon
    */
   
	// const savedCart = localStorage.getItem('cart')
	// const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart):[])
	// useEffect(() => {
	// 	localStorage.setItem('cart', JSON.stringify(cart))
	// })

	return (
		<div>
			<Banner />

			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			{/* <button onClick={() => updateIsFooterShown(!isFooterShown)}>
				Cacher !
			</button> */}
			{/* {isFooterShown && <Footer cart={cart} />} */}
			{/* <Categories /> */}
			<Footer cart={cart} />
			
			{/* TEST */}
			
			{/* <PlantItem id = '1' name = 'Monstra'  />     */}
			{/* <Recommendation /> */}
		</div>
	);
}

export default App;
