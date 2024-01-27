// components/searchbar/searchForm/SearchForm.jsx
import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  render() {
    const { onSubmit, onChange, query } = this.props;

    return (
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
        />
      </form>
    );
  }
}

export default SearchForm;
