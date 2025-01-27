import React, { Component } from 'react';

class Main extends Component {
  render() {
    const initState = {
      books: [
        {
          id: 1,
          title: "مقدمة ابن خلدون",
          author: "ابن خلدون",
          isbn: "1289499030",
        },
        {
          id: 2,
          title: "الحاوي في الطب",
          author: "أبو بكر الرازي",
          isbn: "893847239479",
        },
        {
          id: 3,
          title: "ألف ليلة وليلة",
          author: "غير معروف",
          isbn: "129384758349",
        },
      ],
    };

    return (
      <main style={styles.main}>
        <h1 style={styles.header}>قائمة الكتب</h1>
        <div style={styles.cardContainer}>
          {initState.books.map((book) => (
            <div key={book.id} style={styles.card}>
              <h3 style={styles.title}>{book.title}</h3>
              <p style={styles.text}>
                <strong>المؤلف:</strong> {book.author}
              </p>
              <p style={styles.text}>
                <strong>ISBN:</strong> {book.isbn}
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

const styles = {
  main: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#444',
  },
  text: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Main;
