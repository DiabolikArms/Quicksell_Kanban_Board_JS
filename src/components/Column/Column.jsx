import React, { useMemo } from "react"
import Card from "../Card"
import "./column.css"
import { GrAdd } from "react-icons/gr"
import { LuMoreHorizontal } from "react-icons/lu"
import { getPriorityIcon, getStatusIcon } from "../../utils/helper"
import UserIcon from "../UserIcon"

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy
    if (grouping === "priority") return groupBy
    if (grouping === "user") return userIdToData[groupBy].name
  }, [grouping, groupBy])

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy)
    if (grouping === "priority") return getPriorityIcon(groupBy)
    if (grouping === "user") {
      const userData = userIdToData[groupBy]
      return (
        <UserIcon
          name={userData.name}
          available={userData.available}
          userId={userData.id}
        />
      )
    }
  }, [grouping, groupBy])

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          <div className="icon-container">{icon}</div>
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <GrAdd size={12} />
          <LuMoreHorizontal size={14} />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map(ticket => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  )
}

export default Column
