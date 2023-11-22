import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom'
function Prshot(title){
    const location= useLocation()
    const parsha = location.state;

  const[parsh,setParsh]=useState()
console.log(parsh);
return(
    parsh&&parsh.map(item=>{
       if (item.className==="parashat"){
        return(<>
        <div key={item.id}></div>
            <h1>{item.title}</h1>
            </>
        )
       }

        
       
    })
    
    // {date && date.map(i=>{
          
           
    //     return(<> <div key={i.id}></div>
    //      <button onClick={()=>sendPrachna(i.title)}>פרשת השבוע היא</button>
    //               <div>{i.title}</div>
    //               <div>{i.start}</div>
    //               <div>{i.allDay}</div>
    //               <div>{i.className}</div>
    
    
    )
   
    



}
export default Prshot
// {task && task.map(item => {
//     if (currentUser === item.userId)
//   return (
//     <tr key={item.id}>
//       <td>{ item.id }</td>
//       <td>{ item.userId }</td>
//       <td>{ item.title }</td>
//       <td>{ item.completed }</td>
//       {/* <button onClick={()=>sendTsk(item.id)}></button> */}
//     </tr>
//   );
// })}
// </tbody>
// </table>