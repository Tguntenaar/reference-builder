/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { UserContext } from './UserContext';

const withUser = (Component) => {
  class withUserComponent extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {(userContext) => {
            // TODO: checks hier
            return <Component userContext={userContext} {...this.props} />;
          }}
        </UserContext.Consumer>
      );
    }
  }

  return withUserComponent;
};

export default withUser;
