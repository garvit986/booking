import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import ServiceDetails from './components/ServiceDetails';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';
import { FormData} from './types'

function App() {
  const [formData, setFormData] = useState<FormData>({})
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element= {<PersonalDetails formData={formData} setFormData={setFormData}  />} />
        <Route path = '/services' element= {<ServiceDetails formData={formData} setFormData={setFormData}  />} />
        <Route path = '/bookingdetails' element= {<BookingDetails formData={formData} setFormData={setFormData}  />} />
        <Route path = '/confirmation' element= {<Confirmation formData={formData}  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
