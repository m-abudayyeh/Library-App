import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Library Management App</h1>
      </header>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
};

export default Header;