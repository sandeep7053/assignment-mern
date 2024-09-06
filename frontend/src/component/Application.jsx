// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Applicartion.css'


const generateTimeSlots = (startTime, endTime, interval) => {
  const slots = [];
  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    slots.push(new Date(currentTime));
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }
  return slots;
};

const Application = () => {
  const startTime = new Date();
  startTime.setHours(9, 0, 0, 0);

  const endTime = new Date();
  endTime.setHours(15, 0, 0, 0);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots] = useState(generateTimeSlots(startTime, endTime, 30));

  const [role, setrole] = useState()
  const [data, setdata] = useState({
    email: "",
    startDay: "",
    lastDay: "",
    satrttime: '',
    endtime: "",
    name: ""
  })

  const handleonchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleonsubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className='container-flex-item'>
        <div className='first-container'>
          <h1>Login User && Admin</h1>
          <div className='user-admin'>
            <div className='user'>
              <label htmlFor="">
                <input type="radio"
                  value='user'
                  checked={role === 'user'}
                  onChange={() => setrole('user')}

                />User
              </label>

            </div>
            <div>
              <label htmlFor="">
                <input type="radio"
                  value='Admin'
                  checked={role === 'Admin'}
                  onChange={() => setrole('Admin')}

                />Admin
              </label>
            </div>
          </div>
          <div className='container pt-3 mt-20'>
            <form className='container-form ' onSubmit={handleonsubmit}>
              <div >
                {
                  role === 'user' && (
                    <>
                      <div className='container-form-action'>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">User Email:</label>
                          <input
                            className='setdatainput'
                            type="email"
                            name='email'
                            value={data.name}
                            onChange={handleonchange}
                          />
                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">Start Date:</label>
                          <input
                            className='inputsetdata'
                            type="date"
                            name='satrtDay'
                            value={data.name}
                            onChange={handleonchange}
                          />
                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">Last Date:</label>
                          <input type="date"
                            name='lastDay'
                            value={data.name}
                            onChange={handleonchange}
                          />

                        </div>

                      </div>




                    </>
                  )
                }
                {
                  role === 'Admin' && (
                    <>
                      <div className='container-form-action'>

                        <div className='inputdata'>
                          <label className='labeldata' htmlFor=""> Email</label>
                          <input type="email"
                            name='email'
                            value={data.name}
                            onChange={handleonchange}
                          />
                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">Satrt Date:</label>
                          <input type="date"
                            name='startDay'
                            value={data.name}
                            onChange={handleonchange}
                          />
                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">End date:</label>
                          <input type="date"
                            name='lastDay'
                            value={data.name}
                            onChange={handleonchange}
                          />

                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">Start Time:</label>
                          <input type="time"
                            name='starttime'
                            value={data.name}
                            onChange={handleonchange}
                          />

                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">End Time:</label>
                          <input type="time"
                            name='endtime'
                            value={data.name}
                            onChange={handleonchange}
                          />

                        </div>
                        <div className='inputdata'>
                          <label className='labeldata' htmlFor="">Name:</label>
                          <input type="text"
                            name='name'
                            value={data.name}
                            onChange={handleonchange}
                          />
                        </div>
                      </div>
                    </>
                  )
                }

              </div>
              <button className='button' type='submit'>Submit</button>
            </form>
          </div>




        </div>
        <div className='time-container'>
          {
            role === 'user' && (
              <>
                <div className='bookslot'>
                  <h3>Duration 30 min</h3>
                  <div className="slots">
                    {slots.map((slot, index) => (
                      <button
                        key={index}
                        className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
                        onClick={() => handleSlotClick(slot)}
                      >
                        {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </button>
                    ))}
                  </div>
                  <div>

                    {selectedSlot && (
                      <div>
                        <br />
                        <h4>Selected time Slots:</h4>
                        <p>{selectedSlot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    )}


                  </div>


                </div>
              </>
            )
          }
          {

            role === 'Admin' && (
              <>
                <div>
                  <h3>Duration 30 min</h3>
                  <div className="slots">
                    {slots.map((slot, index) => (
                      <button
                        key={index}
                        className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
                        onClick={() => handleSlotClick(slot)}
                      >
                        {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </button>
                    ))}
                  </div>
                  <div>
                    {selectedSlot && (
                      <div>
                        <br />
                        <h4>Selected time Slots:</h4>
                        <p>{selectedSlot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    )}


                  </div>


                </div>
              </>
            )

          }
        </div>
      </div>

    </div>
  );
};

export default Application;
