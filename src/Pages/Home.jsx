import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Components/Header'

const Home = () => {

  return (
    <div>

      <Header></Header>

      <div>

        <h3>Card Sharks!</h3>
        <h4>A React Demo using Okta</h4>

        <div class="row">

          <div class="col-lg-6 col-sm-12">

            <div class="card">
              <div class="card-heading">
                Already have an Okta Account?
                </div>

              <div class="card-body">

                <Link to='/Game'>Play Now</Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
export default Home;