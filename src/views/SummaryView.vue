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
            <h3>Summary</h3>
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
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Seller Account Information
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Seller ID</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Shop Name</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Choose a unique name for your online shop: this is the name that will appear on the Jumia marketplace! It is forbidden to use a registered trademark in your shop name without the brand authorization.
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Your account will be linked to this email address and we will use it to send all our communications.
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Type (Individual or Business Entity/Company)</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Account Manager First and Last Name</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Your name or the name of the person in your team who will manage your account. This is the contact we will primarily use to contact you.
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Account manager phone number</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            When we need to contact you urgently, this is the number we will call.
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Additional phone number</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Another number where we can reach you ?
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Business Information
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Referred by (email of referrer)</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Email of who referred you
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Do you have a shop in Suremarts?</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">If yes, what is the shop's name?</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            List the names of your existing shops seperated by comma
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Why do you want to open a new shop?</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            The only valid reason is to sell a different product.
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Company registered name</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            If you are a Company/Entity, indicate your legal name or company name
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address 1</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Indicate official address
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address 2</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Postal code / ZIP code</label>
                                        <input type="text" class="form-control">
                                        
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">City / Town</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Legal Entity Country</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Business owner or legal representative first name </label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Business owner or legal representative middle name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Business owner or legal representative last name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Business owner or legal representative date of birth</label>
                                        <input type="date" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Business owner or legal representative ID type</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Upload a copy of your ID card</label>
                                        <input type="file" class="form-control">
                                        <span class="help_text">
                                            Allowed types are images, PDF and MSWORD
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Select number of employees (Business Entity/Company)</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">CAC Registration Number</label>
                                        <input type="text" class="form-control">
                                        <span class="help_text">
                                            Corporate Affair Commission (CAC)
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Upload CAC Certificate</label>
                                        <input type="file" class="form-control">
                                        
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Upload Tax Identification Number (TIN) Certificate</label>
                                        <input type="file" class="form-control">
                                        <span class="help_text">
                                            Under Nigeria's legislation, TIN is required for all individuals and corporates deriving income. Ref: Article 10 CITA and Article 49(1) PITA
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Are you VAT registered?</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                        <!-- <span class="help_text">
                                            Under Nigeria's legislation, TIN is required for all individuals and corporates deriving income. Ref: Article 10 CITA and Article 49(1) PITA
                                        </span> -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Which county will you ship from?</label>
                                        <select class="form-control" name="" id="">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tax Identification Number</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Bank Account
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Bank Name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Account Number</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Account Name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="text-start mt-4">
                    <RouterLink to="/"><button class="btns" style="width: 120px;font-size: 0.9rem;">Start Selling</button></RouterLink>
                </div>
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
