import React, { useState, useEffect } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const Update = () => {
  
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [assignee, setAssignee] = useState('')
  const [status, setStatus] = useState('')
  const [time, setTime] = useState(new Date().toLocaleString())
  const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XoGpSkgybe5fubd2XlhO_zNXDF9CjbTrEw&usqp=CAU';
  const Param = useParams()
  const Navigate = useNavigate()

  const handleUpdate =async (e) => {
    e.preventDefault();
    const data = {id, name, email, subject, assignee, status, time}
    //to check data before update
    console.log('data before update',data)
    const result = await axios.put(`http://localhost:3000/users/${Param.id}`, {
      id:id,
      name:name,
      email:email,
      subject:subject,
      assignee:assignee,
      status:status,
      time:time,
      avatar:avatar
    }).then(res => {
      console.log(res)
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been updated',
        showConfirmButton: false,
        timer: 1500
      })
      Navigate('/list')
    }).catch(err => {
      console.log(err)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your work has not been updated',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  

 //get uer details from api using id
 const getData = async () =>{
    const result = await axios.get(`http://localhost:3000/users/${Param.id}`)
    console.log(result.data)
    setEmail(result.data.email)
    setId(result.data.id)
    setName(result.data.name)
    setSubject(result.data.subject)
    setAssignee(result.data.assignee)
    setStatus(result.data.status)
    setTime(result.data.time)
  }
 
 useEffect(() => {
      getData()
  },[])
  return (
    <>
      <div className="container" style={{ marginTop: "92px", marginLeft: "50px", padding: "55px", marginBottom: "60px", width: "-webkit-fill-available" }}>
        <div className='d-flex' style={{justifyContent:"space-between",marginBottom:"10px"}}>
        <h2>Update Ticket {id}</h2>
        <img src={avatar} alt={name} style={{width:"46px",height:"46px",borderRadius:"50%"}}/>
        </div>
        <form className="row g-3" onSubmit={handleUpdate}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Requester Id</label>
            <input type="number" className="form-control"  value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Requester Email</label>
            <input type="email" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Requester Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Subject</label>
            <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Assignee Name</label>
            <input type="text" className="form-control" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Status</label>
            <input type="text" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Last Update</label>
            {/* To get time updated automatically  */}
            <input type="text" className="form-control" value={new Date().toLocaleString()} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary"  >Update Ticket</button>
           
            <Link to="/list"><button type="button" className="btn btn-primary">Back To List</button></Link>
         
          </div>
        </form>
      </div>

    </>
  )
}

export default Update