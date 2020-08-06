import React, { useState } from 'react';
import UI from './UI';

const index = ({ navigation, route }) => {
  const [form, setForm] = useState(route.params.form);

  const props = {
    navigation,
    form,
    setForm,
    route,
    fields: route.params.fields,
  };

  return <UI {...props} />;
};

export default index;