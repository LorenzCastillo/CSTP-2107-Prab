import PhotoList from '../../components/PhotoList/PhotoList';
import "./IndexPage.css";
import Navbar from '../../components/Navbar/Navbar';

const IndexPage = () => {
  return (    
    <>
      <Navbar />
      <PhotoList isFavoritesPage={false}/>
    </>

  );
}

export default IndexPage