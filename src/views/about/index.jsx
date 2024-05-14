const About = ()=>{
	const toDetails = (i)=> {
		console.log(i)
	}
    const list = [32,42,52,62]
    const Item = list.map(i => {
        return <div onClick={()=> toDetails(i)} value={i} key={i}>{i}</div>
    })
    return (
        <div>
            {Item}
        </div>
    )
        
}
export default About
