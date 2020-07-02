import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Form, FormProps } from '../../../../lib';

const DemoForm = () => {
  const [formData, setFormData] = useState<FormProps['data']>([
    {
      label: 'username', name: 'username', type: 'text', value: '',
      rules: [
        { isRequired: true },
        { minlength: 10 },
        { maxlength: 20 }
      ]
    },
    { label: 'password', name: 'password', type: 'password', value: '' }
  ]);
  const onSubmit = () => {
    console.log('onSubmit');
  };
  return <div>
    <CodeShow
      title='基础用法'
    >
      <Form
        data={formData}
        onSubmit={onSubmit}
        onChange={data => setFormData(data)}
      />
    </CodeShow>
  </div>;
};

export default DemoForm;