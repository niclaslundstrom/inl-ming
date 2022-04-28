import {Iattending} from "../model/attendingmodel"
interface Props {
    attend: Iattending
}

function EventAttending({ attend }: Props){
    //store the attend data in localstorage
    localStorage.setItem("attend", JSON.stringify(attend));
    // return the attend data
    
    return(
        <>
        <div>{attend.attending}</div>
        </>
    )
}

export default EventAttending