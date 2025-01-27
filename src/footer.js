import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Library Management App | جميع الحقوق محفوظة
        </p>
      </footer>
    );
  }
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;