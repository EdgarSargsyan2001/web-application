
import { useEffect, useState } from "react";
import { AiOutlineMail ,AiOutlinePhone,AiOutlineUser,AiOutlineCalendar,AiOutlineEdit} from "react-icons/ai";
import './Card.css'


function Card({el,Page,index,deleteUser,edit}){

    const [editVal,setEditVal] = useState('')
    const [showInput,setShowInput] = useState(false)
    const [inpType,setInpType] = useState('text')
    const [inpName,setInpName] = useState('name')
    const [stylePhoneNumber,setStylePhoneNumber]  = useState('') 

    useEffect(()=>{

        let k = el?.phoneNumber.split('')

        k?.splice(0,0,"(")
        k?.splice(4,0,") ")

        for(let i = 8;i <= el?.phoneNumber.length; i+=4){
            k?.splice(i,0,"-")
        } 

        setStylePhoneNumber(k)

    },[el])

    return (
        <div className="Card">

            {  Page &&
                <button 

                    className="deleteBtn"
                    onClick={()=>deleteUser(index)}

                >X</button>
            }

            <h2 className='name'>
                <AiOutlineUser className='icon'></AiOutlineUser>
                {el?.name} {' '} {el?.lastname}
                { Page && 
                    <AiOutlineEdit className="edit"
                        
                        onClick={()=>{

                            setShowInput(!showInput)
                            setInpType('text')
                            setInpName('lastname')
                            setEditVal(el?.lastname)
                            
                        }}

                    ></AiOutlineEdit>
                }
                { Page && 
                    <AiOutlineEdit className="edit2"
                        
                        onClick={()=>{

                            setShowInput(!showInput)
                            setInpType('text')
                            setInpName('name')
                            setEditVal(el?.name )
                            
                            
                        }}

                    ></AiOutlineEdit>
                }
            </h2>

            
            <h3 className='email'>
                <AiOutlineMail className='icon'></AiOutlineMail>
                {el?.email}

                { Page && 
                    <AiOutlineEdit className="edit"
                        

                        onClick={()=>{

                            setShowInput(!showInput)
                            setInpType('email')
                            setInpName('email')
                            setEditVal(el?.email)
                            
                        }}

                    ></AiOutlineEdit>
                }
                    

            </h3>
            
            
            <h3 className='phoneNumber'>
                <AiOutlinePhone className='icon'></AiOutlinePhone>
                
                {stylePhoneNumber}

                { Page && 
                    <AiOutlineEdit className="edit"
                        
                        onClick={()=>{

                            setShowInput(!showInput)
                            setInpType('number')
                            setInpName("phoneNumber")
                            setEditVal(el?.phoneNumber)
                        }}
                        
                    ></AiOutlineEdit>
                }
            </h3>
            
            
            <h3 className='dateOfBirth'>
                <AiOutlineCalendar className='icon'></AiOutlineCalendar>
                {el?.dateOfBirth?.split('-').reverse().join('-')}

                { Page && 
                    <AiOutlineEdit className="edit"
                        

                        onClick={()=>{

                            setShowInput(!showInput)
                            setInpType('date')
                            setInpName('dateOfBirth')
                            setEditVal(el?.dateOfBirth)
                        }}
                        
                    ></AiOutlineEdit>
                }
            
            
            </h3>


            {  Page && showInput && 
                <>
                <form onSubmit={(e)=>{

                    e.preventDefault()
                    edit(index,editVal,inpName)
                    setShowInput(false)

                }}>
                    <input 
                        type={inpType}
                        name={inpName}
                        value={editVal} 
                        minLength={3}
                        className='editInput'
                        required
                        onChange={(e)=>setEditVal(e.target.value)} 
                        
                    />

                    <button className="editButton">Cange</button>
                    
                </form>
                </>
            }

        </div>   
    )

}


export default Card