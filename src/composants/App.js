import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useEffect, useState } from 'react';
// import Recommendation from './Recommendation'

function App() {
	
	/** ???  Je ne comprends pas ou je dois verifier ??*/
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart):[])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	})

	// const [isFooterShown, updateIsFooterShown] = useState([])

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
			<Footer cart={cart} />

			
			{/* TEST */}
			
			{/* <PlantItem id = '1' name = 'Monstra'  />     */}
			{/* <Recommendation /> */}
		</div>
	);
}

export default App;
