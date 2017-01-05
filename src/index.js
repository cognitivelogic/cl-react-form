// @flow
import React from 'react';
import {FieldType, FormPropsType} from './flow-declarations';
import FormGroups from './FormGroups';

const render = (props: FormPropsType): React$Element<any> => {
    if (props.layout) {
      const Layout = props.layout;
      return <Layout {...props} />;
    }
    return (<form>
    <FormGroups {...props} />
  </form>);
  },

  // Helper to get a field
  getField = (fields: FieldType[], key: string): FieldType => {
    return fields.find((f: FieldType): FieldType => f.name === key);
  };

export default render;

export {
  getField
};
