import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {

	return (
		<div className="lmj-categories">
			<select value={activeCategory} 
              onChange={(e) => setActiveCategory(e.target.value)} 
              className="lmj-categories-select">

				{/* 3 options ('classique', 'extérieur', 'plante grasse') liste  */}
				<option value="">---</option>
				{categories.map((categories) => (
					<option key={categories} value={categories}>
						{categories}
					</option>
				))}
      {/*quand on clique une category, ce sera selectionner cette category */}
			</select>
			<button onClick={() => setActiveCategory('')}>
        Réinitialiser
      </button>
		</div>
	);
}

export default Categories;
