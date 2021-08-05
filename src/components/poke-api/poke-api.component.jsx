import { Component } from 'react';
import axios from 'axios';
import PokeCard from './poke-card.component';

class PokeApi extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then((response) => {
                this.setState({ pokemons: response.data.results })
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' alt='pokemon_logo' />
                <div>
                    {
                        this.state.pokemons.map((pokemon, index) => {

                            return (

                                <PokeCard name={pokemon.name} number={index + 1} key={index} />

                            )
                        })
                    }
                </div>
            </div >
        );
    }

}

export default PokeApi;