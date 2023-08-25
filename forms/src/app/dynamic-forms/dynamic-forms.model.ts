import { ValidatorFn, Validators } from '@angular/forms';

export interface DynamicFormConfig {
  description: string;
  controls: {
    [key: string]: DynamicControl;
  };
}

export interface DynamicControl<T = string> {
  controlType: 'input' | 'select';
  type?: string;
  label: string;
  value: T | null;
  options?: DynamicOptions[];
  validators?: {
    [key in ValidatorKeys]?: unknown;
  };
}

export interface DynamicOptions {
  label: string;
  value: string;
}

type ValidatorKeys = keyof Omit<typeof Validators & CustomValidators, 'prototype' | 'compose' | 'composeAsync'>;
type CustomValidators = { banWords: ValidatorFn };
