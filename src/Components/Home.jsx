import { useEffect, useState } from 'react';
import { ProfileBubble } from './ProfileBubble';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Navigate, Outlet, Route } from 'react-router';
import { SearchPage } from './SearchPage';
import { useQuery } from 'react-query';
import axios from '../api/axios';


export const Home = () => {

  const [search, setSearch] = useState('');

  const [BvtData, setBvtData] = useState([]);

  const [startIndex, setStartIndex] = useState(0);

  const { data, isLoading, isError, error } = useQuery('fetchAllAlumni', fetchAllAlumni);

  const endIndex = startIndex + 6;

  const visibleData = BvtData.slice(startIndex, endIndex > BvtData.length ? undefined : endIndex);

  const handleNextClick = () => {
    setStartIndex(startIndex + 6);
  }
  const handleBackClick = () => {
    setStartIndex(startIndex - 6);
  }

  useEffect(() => {
    setBvtData(FakeData)
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/alumni/search?search=$(search)&type=fullName')
    .then((response) => response.json())
    .then((data) => {
      setBvtData(data);

    })
    .catch((error) => console.error('Error fetching search results:', error));

};
  function fetchAllAlumni() {
    return axios.get('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // I want the bottom line to redirect the user to searchPage 
    // And then search the users request.

    //Not functioning
    return (
      <Route element={<Outlet context={search} />} >
        <Navigate to={<SearchPage />} />
      </Route >
    );
  };

  useEffect(() => {
    if(data) {
      console.log(data)
      setBvtData(data?.data?.data);
    }
  }, [data]);

return (
  <>
      <div className='home-container'>
      <div className='home-page-background'>
      <div className='logo'>
          <a href='/'><img className='bvt--logo' src='images/bvt.png' alt="Logo saying Bay Valley Tech with a lightbulb" /></a>
          </div>
      <form onSubmit={e => handleSubmit(e)}>
          <div className='home-search-n-btn'>
            <input
              type="text"
              placeholder="This search bar is in development. Please navigate to the Search Page"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className='home-search-bar'
            />
            <button className='home-search-button' type="submit">
              <MDBIcon fas icon="search" />
            </button>
          </div>
      </form>

      <div className='carousel-controls'>
        <button className='carousel-btn' onClick={handleBackClick} disabled={startIndex === 0}>
          <MDBIcon fas icon="arrow-left"   />
        </button>
      <button className='carousel-btn' disabled={startIndex === BvtData.length - 1} onClick={handleNextClick} >
        <MDBIcon fas icon="arrow-right"   />
      </button>
      </div>
      
      <div className='carousel-container'>
        <div className='carousel-row'>
        
          {visibleData.map((info) => (
          <div key={info.id} className='profile-highlight'>
            <div className='rows'>
              <ProfileBubble {...info} />
            </div>
            </div>
          ))}
      
          </div> 
        </div>

      </div>
      </div>
    </>
  )
}