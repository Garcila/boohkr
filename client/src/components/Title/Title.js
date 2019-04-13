import React from 'react';

export default function Title(props) {
  return (
    <div>
      <h1>{props.pageTitle}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
