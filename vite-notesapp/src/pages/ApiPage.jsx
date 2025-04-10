import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Question from "../components/Question"

const url = "https://opentdb.com/api.php?amount=5"

export default function ApiPage(){

    const [questions, setQuestions] = useState([ ])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        async function getQuestion(){
            const timestamp = Date.now();
            setIsLoaded(false)
            const res = await fetch(`${url}&t=${timestamp}`);
            const data = await res.json();
            console.log(data);
            setQuestions(data.results)
            setIsLoaded(true)
        }
        getQuestion();
    }, [])

    return <>
    <h1>Trivia API</h1>
    {questions ? 
    questions.map((question, index) => <Question q={question} count={index+1} />)
    : <h1>Loading</h1> }
   

    <Link to="/">Go To Homepage </Link>
    </>
}