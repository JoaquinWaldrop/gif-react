import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.data.map((image) => {
    return <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect}/>
  });

  return (
    <ul className="gif-list">{gifItems}</ul>
  );
};

export default GifList;