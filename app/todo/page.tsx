import React from 'react';

import Counter1 from './Todo1';
import Counter2 from './Todo2';

const page = () => {
  return (
    <div className='flex gap-2 flex-col flex-wrap'>
      <Counter1 />
      <Counter2 />
    </div>
  )
}

export default page
