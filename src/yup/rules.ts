import * as yup from 'yup';
const requiredError = "Field can't be empty.";

const stringRules = {
  latinPattern: /((?=.*[a-z]){1})/,
  numberPattern: /(?=.*\d)/,
  bigLetter: /((?=.*[A-Z]){1})/,
};

const emailRules = {
  mailPattern:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
};

export const emailSchema = yup
  .string()
  .required(requiredError)
  .matches(emailRules.mailPattern, 'Incorrect email');

export const passwordSchema = yup
  .string()
  .required(requiredError)
  .min(8, '8 characters minimum')
  .matches(stringRules.latinPattern, 'Latin letter')
  .matches(stringRules.bigLetter, 'A capital(uppercase) letter')
  .matches(stringRules.numberPattern, 'A number');

export const nameSchema = yup
  .string()
  .required(requiredError)
  .matches(stringRules.latinPattern, 'Should contain latin letters');

export const requiredField = yup.string().required(requiredError);

export const numberField = yup
  .string()
  .required(requiredError)
  .matches(stringRules.numberPattern, 'A number');

export const passwordErrorsTemplate = [
  'Latin letter',
  'A capital(uppercase) letter',
  'A number',
  '8 characters minimum',
];
export const emailTemplate = ['Incorrect email'];
export const nameTemplate = ['Should contain latin letters'];
export const dailyLimitTemplate = [
  'For add dailly limit, you need to be shure that you add at least one income',
];
