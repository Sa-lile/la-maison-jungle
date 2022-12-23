// const names = ['Monster', 'Ficus Lyrata', 'Pothos Argenté', 'Calathea', 'Olivier', 'Cactus', 'Basilique', 'Succulente', 'Menthe'];
// const category = ['classique', 'extérieur', 'plante grasse'];

const plantList = [
    { name: "Monstera", category: "classique", id: "1", light: 2,  water: 3, cover: "monstera" },
    { name: "Ficus Lyrata", category: "classique", id: "2",light: 3, water: 1, cover: "monstera"},
    { name: "Pothos Argenté", category: "classique", id: "3",light: 1, water: 2, cover: "monstera" },
    { name: "Calathea", category: "classique", id: "4", light: 1, water: 2, cover: "monstera" },
    { name: "Olivier", category: "extérieur", id: "5", light: 3, water: 1, cover: "monstera" },
    { name: "Cactus", category: "plante grasse", id: "6", light: 1, water: 2, cover: "monstera" },
    { name: "Basilique", category: "extérieur", id: "7", light: 2, water: 3, cover: "monstera" },
    { name: "Succulente", category: "plante grasse", id: "8", light: 2, water: 1, cover: "monstera" },
    { name: "Menthe", category: "extérieur", id: "9", light: 1, water: 2, cover: "monstera" },
	
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

export { plantList }