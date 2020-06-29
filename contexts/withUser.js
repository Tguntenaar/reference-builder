/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { UserContext } from './UserContext';

const withUser = (Component) => {
  class withUser extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {(userContext) => <Component userContext={userContext} {...this.props} />}
        </UserContext.Consumer>
      );
    }
  }

  return withUser;
};

export default withUser;
