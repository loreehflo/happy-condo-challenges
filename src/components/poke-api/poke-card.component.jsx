import './poke-api.styles.css';

function PokeCard(props) {
    return (

        <div className='cards'>
            <div className='pokemonImage'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.number}.png`} alt={props.name} />
            </div>
            <div className='pokemonName'>{props.name}</div>
            <div className='pokemonNumber'>{props.number}</div>
        </div>
    );
}

export default PokeCard;