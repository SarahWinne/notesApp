
export default function Question({q, count}){

    return <>
    <h1>Question {count}:</h1>
    <h2>{q.question}?</h2>
    <select>
        <option>Blue</option>
        <option>Purple</option>
        <option>Orange</option>
    </select>
    <br></br>
    <br></br>

    </>
}