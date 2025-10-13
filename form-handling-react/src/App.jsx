import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';


function App() {
  return (
    <div>
      {/* You can comment out one when testing */}
      {/* <RegistrationForm /> */}
      <FormikForm />
    </div>
  );
}

export default App;
