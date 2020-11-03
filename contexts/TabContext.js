import React, { createContext } from 'react';

export const TabContext = createContext({});

export const TabContextProvider = (props) => {
  // console.log('personalRatings, team');
  // console.log(typeof personalRatings, typeof team);
  const { personalRatings, team } = props;
  const value = personalRatings !== undefined ? personalRatings : team || null;
  const type = personalRatings !== undefined ? 'personal' : team ? 'team' : 'standard';
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
