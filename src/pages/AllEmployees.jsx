import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllEmployees = () => {
  const [employeeData, setEmployeeData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      '  https://sdg-staff-directory-app.herokuapp.com/api/ilive/employees'
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  console.log(employeeData)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <main className="employee-section">
        {employeeData.map((info, i) => {
          return (
            <div className="employee-display">
              <div className="employee-card" key={i}>
                <div className="employee-info">
                  <img className="profile-pic" src={info.profileImage} />
                  <h2 className="first-last-name">
                    {' '}
                    {info.firstName} {info.lastName}
                  </h2>
                  <h3 className="job-title">{info.jobTitle}</h3>
                  {/* ternary if esle statment consolidated */}
                  <h3 className="job-status">
                    Full Time: {info.isFullTime ? 'Yes' : 'No'}
                  </h3>
                  <Link className="links" to={'/employee/' + info.id}>
                    Employee Profile
                  </Link>
                </div>{' '}
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}
export default AllEmployees
