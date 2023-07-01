<!-- eslint-disable no-unused-vars -->
<script setup>
import Header from "../components/header/Header.vue";
import News from "../components/news/News.vue";
import Nav from "../components/nav/Nav.vue";
import Footer from "../components/footer/Footer.vue";
import { mdiMapMarker, mdiCartOutline } from "@mdi/js";

const path = defineProps({ mdiMapMarker, mdiCartOutline });
</script>

<template>
  <div>
    <News />
  </div>
  <header>
    <Header />
  </header>
  <section class="navigation">
    <Nav />
  </section>

  <section class="place_holder">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="place_name">
            <h3>Add Seller Account Information</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="help_center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Shop Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    Choose a unique name for your online shop: this is the name that will appear on the Jumia marketplace! It is forbidden to use a registered trademark in your shop name without the brand authorization.
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Type (Individual or Business Entity/Company) <span class="text-danger">*</span></label>
                                <select class="form-control" name="" id="">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Account Manager First and Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    Your name or the name of the person in your team who will manage your account. This is the contact we will primarily use to contact you.
                                </span>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Account manager phone number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    When we need to contact you urgently, this is the number we will call.
                                </span>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Additional phone number</label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    Another number where we can reach you ?
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    Your account will be linked to this email address and we will use it to send all our communications.
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Retype Email Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password <span class="text-danger">*</span></label>
                                <input type="password" class="form-control">
                                <span class="help_text">
                                    At least 8 characters containing a capital letter, a lower letter and a numeric character
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Retype Password <span class="text-danger">*</span></label>
                                <input type="password" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="">E-Contract Jumia Nigeria <span class="text-danger">*</span></label><br>
                                <input type="checkbox" name="" id="">
                                <span> I have read and accepted the <RouterLink to="/">E-Contract Suremarts</RouterLink></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-start">
                        <RouterLink to="/business-information"><button class="btns" style="width: 120px;font-size: 0.9rem;">Continue</button></RouterLink>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer">
    <Footer />
  </section>
</template>

<style></style>
