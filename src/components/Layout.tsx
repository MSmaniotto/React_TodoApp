import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
