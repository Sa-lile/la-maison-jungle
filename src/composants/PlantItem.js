import '../styles/PlantItem.css';
import CareScale from './CareScale';


function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem





// function handleClick(props) {
//     console.log('✨ Ceci est un clic ✨')
   
// 	<li className='lmj-plant-item' onClick={handleClick(name)}>
//     <img className='lmj-plant-item-cover' src={cover} alt={`${props.name} cover`} />
//     {props.name}
//     <div>
//         <CareScale careType='water' scaleValue={water} />
//         <CareScale careType='light' scaleValue={light} />
//     </div>
//     </li>
// }


// function PlantItem (props) {
// 	console.log(props);

// 	return (
// 		<div>
// 			{props.id}
// 			{props.cover}
// 			{props.name}
// 			{props.light}
// 			{props.water}
// 		</div>
// 	);
	
// };



// export default PlantItem;
