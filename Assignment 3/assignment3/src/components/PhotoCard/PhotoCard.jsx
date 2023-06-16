import { useContext } from 'react';
import PhotoContext from '../../context/PhotoContext';
import "./PhotoCard.css";

const PhotoCard = ({ data }) => {
  const { photosData, setPhotosData } = useContext(PhotoContext);

  console.log(photosData, 'Data');
  const handleAddFav = () => {
    const photosListAfterFav = photosData.map((photoObject) => {
      if (photoObject.id === data.id) {
        photoObject.isFavorite = !photoObject.isFavorite;
      }
      return photoObject;
    });
    setPhotosData(photosListAfterFav);
  };

  return (
    <>
      <div className='photo-card'>
        <img className='card-image' src={data.image} />
        <button onClick={handleAddFav}>
          {data.isFavorite ? `Remove From Fav` : `Add to Fav`}
        </button>
      </div>
    </>

  );
};

export default PhotoCard;
