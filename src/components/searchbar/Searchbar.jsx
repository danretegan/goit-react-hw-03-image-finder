import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './searchForm/SearchForm';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: this.props.defaultQuery || '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  getCurrentQuery = () => {
    return this.state.query;
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          query={query}
        />
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  defaultQuery: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
