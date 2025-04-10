import { Link, Navigate, useNavigate } from "react-router-dom"
import Hobbies from '../components/Hobbies'

export default function HomePage(){

    const navigate = useNavigate();
    const data = {fname: "john", lname: "smith"};

    function handleLogin(){
        navigate('/about', {state:data})
    }

    return <>
    <h1>Home Page </h1>

    <button onClick={handleLogin}>Login</button>

    <Hobbies/>

    <Link to="/about">About page </Link>
    <Link to="/profile">Profile page </Link>
    <Link to="/user">User page </Link>

    </>
}