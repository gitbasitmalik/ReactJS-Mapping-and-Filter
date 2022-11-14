import { useState } from "react";
import "./Time.css";

function Time() {
    const[Lab,setLab]=  useState([
        {
            id: "1",
            country: "Pakistan",
            time: "1:00",

        },
        {
            id: "2",
            country: "Turkey",
            time: "10:00",

        },
        {
            id: "3",
            country: "London",
            time: "6:00",

        },
        {
            id: "4",
            country: "Italy",
            time: "7:00",

        }
    ]);
    function handleDelete(id)
    {
        const Delete = Lab.filter((carddelete)=>carddelete.id !== id);
        setLab(Delete);

    }
       
    
    return ( 
        <div>
            {Lab.map((labdata) => (
        <div>
          <div class="wrapper">
            <div class="grid grid--4">
              <div class="grid__item" key={labdata.id}>
                <article>
                  <h5>{labdata.country}</h5>
                </article>
                <article>
                  <h6>{labdata.time}</h6>
                  <button className="time-btn" onClick={()=>handleDelete(labdata.id)}>Delete</button>
                </article>
                
              </div>
            </div>
          </div>
        </div>
      ))}
      
    
        </div>
        
     );
}

export default Time;
