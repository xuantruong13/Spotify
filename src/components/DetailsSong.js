import React from 'react';

// import { Container } from './styles';

function DetailsSong() {
  return(
    <div className='col-span-1 p-4'>
        <h2 className='text-cyan-400 font-bold'>Now playing</h2>
        <h2 className='text-2xl text-neutral-400 '>Sing me to sleep</h2>
        <div className='w-[240px] m-auto mt-12'>
            <img src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" class="w-full" alt="avatar" />
        </div>
        <div className=' flex justify-evenly items-center mt-5'>
            <img src='https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a'className='w-[70px] rounded-full' alt='avt2' />
            <span className='text-white text-2xl'>Alan Walker</span>
        </div>
    </div>
  );
}

export default DetailsSong;