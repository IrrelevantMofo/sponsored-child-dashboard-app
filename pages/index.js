import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchChildAsync } from '../store/sagas/children';



export default function Home() {

  const [loading, setLoading] = useState(false)
  const { errorMessage, requestStatus } = useSelector(state => state.siteData);
  const dispatch = useDispatch();
  
  useEffect(() => { 
    return () => {
      setLoading(false)
    }
  },[])

  useEffect(()=>{
    switch(requestStatus){
      case 'NONE':
        setLoading(false);
      case 'REQUESTING':
        setLoading(true);
      case 'SUCCESS':
        setLoading(false);
      case 'FAILURE':
        setLoading(false)
    }
  },[requestStatus])

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12-xs text-center'>
          <h1>Sponsored Child Dashboard</h1>
        </div>
      </div>
    </div>
  )
}
