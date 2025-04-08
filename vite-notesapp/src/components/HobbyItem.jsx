export default function HobbyItem({hobby, hobbies,setHobbies}){
    function deteleHobby(){
        console.log("deleting")
        let newHobbies = hobbies.filter(item=> item !== hobby)
        console.log(newHobbies);
        setHobbies(newHobbies);
    }
    return<>
    <li key={hobby}> {hobby} <button onClick={deteleHobby}>X</button></li>
    
    </> 
}