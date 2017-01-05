// @flow
import React from 'react';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';
import {FieldOptionType, FieldType} from './flow-declarations';

type PropType = {
  field: FieldType,
  value: string,
  errors: string[],
  onChange: Function
};

const Input = ({
  field,
  value,
  errors,
  onChange
}: PropType): React$Element<any> => {
  let opts = null,
    errorBlock = null,
    validationState = null,
    componentClass = field.type || 'input',
    change,
    thisOnChange = field.onChange || onChange;
  change = (e: Event) => {
    let s = {};
    s[field.name] = e.target.value;
    thisOnChange(s);
  };

  if (errors.length > 0) {
    validationState = 'error';
    errorBlock = <HelpBlock>
      <i className="fa fa-exclamation-triangle" /> {errors.join(' ')}
    </HelpBlock>;
  }
  if (field.options) {
    opts = field.options.map(
      (opt: FieldOptionType, i: number): React$Element<any> => <option
        key={'field-option-wrapper-' + i}
        value={opt.value}>{opt.label}</option>
    );
  }
  return (
      <FormGroup
        validationState={validationState}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl
          componentClass={componentClass}
          value={value}
          onChange={change}>
          {opts}
        </FormControl>
        {errorBlock}
        <HelpBlock>{field.placeholder}</HelpBlock>
      </FormGroup>
  );
};

export default Input;
