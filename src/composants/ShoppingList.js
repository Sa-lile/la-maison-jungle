import { plantList } from './datas/PantList';

function ShoppingList() {
	/* reduce() est accumulateur et traite chaque valeur
	 * d'une liste (de la gauche vers la droite)
	 *  forEach() permet d'exéxuter une fonction donnée sur chaque élélent du tableau
	 *
	 */
	
	 
	//   const category = ['classique', 'extérieur', 'plante grasse']
	//   const category = plantList.forEach(plantList.array.category, id => {
	// 	  console.log (category,[]);
	//  });

	/**
	 *  map() est crée un nouveau tableau avec les résultats
	 *  de l'appel d'une fonction fournie
	 *  key() est revoie un nouvel objet Array Iterator qui contient
	 *  les clefs pour chaque indice du tableau
	 */
	return (
		<div>
			<ul>
				{plantList.map((plant, index) => (
					<li id={'name_' + index} key={'name_' + index}>
						<div>{plant.id}: {plant.name}: {plant.category}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
