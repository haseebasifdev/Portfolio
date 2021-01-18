import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageLazyLoading = (props) => {
  return (
    <LazyLoadImage {...props} />
  )
}

export default ImageLazyLoading
