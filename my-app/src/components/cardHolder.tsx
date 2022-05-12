import { useState } from "react";
import { Link } from 'react-router-dom'
import { IEvents } from "../model/Eventsmodel"
import SearchBar from "../components/searchComponent"



interface Props {
	events: IEvents[];
}



function CardHolder(props : Props ){    
   const [ text , setText ] = useState("")
   const filterEvents = props.events.filter((event) => event.eventname.match(new RegExp(text, "i")))
    const evnetsorted = filterEvents.sort((a,b) => (a.date).localeCompare(b.date))

   



   return(
       <>
       <SearchBar searchValue={text} setSearchValue={setText} />
       {evnetsorted.map((event) =>(
        <div key={event.id} className="card" data-test="eventresult">
            <section>
            <div> {event.imageUrl} </div>
            <h2> {event.eventname} </h2>
            <h3> {event.date} </h3>
            <p> {event.description} </p>
            <Link data-test="eventdetails" to={`/event/${event.id}`} > Vissa mer </Link>
            </section>
            <hr />
        </div>
       ))}
    </> 
    )


}
export default CardHolder
