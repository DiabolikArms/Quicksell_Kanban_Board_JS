import React, { useState, useMemo } from "react"
import "./usericon.css"

function UserIcon({ name, available, userId }) {
  const [hovered, setHovered] = useState(false)

  const text = useMemo(() => {
    return name
      .split(" ")
      .map(item => item[0])
      .join("")
  }, [name])

  return (
    <div
      className="usericon-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="usericon-text">{text}</div>
      ) : (
        <img
          src={`https://i.pravatar.cc/150?u=${userId}`}
          alt="user-avatar"
          className="usericon-avatar"
        />
      )}
      <div className={`user-status ${available ? "available" : ""}`} />
    </div>
  )
}

export default UserIcon
