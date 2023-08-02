import { useEffect, useState } from 'react';
import { IDCards } from './BVT.ID';
import { useQuery } from 'react-query';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import axios from '../api/axios';


export const SearchPage = () => {
  
  const [search, setSearch] = useState('');

  const [type, setType] = useState('');

  const [enabled, setEnabled] = useState(false);

  const [searchResults, setSearchResults] = useState({
    data: [],
    currentPage: 1,
    resultsPerPage: 20
  });

  const { data, isLoading, isError, error, refetch } = useQuery('fetchSearch', fetchSearch, { enabled, retry: false });

  function fetchSearch() {
    setEnabled(false);
    return axios.get(`/search?search=${search}&type=${type}`);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if(data?.data) {
      refetch;
    }

    //Prevents empty search, ex: "    " or ""
    if (search.trim() === '') {
      return;
    }   
    
    setEnabled(true);
  };

  useEffect(() => {
    console.log(data);
    if(error) {
      setSearchResults({
        data: [],
        currentPage: 1,
        resultsPerPage: 20
      })
    } else if(data){
      setSearchResults(prev => {
        return {
          ...prev,
          data: data?.data?.data
        }
      });
    }
  }, [data, error]);

  return (
    <>
    <div className='surrounding-box'>
      <div className='container-search'>
      <form onSubmit={(e) => handleSubmit(e)}>
          <div className='sp-search-bar-n-btn'>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='SP-searchBar'
          />
          <select name="type" value={type} onChange={e => setType(e.target.value)}>
              <option value="">--Please choose an option--</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phoneNumber">Phone Number</option>
              <option value="degree">Degree</option>
              <option value="achievements">Achievements</option>
              <option value="projects">Projects</option>
              <option value="skills">Skills</option>
              <option value="recommendations">Recommendations</option>
          </select>
          <button className='SP-button' type="submit">
            Search
          </button>
          </div>
      </form>
      </div>
    </div>     
    <div className='BVT-results'>
      <h2 className="sp-results-header">Results</h2>
       
      { isLoading && 
            <MDBContainer fluid >
                <MDBRow className='login-d-flex justify-content-center align-items-center h-100'>
                    <MDBSpinner role = "status">
                        <span className='visually-hidden'>Loading...</span> 
                    </MDBSpinner> 
                </MDBRow>
            </MDBContainer>
      }
      
      { isError && 
        <p className = "error">{error.response.data.message.name || error.response.data.message || error.message }</p> 
      }

      {/* As long as there is an input when search is submitted results will display */}
      {searchResults.data.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <div className='search-results'>
          {searchResults.data.map((info) => (
            <IDCards
              key={info.id}
              {...info}
            />
          ))}
          </div>
        </div>
      )}

    </div>
    </>
  )
}