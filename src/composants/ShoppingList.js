import { plantList } from '../composants/datas/PlantList';
import { useState } from 'react';
import PlantItem  from './PlantItem';
import '../styles/ShoppingList.css';
import Categories from './Categories';


function ShoppingList({cart, updateCart}) {
	/* reduce() est accumulateur et traite chaque valeur
	 * d'une liste (de la gauche vers la droite)
	 *  forEach() permet d'exéxuter une fonction donnée sur chaque élément du tableau
	 */

	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(accumulator, plant) =>
			accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)
	// ces fonctuions apparîtrent dans le console Pas comme résultat
	// const categories = ['classique', 'extérieur', 'plante grasse'];
	// categories.forEach((category) => console.log(category), []);

	/**
	 *  map() est crée un nouveau tableau avec les résultats
	 *  de l'appel d'une fonction fournie
	 *  key() est revoie un nouvel objet Array Iterator qui contient
	 *  les clefs pour chaque indice du tableau
	 */


	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant)=> plant.name === name)
		if(currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) =>plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, { name, price, amount: 1}])
		}

	}
	
	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			{/* <ul>
				{categories.map((categories) => (
					<li key={categories}>{categories}</li>
				))}
			</ul> */}

			<ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem 
						cover={cover} 
						name={name} 
						water={water} 
						light={light} 
						price={price}
						/>
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
		</div>
	)
}
	// 	{/* <ul>
		// 		{plantList.map((plant, index) => (
		// 			<li id={'name_' + index} key={'name_' + index}>
		// 				<div>
		// 					{plant.id}:{plant.name}
		// 				</div>
		// 			</li>
		// 		))}
		// 	</ul> */}

		// {/* "props" ne functionne pas ....?? même j'ai changé PlanItems*/}
		// 	{/* <ul className="lmj-plant-list">
		// 		{plantList.map(({ props }) => (
		// 			<PlantItem 
		// 			id={props.id} 
		// 			cover={props.cover} 
		// 			name={props.name} 
		// 			light={props.light} 
		// 			water={props.water}
		// 			 />
		// 		))}
		// 	</ul> */}
	


	export default ShoppingList;

		