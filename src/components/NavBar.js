import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions';
import Nav from 'react-bootstrap/Nav'


class NavBar extends React.Component {

  //   <Nav variant="tabs" defaultActiveKey="/home">
  //   <Nav.Item>
  //     <Nav.Link href="/home">Active</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="disabled" disabled>
  //       Disabled
  //     </Nav.Link>
  //   </Nav.Item>
  // </Nav>

  renderTabs() {

    const navBarTabs = [
      {
        name: 'Start',
        path: "/home"
      },
      {
        name: 'Quiz',
        path: "/quiz"
      },
      {
        name: 'Day Review',
        path: "/day"
      },
      {
        name: 'Overview',
        path: "/data"
      }
    ];

    if (this.props.auth.isAuthenticated) {

      return navBarTabs.map((tab, index) => {
        return (
          <NavLink
            className="nav-link"
            // to={`exact ${tab.path}`}
            to={tab.path}
            key={index}
          >
            <li className="nav-item">{tab.name}</li>
          </NavLink>
        );
      });
    } else {
      return (
        <NavLink
          className="nav-link"
          to={navBarTabs[0].path}
        >
          <li className="nav-item">{navBarTabs[0].name}</li>
        </NavLink>
      )
    }

  }

  renderAuthButtons() {
    if (this.props.auth.isAuthenticated) {
      return (
        <button
          onClick={this.props.logOut}
        >
          Log Out
        </button>
      )
    } else {
      return (
        <a href="http://localhost:4000/auth/google">
          Log in with Google
        </a>
      )
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" >
          {this.renderTabs()}
          {this.renderAuthButtons()}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logOut })(NavBar);




// import React from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { logOut } from '../actions';


// class NavBar extends React.Component {

//   renderButtons() {

//     const buttons = [
//       {
//         name: 'Start',
//         path: "/"
//       },
//       {
//         name: 'Quiz',
//         path: "/quiz"
//       },
//       {
//         name: 'Day',
//         path: "/day"
//       },
//       {
//         name: 'All data',
//         path: "/data"
//       },
//       {
//         name: 'Users',
//         path: "/users"
//       },
//     ];

//     if (this.props.auth.isAuthenticated) {
//       return buttons.map((button, index) => {
//         return (
//           <NavLink
//             className="nav-link"
//             to={button.path}
//             key={index}
//           >
//             <li className="nav-item">{button.name}</li>
//           </NavLink>
//         );
//       });
//     } else {
//       return (
//         <NavLink
//           className="nav-link"
//           to={buttons[0].path}
//         >
//           <li className="nav-item">{buttons[0].name}</li>
//         </NavLink>
//       )
//     }

//   }

//   renderAuthButtons() {
//     if (this.props.auth.isAuthenticated) {
//       return (
//         <button
//           onClick={this.props.logOut}
//         >
//           Log Out
//         </button>
//       )
//     } else {
//       return (
//         <>
//           <a href="http://localhost:4000/auth/google">
//             Google
//           </a>
//           <a href="http://localhost:4000/auth/facebook">
//             Log in with Facebook
//           </a>
//         </>
//       )
//     }
//   }

//   render() {
//     return (
//       <div>
//         <ul className="nav nav-tabs" >
//           {this.renderButtons()}
//           {this.renderAuthButtons()}
//         </ul>
//       </div >
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth
//   }
// }

// export default connect(mapStateToProps, { logOut })(NavBar);