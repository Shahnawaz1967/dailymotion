import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from '../firebass'; // Import auth from firebase
import { setUser } from "../features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user); // Get user from state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate("/");
    } catch (error) {
      console.error("Error logging in: ", error);
      // Display error toast message
      toast.error("Error logging in. Please try again.");
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      dispatch(setUser(null)); // Clear user state
      navigate("/login"); // Redirect to login page
    }).catch((error) => {
      console.error("Error signing out: ", error);
      // Display error toast message
      toast.error("Error signing out. Please try again.");
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Welcome, {user.email}</h2>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log In
              </button>
            </form>
          </>
        )}
      </div>
      <ToastContainer /> {/* Include ToastContainer for toasts */}
    </div>
  );
};

export default Login;
