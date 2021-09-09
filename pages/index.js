import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchChildAsync,cleanup } from '../store/sagas/children';



export default function Home() {

  const [loading, setLoading] = useState(false)
  const { errorMessage, requestStatus } = useSelector(state => state.siteData);
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
        setLoading(false);
        break;
      case 'FAILURE':
        setLoading(false)
        break;
    }
  },[requestStatus])

  return (
    <div className='container'>
      {console.log(loading)}
      <div className='row mt-3'>
        <div className='col-12-xs text-center'>
          <h1>Sponsored Child Dashboard</h1>
        </div>
      </div>
    </div>
  )
}
