import React from 'react';
import Image from 'next/image';

const Loading = () => (
  <div className="flex justify-center my-64">
    <Image src="/icons/loading.gif" alt="loading" width={200} height={200} />
  </div>
);

export default Loading;
