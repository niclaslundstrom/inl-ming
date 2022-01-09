import { useState } from "react";
import { Events } from "../model/Eventsmodel"
import SearchBar from "../components/searchComponent"

interface Props {
	events: Events[];
}



function CardHolder({ events }: Props ){    
   const [ text , setText ] = useState("")
   const filterEvents = events.filter((events) => events.eventname.match(new RegExp(text, "i")))
    const evnetsorted = filterEvents.sort((a,b) => (a.date).localeCompare(b.date))

    const [Comment, setComment] = useState("")
    const



   return(
       <>
       <SearchBar searchValue={text} setSearchValue={setText} />
       {evnetsorted.map((event) =>(
        <div key={event.id} className="card" data-test="eventresult">
            <div> {event.imageUrl} </div>
            <h2> {event.eventname} </h2>
            <h3> {event.date} </h3>
            <p> {event.description} </p>
            <textarea data-test="comment on event" value={Comment}>Skriv vilket fordon du kommer med!</textarea>
            <button  data-test="sign up" onClick={addcomment} onChange={(event) => setComment(event.target.value)} >jag vill komma!!</button>
            <ul data-test="comment">
                <li>{Comment}</li>
            </ul>
        </div>

       ))}
    </> 
    )


}
export default CardHolder
