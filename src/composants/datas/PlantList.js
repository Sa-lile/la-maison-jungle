// import monstera from '../assets/monstera.jpg'
// import lyrata from '../assets/lyrata.jpg'
// import pothos from '../assets/pothos.jpg'
// import succulent from '../assets/succulent.jpg'
// import olivier from '../assets/olivier.jpg'
// import basil from '../assets/basil.jpg'
// import mint from '../assets/mint.jpg'
// import calathea from '../assets/calathea.jpg'
// import cactus from '../assets/cactus.jpg'



// const covers = ['monstera', 'ficus lyrata', 'pothos argenté', 'calathea', 'olivier', 'cactus', 'basilique', 'succulente', 'menthe'];
// const category = ['classique', 'extérieur', 'plante grasse'];

export const plantList = [
    { 
        name: 'Monstera', 
        category: "classique", 
        id: "1", 
        light: 2,  
        water: 3, 
        // cover: monstera, 
        price: 15 
    },
    { 
        name: "Ficus lyrata",
        category: "classique", 
        id: "2",
        light: 3, 
        water: 1, 
        // cover: lyrata, 
        price: 16
    },
    { 
        name: "Pothos Argenté",
        category: "classique",
        id: "3",
        light: 1, 
        water: 2, 
        // cover: pothos, 
        price: 9
    },
    { 
        name: "Calathea", 
        category: "classique", 
        id: "4", 
        light: 1, 
        water: 2, 
        // cover: calathea, 
        price: 16 
    },
    { 
        name: "Olivier", 
        category: "extérieur", 
        id: "5", 
        light: 3, 
        water: 1, 
        // cover: olivier, 
        price: 25 
    },
    { 
        name: "Cactus", 
        category: "plante grasse", 
        id: "6", 
        light: 1, 
        water: 2, 
        // cover: cactus, 
        price: 6 
    },
    { 
        name: "Basilique",
        category: "extérieur", 
        id: "7", 
        light: 2, 
        water: 3, 
        // cover: basil, 
        price: 5 
    },
    { 
        name: "Succulente",
        category: "plante grasse",
        id: "8", 
        light: 2,
        water: 1,
        // cover: succulent,
        price: 8 
    },
    { 
        name: "Menthe", 
        category: "extérieur", 
        id: "9", 
        light: 1, 
        water: 2, 
        // cover: mint, 
        price: 4
    },
	
]

/* 
const plantList = []
let plant_0 = {}
plant_0.name = "Monster"
plant_0.category = "classique"
plant_0.id = "1"
plant_0.isBestSale = "true"
plantList[0] = plant_0
 */

/* 
const plantList = []
let plant_0 = { name: "Monster", category: "classique", id: "1", isBestSale: true }
plantList[0] = plant_0 
*/

/* 
const plantList = []
let plant_0 = { name: "Monster", category: "classique", id: "1", isBestSale: true }
plantList.push(plant_0)
plantList.push(plant_0)
plantList.push(plant_0)
plantList.push(plant_0)
*/


export default plantList;