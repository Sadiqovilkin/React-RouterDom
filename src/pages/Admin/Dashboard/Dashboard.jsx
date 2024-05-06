import React, { useState } from 'react'
import { getAll } from '../../../API/reguest'

const Dashboard = () => {
  const [count,setCount]=useState(0)
  getAll("countries").then((res)=>{
    setCount(res.data.length)
  })
  return (
    <section>
      <div className="container my-5 py-5">
        <div className="row justify-content-center ">
          <div className="col-lg-5 text-center ">
            <h1>
             Country : {count}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard