import { useSelector } from 'react-redux';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

export default function UserProfile() {
  const user = useSelector(state => state.user.data);

  if (!user) return <p>Loading...</p>;

  return (
    <Card style={{ maxWidth: 500, margin: 'auto', marginTop: 32 }}>
      <CardContent>
        <Avatar src={user.image} style={{ width: 80, height: 80, margin: 'auto' }} />
        <Typography variant="h5" align="center">{user.firstName} {user.lastName}</Typography>
        <Typography align="center">{user.gender}, {user.age} years</Typography>
        <Typography variant="h6" style={{ marginTop: 16 }}>Address</Typography>
        <Typography>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}, {user.address.country}</Typography>
        <Typography variant="h6" style={{ marginTop: 16 }}>Work</Typography>
        <Typography>{user.company.name} - {user.company.department} ({user.company.title})</Typography>
        <Typography variant="h6" style={{ marginTop: 16 }}>Contact</Typography>
        <Typography>{user.firstName} {user.lastName}</Typography>
        <Typography>{user.phone}</Typography>
        <Typography>{user.email}</Typography>
      </CardContent>
    </Card>
  );
}
