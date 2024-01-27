//
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={this.props.onLoadMore}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
