import React from 'react';

const NavBar = ({ component }: { component: React.ReactElement }) => {
  return (
    <div className="bg-blue h-[123px] mx-auto flex items-center justify-center  shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.3)]">
      {component}
    </div>
  );
};

export default NavBar;
