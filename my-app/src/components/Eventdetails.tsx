import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Events } from "../model/Eventsmodel"
import EventComment from '../components/eventcomment'
import { Imessage } from '../model/textmodel'

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
        const newcommet = { textmessage : Comment }
        setaddComment([...addComment, newcommet])
    }
  return (
    <>
      <section>
         <div> {Event.imageUrl} </div>
            <h2> {Event.eventname} </h2>
            <h3> {Event.date} </h3>
            <p> {Event.description} </p>
        <button data-test="sign-up-btn">
          Sign up for event
        </button>
      </section>
      <section>
        Kometar eller fråga:
        <textarea data-test="comment on event"
          value={Comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button data-test="addCommentBtn" onClick={addnewcomment}>lägg till en komentar</button>
      </section>
      <div className="commentsArea" >
        {addComment.map((comment: Imessage, key: number) => {
          return <EventComment key={key} comment={comment} />
        })}
      </div>

    </>
  )
}

export default Eventdetails
