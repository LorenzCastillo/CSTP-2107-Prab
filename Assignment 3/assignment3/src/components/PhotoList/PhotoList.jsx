/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import PhotoContext from '../../context/PhotoContext';
import PhotoCard from '../PhotoCard/PhotoCard'
import './PhotoList.css';

const PhotoList = (props) => {
  const { photosData } = useContext(PhotoContext);
  return (
    <div className="photo-container">
  
    {props.isFavoritesPage ? (
        photosData.map((data) => {
          if (data.isFavorite) {
            return <PhotoCard data={data} />;
          }
        })
    ) : (
        photosData.map((data) => {
          return <PhotoCard data={data} />;
        })
      )
    }

      
    </div>
  );
};

export default PhotoList;
