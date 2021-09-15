
const Person = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <p>{props.person.name}</p>
                <p>{props.person.birthDate}</p>
            </div>
        </div>        
    )
}

export default Person;