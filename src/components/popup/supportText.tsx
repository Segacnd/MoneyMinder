import * as React from 'react';

export default function SupportText({ text }: { text: string }) {
  return (
    <div className=' bg-primary-700 absolute bottom-[120%] left-[10%] w-full min-w-fit rounded px-3 py-1 text-center text-white'>
      {text}
    </div>
  );
}
