import React, { createContext } from 'react';

export const TabContext = createContext({});

export const TabContextProvider = (props) => {
  // console.log('otherUserRatings, team');
  // console.log(typeof otherUserRatings, typeof team);
  const { otherUserRatings, team } = props;
  const value = otherUserRatings !== undefined ? otherUserRatings : team || null;
  const type = otherUserRatings !== undefined ? 'personal' : team ? 'team' : 'standard';
  return <TabContext.Provider value={{ type, value }}>{props.children}</TabContext.Provider>;
};

const withTabContext = (Component) => {
  class withTabComponent extends React.Component {
    render() {
      return (
        <TabContext.Consumer>
          {(tabContext) => {
            return <Component tabContext={tabContext} {...this.props} />;
          }}
        </TabContext.Consumer>
      );
    }
  }

  return withTabComponent;
};

export default withTabContext;
