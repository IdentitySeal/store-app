import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {Button} from "../components/Button"
import Logo from "../../src/logo.svg"
export default class Navbar extends Component {

    render() {
        return (
            <NavWrapper className=" navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5 nav-link text-white">
                        <Link to="/">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <Button>
                        <span className="pr-2 fa fa-cart-plus"></span>
                        cart
                    </Button>
                </Link>
            </NavWrapper>
        )

    }
}
const NavWrapper = styled.nav `
background-color: var(--mainBlue);
.nav-link{
    color:var(--mainWhite);
    font-size : 1.3rem;
    text-transform:capitalize;

}
`
// const Button = styled.button`
//     background: transparent;
//     text-transform: capitalize;
//     border-radius: .3rem;
//     border: 2px solid var(--lightBlue);
//     color: var(--lightBlue);
//     cursor:pointer ;
//     margin: 0 1em;
//     padding: 0.25em 1em;
//     transition: all 0.5s ease-in-out;
//     &:hover {
//         background-color : var(--lightBlue);
//         color: var(--mainWhite);
//     }
//     &:focus{
//         outline:none;
//     }
// `