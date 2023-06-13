import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/inputs/Input';
import { PasswordInput } from '@/components/inputs/PasswordInput';

import { mediumSecondShowAnimation } from '@/animations/animations';
import Pencil from '@/assets/icons/pencil';
import mockImg from '@/assets/images/Foto4ka.jpg';
interface ChangeUserInfo {
  login: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function ChangeUserInfo() {
  const { handleSubmit, control, watch, reset } = useForm<ChangeUserInfo>({
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const loginValue = watch('login');
  const mailValue = watch('email');
  const pValue = watch('password');
  const fNameValue = watch('firstName');
  const lNameValue = watch('lastName');

  const handleRegistration = () => {
    // here change user data
    // console.log(data)
    reset({});
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={mediumSecondShowAnimation}
      className='flex h-full w-2/5 flex-col items-center gap-1 rounded-2xl bg-black px-10 py-12 text-white'
    >
      <div className='relative'>
        <Image
          className='rounded-full'
          src={mockImg}
          width={150}
          height={150}
          alt='Picture of the author'
        />
        <input className='hidden' type='file' id='userAvatar' />
        <label
          htmlFor='userAvatar'
          className='bg-primary-300 absolute left-0 top-0 cursor-pointer rounded-full border-[2px] p-2'
        >
          <Pencil />
        </label>
      </div>
      <p className='text-placeGray'>@sega</p>
      <p className='text-2xl'>Bergei Svinskii</p>
      <form
        className='flex h-full w-full flex-col gap-4'
        onSubmit={handleSubmit(handleRegistration)}
      >
        <Controller
          defaultValue=''
          name='login'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Change login'
              type='text'
              isClear={!!loginValue?.length}
              {...field}
            />
          )}
        />
        <Controller
          defaultValue=''
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Change email'
              type='text'
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
              placeholder='Change password'
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
              placeholder='Change first name'
              type='text'
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
              placeholder='Change last name'
              type='text'
              isClear={!!lNameValue?.length}
              {...field}
            />
          )}
        />

        <Button
          type='submit'
          className='bg-primary-500 mt-auto flex w-full items-center justify-center'
        >
          save changes
        </Button>
      </form>
    </motion.div>
  );
}
