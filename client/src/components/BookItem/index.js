import React from 'react';

export default function BookItem() {
  return (
    <div>
      <h3>Book Title</h3>
      <h4>Blurb</h4>
      <p>Author</p>
      <div>
        <img src='' alt='book image' />
        <p>book description</p>
        <button>View</button>
        <button>Save</button>
      </div>
    </div>
  );
}
