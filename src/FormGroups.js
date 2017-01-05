// @flow
import React from 'react';
import Input from './Input';
import {FieldType} from './flow-declarations';

const FormGroups = (props: Object): React$Element<any> => {
  const inputs = props.fields.map((field: FieldType): React$Element<any> =>
    <Input field={field}
      value={props.data[field.name] || ''}
      errors={props.errors[field.name] || []}
      onChange={props.onChange} />
  );
  return <div>{inputs}</div>;
};
export default FormGroups;
