import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeData = props => {
  const [employeeData, setEmployeeData] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/ilive/Employees/${props.match.params.id}`
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1 className="directory-title">Employee Information</h1>
      <main className="employee-section">
        {' '}
        <div className="employee-detailed-div">
          <div className="employee-detailed-info">
            <img className="employee-pic" src={employeeData.profileImage} />
            <h2 className="employee-name">
              {employeeData.firstName} {employeeData.lastName}
            </h2>
            <h3 className="employee-title">{employeeData.jobTitle}</h3>

            <div className="info">
              <strong>Hire Date: </strong>
              {employeeData.hiredDate}
            </div>
            <div className="info">
              <strong>Phone Number: </strong>
              {employeeData.phoneNumber}
            </div>
            <div className="info">
              <strong>Email Address: </strong>
              {employeeData.email}
            </div>
            <div className="info">
              <strong>Full Time:</strong>{' '}
              {employeeData.isFullTime ? 'Yes' : 'No'}
            </div>
            <div className="info">
              <strong>PTO:</strong> {employeeData.ptoHours} hours
            </div>
          </div>

          <div>
            <h2 className="personal-info">Personal Information</h2>
            <div className="info">
              <strong>Date of Birth: </strong>
              {employeeData.birthday}
            </div>
            <div className="info">
              <strong>Address: </strong>
              {employeeData.address}
            </div>
            <div className="info">
              {employeeData.city}, {employeeData.state}
              {employeeData.zip}
            </div>

            <div>
              <h2 className="ice-info">In Case of Emergency</h2>
              <div className="info">
                <strong>Emergency Contact: </strong>
                {employeeData.emergencyContactPerson}
              </div>
              <div className="info">
                <strong>Emergency Contact Phone: </strong>
                {employeeData.emergencyContactPhone}
              </div>
              <div className="info">
                <strong>Emergency Contact Address: </strong>{' '}
                {employeeData.emergencyContactAddress}
              </div>
            </div>
          </div>
        </div>
        <footer className="employee-footer"></footer>
      </main>
    </>
  )
}
export default EmployeeData
