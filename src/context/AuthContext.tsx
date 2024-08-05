import { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext:any = createContext(null);
export const AuthProvider = ( {children} : any ) => {
  const [user, setUser] = useState(getUsername());
  function getUsername() {
    const temp:string = localStorage.getItem('username')!;
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  }
  const navigate = useNavigate();
  const login = (user:string) => setUser(user);
  const logout = () => {
    setUser('');
    navigate('/login');
  };

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
