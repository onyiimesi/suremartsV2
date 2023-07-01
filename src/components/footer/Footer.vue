<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="foot">
            <h5>How Can We Help You?</h5>

            <ul>
              <li><Router-Link to="/contact">Contact Us</Router-Link></li>
              <li><Router-Link to="/help-center">Help Center</Router-Link></li>
              <li><Router-Link to="/report-product">Report a Product</Router-Link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="foot">
            <h5>About Suremarts</h5>

            <ul>
              <li><Router-Link to="/about-us">About Us</Router-Link></li>
              <li><Router-Link to="/terms">Terms & Conditions</Router-Link></li>
              <li><Router-Link to="/privacy-policy">Privacy Policy</Router-Link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="foot">
            <h5>Make Money With Suremarts</h5>

            <ul>
              <li><Router-Link to="/marketplace-vendor">Sell on Suremarts</Router-Link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="foot">
            <h5>Our Newsletter</h5>

            <input type="text" class="form-control" placeholder="Enter Email Address">
            <button class="btns">Submit</button>
          </div>
        </div>
      </div>
    </div>
</template>

  