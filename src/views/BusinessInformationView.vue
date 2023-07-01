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
            <h3>Add Business Information</h3>
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
                                <label for="exampleFormControlInput1" class="form-label">Referred by (email of referrer)</label>
                                <input type="text" class="form-control">
                                <span class="help_text">
                                    Email of who referred you
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Do you have a shop in Suremarts? <span class="text-danger">*</span></label>
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
                                <label for="exampleFormControlInput1" class="form-label">If yes, why do you want to open a new shop?</label>
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
                                <label for="exampleFormControlInput1" class="form-label">Address 1 <span class="text-danger">*</span></label>
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
                                <label for="exampleFormControlInput1" class="form-label">City / Town <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Legal Entity Country <span class="text-danger">*</span></label>
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
                    
                    <div class="text-start">
                        <RouterLink to="/bank-account"><button class="btns" style="width: 120px;font-size: 0.9rem;">Continue</button></RouterLink>
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
