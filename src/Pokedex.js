import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcase: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((anterior, _props) => ({
      showcase: anterior.showcase < this.props.pokemons.length - 1 ? anterior.showcase + 1 : 0,
    }));
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          {this.props.pokemons
            .filter((pokemon) => this.props.pokemons.indexOf(pokemon) === this.state.showcase)
            .map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
        <div>
          <button onClick={this.handleClick} >Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
