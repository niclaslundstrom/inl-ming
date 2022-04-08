import {Imessage} from "../model/textmodel"

interface Props {
    comment: Imessage

}

function EventComment({ comment }: Props){
    return(
        <>
        <div>{comment.textmessage}</div>
        </>
    )
}

export default EventComment