import {useState,useEffect} from 'react'
import{toast} from 'react-toastify'

function Pointage() {

  const [listpointage,setListpointage]=useState([])
  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})

const ListPointage=async () =>{
  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
    const host=`http://localhost:5000/pointage?date=${thisDate}`
    const response= await (await fetch(host)).json()
    setListpointage(response)
    
 }

    const [numPhone,setNumPhone] = useState("")
    //ajouter pointage


// const valedPointer={}
let depart={}
let arriver={}
//todo fonction lister pointers

const [pointers,setPointers]=useState([])

const ListPointer=async () =>{
    const host="http://localhost:5000/pointers?_sort=id&_order=asc"
    const response= await (await fetch(host)).json()
    setPointers(response)
    
  }
  
//  console.log(valedPointer)
const setData= async(phonePointer)=>{

  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})

  const host=`http://localhost:5000/pointage?pointerPhones=${phonePointer}&date=${thisDate}`;
  const response= await (await fetch(host)).json()
      // const data = await response.json()
  const updatePointer=response
  
  let test=pointers.map((pointer)=>(pointer.phone))

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  

  if (test.includes(phonePointer)) {

    if (updatePointer.length !==0){
      depart={
        date:thisDate,
        heurDarriver: updatePointer[0].heurDarriver,
        heurDepart: h+':'+m+':'+s,
        pointerPhones: updatePointer[0].pointerPhones
      }
      await fetch(`http://localhost:5000/pointage/${updatePointer[0].id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(depart)
      })
    
      toast.success('bonne fin de soirée')
      console.log(depart)
      console.log("depart")
      return
   
    }else if(updatePointer.length ===0) {
       arriver={
        date: new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'}),
        heurDarriver:h+':'+m+':'+s,
        heurDepart:'',
        pointerPhones:phonePointer
      }
      await fetch('http://localhost:5000/pointage',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(arriver)
        
      }) 

      toast.success('Bienvenue Pointage valider')
      // console.log(arriver)
      // console.log("arriver")
    }


   
  
  }else{
    toast.error('num Phone invalid')
  }

}





    const  onChangenumPhone=(e)=>{
        setNumPhone(e.target.value)
        
    }
    const PointerSubmit =(e)=>{
        e.preventDefault()
        const num=numPhone
        setData(num)
        setNumPhone('')
        ListPointage()
      
        
    }
   
    useEffect(() => {
        ListPointer()
        ListPointage()
       // console.log(listpointage)
       
      },[])
     


  return (
    <div class="d-flex justify-content-start">
       <div className="col-md-1"></div>
       <div className='col-md-4 p-4 m-4'>
      <form onSubmit={PointerSubmit}>
      <div className="mb-3">
        <label for="phone" className="form-label">Phone</label>
        <input type="number" className="form-control" id="numPhone" placeholder="phone" value={numPhone}  onChange={onChangenumPhone} required style={{backgroundColor : '#85acdc'}}/>
     </div>
     <input type='submit' className="btn  m-2" value="submit" style={{backgroundColor : '#85acdc'}}/>
    </form>
    </div>
    <div className="col-md-6 p-4 m-4" >
        <h1>Liste de Pointage du {thisDate}</h1>
        <div  style={{backgroundColor : '',
       border: '1px solid black',
       overflow: 'scroll',}}>
    <table className="table table-striped table-bordered">
     
     <thead>
       <tr>
         <th scope="col">id</th>
         <th scope="col">Phones</th>
         <th scope="col">date</th>
         <th scope="col">heurDarriver</th>
         <th scope="col">heurDepart</th>
       </tr>
     </thead>
     {listpointage.map((poitage)=>(
                <tbody>
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

export default Pointage
