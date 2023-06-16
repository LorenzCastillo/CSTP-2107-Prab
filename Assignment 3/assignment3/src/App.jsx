import './App.css';
import { useRoutes } from "react-router-dom";
import IndexPage from './pages/IndexPage/IndexPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { useEffect, useState } from 'react';
import PhotoContext from './context/PhotoContext';

function App() {
  const CLIENT_SECRET = `y4macq0m5bMMoqMvRFv_O2glgbESOBB67rI7PQwBLLw`;
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const photoDataPromise = await fetch(
      `https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`
    );
    const photoJsonData = await photoDataPromise.json();
    const requiredData = photoJsonData.map((data) => {
      return {
        image: data.urls.full,
        description: data.alt_description,
        isFavorite: false,
        id: data.id,
      };
    });
    setPhotosData(requiredData);
  };

  let route = useRoutes([
    {
      path: "/",
      element: <PhotoContext.Provider
        value={{
          photosData,
          setPhotosData,
        }}>
        <IndexPage />
      </PhotoContext.Provider>
    },
    {
      path: "/favorites",
      element: <PhotoContext.Provider
        value={{
          photosData,
          setPhotosData,
        }}>
        <FavoritesPage />
      </PhotoContext.Provider>
    }
  ]);

  return route;
}

export default App;
