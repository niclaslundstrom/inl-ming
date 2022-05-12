import {Iattending} from "../model/attendingmodel"
interface Props {
    attend: Iattending
}

function EventAttending({ attend }: Props){

    return(
        <div>{attend.attending}</div>
    )
}

export default EventAttending