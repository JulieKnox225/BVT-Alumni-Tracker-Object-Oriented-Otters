import { useEffect, useState } from 'react';
import FakeData from './TempData/FakeData'
import { ProfileBubble } from './ProfileBubble';
import { MDBIcon } from 'mdb-react-ui-kit';


export const Home = () => {

  const [search, setSearch] = useState('');
  const [BvtData, setBvtData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 6;
  const visibleData = BvtData.slice(startIndex, endIndex);

  const handleNextClick = () => {
    setStartIndex(startIndex + 6);
  }
  const handleBackClick = () => {
    setStartIndex(startIndex - 6);
  }

  useEffect(() => {
    setBvtData(FakeData)
  }, []);
  console.log(BvtData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // I want the bottom line to redirect the user to searchPage 
    // And then search the users request.
    window.location.href = `/searchPage`;
};

return (
  <>
      <div className='home-container'>
      <div className='home-page-background'>
      <div className='logo'>
          <a href='/'><img className='bvt--logo' src='images/bvt.png' alt="Logo saying Bay Valley Tech with a lightbulb" /></a>
          </div>
      <form onSubmit={handleSubmit}>
          <div className='home-search-n-btn'>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className='home-search-bar'
            />
            <button className='home-search-button' type="submit">
              Search
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