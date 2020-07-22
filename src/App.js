import React from 'react';
import Layout from './hoc/Layout/Layout';
import classes from './App.module.css';


function App(props) {

  return(
    <div className={classes.reset}>
      <Layout>
        {/* Routes to be added here! */}
      </Layout>
    </div>
  );

}

export default App;
