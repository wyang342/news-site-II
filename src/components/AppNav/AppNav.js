import React, { Component } from 'react';

class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <nav>
        {navItems.map((navItem) =>
          <a href="#" onClick={ () => handleNavClick(navItem.value)} >
            {navItem.label} |
          </a>
        )}
      </nav>
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
