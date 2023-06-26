import { useEffect, useState } from 'react';
import FakeData from './TempData/FakeData'
import { IDCards } from './BVT.ID';
import {
  MDBCarousel,
   MDBCarouselItem,
} from 'mdb-react-ui-kit';



export const Home = () => {

  const [search, setSearch] = useState('')

  const [searchResults, setSearchResults] = useState({
    data: [],
    currentPage: 1,
    resultsPerPage: 5
  })
  const [BvtData, setBvtData] = useState([])

  useEffect(() => {
    setBvtData(FakeData)
  }, []) 
  console.log(BvtData)

  const handleSubmit = (e) => {
    e.preventDefault();
    //Prevents empty search, ex: "    " or ""
    if (search.trim() === '') {
      return;
    }   
    const filteredResults = FakeData.filter((info) => {
      const searchValue = search.toLowerCase();
      const fullName = `${info.firstName} ${info.lastName}`.toLowerCase()
      return (
        fullName.includes(searchValue) ||
        info.email.toLowerCase().includes(searchValue) ||
        info.degree.toLowerCase().includes(searchValue)
        );
      });

      setSearchResults(filteredResults);  
};

return (
  <>
    <div className='surrounding-box'>
      <div className='container-search'>
      <form onSubmit={handleSubmit}>
          <div className='sp-search-bar-n-btn'>
          <input
            type="text"
            placeholder="Who's that Alumnus?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='SP-searchBar'
            />
          <button className='SP-button' type="submit">
            Search
          </button>
          </div>
      </form>
      </div>
    </div>
    <MDBCarousel showControls>
    <div className='BVT-results'>
      {/* <FakeData /> */}
      <h2 className="sp-results-header">Profile Gallery</h2>
      {/* As long as there is an input when search is submitted results will display */}
      {searchResults.length > 4 && (
        <div style={{ marginTop: '20px' }}>
          <p>These are the results for {search}:</p>
          <MDBCarouselItem />
          <div className='search-results'>
          {searchResults.map((info) => (
            <IDCards
            key={info.id}
            {...info}
            />
            ))}
          </div> 
        </div>
      )}

    </div>
      </MDBCarousel>
    </>
  )
}