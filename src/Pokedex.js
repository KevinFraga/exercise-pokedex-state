import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcase: 0,
      type: 'Fire',
    };
    this.handleClick = this.handleClick.bind(this);
    this.fireClick = this.fireClick.bind(this);
    this.psychicClick = this.psychicClick.bind(this);
  }

  handleClick = () => {
    this.setState((anterior, _props) => ({
      showcase:
        anterior.showcase <
        this.props.pokemons.filter(
          (pokemon) => pokemon.type === this.state.type
        ).length -
          1
          ? anterior.showcase + 1
          : 0,
    }));
  };

  fireClick() {
    this.setState({
      type: 'Fire',
    });
  }

  psychicClick() {
    this.setState({
      type: 'Psychic',
    });
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          {this.props.pokemons
            .filter((pokemon) => pokemon.type === this.state.type)
            .filter(
              (pokemon) =>
                this.props.pokemons
                  .filter((pokemon) => pokemon.type === this.state.type)
                  .indexOf(pokemon) === this.state.showcase
            )
            .map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
        <div>
          <button onClick={this.handleClick}>Próximo Pokemon</button>
        </div>
        <div>
          <button onClick={this.fireClick}>Fire</button>
          <button onClick={this.psychicClick}>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
