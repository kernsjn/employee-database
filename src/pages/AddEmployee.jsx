import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = () => {
  const [resetForm, setResetForm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [isFullTime, setIsFullTime] = useState(true)
  const [profileImage, setProfileImage] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('')
  const [ptoHours, setPtoHours] = useState('')

  const submitData = async event => {
    event.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/ilive/Employees',

      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hireDate,
        isFullTime: isFullTime,
        profileImage: profileImage,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        emergencyContactPerson: emergencyContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactAddress: emergencyContactAddress,
        ptoHours: ptoHours,
      }
    )
    console.log(resp.data)
    setResetForm(true)

    // window.location.reload(false)
  }

  return (
    <>
      <h1 className="directory-title">Add an Employee</h1>
      <main className="form-section">
        {resetForm && <Redirect to="/" />}
        <form onSubmit={submitData} className="add-employee-form">
          <div className="form">
            <div className="inside-form">
              <label htmlFor="first-name">First Name:</label>
              <input
                className="input-form"
                onChange={e => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
                type="text"
              />
            </div>
            <div className="inside-form">
              <label htmlFor="last-name">Last Name:</label>
              <input
                className="input-form"
                onChange={e => {
                  setLastName(e.target.value)
                }}
                value={lastName}
                type="text"
              />
            </div>
            <div className="inside-form">
              <label htmlFor="birthday">Date of Birth:</label>
              <input
                className="input-form"
                onChange={e => {
                  setBirthday(e.target.value)
                }}
                type="date"
                value={birthday}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="birthday">Hire Date:</label>
              <input
                className="input-form"
                onChange={e => {
                  setHireDate(e.target.value)
                }}
                type="date"
                value={hireDate}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="full-time">Full Time:</label>

              <select
                className="input-form"
                onChange={e => {
                  setIsFullTime(e.target.value)
                }}
                type="text"
                value={isFullTime}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="inside-form">
              <label htmlFor="profile-image">Profile Image:</label>
              <input
                className="input-form"
                onChange={e => {
                  setProfileImage(e.target.value)
                }}
                type="text"
                value={profileImage}
              />
            </div>

            <div className="inside-form">
              <label htmlFor="job-title">Job Title:</label>
              <input
                className="input-form"
                onChange={e => {
                  setJobTitle(e.target.value)
                }}
                type="text"
                value={jobTitle}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="job-description">Job Description:</label>
              <input
                className="input-form"
                onChange={e => {
                  setJobDescription(e.target.value)
                }}
                type="text"
                value={jobDescription}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="phone">Phone Number:</label>
              <input
                className="input-form"
                onChange={e => {
                  setPhoneNumber(e.target.value)
                }}
                type="text"
                value={phoneNumber}
              />
            </div>

            <div className="inside-form">
              <label htmlFor="address">Address:</label>
              <input
                className="input-form"
                onChange={e => {
                  setAddress(e.target.value)
                }}
                type="text"
                value={address}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="city">City:</label>
              <input
                className="input-form"
                onChange={e => {
                  setCity(e.target.value)
                }}
                type="text"
                value={city}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="state">State:</label>
              <input
                className="input-form"
                onChange={e => {
                  setState(e.target.value)
                }}
                type="text"
                value={state}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="zip">Zip:</label>
              <input
                className="input-form"
                onChange={e => {
                  setZip(e.target.value)
                }}
                type="text"
                value={zip}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="email">Email:</label>
              <input
                className="input-form"
                onChange={e => {
                  setEmail(e.target.value)
                }}
                type="text"
                value={email}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="ice-person">Emergency Contact Person:</label>
              <input
                className="input-form"
                onChange={e => {
                  setEmergencyContactPerson(e.target.value)
                }}
                type="text"
                value={emergencyContactPerson}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="ice-phone">Emergency Contact Phone:</label>
              <input
                className="input-form"
                onChange={e => {
                  setEmergencyContactPhone(e.target.value)
                }}
                type="text"
                value={emergencyContactPhone}
              />
            </div>
            <div className="inside-form">
              <label htmlFor="ice-email">Emergency Contact Email:</label>
              <input
                className="input-form"
                onChange={e => {
                  setEmergencyContactAddress(e.target.value)
                }}
                type="text"
                value={emergencyContactAddress}
              />
            </div>

            <div className="inside-form">
              <label htmlFor="pto">PTO:</label>
              <input
                className="input-form"
                onChange={e => {
                  setPtoHours(e.target.value)
                }}
                type="text"
                value={ptoHours}
              />
            </div>
            <div className="button">
              <button className="submit-emp" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
export default AddEmployee
