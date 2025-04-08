import { Link } from "react-router-dom"
import Hobbies from '../components/Hobbies'

export default function HomePage(){

    return <>
    <h1>Home Page </h1>

    <Hobbies/>

    <Link to="/about">About page</Link>

    </>
}