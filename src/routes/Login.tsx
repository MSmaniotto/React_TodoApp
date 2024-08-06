import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login }:any = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit : FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername('');
    console.log(location);
    navigate(from, { replace: true });
  };
  return (
    <div className='todos'>
      <Header>
        <h1>Login</h1>
      </Header>
      <div className={styles.formWrapper}>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className='input-text'
            placeholder="username"
            value={username}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;