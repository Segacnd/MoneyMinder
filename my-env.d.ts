/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />
declare module '*.svg' {
  import React from 'react';

  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default content;
}
