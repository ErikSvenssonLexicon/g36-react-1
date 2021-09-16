
const Person = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <p>{props.person.firstName}</p>
                <p>{props.person.lastName}</p>
                <p>{props.person.birthDate}</p>
                <p>{props.person.getAge()}</p>
            </div>
        </div>        
    )
}

export default Person;