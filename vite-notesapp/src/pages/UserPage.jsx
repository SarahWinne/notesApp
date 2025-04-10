import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export default function UserPage(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        function Hello(){
            console.log("Hello")
            setCount(count+1);
        }
        Hello();
    }, []);

    return <>
    <h1>User </h1>
    <h3>{count}</h3>

    <Outlet></Outlet>

    <Link to="/">Go To Homepage </Link>
    </>
}