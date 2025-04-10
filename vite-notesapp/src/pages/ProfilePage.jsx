import { Link, useParams } from "react-router-dom"

export default function ProfilePage(){
    const {id}=useParams();
    return <>
    <h1>Profile Page {id}</h1>

    <Link to="/">Homepage </Link>
    <Link to="/about">About page </Link>
    </>
}