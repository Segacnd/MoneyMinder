import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/inputs/Input';
import { PasswordInput } from '@/components/inputs/PasswordInput';
import Seo from '@/components/Seo';

import {
  emailTemplate,
  nameTemplate,
  passwordErrorsTemplate,
} from '@/yup/rules';
import { registrationSchema } from '@/yup/schemas';

interface AuthForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function RegistrationPage() {
  const { handleSubmit, control, watch, formState } = useForm<AuthForm>({
    mode: 'onChange',
    resolver: yupResolver(registrationSchema),
    criteriaMode: 'all',
  });
  const handleRegistration = (data: AuthForm) => alert(data);
  const fNameValue = watch('firstName');
  const lNameValue = watch('lastName');
  const pValue = watch('password');
  const mailValue = watch('email');
  const pathErrors = formState.errors.password?.types?.matches;
  const mailPathErrors = formState.errors.email?.types?.matches;
  const firstNamePath = formState.errors.firstName?.types?.matches;
  const lastNamePath = formState.errors.lastName?.types?.matches;

  const mapValidationErrors = <T,>(value: T): string[] => {
    if (typeof value === 'string') {
      return [value];
    }
    if (Array.isArray(value)) {
      return value;
    }
    return [];
  };

  const passwordErrors = mapValidationErrors(pathErrors).concat(
    mapValidationErrors(formState.errors.password?.types?.min)
  );
  const emailErrors = mapValidationErrors(mailPathErrors);
  const firstNameErrors = mapValidationErrors(firstNamePath);
  const lastNameErrors = mapValidationErrors(lastNamePath);

  return (
    <div className='absolute  inset-0 z-10 flex items-center justify-center overflow-hidden bg-[#23232307] backdrop-blur-lg'>
      <form
        autoComplete='off'
        className='relative flex w-[450px] flex-col gap-4  p-12 p-4 text-white '
        onSubmit={handleSubmit(handleRegistration)}
      >
        <Seo templateTitle='Registration' />
        <h2 className='mb-4 text-center'>Registration</h2>
        <Controller
          defaultValue=''
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Enter your email'
              type='text'
              errors={emailErrors}
              errorsTemplate={emailTemplate}
              isClear={!!mailValue?.length}
              {...field}
            />
          )}
        />
        <Controller
          defaultValue=''
          name='password'
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder='Create password'
              errors={passwordErrors}
              errorsTemplate={passwordErrorsTemplate}
              isClear={!!pValue?.length}
              {...field}
            />
          )}
        />
        <Controller
          defaultValue=''
          name='firstName'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Enter your first name'
              type='text'
              errors={firstNameErrors}
              errorsTemplate={nameTemplate}
              isClear={!!fNameValue?.length}
              {...field}
            />
          )}
        />
        <Controller
          defaultValue=''
          name='lastName'
          control={control}
          render={({ field }) => (
            <Input
              errors={lastNameErrors}
              errorsTemplate={nameTemplate}
              placeholder='Enter your last name'
              type='text'
              isClear={!!lNameValue?.length}
              {...field}
            />
          )}
        />
        <Button
          disabled={!formState.isValid}
          className='mt-10 flex w-full justify-center'
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
