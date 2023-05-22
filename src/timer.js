import { useEffect,useState } from "react";
const Timer = ({relTime}) => {
    const[dist,setDist]=useState(Math.abs(relTime));
    const[days,setDays]=useState(Math.floor(dist / 86400));
    const[hours,setHours]=useState(Math.floor((dist%86400)/3600));
    const[mins,setMins]=useState(Math.floor(((dist%86400)%3600)/60));
    const[secs,setSecs]=useState(Math.floor((((dist%86400)%3600)%60)));
    useEffect(
        ()=>{  
            let timer=setTimeout(()=>{
                setDist(dist-1);
                if(hours===0 && mins===0 && secs==0)
                    {
                        setDays(days-1);
                        setHours(23);
                        setMins(59);
                        setSecs(59);
                    }
                else if( mins===0 && secs===0)
                    {
                        setHours(hours-1);
                        setMins(59);
                        setSecs(59);
                    }
                else if(secs===0)
                    {
                        setMins(mins-1);
                        setSecs(59);
                    }
                else
                    setSecs(secs-1)
                console.log(dist);
            },500);
            return () => {
                clearInterval(timer);
              }; 
        }
    ,[dist])
    
    return (
        
       <div>
        {days}D :{hours}H :{mins}M :{secs}S
       </div>
    );
}
 
export default Timer;