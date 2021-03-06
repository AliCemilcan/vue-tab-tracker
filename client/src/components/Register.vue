<template>
 <div>
   <h1>Register</h1>
   <input type="email" name="email" v-model="email" placeholder="Enter your Email" />
   <br>
   <input type="password" v-model="password" name="password" placeholder="Enter your Password" />
   <br>
   <button @click="Register">Register</button>
 </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  watch:{
    email(value){
      // console.log()
    }
  },
  mounted(){
    setTimeout(() => {
      this.email = 'hello'
      // alert("Welcome")
    }, 2000)
  },
  methods:{
    async Register(){
       const response = await AuthenticationService.register({
        email:this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>
