const Home = ()=>{
	const toDetails = (i)=> {
		console.log(i)
	}
    const list = [3,4,5,6]
    const Item = list.map(i => {
        return <div onClick={()=> toDetails(i)} value={i} key={i}>{i}</div>
    })
    return (
        <div>
            {Item}
        </div>
    )
        
}
export default Home
