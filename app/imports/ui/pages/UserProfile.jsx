import React from 'react';
import UserBanner from '../components/UserBanner';
import UserInfo from '../components/UserInfo';

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  render() {
    return (
        <div>
          <UserBanner/>
          <UserInfo/>
        </div>
    );
  }
}

export default UserProfile;
