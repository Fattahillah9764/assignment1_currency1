import React, { useState } from "react";


export default function HeaderComponent () {
    const [LocationMeetUp, setLocationMeetUp] = useState("Jakarta, Indonesia")
    const [MembersMeetUp, setMemberMeetUp] = useState(1078)

return(
<>
    <h3>{LocationMeetUp}</h3>
    <h4>{MembersMeetUp}</h4>
</>


)

}