import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IEvents } from "../model/Eventsmodel"
import EventComment from '../components/EventComment'
import EventAttending from '../components/Eventattending'
import { Iattending } from '../model/attendingmodel'
import { Link } from 'react-router-dom'

interface Props {
  Events: IEvents[];
}

function Eventdetails( props : Props) {

  const { id } = useParams()

  const [Event, setEvent] = useState({
    id: '',
    imageUrl: '',
    eventname: '',
    date: '',
    description: '',
    Comments: [{textmessage: ''}],
    attending: [{attending: ''}]
  })

  useEffect(() => {
   props.Events.map((Event) => {
      if ( Event.id === id) {
        const Thisevent = {
          id:  Event.id,
          imageUrl: Event.imageUrl ,
          eventname:  Event.eventname,
          description:  Event.description,
          date: Event.date,
          Comments: Event.comments,
          attending: Event.attending
        }
        return setEvent(Thisevent)
      }
    })
  }, [id, props.Events])

    const [attending, setattending] = useState<string>('')

    const addnewattending = (): void => {
        const newattending = {  attending : attending  }
        const id = Event.id
        const index = props.Events.findIndex(item => item.id === id);
        props.Events[index].attending.push(newattending)
        localStorage.setItem('Events', JSON.stringify(props.Events))
        setattending('')
    }
    const [comments, setComment] = useState<string>('')


    const addnewcomment = (): void => {
        const newcomments = { textmessage : comments }
        const id = Event.id
        const index = props.Events.findIndex(item => item.id === id);
        console.log(props.Events[index].comments)
        props.Events[index].comments.push(newcomments)
        localStorage.setItem('Events', JSON.stringify(props.Events))
        setComment('')
    }
  return (
    <>
      <section>
         <div> {Event.imageUrl} </div>
            <h2> {Event.eventname} </h2>
            <h3> {Event.date} </h3>
            <p> {Event.description} </p>
            <section>
            Kommer du närvara till detta evenemang?
            <textarea className='comment' placeholder='ja, nej eller kanske' data-test="comment-on-event"
          value={attending}
          onChange={(event) => setattending(event.target.value)}>
          </textarea>
          <button className='commentbtn' data-test="sign-up-btn" onClick={addnewattending}>Anmäl närvaro</button>
          {Event.attending.map((attend: Iattending) => {
          return <EventAttending  attend={attend} />
        })}
          </section>

        

      </section>
      <section>
        kommentera eller fråga:
        <textarea className='comment' data-test="comment-on-event"
          value={comments}
          onChange={(event) => setComment(event.target.value)}>
          </textarea>
        <button className='commentbtn' data-test="addCommentBtn" onClick={addnewcomment}>lägg till en komentar</button>
        { Event.Comments.map((comment) => {
          return <EventComment comment={comment} />
        })}
      </section>

        

        <Link  to={`/`}> Tillbaka </Link>

      
      
    </>
  )
}

export default Eventdetails
