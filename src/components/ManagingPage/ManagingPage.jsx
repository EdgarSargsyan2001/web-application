import { useEffect, useState } from "react"
import Card from "../ViewPage/Card"
import  './ManagingPage.css'

function ManagingPage(){

    const [data,setData] = useState(localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[])
    
    const edit = (index,editVal,inpName) =>{

        setData(data.map((el,indexEl ) => {

            if(indexEl === index){
                return {
                    ...el,
                    [inpName]:editVal
                }
            }
            return el

        }))

    }


    const deleteUser = (i) => setData(data.filter((el,iL)=>iL !== i))


    useEffect(() => localStorage.setItem('users',JSON.stringify(data)), [data] )

        
    return (

        <div className="ManagingPage">
            {
                data.map((el,index)=><Card 

                    Page="ManagingPage"
                    key={index} 
                    index={index} 
                    el={el} 
                    edit={edit}
                    deleteUser={deleteUser}
                />)
            }

        </div>
    )
}

export default ManagingPage