// const names = ['Monster', 'Ficus Lyrata', 'Pothos Argenté', 'Calathea', 'Olivier', 'Cactus', 'Basilique', 'Succulente', 'Menthe'];
// const category = ['classique', 'extérieur', 'plante grasse'];

const plantList = [
    { name: "Monster", category: "classique", id: "1", isBestSale: true },
    { name: "Ficus Lyrata", category: "classique", id: "2", isBestSale: true },
    { name: "Pothos Argenté", category: "classique", id: "3", isBestSale: false },
    { name: "Calathea", category: "classique", id: "4", isBestSale: false },
    { name: "Olivier", category: "extérieur", id: "5", isBestSale:  true },
    { name: "Cactus", category: "plante grasse", id: "6", isBestSale:  true },
    { name: "Basilique", category: "extérieur", id: "6", isBestSale:  true },
    { name: "Succulente", category: "plante grasse", id: "6", isBestSale: false },
    { name: "Menthe", category: "extérieur", id: "6", isBestSale:  true },

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