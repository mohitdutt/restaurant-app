<template>
  <div class="AddRestaurants">
    <div class="row AddRestaurantsRow">
      <h3>Add more restaurant details on dineout</h3>
    </div>
    <div class="container contDetails">
      <div class="row">
        <span>Restaurant Detail for {{abc}}</span>
      </div>
      <hr>
      <b-form @submit="onSubmit" v-if="show" style="padding:20px;">
        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-1" label="Restaurant images:" label-for="input-1" class="formG">
              <b-form-file v-model="form.file" :state="Boolean(form.file)" placeholder="Choose a file" id="input-1"
                    drop-placeholder="Drop file here..." multiple accept="image/jpeg, image/png, image/gif">
              </b-form-file>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-2" label="Menu images:" label-for="input-2" class="formG">
              <b-form-file v-model="form.menufile" :state="Boolean(form.menufile)" placeholder="Choose a file" id="input-2"
                    drop-placeholder="Drop file here..." multiple accept="image/jpeg, image/png, image/gif">
              </b-form-file>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <b-form-group id="input-group-3" label="Food Category:" label-for="input-3" class="formG">
              <b-form-select v-model="form.selected" :options="form.options" id="input-3"></b-form-select>
            </b-form-group>
          </div>

          <div class="col-md-6">
            <b-form-group id="input-group-4" label="Timings:" label-for="input-4" class="formG">
              <calender/>
            </b-form-group>
          </div>
        </div>

          <br>
        <div class="row mt-3">
          <div class="col-md-6">
            <!-- <b-form-group id="input-group-5" label="Name:" label-for="input-5" class="formG">
              <b-form-input id="input-5" v-model="form.userName" type="text" required placeholder="Enter name" ></b-form-input>
            </b-form-group> -->
          </div>

          <div class="col-md-6">
            <!-- <b-form-group id="input-group-6" label="Phone:" label-for="input-6" class="formG">
              <b-form-input id="input-6" v-model="form.phone" type="number" required placeholder="Enter Phone" ></b-form-input>
            </b-form-group> -->
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <!-- <b-form-group id="input-group-7" label="Email:" label-for="input-7" class="formG">
              <b-form-input id="input-7" v-model="form.email" type="email" required placeholder="Enter Email" ></b-form-input>
            </b-form-group> -->
          </div>

          <div class="col-md-6">
            <!-- <b-form-group id="input-group-8" label="Password:" label-for="input-8" class="formG">
              <b-form-input id="input-8" v-model="form.password" type="password" required placeholder="Enter Password" ></b-form-input>
            </b-form-group> -->
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
import calender from '@/components/calender.vue'
// import Request from '@/services/Request.js'
export default {
  data () {
    return {
      form: {
        file: null,
        menufile: null,
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'chinese' },
          { value: 'b', text: 'italian' },
          { value: 'c', text: 'noth-inidan' },
          { value: 'd', text: 'south-indian' },
          { value: 'e', text: 'continental' }
        ],

        restaurantName: '',
        address: '',
        city: '',
        costForTwo: '',
        userName: '',
        phone: '',
        email: '',
        password: ''
      },
      show: true
    }
  },
  components: {
    calender
  },
  computed: {
    abc () {
      return JSON.parse(localStorage.a).name
    }
  },
  methods: {
    onSubmit (evt) {
      // Request.postData('AddRestaurant', payload).then((response) => {
      //   if (response.status === 200) {
      //     alert('Restaurant added successfully!')
      //   }
      // }).catch((error) => {
      //   if (error.response.status === 500) {
      //     alert('Error adding new Restaurant, Please fill all fields and try again.')
      //   }
      // })
      event.target.reset()
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
