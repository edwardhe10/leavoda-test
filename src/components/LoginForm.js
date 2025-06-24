import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { setUser, setLoading, setError } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Check if empty
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    try {
      dispatch(setLoading());
      dispatch(login(username));

      const res1 = await fetch(`https://dummyjson.com/users/filter?key=username&value=${username}`);
      const data1 = await res1.json();
      const id = data1.users?.[0]?.id;

      if (!id) throw new Error('User not found');

      const res2 = await fetch(`https://dummyjson.com/users/${id}`);
      const data2 = await res2.json();

      dispatch(setUser(data2));
      navigate('/dashboard');
    } catch (err) {
      dispatch(setError(err.message));
      alert(`Login failed: ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', marginTop: '10%' }}>
      <TextField fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
      <Button fullWidth variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
        Submit
      </Button>
    </div>
  );
}
