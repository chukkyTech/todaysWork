import React from 'react'
import { useParams } from "react-router-dom";
  

export default function Routeparam() {
    const { id } = useParams();
    return (
        <div>
            Hello Class
        </div>
    )
}
