import React, {useState} from 'react'
import { Nav, Button } from 'react-bootstrap';

export const NavigationBar = () => {
    return ( 
        <Nav class="navbar navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Memory Lake</a>
        <Button class="navbar-toggler ml-dark" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </Button>
    </Nav>
    )
}