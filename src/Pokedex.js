import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcase: 0,
    };
  }

  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons
          .filter((pokemon) => this.props.pokemons.indexOf(pokemon) === this.state.showcase)
          .map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    );
  }
}

export default Pokedex;
