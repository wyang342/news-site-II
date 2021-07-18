import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class AppNav extends Component {
    render() {
        const { navItems, handleNavClick } = this.props;

        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        {navItems.map((navItem, index) =>
                            <Nav.Link key={index} href="#" onClick={() => handleNavClick(navItem.value)} >
                                {navItem.label}
                            </Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
