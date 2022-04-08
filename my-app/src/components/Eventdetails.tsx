import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Events } from "../model/Eventsmodel"
import EventComment from '../components/EventComment'
import EventAttending from '../components/Eventattending'
import { Imessage } from '../model/textmodel'
import { Iattending } from '../model/attendingmodel'

interface Props {
  Events: Events[];
}

function Eventdetails({ Events }: Props) {

  const { id } = useParams()

  const [Event, setEvent] = useState({
    id: 0,
    imageUrl: '',
    eventname: '',
    date: '',
    description: '',
  })

  useEffect(() => {
   Events.map((Event) => {
      if ( Event.id.toString() === id) {
        const meeting = {
          id:  Event.id,
          imageUrl: Event.imageUrl ,
          eventname:  Event.eventname,
          description:  Event.description,
          date: Event.date
        }
        return setEvent(meeting)
      }
    })
  }, [id])

    const [Comment, setComment] = useState("")

    const [addComment, setaddComment] = useState<Imessage[]>([])

    const addnewcomment = (): void => {
        const newcomment = { textmessage : Comment }
        setaddComment([...addComment, newcomment])
    }
    const [attending, setattending] = useState("")

    const [addattending, setaddattending] = useState<Iattending[]>([])

    const addnewattending = (): void => {
        const newattending = { attending : attending }
        setaddattending([...addattending, newattending])
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
          <button className='commentbtn' data-test="addCommentBtn" onClick={addnewattending}>Anmäl närvaro</button>
          </section>
          <div className="commentOutput" >
        {addattending.map((attend: Iattending, key: number) => {
          return <EventAttending key={key} attend={attend} />
        })}
      </div>
      </section>
      <section>
        kommentera eller fråga:
        <textarea className='comment' data-test="comment-on-event"
          value={Comment}
          onChange={(event) => setComment(event.target.value)}>
          </textarea>
        <button className='commentbtn' data-test="addCommentBtn" onClick={addnewcomment}>lägg till en komentar</button>
      </section>
      <div className="commentOutput" >
        {addComment.map((comment: Imessage, key: number) => {
          return <EventComment key={key} comment={comment} />
        })}
      </div>

    </>
  )
}

export default Eventdetails
