<template>
  <div class="AddRestaurants">
    <div class="row AddRestaurantsRow">
      <h3>Add your restaurant on dineout</h3>
    </div>
    <div class="container contDetails">
      <div class="row">
        <span>Restaurant Detail</span>
      </div>
      <hr>
      <b-form @submit="onSubmit" v-if="show" style="padding:20px;">
        <div class="row mt-3">
          <div class="col-md-6">
            <b-form-group id="input-group-1" label="Restaurant name:" label-for="input-1" class="formG">
              <b-form-input id="input-1" v-model="form.restaurantName" type="text" required placeholder="Enter Restaurant name" ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-6">
            <b-form-group id="input-group-2" label="Address:" label-for="input-2" class="formG">
              <b-form-textarea id="input-2" v-model="form.address" type="text" required placeholder="Enter Address"></b-form-textarea>
            </b-form-group>
          </div>
        </div>


        <div class="row mt-3">
          <div class="col-md-6">
            <b-form-group id="input-group-3" label="City:" label-for="input-3" class="formG">
              <b-form-input id="input-3" v-model="form.city" type="text" required placeholder="Enter City" ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-6">
            <b-form-group id="input-group-4" label="Cost for 2(Optional):" label-for="input-4" class="formG">
              <b-form-input id="input-4" v-model="form.costForTwo" type="number" placeholder="Enter Cost" ></b-form-input>
            </b-form-group>
          </div>
        </div>

          <br><br>
        <div class="row detailheadrow">
          <span id="detailahead">Contact Person Detail</span>
        </div>
        <hr>
        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-5" label="Name:" label-for="input-5" class="formG">
              <b-form-input id="input-5" v-model="form.userName" type="text" required placeholder="Enter name" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <b-form-group id="input-group-6" label="Phone:" label-for="input-6" class="formG">
              <b-form-input id="input-3" v-model="form.phone" type="number" required placeholder="Enter Phone" ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-6">
            <b-form-group id="input-group-7" label="Email:" label-for="input-7" class="formG">
              <b-form-input id="input-7" v-model="form.email" type="email" placeholder="Enter Email" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <b-button type="submit" size="lg" variant="outline-secondary" class="submitButton">Submit</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Request from '@/services/Request.js'
  export default {
    data() {
      return {
        form: {
          restaurantName: '',
          address: '',
          city: '',
          costForTwo: '',
          userName: '',
          phone: '',
          email: ''
        },
        show: true
      }
    },
    methods: {

      onSubmit(evt) {debugger
        const payload = this.form;
        Request.postData("AddRestaurant", payload).then((response) => {
          if ( response.status === 200 ) {
            alert("Restaurant added successfully!");
          }
        }).catch((error) => {
          if ( error.response.status === 500 ) {
            alert("Error adding new Restaurant, Please fill all fields and try again.");
          }
      });
      event.target.reset();
      }
    }
  }
</script>

<style scoped>
  .AddRestaurantsRow{
    display: -webkit-inline-box;
  }
  .contDetails{
    margin-top: 3rem !important;
  }
  .container{
    background: #554e4e12;
  }
  .contDetails > div > span, #detailahead{
    font-size: 20px;
    font-weight: bolder;
  }
  .contDetails > div, .detailheadrow{
    padding: 20px;
  }
  .formG{
    font-size: larger;
  }
  .submitButton{
    margin: 0 auto
  }
</style>
