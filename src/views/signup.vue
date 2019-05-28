<template>
  <div class="AddRestaurants">
    <div class="row AddRestaurantsRow">
      <h3>Signup</h3>
    </div>
    <div class="container contDetails">
      <b-form @submit="onSubmit" v-if="show" style="padding:20px;">
        <div class="row mt-3">
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-5" label="Name:" label-for="input-5" class="formG">
              <b-form-input id="input-5" v-model="form.userName" type="text" required placeholder="Enter name" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-7" label="Email:" label-for="input-7" class="formG">
              <b-form-input id="input-7" v-model="form.email" type="email" required placeholder="Enter Email" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-3" label="City:" label-for="input-3" class="formG">
              <b-form-input id="input-3" v-model="form.city" type="text" required placeholder="Enter City" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-8" label="Password:" label-for="input-8" class="formG">
              <b-form-input id="input-8" v-model="form.password" type="password" required placeholder="Enter Password" ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-3">
          <b-button type="submit" size="lg" variant="outline-secondary" class="submitButton">Signup</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
// import Request from '@/services/Request.js'
export default {
  data () {
    return {
      form: {
        userName: '',
        phone: '',
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      const payload = this.form
      localStorage.setItem('usersignup', JSON.stringify(payload))
      console.log('payload', payload)
      // this.$router.push('')
      // Request.postData('signup', payload).then((response) => {
      //   if (response.status === 200) {
      //     alert('user added successfully!')
      //   }
      // }).catch((error) => {
      //   if (error.response.status === 500) {
      //     alert('Error in adding user.')
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
