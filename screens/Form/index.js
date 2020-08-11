import React, { useState } from 'react';
import UI from './UI';
import api from '../../apiwrapper';

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
