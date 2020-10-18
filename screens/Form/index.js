import React, { useState } from 'react';
import UI from './UI';

/**
 navigation.navigate('Form', {
      name: "Title", // Title of page
      screen: "TeamSettingsScreen", // page to return to
      post: "newManager", // When submitted the useEffect it activates
      form: [], // Fields of the form array of objects { text, key, value }
      update: "newManager", // When clicked on item to activate the useEffect
      list: [Items], // List of items to activate 
    });
 */

const index = ({ navigation, route }) => {
  const [form, setForm] = useState(route.params.form);

  // This function navigates back to a screen with the id of the object you wish to reactivate
  const activateType = (id) => {
    navigation.navigate(route.params.screen, {
      [`${route.params.update}`]: id,
    });
  };

  const props = {
    navigation,
    form,
    setForm,
    activateType,
    route,
    fields: route.params.fields,
  };

  return <UI {...props} />;
};

export default index;
