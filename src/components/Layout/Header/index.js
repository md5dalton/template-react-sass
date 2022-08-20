import React from 'react'
import Logo from '../../UI/Logo'
import SideDrawerToggler from '../../UI/SideDrawerToggler'

import "./styles.sass"

export default () => (
    <header>
        <div className="flex-wrapper">
            <Logo />
            <SideDrawerToggler />
        </div>
    </header>
)