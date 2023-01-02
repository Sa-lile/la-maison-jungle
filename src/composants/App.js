import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
// import Recommendation from './Recommendation'

function App() {
	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />


			{/* TEST */}
			{/* <PlantItem id = '1' name = 'Monstra'  />     */}
			{/* <Recommendation /> */}
		</div>
	);
}

export default App;
