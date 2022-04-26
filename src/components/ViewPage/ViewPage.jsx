import { useState } from "react"
import Card from './Card'
import './ViewPage.css'


function ViewPage(){

   const [data,setData] = useState(localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[])


 return (
    <div className="ViewPage">
     {
      data.map( (el,index) => <Card key={index} el={el} />)      
     }
        
    </div>
 )
}

export default ViewPage