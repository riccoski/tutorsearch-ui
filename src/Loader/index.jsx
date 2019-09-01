import React from 'react';
import { Loader } from 'semantic-ui-react';
// import './Loader.scss';

// const Loader = ({ active }) => (
//   <div className={'spinner' + (active ? ' is-visible' : '')}>
//     <div className="spinner-inner">
//       <div className="bounce1" />
//       <div className="bounce2" />
//       <div className="bounce3" />
//     </div>
//   </div>
// );

export default props => <Loader {...props} />;
