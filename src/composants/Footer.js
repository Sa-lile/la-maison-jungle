import { useState } from 'react';
import'../styles/Footer.css';

function Footer({ cart }) {
	const [inputValue, setInputValue] = useState('');


	// useEffect(() => {
	// 	console.log(` Cette alerte s'affcihe à chaque rendu `)
	// })

	// useEffect(() => {
	// 	console.log(` Cette alerte s'affcihe au première rendu `)
	// },[])

	// useEffect(() => {
	// 	console.log(` Cette alerte s'affcihe la prémière fois et quand mon panier est mis à jour `)
	// }, [cart])

	// useEffect(() => {
	// 	return () =>
	// 	console.log(` Cette alerte s'affcihe à chaque render `)
	// })


	function handleInput(e) {
		setInputValue(e.target.value);
	}
     
	/* j'ai caché en ce moment car ça affice chaque fois */
	// function handleBlur() {
	// 	if (!inputValue.includes('@')) {
	// 		alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
	// 	}
	// }
    
	return (
		<footer className=".lmj-footer ">
			<div 
            className="lmj-footer-elem">Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
			<div 
            className="lmj-footer-elem">Laissez-nous votre mail :
            </div>
			<input
				placeholder = "Entrez votre mail" 
                onChange ={handleInput}
				value={inputValue}
				// onBlur={handleBlur}
			/>
		</footer>
	)
}
export default Footer;
