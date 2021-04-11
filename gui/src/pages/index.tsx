import React, { ReactElement } from 'react';

export const IndexPage = (): ReactElement => {
  const Link = (props: Record<string, unknown>): ReactElement => (
    <a
      {...props}
      className="text-indigo-500 hover:text-indigo-700 ease-in-out"
    />
  );
  return (
    <div className="bg-gray-50 p-10">
      Index Page{' '}
      <div>
        <Link href="#">Link</Link>
      </div>
    </div>
  );
};
