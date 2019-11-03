import React from 'react';
import Fib from '../components/fib';

const Home = (props) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <Fib />
            </div>
        </div>  
    </div>
  )
}

export default Home;