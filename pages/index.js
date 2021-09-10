import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchChildAsync,cleanup } from '../store/sagas/children';
import Card from '../components/Card/index';
import Loading from '../components/Loading/index';



export default function Home() {

  const [loading, setLoading] = useState(false);
  const [dataFilter, setDataFilter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const { errorMessage, requestStatus, data } = useSelector(state => state.siteData);
  const dispatch = useDispatch();
  
  useEffect(() => { 
    dispatch(fetchChildAsync())
    return () => {
      dispatch(cleanup())
    }
  },[])

  useEffect(()=>{
    switch(requestStatus){
      case 'NONE':
        setLoading(false);
        break;
      case 'REQUESTING':
        setLoading(true);
        break;
      case 'SUCCESS':
        setFilteredData(data.sponsoredChildrenDisplay)
        setLoading(false);
        break;
      case 'FAILURE':
        setLoading(false)
        break;
    }
  },[requestStatus,data])

  useEffect(()=>{
    switch(dataFilter){
      case 'pastSponsoredChildrenDisplay':
        setFilteredData(data.pastSponsoredChildrenDisplay)
        break;
      case 'sponsoredChildrenDisplay':
        setFilteredData(data.sponsoredChildrenDisplay)
        break;
      case 'futureSponsoredChildrenDisplay':
        setFilteredData(data.futureSponsoredChildrenDisplay)
        break;
    }
  },[dataFilter, data])

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  return (
    <>
      <div className='row pt-3 pb-2 mb-3' style={{backgroundColor:'#338EEF'}}>
        <div className='col-12-xs text-center text-white'>
          <h1>Sponsored Child Dashboard</h1>
        </div>
      </div>
    <div className='container mb-3'>
      {!!data && <div className='row'>
        <div className='col-12-xs text-center'>
          <button className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1 mb-1' onClick={()=>{setDataFilter('pastSponsoredChildrenDisplay')}}>
            Past Sponsored Children
          </button> 
          <button className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1 mb-1' onClick={()=>{setDataFilter('sponsoredChildrenDisplay')}}>
            Sponsored Children
          </button>
          <button className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1 mb-1' onClick={()=>{setDataFilter('futureSponsoredChildrenDisplay')}}>
            Future Sponsored Children
          </button>
        </div>
      </div>}
      
      <div className='row mt-2'>
        {!!data && filteredData.length>0? paginate(filteredData, 6, page).map(each=>{
          return (
              <div key={each.childNumber} className='col-12-xs col-6-md col-4-lg'>
                <Card data={each} />
              </div>
          )
        }) : loading ? <div className='col-12-xs text-center'>
        <Loading/>
      </div>: 
        <div className='col-12-xs text-center'>
          <h3>No Data Found</h3>
        </div>
        }
      </div>
      {filteredData.length>6 && !loading?<div className='row '>
      <div className='col-12-xs text-center'>
        <button 
          className='btn mr-1' 
          disabled={page<2}
          onClick={()=>{
                    setPage(page-1)
                  }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className='btn'
          disabled={paginate(filteredData, 6, page+1).length<1}
          onClick={()=>{
                    setPage(page+1)
                  }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>:null}
    </div>
    
    
    </>
  )
}
