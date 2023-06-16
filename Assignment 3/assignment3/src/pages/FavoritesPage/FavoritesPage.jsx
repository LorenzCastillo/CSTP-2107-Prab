import { useEffect, useState } from 'react';
import PhotoContext from '../../context/PhotoContext';
import PhotoList from '../../components/PhotoList/PhotoList';
import "./FavoritesPage.css";
import Navbar from '../../components/Navbar/Navbar';

const FavoritesPage = () => {
  return (   
    <>
      <Navbar />
      <PhotoList isFavoritesPage={true}/>
    </> 

  );
}

export default FavoritesPage;