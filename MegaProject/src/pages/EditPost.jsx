import React,{useState,useEffect} from 'react'
import { Container,PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post,setPost] = useState([])
    const {} = useParams() //url sy va;ue leny ky liyay use krty hyn ta ky edit py click krny sy new page py chalay jayay
    const navigate= useNavigate()


useEffect(()=>{
if(slug){
    appwriteService.getPost(slug).then((post)=> {
        if(post){
            setPost(post)
        }
    }
)
} else{
navigate('/')
}
},[slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
          <  PostForm post ={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
