import * as yup from 'yup';

import { emailSchema, nameSchema, passwordSchema } from '@/yup/rules';

export const registrationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
});
