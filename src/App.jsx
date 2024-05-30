import React from 'react';
import FunctionContextComponent from './FunctionContextComponent'
import './App.css'
import { ThemeProvider } from './ThemeContext';
import Button from './Button';

export default function App() {

  return (
    <>
      <ThemeProvider>
        <Button />
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
};



