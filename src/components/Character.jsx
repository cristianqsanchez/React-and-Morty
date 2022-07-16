function Character({ character }) {
	return (
		<div className="text-center p-5">
			<img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
			<h5 className="card-title">{character.name}</h5>
      <p className="card-text">{character.origin.name}</p>
		</div>
	)
}

export default Character
