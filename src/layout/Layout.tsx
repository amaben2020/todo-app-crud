import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-[50px] max-w-[1059px] flex min-h-[800px] bg-gray-100">
      {children}
    </div>
  );
};

export default Layout;
