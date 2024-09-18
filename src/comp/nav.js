import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import {Link,NavLink} from 'react-router-dom';
import './nav.css'
const Nav = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
  


    <div className="navbar">
      <nav>
        <div className="logo"><Link to=""><h1>ShopNest</h1></Link></div>
        <div className="pages">
          <ul>
          <li><NavLink to='/' className='link'>Home</NavLink></li>
          <li><NavLink to='/shop' className='link'>Shop</NavLink></li>
          <li><NavLink to='/about' className='link'>About</NavLink></li>
          </ul>
        </div>
        <div className='search_box'>
             <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
             <button onClick={searchproduct}><AiOutlineSearch /></button>
           </div>
        <div className="icons">
         <div className='offer'>
         <Link to='/cart'  ><MdOutlineShoppingBag /></Link>
         </div>
         <div className='last_header'>
          <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='iconlog'>
                <CiUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div>
        </div>
         
              
         
          {
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          }
        </div>
 
      </nav>
    </div>



    </>
  )
}

export default Nav




// import React from 'react'

// const nav = () => {
//   return (
//     <div>
//       <div className="navbar">
//       <nav>
//         <div className="logo"><Link to=""><h1>ShopNest</h1></Link></div>
//         <div className="pages">
//           <ul>
//           <li><Link to='/' className='link'>Home</Link></li>
//           <li><Link to='/shop' className='link'>Shop</Link></li>
//           <li><Link to='/about' className='link'>About</Link></li>
//           </ul>
//         </div>
//         <div className='search_box'>
//              <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
//              <button onClick={searchproduct}><AiOutlineSearch /></button>
//            </div>
//         <div className="icons">
//           <ul>
//             <li>
//             <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
//              <button onClick={searchproduct}><AiOutlineSearch /></button>
//             </li>
//             <li>
//             <Link to='/cart'  ><MdOutlineShoppingBag /></Link>
              
//             </li>
           
//           </ul>
//           {
//             isAuthenticated ? 
//             // if user is login then Logout Button will shown and also user profile         
//             <div className='user'>
//               <div className='icon'>
//                 <CiLogout />
//               </div>
//               <div className='btn'>
//                 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
//               </div>
//             </div>
//           :
//           // if user is not Login then login button will shown
//           <div className='user'>
//             <div className='icon'>
//               <FiLogIn />
//             </div>
//             <div className='btn'>
//               <button onClick={() => loginWithRedirect()}>Login</button>
//             </div>
//           </div>
//           }
//         </div>
//         <div className='last_header'>
//           <div className='user_profile'>
//             {
//               // User Profile Will Shown Here
//               isAuthenticated ?
//               <>
//               <div className='icon'>
//                 <CiUser />
//               </div>
//               <div className='info'>
//                 <h2>{user.name}</h2>
//                 <p>{user.email}</p>
//               </div>
//               </>
//               :
//               <>
//               <div className='icon'>
//                 <CiUser />
//               </div>
//               <div className='info'>
//                 <p>Please Login</p>
//               </div>
//               </>
//             }
//           </div>
//         </div>
//       </nav>
//     </div>

//     </div>
//   )
// }

// export default nav
