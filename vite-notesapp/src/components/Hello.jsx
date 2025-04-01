import Button from './Button'

function add(a,b){
    return a+b
}

function Hello(props){
    return <div> <h1>Hello {props.name}</h1> <p>{props.msg} {props.name}</p> 
    {add(5,6)} 
    </div>
}

export default Hello