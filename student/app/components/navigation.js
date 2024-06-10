import React from 'react';
import { Flex , Avatar  } from '@radix-ui/themes';
import Link from 'next/link'
let color = `bg-black/30 backdrop-blur-lg`
const dark ='dark'
const light = 'light'
const Navigation = ({buttons , theme}) => {
    let color = theme === dark ? `bg-black ` : `bg-white/30 backdrop-blur-lg`;
    return (
        <nav className={` z-50 w-full flex items-center justify-between  ${color} text-white p-5`}>
            <div className="flex items-center">
                <h1 className="ml-2 text-xl font-bold">
                    SM
                </h1>
                <h1 className="ml-2 text-lg font-semibold">Student Management</h1>
            </div>
           {buttons && <div>
                <Link href="/register"><button className="bg-white text-black px-4 mx-2 py-2 rounded">Login</button></Link>
            </div>}
            {!buttons && <div>
                
                <Flex gap="1" style={{marginBottom:10,marginTop:20}}>
  <div >
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
style={{ width: 50, height: 50 , borderRadius:50}}
/>
      <Avatar  />
  </div>
  
</Flex>
Name
            </div>}
        </nav>
    );
};

export default Navigation;