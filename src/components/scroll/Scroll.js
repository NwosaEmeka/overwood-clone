import React, {useState, useEffect} from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styled from 'styled-components'

function Scroll() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  const handleScroll = () => {
    let scrollPos = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;

    if (scrollPos >= 500) {
      setShowScroll(true)
    }
    else {
      setShowScroll(false)
    }
  }
  const handleScrollClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    window.scrollY = 0
  }

  // Style

  const ScrollContainer = styled.div`
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.light_green};
    border-radius:5px;
    cursor: pointer;
    display: ${props => props.show ? "block" : "none"};
    transition: all 0.25s linear;

    &:hover {
      background-color: #000;
    }
  `
  return (
    <ScrollContainer
      show={showScroll}
      onClick={handleScrollClick}
    >
      <FaChevronUp style={{fill: "#FFF"}}/>
    </ScrollContainer>
  )
}

export default Scroll
