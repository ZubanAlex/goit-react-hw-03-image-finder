import React, { Component } from "react";
import styles from "./Searchbar.module.css";

import T from "prop-types";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired
  };

  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);

    this.setState({
      value: ""
    });
  };

  render() {
    const { value } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
