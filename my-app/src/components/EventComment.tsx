import {Imessage} from "../model/textmodel"

interface Props {
    comment: Imessage

}

function EventComment({ comment }: Props){
    localStorage.setItem("comment", JSON.stringify(comment));
    return(
        <>
        <div>{comment.textmessage}</div>
        </>
    )
}

export default EventComment