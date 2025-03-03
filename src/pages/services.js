export const Services = (props) =>{
    return(
        <>
         <h1>Our Services </h1>
        <div className="row">
           
        {props.data ? props.data.map(
            (d,i) => (
                <div key={`${d.title}-${i}`} className="col-4 service">
                    <img src={d.image} className="img-responsive"/>
                    <h3>{d.title}</h3>
                    <p>{d.para}</p>
                    </div>                
            )
        ):"loading..."}

        </div>
        
        </>
    )
}