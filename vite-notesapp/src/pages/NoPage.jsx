import { Link } from "react-router-dom"

export default function NoPage(){

    return <>
    <h1>There is no page that fits your request</h1>

    <Link to="/">Go To Homepage </Link>
    </>
}