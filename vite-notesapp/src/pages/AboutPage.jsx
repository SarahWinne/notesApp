import { Link, useLocation } from "react-router-dom"

export default function AboutPage(){

    const location = useLocation();
    const data = location.state || "User";
    // const data = location.state;

    return <>
    <h1>About Page for User {data.fname} {data.lname}</h1>

    <Link to="/">Homepage </Link>
    <Link to="/profile">Profile page </Link>
    </>
}