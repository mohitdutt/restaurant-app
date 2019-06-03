<template>
  <div class="AddRestaurants">
    <div class="row AddRestaurantsRow">
      <h3>Login</h3>
    </div>
    <div class="container contDetails">
      <b-form @submit="onSubmit" v-if="show" style="padding:20px;">

        <div class="row mt-3">
          <div class="col-md-12">
            <b-form-group id="input-group-7" label="Email:" label-for="input-7" class="formG">
              <b-form-input id="input-7" v-model="form.email" type="email" required placeholder="Enter Email" ></b-form-input>
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
          <b-button type="submit" size="lg" variant="outline-secondary" class="submitButton">login</b-button>
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
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      const payload = this.form
      localStorage.setItem('userlogin', JSON.stringify(payload))
      console.log('payload', payload)
      // this.$router.push('')
      // Request.postData('login', payload).then((response) => {
      //   if (response.status === 200) {
      //     alert('login successfully!')
      //   }
      // }).catch((error) => {
      //   if (error.response.status === 500) {
      //     alert('Error in login')
      //   }
      // })
      event.target.reset()
    }
  }
}
</script>

<style scoped>
  .AddRestaurants{
    height: 800px;
  }
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
