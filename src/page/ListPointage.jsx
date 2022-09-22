import {useState,useEffect} from 'react'


function ListPointage() {

    //todo lister pointage

const [listpointage,setListpointage]=useState([])

const ListPointage=async () =>{
    const host="http://localhost:5000/pointage?_sort=id&_order=asc"
    const response= await (await fetch(host)).json()
    setListpointage(response)
    
 }

 useEffect(() => {
   ListPointage()
  },[])
  return (
    <div class="d-flex justify-content-center">
    <div className="col-md-6 p-4 m-4" >
    <h1>Pointage</h1>
    <div  style={{backgroundColor : '',
       height: '600px',
       border: '1px solid black',
       overflow: 'scroll',}}>
      <table className="table table-striped table-bordered">
     
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">phone</th>
      <th scope="col">date</th>
      <th scope="col">heurDarriver</th>
      <th scope="col">heurDepart</th>
      
    </tr>
  </thead>
  {listpointage.map((poitage)=>(
             <tbody key={poitage.id}>
             <tr>
             <td>{poitage.id}</td>
             <td>{poitage.pointerPhones}</td>
              <td>{poitage.date}</td>
               <td>{poitage.heurDarriver}</td>
               <td>{poitage.heurDepart}</td>
            
             </tr>
           </tbody>
          ))}
 
</table>
</div>

</div>
</div>
  )
}

export default ListPointage
