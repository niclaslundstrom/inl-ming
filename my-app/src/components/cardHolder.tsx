import { useState } from "react";
import { Link } from 'react-router-dom'
import { Events } from "../model/Eventsmodel"
import SearchBar from "../components/searchComponent"
import {Imessage} from "../model/textmodel"

interface Props {
	events: Events[];
}



function CardHolder({ events }: Props ){    
   const [ text , setText ] = useState("")
   const filterEvents = events.filter((events) => events.eventname.match(new RegExp(text, "i")))
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
           <Link data-test="eventdetails" to={`/envets/${event.id}`} > vissa mer </Link>
           </section>
        </div>

       ))}
    </> 
    )


}
export default CardHolder
