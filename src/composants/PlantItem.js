import '../styles/PlantItem.css';
import CareScale from './CareScale';


// function handleClick(plantName) {
// 	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
// }

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
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




// export default PlantItem;
