import React from 'react'
import {
  Card,
  CardHeader,
  CardText,
  CardLink
} from './CardsStyle'


function Cards({header, text, links, bkstyle, children}) {
  return (
    <Card primary={bkstyle}>
      {children}
      <CardHeader>{header}</CardHeader>
      <CardText>{text}</CardText>
      <CardLink to="/">{links}</CardLink>
    </Card>
  )
}

export default Cards
