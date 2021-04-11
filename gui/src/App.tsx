import React from 'react';

type Props = {
  name?: string;
};

const App = (props: Props) => {
  return <h1 className="text-blue-600">Application {props.name}</h1>;
};
export default App;
