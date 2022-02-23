import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Users.css'
const List = () => {

    const [users,setUsers] = useState([]);


    
    //to get List of Ticket available in the database
    const getData = async () =>{

        const result = await axios.get('http://localhost:3000/users')
        console.table(result.data);
        setUsers(result.data);
        }
    
        //to delete ticket from database
        const deleteUser = async (id)=>{
                const result = await axios.delete(`http://localhost:3000/users/${id}`)
                console.log(result);
                getData();
            }

    useEffect(() => {
            getData();
           
    } , [])
    return (
        <>
        <div className="container w-auto mt-4 Tablebox">
            <div className="table-responsive table-hover">
                <table className="table table-hover align-items-center">
                    <thead>
                        <nav aria-label=" text-sm Page navigation example" style={{height: "38px"}}>
                            <div>
                                <h6 className="Ticket-count d-flex justify-content-between align-items-center" style={{marginTop: "10px" , marginBottom:"-0.7rem"}}>
                                    <b>{users.length}</b>
                                </h6>
                            </div>
                        </nav>
                    </thead>
                </table>
                <br />
                <hr />
            </div>
            <div className="table-responsive table-hover">
                <table className="table table-hover align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                                MARK
                            </th>
                            <th className="text-uppercase text-xxs font-weight-bolder opacity-7">
                                REQUESTER
                            </th>
                            <th className="text-uppercase text-xxs font-weight-bolder opacity-7 ps-2">
                                SUBJECT
                            </th>
                            <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">
                                ASSIGNEE
                            </th>
                            <th
                                className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">
                                STATUS
                            </th>
                            <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">
                                LAST MESSAGE
                            </th>
                            <th className="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>(
                            <tr key={user.id}>
                            <td className="align-middle text-sm">
                                <input type="checkbox" />
                            </td>

                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div>
                                        <img src={user.avatar} alt="Avatar" className="avatar avatar-sm me-3" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-xs">{user.name}</h6>
                                        <p className="text-xs text-secondary mb-0">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="align-middle text-sm">
                                <span>{user.subject}</span>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span>{user.assignee}</span>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span className="badge rounded-pill bg-success">{user.status}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                    {user.time}
                                </span>
                            </td>
                            <td className="align-middle">
                                <button className="btn btn-danger " onClick={()=>{deleteUser(user.id)}}>
                                    <a className="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" style={{textDecoration: "none", color: "white"}}>
                                        Delete
                                    </a>
                                </button>

                            </td>
                            <td className="align-middle">
                                <button
                                    className="btn btn-primary " >
                                    <a href="" className="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" style={{textDecoration: "none", color: "white"}} >
                                        Update
                                    </a>
                                </button>

                            </td>
                            </tr>

                        ))}
                        
                      
                    </tbody>
                </table>

               
            </div>
           
        </div>
        {/* <div>
            {
                users.map(user => (
                    <div className="card-body">
                        <div className="card-title">
                            <h5 className="card-title">{user.name}</h5>
                        </div>
                        <div className="card-text">
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                ))

            }
        </div> */}
        </>
    )
}

export default List