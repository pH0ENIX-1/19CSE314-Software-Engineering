<script>
  import axios from 'axios'
  import { toRaw } from 'vue'
  import navBar from '../Navbar/NavBar.vue'
//import VueAxios from 'vue-axios'
 //Vue.use(VueAxios,axios)
export default {
  name: 'LoginComponent',
  mounted(){
    this.mail = ""
    this.pass = ""
    this.spass=""
    this.smail=""
    this.Name=""
    this.role=""
  },
  components:{
    navBar,
  },  
  
  props:{
    quizName:String,
    quizId:String,
    
  },
  data() {
    return {
      loginURL: String,
      signupURL: String,
      facloginURL:String,
      mail:String,
      pass:String,
      spass:String,
      smail:String,
      Name:String,
      role:String,
      x:{
        id: Math.floor(Math.random()*1000),
        name: "",
        email: "",
        password:  "",
      }
    }
},
    methods: {
    pressedlogin() {
        this.loginURL = 'http://harish2511-001-site1.btempurl.com/api/User/Login?mail='+this.mail+'&password='+this.pass
        this.facloginURL = 'http://harish2511-001-site1.btempurl.com/api/User/Loginfaculty?mail='+this.mail+'&password='+this.pass
        if(this.role == "Student")
        {
          axios.get(this.loginURL).then((response) => {
            console.log(response.data)

            if(response.data == "Account Not found")
            {
                console.log(this.URL)
                console.log(this.mail)
                console.log(this.pass)
                alert("Invalid Username or password!! Try Again")
            }
            else{
              console.log(this.name)
              
              this.$router.push({name:'dashboard', params:{mail:this.mail}})
              
            }

      });
        }
        else if(this.role=="faculty")
        {
          axios.get(this.facloginURL).then((response) => {
            console.log(response.data)

            if(response.data == "Account Not found")
            {
                console.log(this.URL)
                console.log(this.mail)
                console.log(this.pass)
                alert("Invalid Username or password!! Try Again")
            }
            else{
              console.log(this.name)
              
              this.$router.push({name:'facdash', params:{mail:this.mail}})
              
            }

      });
        }
        
    },
    datachange(){
        this.x.name=this.Name,
        this.x.email=this.smail,
        this.x.password=this.spass
    },
    pressedsignup() {
        this.datachange()
        this.signupURL = 'http://harish2511-001-site1.btempurl.com/api/User/AddStudent'

        this.x = toRaw(this.x)
        console.log(this.x)
        axios.post(this.signupURL,this.x).then((response) => {
            console.log(response.data)
            alert(response.data)
            if(response.data != 'User Already Exists'){
            this.$router.push({name:'dashboard', params:{mail:this.x.email}})
            }
            // if(response.data == "Added new Skill with Id "+this.x+" successfully.")
            // {
            //     
            // }
            // else{
            //     alert("Invalid Username or password!! Try Again")
            // }

      });
    },

}

}
</script>

<template>
  <div style="background-color: #e5dada;">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" style="color:#bf5700;" >
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top" style="color:#bf5700">Quiz App</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/" style="color:#bf5700">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/" style="color:#bf5700">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="/" style="color:#bf5700">Feedback</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login" style="color:#bf5700">Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <br><br>
    <div class="section">
          <div class="container">
              <div class="row full-height justify-content-center">
                  <div class="col-12 text-center align-self-center py-5">
                      <div class="section pb-5 pt-5 pt-sm-2 text-center">
                          <h6 class="mb-0 pb-3"><span style="color: #58355e;">Log In </span><span style="color: #58355e;">Sign Up</span></h6>
                          
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                          <div class="card-3d-wrap mx-auto">
                              <div class="card-3d-wrapper">
                                  <div class="card-front">
                                      <div class="center-wrap">
                                          <div class="section text-center">
                                              <h4 class="mb-4 pb-3" style="color: #bf5700;">Log In</h4>
                                              
                                              <div class="form-group">
                                                  <input type="email" name="logemail" class="form-style" v-model="mail"  id="logemail" autocomplete="off" placeholder="Enter your Mail Address">
                                                  <i class="input-icon uil uil-at"></i>
                                              </div>	
                                              <div class="form-group mt-2">
                                                  <input type="password" name="logpass" class="form-style" v-model="pass"  id="logpass" autocomplete="off" placeholder="Enter your Password">
                                                  <i class="input-icon uil uil-lock-alt"></i>
                                              </div>
                                              <div class="form-group mt-2">
                                                  <input type="text" name="role" class="form-style" placeholder="Enter your Role" id="logpass" v-model="role" autocomplete="off">
                                                  <i class="input-icon uil uil-lock-alt"></i>
                                              </div>
                                              <button  class="btn mt-4" @click="pressedlogin();" style="background-color:antiquewhite;">LogIn</button>
                                              <p class="mb-0 mt-4 text-center"><a href="/forgotpwd" class="link">Forgot your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                  <div class="card-back">
                                      <div class="center-wrap">
                                          <div class="section text-center">
                                              <h4 class="mb-4 pb-3" style="color: #bf5700;">Sign Up</h4>
                                              <div class="form-group">
                                                  <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" v-model="Name" autocomplete="off">
                                                  <i class="input-icon uil uil-user"></i>
                                              </div>	
                                              <div class="form-group mt-2">
                                                  <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" v-model="smail" autocomplete="off">
                                                  <i class="input-icon uil uil-at"></i>
                                              </div>	
                                              <div class="form-group mt-2">
                                                  <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" v-model="spass" autocomplete="off">
                                                  <i class="input-icon uil uil-lock-alt"></i>
                                              </div>
                                              <div class="form-group mt-2">
                                                  <input type="text" name="role" class="form-style" placeholder="Enter your Role" id="logpass" v-model="role" autocomplete="off">
                                                  <i class="input-icon uil uil-lock-alt"></i>
                                              </div>
                                              <button class="btn mt-4" @click="pressedsignup();" style="background-color:antiquewhite;">Signup</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
      </div>
  </template>
<style >
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
body{
	font-family: 'Poppins', sans-serif;
	font-weight: 300;
	font-size: 15px;
	line-height: 1.7;
	color: #c4c3ca;
	background-color: #e3e3e3;
	overflow-x: hidden;
}
a {
	cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
	text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color:#e5dada;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span{
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section{
  position: relative;
  width: 100%;
  display: block;
}
.full-height{
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #bf5700;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #e5dada;
  background-color:#bf5700;
  font-family: 'unicons';
  content: '\eb4f';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}
.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;    
  top: 0;
  left: 0;  
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out; 
}
.card-front, .card-back {
  width: 100%;
  height: 100%;
  
  background-color: #2a2b38;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap{
  position: absolute;
  width: 100%;
  padding: 30px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}
.form-group{ 
  position: relative;
  display: block;
    margin: 0;
    padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #e5dada;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:-ms-input-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-moz-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:-moz-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-webkit-input-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-ms-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-webkit-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.btn{  
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition : all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
}
.btn:active,
.btn:focus{  
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
}
.btn:hover{  
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
}
.logo {
	position: absolute;
	top: 30px;
	right: 30px;
	display: block;
	z-index: 100;
	transition: all 250ms linear;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
}
</style>