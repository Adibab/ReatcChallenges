import React from "react";


export default function List({ birthday }) {
    return(
        <div> 
            {birthday.map((people, index)=> {
                return (
                  <article key={index} className="person">
                    <img src={people.image} alt={people.name} />
                    <div>
                      <h4> {people.name} </h4>
                      <p> {people.age} years
                      </p>
                    </div>
                  </article>
                );
            })}
        </div>
    )
  
}
