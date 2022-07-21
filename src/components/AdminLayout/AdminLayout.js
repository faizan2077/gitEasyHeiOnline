
import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../actions/admin";
// import Head from "next/head";
// import Router, { useRouter } from 'next/router';
// import { ToastContainer, Slide } from 'react-toastify';
// import TopHeader from './TopHeader';
// import Navbar from './Navbar';
// import AdminNavbar from './AdminNavbar'
// import Footer from './Footer';
// import GoTop from './GoTop';
// import { useRecoilState } from 'recoil';
// import { qModalState, collapsedState, modalState, searchState, productsState } from '../../utils/recoil-atoms';
// import ProductsQuickViewModal from './ProductsQuickViewModal';
// import Loader from './Loader'
// import { isAuth } from '../../actions/auth';

const AdminLayout = ({ children, user }) => {
  const [isAdmin, setIsAdmin] = React.useState(0);
  
const  navigate=useNavigate()
  React.useEffect(() => {
       if(!isAuth() || !(isAuth().role === 1)){

         navigate('/'); 
       }
      //  console.log(isAuth())

  });
  

  return <>{isAuth() ? children : "Loading"}</>;
};

export default AdminLayout;
