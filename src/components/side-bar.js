import React from 'react';
import './side-bar-styles.css'

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <li style={{ marginBottom: '20px' }}>Meus cursos</li>
        <li style={{ marginBottom: '20px' }}>Cursos disponíveis</li>
      </ul>
    </div>
  )
}

export default SideBar