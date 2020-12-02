import React from 'react';
import UserInfo from '../components/UserInfo';

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  render() {
    return (
        <div id="userprofile-page">
          <UserInfo/>
        </div>
    );
  }
}

export default UserProfile;
