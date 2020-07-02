import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Errors, Form, FormProps, validate } from '../../../../lib';

const DemoForm = () => {
  const [formData, setFormData] = useState<FormProps['data']>([
    {
      label: 'username', name: 'username', type: 'text', value: '',
      rules: [
        { isRequired: true, message: '必填项' },
        { minlength: 10, message: '长度不得小于10' },
        { maxlength: 20, message: '长度不得大于20' }
      ]
    },
    {
      label: 'password', name: 'password', type: 'password', value: '',
      rules: [
        { isRequired: true, message: '必填项' },
        { minlength: 10, message: '长度不得小于10' },
        { maxlength: 20, message: '长度不得大于20' }
      ]
    }
  ]);
  const [formErrors, setFormErrors] = useState<Errors | null>(null);
  const onSubmit = () => {
    const errors = validate(formData);
    setFormErrors(errors);
    if (!errors) console.log('校验通过');
  };
  return <div>
    <CodeShow
      title='基础用法'
    >
      <Form
        data={formData}
        errors={formErrors}
        onChange={data => setFormData(data)}
        buttons={[
          <Button type='primary' onClick={onSubmit}>Submit</Button>
        ]}
      />
    </CodeShow>
  </div>;
};

export default DemoForm;