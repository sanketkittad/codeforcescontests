import { useState,useEffect } from 'react';
import './App.css';
import Contests from './contestlist';
function App() {
  const [er,setEr]=useState(false);
  const[contests,setContests]=useState(null);
  const[pending,setPending]=useState(true);


  useEffect(
   ()=>{fetch('https://codeforces.com/api/contest.list?gym=false')
   .then(
     res=>{
       if(!res.ok)
        setEr(true)
        else{
          setPending(false)
          return res.json()
        }
     }
   )
  .then(
    data=>{
      if(data.status==='OK' && !er)
      setContests(data.result)
    }
  )
  },[])

  return (
    <div>
      
      <div className="container-fluid w-100 d-flex flex-column">
      <h1 className="justify-self-center my-4">
        Codeforces Contest Timetable
      </h1>
        <div className="mb-4">Following table shows the list of all upcoming contests on codeforces. </div>
      </div>
    <Contests contests={contests} pending={pending} er={er}/>
    </div>
  );
}

export default App;
