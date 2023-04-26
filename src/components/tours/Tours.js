

function Tours(props) {
    console.log(props)
    
    return (
        <>
            <h1>Tours List</h1>
            {props.dataSent.data.map((tour)=>{
                return(
                    <div key={tour.id}>
                        <h2>{tour.name}</h2>
                        <img src={tour.image} alt={tour.name}></img>
                        <br></br>
                        <br></br>
                    </div>
                )
            })}
        </>
    )
}

export default Tours;