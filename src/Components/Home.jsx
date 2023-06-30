import { useEffect, useState } from 'react';
import FakeData from './TempData/FakeData'
import { ProfileBubble } from './ProfileBubble';



export const Home = () => {

  const [search, setSearch] = useState('')

  const [BvtData, setBvtData] = useState([])

  useEffect(() => {
    setBvtData(FakeData)
  }, []) 
  console.log(BvtData)

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/searchPage`
};

return (
  <>
      <div className='home-page-background'>

      <form onSubmit={handleSubmit}>
          <div className='home-search-n-btn'>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='SP-searchBar'
            />
          <button className='home-search-button' type="submit">
            Search
          </button>
          </div>
      </form>

        <div className='container'> 
      

        {BvtData.map((info) => (
        <div key={info.id} className='profile-highlight'>
          <div className='rows'>
            <ProfileBubble {...info} />
          </div>
        </div>
        ))}
   
        </div>

      </div>
    </>
  )
}