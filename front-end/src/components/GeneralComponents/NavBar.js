import styled from 'styled-components'

import { Link } from 'react-router-dom'


const NavBar = () => {

  return (

    <Nav>

      <ul>

        <Link to="/">

          <li>Home</li>

        </Link>

        <Link to="/about">

          <li>About</li>

        </Link>

        <Link to="/contact">

          <li>Contact</li>

        </Link>

        <Link to="/others">

          <li>Others</li>

        </Link>

      </ul>

    </Nav>

  )

}

const Nav = styled.nav`
  display: block;
  width: 100%;
  font-family: 'Times New Roman', Times, serif;
  padding-top: 1rem;

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
    margin: 0 auto;
    width: 80%;
    border-radius: 2rem;
    overflow: hidden;

    a{
      display: inline-block;
      color: #cecece;
      padding: .5rem 1rem;
      text-decoration: none;
      flex: 1;
      text-align: center;
      transition: background-color .5s;

      li{
        list-style-type: none;
      }

      &:hover{
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default NavBar;