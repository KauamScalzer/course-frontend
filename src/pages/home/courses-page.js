import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/side-bar'
import './courses-styles.css'
import api from '../../services/api'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await api.get('/course?take=10&skip=1')
        console.log(response.data.result)
        setCourses(response.data.result)
      } catch (error) {
        console.error('Erro ao buscar cursos:', error)
      }
    }

    getCourses();
  }, [])

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h2>Cursos Disponíveis</h2>
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <img src={course.thumb} alt={course.name} />
            <p>{course.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage