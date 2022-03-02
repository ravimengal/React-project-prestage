import React, { useState, useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Add = () => {
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [assignee, setAssignee] = useState('')
  const [status, setStatus] = useState('')
  const [time] = useState(new Date().toLocaleString())
  const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XoGpSkgybe5fubd2XlhO_zNXDF9CjbTrEw&usqp=CAU';
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    //before data send to server
    e.preventDefault()
    console.log({ email, id, name, subject, assignee, status, time, avatar })
      const result = await axios.post(`http://localhost:3000/users`, {
        email: email,
        id: id,
        name: name,
        subject: subject,
        assignee: assignee,
        status: status,
        time: time,
        avatar: avatar
      }).then(res => {
        console.log(res)
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        Navigate('/list')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Your work has not been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
  useEffect(() => {
    try{
        handleSubmit()
    }catch(error){
        console.log('error',error)
    }
  }, [])
  return (
    <>
      <div className="container" style={{ marginTop: "92px", marginLeft: "50px", padding: "55px", marginBottom: "60px", width: "-webkit-fill-available" }}>
        <h2>Add Ticket</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Requester Id</label>
            <input type="number" className="form-control" onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Requester Email</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Requester Name</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Subject</label>
            <input type="text" className="form-control" onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Assignee Name</label>
            <input type="text" className="form-control" onChange={(e) => setAssignee(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Status</label>
            <input type="text" className="form-control" onChange={(e) => setStatus(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Last Update</label>
            {/* To add time automatically, just leave this field blank. */}
            <input type="text" readOnly className="form-control" value={new Date().toLocaleString()} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Add Ticket</button>
            <Link to="/list"><button type="button" className="btn btn-primary">Back To List</button></Link>
          </div>
        </form>
      </div>

    </>
  )
}

export default Add