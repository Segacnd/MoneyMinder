import * as yup from 'yup';

import {
  emailSchema,
  nameSchema,
  numberField,
  passwordSchema,
  requiredField,
} from '@/yup/rules';

export const registrationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
});

export const incomeSchema = yup.object().shape({
  jobTitle: nameSchema,
  currency: requiredField,
  incomeDate: requiredField,
  ammount: numberField,
});
