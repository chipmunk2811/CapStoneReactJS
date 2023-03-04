import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

export default function Booking() {
  const params = useParams();

  if (!localStorage.getItem("User")) return <Navigate id={params.id} replace to='/auth' />;
  return (
    <div>Booking {params.id}</div>
  )
}
