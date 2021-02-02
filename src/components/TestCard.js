const TestCard = ({title, desc, img})=>{
    return (
        <>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={img} alt={title}></img>
        </>
    )
}

export default TestCard