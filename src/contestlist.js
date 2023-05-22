import { useState,useEffect } from "react";
import Timer from "./timer";
import Time from "./time";
const Contests = ({contests,pending,er}) => { 
    return ( 
        <table className="table table-striped">{pending && <div>Loading</div>}
            <tr>
                <th scope="col">Name</th><th scope="col">Type</th><th scope="col">CountDown</th><th scope="col">Time</th></tr>
                {
                    !pending && contests && !er && contests.map((contest)=>
                        (   
                            contest.key=contest.name &&
                            contest.phase==='BEFORE' &&
                            <tr>
                                <td>{contest.name}</td>
                                <td>{contest.type}</td>
                                <td><Timer relTime={contest.relativeTimeSeconds}/></td>
                                <td><Time unix={contest.startTimeSeconds}/></td>
                                
                            </tr>
                        )
                    )
                }
            
        </table>
    );
}
 
export default Contests;