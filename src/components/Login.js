// import React, { useState } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../Firebase';

// const provider = new GoogleAuthProvider();

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault(); 
//     signInWithPopup(auth, provider)
//     .then((result ) => { 
//       const auth = getAuth();
//       const provider = new GoogleAuthProvider();
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;


//       console.log( provider, user, token)
//     })

    
//   }



//   return (
//     <div className="loginPage">
//       <div className="loginContainer">
//         <form onSubmit={handleLogin}>
//           {/* <h2>Login to see your favourites!</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /> */}
//           <button className="loginButton" onClick={handleLogin}>
//             Log in with Google
//           </button>
//           {error && <p className="errorMessage">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;