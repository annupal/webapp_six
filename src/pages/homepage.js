export const Homepage = (props) =>{
    return(
        <>
        <h1>{props.data ? props.data.title : "loading..."}</h1>
        <p>{props.data ? props.data.para : "loading..."}</p>
        </>
    )
}