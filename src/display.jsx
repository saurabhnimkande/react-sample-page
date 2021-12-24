function Display({valuearr,text}) {
    return <div>
       <h1>{text}</h1>
        <ul>
        {
          valuearr.map((el) => (
            <li>{el}</li>
          ))
        }
        </ul>
    </div>
}

export default Display;