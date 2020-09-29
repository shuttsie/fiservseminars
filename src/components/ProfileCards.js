import React, { useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Loading from '../components/Loading'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

const ProfileCards = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log(user);
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'shutts-test.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    <Card>
    <Image src={user.picture} wrapped ui={false} alt='Profile' className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'/>
    <Card.Content>
      <Card.Header><h2>Name: {user[`https://fiservseminars.com/first_name`]}{' '} {user[`https://fiservseminars.com/last_name`]}{' '}</h2></Card.Header>
      <Card.Meta>
        <p className='lead text-muted'>Email: {user.email}</p>
      </Card.Meta>
      <Card.Description>
        {userMetadata ? <h2>Bank Name: {userMetadata.bank_name}</h2> : 'no user metadata'}
        {userMetadata ? <h2>Bank Title: {userMetadata.bank_title}</h2> : 'no user metadata'}
       {userMetadata ? <h2>City: {userMetadata.city}</h2> : 'no user metadata'}
       {userMetadata ? <h2>State: {userMetadata.state}</h2> : 'no user metadata'}
       {userMetadata ? <h2>Seminar Date: {userMetadata.seminarDate}</h2> : 'no user metadata'}
      </Card.Description>
    </Card.Content>
  </Card>  
  );
};

export default withAuthenticationRequired(ProfileCards, {
    onRedirecting: () => <Loading />,
  });
