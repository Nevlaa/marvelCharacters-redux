import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCharacters } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: () => dispatch(requestCharacters())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestCharacters();
  }

  render() {
    const { characters, searchField, onSearchChange, isPending } = this.props;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="f1">Marvel Friends</h1>
        <p>
          Data provided by <a href="http://marvel.com" target="blank" style={{color:"white", textDecoration:" none"}}>Marvel.</a> © 2021 MARVEL
        </p>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList characters={filteredCharacters} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
