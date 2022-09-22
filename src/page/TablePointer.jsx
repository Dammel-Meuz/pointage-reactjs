import React from 'react'

function TablePointer({pointers}) {
  return (
    <div className="card p-4 m-10">
      <div className="card-title text-center"><h1>Liste des  pointeur</h1></div>
      <div className="card-body p-4">  
        <div  style={{backgroundColor : '',
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

export default TablePointer
