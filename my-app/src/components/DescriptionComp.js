import React from "react"
import "./DescriptionComp.css"

const DescriptionComp = (props) => {
  return (
    <div className="desciption">
      <img src={props.imageURL} alt="no img" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default DescriptionComp
