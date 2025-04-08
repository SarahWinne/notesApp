import { useState } from 'react'
import HobbyItem from './HobbyItem'

export default function Hobbies(){
    const [hobbies, setHobbies]= useState([])
    const [hobby, setHobby]= useState("Coding")
    const [fullname, setFullname]= useState({fname:"", lname:""})

    function addHobby(){
        // e.preventDefault();
        setHobbies([...hobbies, hobby])
        console.log(hobbies)
    }

    return <> 
        <h1>Hobbies</h1> 
        <input type="text" onChange={(e) => setHobby(e.target.value)} value={hobby}/> <br/>
        {/* <input type="text" placeholder='first name' onChange={(e) => setFullname({...fullname, fname: e.target.value})} value={fullname.fname}/> <br/>
        <input type="text" placeholder='last name' onChange={(e) => setFullname({...fullname, lname: e.target.value})} value={fullname.lname}/> <br/>

        <h1>F: {fullname.fname} </h1>
        <h1>L: {fullname.lname} </h1> */}

        <button onClick={(e)=> addHobby(e)}>Add Hobby</button>

        {hobbies.length==0 ? (<p>Nothing yet</p>) :
        (<ul>
            {hobbies.map(h=> 
                <HobbyItem hobby={h} hobbies={hobbies} setHobbies={setHobbies} />
            )}
        </ul> )
        }
    </>
}

