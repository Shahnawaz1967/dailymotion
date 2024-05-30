import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebass'; // Make sure the path to your firebase config is correct
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id });
      });
      console.log("Fetched users:", userArray); // Log fetched users
      setUsers(userArray);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserCredentials();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkUserCredentials = () => {
    const user = users.find(user => 
      user.user.email === formData.email && user.user.password === formData.password
    );

    if (user) {
      toast.success('User logged in successfully', {
        position: 'bottom-right',
        autoClose: 5000,
        theme: 'dark'
      });
      localStorage.setItem("user", JSON.stringify(user));
      closeForm();
      navigate("/");
    } else {
      toast.error('Invalid Credentials', {
        position: 'top-right',
        autoClose: 5000
      });
      console.log("Invalid credentials for:", formData); // Log invalid credentials
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
