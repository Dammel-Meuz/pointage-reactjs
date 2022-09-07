import {useState,useEffect} from 'react'

function Addpointer() {

    const [dataPointer,setDataPointer] =useState({
        prenom:'',
        nom:'',
        phone:'',
        email:''
    
    })
    const{prenom,nom,phone,email} = dataPointer

    //todo the fucntion ajouer pointers

const [pointer,setPointer]=useState([])
const addPointer = async (newPointer) => {
    const response =await fetch('http://localhost:5000/pointers',{
      method:'POST',
      headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify(newPointer)
    })
   
    const data=await response.json()
    setPointer([data, ...pointer])
  }
  
   //todo fonction lister pointers

 const [pointers,setPointers]=useState([])

 const ListPointer=async () =>{
     const host="http://localhost:5000/pointers?_sort=id&_order=asc"
     const response= await (await fetch(host)).json()
     setPointers(response)
     
   }


    const onChange=(e)=>{
        setDataPointer((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value,
          }))
      
      }
      const handleSubmit=()=>{

      addPointer(dataPointer)
       //console.log(pointers)
      }
      useEffect(() => {
        ListPointer()
      
      
      },[])




  return (
    <div class="d-flex justify-content-start">
    <div className="col-md-1"></div>
  <div className='col-md-4 p-4 m-4'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3 ">
      <label for="prenom" className="form-label">Prenom</label>
      <input type="text" className="form-control" id="prenom" placeholder="prenom" value={prenom} onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="nom" className="form-label">Nom</label>
      <input type="text" className="form-control" id="nom" placeholder="nom" value={nom}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="phone" className="form-label">Phone</label>
      <input type="number" className="form-control" id="phone" placeholder="phone" value={phone}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="email" className="form-label">E-mail</label>
      <input type="email" className="form-control" id="email" placeholder="email" value={email}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <input type='submit' className="btn" value="Ajout" style={{backgroundColor : '#85acdc'}} />
    </form>
    </div>
    <div className="col-md-6 p-4 m-4">
        <h1>Pointer</h1>
        <div  style={{backgroundColor : '#ea641b',
       height: '600px',
       border: '1px solid black',
       overflow: 'scroll',}}>
    <table className="table table-striped table-bordered overflow-scroll h-10px">
     
     <thead>
       <tr>
         <th scope="col">id</th>
         <th scope="col">prenom</th>
         <th scope="col">nom</th>
         <th scope="col">phone</th>
         <th scope="col">email</th>
       </tr>
     </thead>
     {pointers.map((pointer)=>(
                <tbody>
                <tr key={pointer.id}>
                <td>{pointer.id}</td>
                  <td>{pointer.prenom}</td>
                  <td>{pointer.nom}</td>
                  <td>{pointer.phone}</td>
                  <td>{pointer.email}</td>
                </tr>
              </tbody>
             ))}
    
   </table>
   </div>
   </div>
    </div>
  )
}

export default Addpointer
