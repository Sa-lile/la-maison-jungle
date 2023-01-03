import { useEffect, useState } from 'react';
import'../styles/Footer.css';

function Footer() {
	const [inputValue, setInputValue] = useState('');


	useEffect(() => {
		console.log(` Cette alerte s'affcihe à chaque rendu `)
	})

	// useEffect(() => {
	// 	console.log(` Cette alerte s'affcihe au première fo `)
	// },[])

	// useEffect(() => {
	// 	console.log(` Cette alerte s'affcihe à chaque render `)
	// }, [cart])

	// useEffect(() => {
	// 	return () =>
	// 	console.log(` Cette alerte s'affcihe à chaque render `)
	// })


	function handleInput(e) {
		setInputValue(e.target.value);
	}
    
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
			
			/>
		</footer>
	)
}
export default Footer;
