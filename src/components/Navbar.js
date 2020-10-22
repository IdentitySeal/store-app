import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../src/logo.svg"
export default class Navbar extends Component {

    render() {
        return (
            <nav className=" navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
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
            </nav>
        )

    }
}
const Button = styled.button`
    background: transparent;
    border-radius: .3rem;
    border: 2px solid var(--mainYellow);
    color: var(--lightBlue);
    margin: 0 1em;
    padding: 0.25em 1em;
`