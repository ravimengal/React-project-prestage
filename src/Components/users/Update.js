import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Update = () => {
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [assignee, setAssignee] = useState('')
  const [status, setStatus] = useState('')
  const [time, setTime] = useState('')
  const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XoGpSkgybe5fubd2XlhO_zNXDF9CjbTrEw&usqp=CAU';

  const handleSubmit = async (e) => {
    //before data send to server
    e.preventDefault()
    console.log({ email, id, name, subject, assignee, status, time, avatar })
    try {
      const result = await axios.post(`http://localhost:3000/users`, {
        email: email,
        id: id,
        name: name,
        subject: subject,
        assignee: assignee,
        status: status,
        time: time,
        avatar: avatar
      })
      console.log(result)
    } catch (error) {
          console.log('Unable to add ticket',error)
    }

  }

  useEffect(() => {


  }, [])

  return (
    <>
      <div className="container" style={{ marginTop: "92px", marginLeft: "50px", padding: "55px", marginBottom: "60px", width: "-webkit-fill-available" }}>
        <h2>Update</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          {/* <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Requester Id</label>
            <input type="number" className="form-control" onChange={(e) => setId(e.target.value)} />
          </div> */}
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
            <input type="text" className="form-control" onChange={(e) => setTime(e.target.value)} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary"  >Update Ticket</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Update