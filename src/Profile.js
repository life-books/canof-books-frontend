import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import { Container } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Container id='user'>
        <img id='ppic' src={user.picture} alt={user.name} />
        <h2 id='name'>{user.name}</h2>
        <p>{user.email}</p>
        </Container>
      </div>
    )
  );
};

export default Profile;