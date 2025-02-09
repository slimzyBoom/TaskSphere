<script>
   import Navbar from '../components/Navbar.vue'
   import { images } from '../assets/assets';
    export default{
      
        components:{
            Navbar
        },

        setup(){
          

          return {
            images,
            
          }
        }
    }
</script>

<template>
  <div class="home-view">
    <header>
      <Navbar />
     
    </header>
    <main>
      <section class="hero" id="home">
        <!-- <div class="blur-cover"></div> -->
        <div class="hero-container">
          <div class="text">
            <h1>Organize, collaborate and achieve</h1>
            <p>
              Boost your team's productivity with tools designed to simplify task management. Plan projects, assign tasks, 
              and track progress—all in one place.
              <span>Stay organized, work smarter, and achieve your goals effortlessly.</span>
            </p>
            <button>Get Started Now</button>
          </div>
          <div class="image">
            <img :src="images.heroImgOne" alt="">
          </div>
        </div>
       
      </section>

      <section id="features" class="features">
        <div class="title">
          <span>─ Features</span>
          <h1>Top Features</h1>
        </div>
        <div class="features-container">
          <div class="card">
            <div class="image">
              <img :src="images.featureOne" alt="">
            </div>
            <div class="text">
              <h2> Task Creation</h2>
              <p>
                Quickly create, assign, and manage tasks with an intuitive interface. Stay organized effortlessly.
              </p>
            </div>
            <button>Learn More</button>
          </div>
          <div class="card">
            <div class="image">
              <img :src="images.featureOne" alt="">
            </div>
            <div class="text">
              <h2> Notification & Reminders</h2>
              <p>
                Never miss a deadline with real-time notifications and reminders for tasks and meetings.
              </p>
            </div>
            <button>Learn More</button>
          </div>
          <div class="card">
            <div class="image">
              <img :src="images.featureOne" alt="">
            </div>
            <div class="text">
              <h2> Calendar & Meeting Scheduling </h2>
              <p>
                Simplify your scheduling process by integrating tasks and meetings seamlessly into a shared calendar.
              </p>
            </div>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section id="testimonial" class="testimonial">
        <div class="title">
          <span>─ Testimonials</span>
          <h1 class="title">Our Reviews</h1>
        </div>
        
        <div class="testimonial-container">
          <div class="card">
            <div class="cont">
              <img :src="images.profileOne" alt="">
              <span>
                <h3>John doe</h3>
                <div class="stars">
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />

                  <h6>(4.3)</h6>
                </div>
              </span>
            </div>
            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur. Nemo eveniet tempore officiis inventore nesciunt fuga numquam quidem corporis?
            </div>
            <h4 class="date">Jan.02.2025</h4>
          </div>  
          <div class="card">
            <div class="cont">
              <img :src="images.profileOne" alt="">
              <span>
                <h3>John doe</h3>
                <div class="stars">
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />

                  <h6>(4.3)</h6>
                </div>
              </span>
            </div>
            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur. Nemo eveniet tempore officiis inventore nesciunt fuga numquam quidem corporis?
            </div>
            <h4 class="date">Jan.02.2025</h4>
          </div>  
          <div class="card">
            <div class="cont">
              <img :src="images.profileOne" alt="">
              <span>
                <h3>John doe</h3>
                <div class="stars">
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />

                  <h6>(4.3)</h6>
                </div>
              </span>
            </div>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur. Nemo eveniet tempore officiis inventore nesciunt fuga numquam quidem corporis?
            </p>
            <h4 class="date">Jan.02.2025</h4>
          </div>  
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="text">
          <div class="title">
            <span>─ Contact</span>
            <h1 class="title">Contact Information</h1>
          </div>
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae, atque nobis, adipisci iure ea porro, odio quidem sequi id eius impedit velit cupiditate non!</p>
          </div>
          <div class="info">
            <span>
              <font-awesome-icon icon="envelope"/>
              <p>: </p>
              <p>gogetter@gmail.com</p>
            </span>
            <span>
              <font-awesome-icon icon="phone"/>
              <p>: </p>
              <p>+234-802-349-1336</p>
            </span>
            <span>
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
              <p>: </p>
              <p>gogetter@gmail.com</p>
            </span>
          </div>
        </div>
        <form>
                <h1>Leave A Message</h1>
                <div class="cont">
                    <font-awesome-icon icon="envelope"/>
                    <input type="text" placeholder="Your Email">
                </div>
                <div class="cont">
                    <font-awesome-icon icon="phone"/>
                    <input type="text" placeholder="Your Phone">
                </div>
                <div class="cont">
                    <font-awesome-icon icon="comment"/>
                    <textarea placeholder="Your Message"> </textarea>
                </div>
                <div class="btn">
                    <a href="#">
                        <span>➞</span>
                        <button>Send Message</button>
                    </a>
                </div>
            </form>
       
      </section>

      <footer>
          
              <p>© Copyright 2024 - GoGetters Team</p>
              <div class="icons">
                  <a href="#">
                    <font-awesome-icon :icon="['fab','whatsapp']" />
                  </a>
                  <a href="#">
                    <font-awesome-icon :icon="['fab','facebook']" />
                  </a>
                  <a href="#">
                    <font-awesome-icon :icon="['fab','instagram']" />
                  </a>
                  <a href="#">
                    <font-awesome-icon :icon="['fab','twitter']" />
                  </a>
                  <a href="#">
                    <font-awesome-icon :icon="['fab','linkedin']" />
                  </a>
                  
              </div>
          
            
        </footer>

    </main>
  </div>
 
</template>

<style scoped>
  .drop-down-menu {
      position: fixed;
      top: -200%;
      width: 100%;
      height: 100%;
      cursor: pointer;
      padding: 120px 30px;
      background-color: var(--light-gray-bg);
      transition: .5s ease-in-out;
      z-index: 5;
  }

  .drop-down-menu.active {
    position: fixed;
    top: 0%;
  }

  .drop-down-menu .cont {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
  }

  .drop-down-menu a{
    display: flex;
    position: relative;
    padding: 20px;
    width: 95%;
    background-color: #1e212b8c;
    border-radius: 7px;
  }

  .drop-down-menu a::before {
    position: absolute;
    content: '';
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 7px;
    background-color: var(--light-blue);
    transition: .2s ease-in-out;
  }

  .drop-down-menu a:hover::before {
    width: 100%;
  }

  .drop-down-menu li {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    z-index: 5;
  }

  .title{
    text-align: center;
    margin-bottom: 50px;
  }

  .title h1{
    position: relative;
    color: var(--light-blue);
    font-size: 33px;
    font-weight: 600;
    margin-top: -9px;
  }

  .hero{
   background-color: var(--light-gray-bg);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    width: 100%;
    padding: 50px 50px;

  }

  .hero .hero-container{
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: space-between;
    padding-top: 70px;
  }

  .hero .text{
    position: relative;
    width: 55%;
    height: 100%;
    z-index: 2;
  }

  .hero .text h1{
    font-size: 35px;
    font-weight: 600;
    color: var(--light-blue);
  }

  .hero .text p{
    padding: 13px 0;
    font-size: 16px;
    line-height: 1.5rem;
    opacity: .7;
  }

  .hero button{
    position: relative;
    z-index: 2;
    margin-top: 5px;
    padding: 10px 20px ;
    background-color: var(--light-blue);
    color: var(--white);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
  }

  .hero .image{
    position: relative;
    z-index: 2;
    width: 40%;
    margin-top: -30px;
  }

  .features{
    padding: 50px;
    padding-bottom: 80px;
  }

  .features .features-container{
    display: flex;
    justify-content: space-between;
  }

  .features .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 30%;
    padding: 23px ;
    background-color: var(--light-gray-bg);
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(98, 98, 98, 0.2);
  }

  .features .card:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px) ;
    transition: all 0.3s ease-in-out;
    
  }

  .features .card h2{
    font-size: 20px;
    font-weight: 600;
    color: var(--light-blue);
  }

  .features .card p{
    font-size: 15px;
    opacity: .8;
    padding: 7px 0;
  }

  .features .image{
    width: 100%;
  }

  .features .image img{
    width: 100%;
    height: 180px;
    border-radius: 10px;
  }

  .features button{
    width: 100%;
    background-color: var(--light-blue);
    padding: 8px 0;
    border-radius: 10px;
    color: var(--white);
    font-weight: 500;
  }

  .testimonial{
    padding: 50px;
    padding-bottom: 80px;
    background-color: var(--light-gray-bg);
  }

  .testimonial-container{
    display: flex;
    justify-content: space-between;
  }

  .testimonial .card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    width: 31%;
    padding: 30px;
    background-color: var(--white);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }

  .testimonial .card:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }

  .testimonial .card .cont{
    display: flex;    
    align-items: center;
    gap: 10px;
  }

  .testimonial .card .cont h3{
    font-size: 17px;
    font-weight: 600;
  }

  .testimonial .card .cont .stars{
    display: flex;
    align-items: center;
  }

  .testimonial .card .cont .stars svg{
    color: var(--light-blue);
    font-size: 16px;
  }

  .testimonial .card .cont .stars svg:nth-child(5){
    opacity: .5;
  }

  .testimonial .card .cont .stars h6{
    padding-left: 4px;
    font-size: 14px;
  }

  .testimonial .card .description{
    font-size: 15px;
  }

  .testimonial .card img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
  }

  .testimonial .card .date{
    font-size: 15px;
    font-weight: 700;
  }

  .contact{
    display: flex;
    justify-content: space-between;
    padding: 80px 50px;
  }

  .contact .text{
    width: 45%;
  }

  .contact .title{
    text-align: left;
    margin: 0;
  }

  .contact .description{
    padding: 12px 0;
  }

  .contact .info span{
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 2px 0;
  }

  .contact .info span svg{
    color: var(--light-blue);
    margin-top: 3px;
    
  }

  .contact form{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 3px 5px 12px rgb(50, 50, 50 ,.25);
    border-radius: 10px;
    padding: 40px 40px;
    padding-top: 30px;
  }

  .contact form h1{
      font-size: 25px;
      font-weight: 700;
      color: var(--light-blue);
  }

  .contact form .cont{
      display: flex;
      align-items: center;
      position: relative;
  }

  .contact form .cont svg {
      position: absolute;
      left: 10px;
      color: #27262669;
  }

  .contact form .cont:nth-child(4) svg{
    top: 15px;
  }

  .contact form input,
  .contact form textarea{
      width: 100%;
      padding: 10px 35px;
      border: 1px solid #34343482;
      border-radius: 5px;
      color: #000000aa;
  }

  .contact form textarea{
      height: 110px;
  }

  .contact form .cont:nth-child(4) i{
      top: 12px;
  }

  .contact form input::placeholder,
  .contact form textarea::placeholder{
      font-size: 16px;
  }

  .contact form .btn{
    display: flex;
    width: 185px;
    height: 50px;
    background-color: #546eff7c;
    padding: 6px;
    border-radius: 40px;
  }

  .contact form .btn a{
      width: 100%;
      height: 100%;
      display: flex;
      gap: 6px;
      align-items: center;
  }

  .contact form .btn span{
      font-size: 20px;
      background-color: #fff;
      padding: 3px 8px;
      border-radius: 50%;
      color: #546eff7c;
  }

  .contact form .btn button{
      background-color: var(--light-blue);
      border: none;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      padding: 10px 15px;
      border-radius: 20px;
  }

  footer{
    width: 100% ;
    background-color: var(--light-blue);
    display: flex;
    padding: 23px 50px;
    justify-content: space-between;
    color: var(--white);
  }

  footer svg{
    font-size: 20px;
    padding: 0 6px;
  }


  @media (max-width: 1040px){
    
    .hero .image{
      width: 80%;
    }

    .hero .text{
      width: 100%;
    }

    .hero .hero-container{
      flex-direction: column-reverse;
    }

    .features .card {
       width: 31%;
       padding: 20px;
    }

    .features .image img {
      width: 100%;
      height: 220px;
    }

    .contact{
      padding: 80px 60px;
    }

    .contact form{
      padding: 30px;
    }

  }

  @media (max-width: 980px){
     .features .image img {
        height: 280px;
    }

    .features .features-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }

    .features .card {
       width: 70%;
       padding: 30px;
    }

    .testimonial-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
    }

    .testimonial .card {
      width: 80%;
    }

    .contact{
      flex-direction: column;
      /* align-items: center; */
      gap: 50px;
    }

    .contact .text{
      width: 100%;
    }

    .contact form{
      width: 80%;
    }

  }

  @media (max-width: 750px) {
    .contact form{
      width: 90%;
    }
  }

  @media (max-width: 680px){
    .features .card{
      width: 90%;
    }

    .testimonial .card{
      width: 90%;
    }

    footer{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
    }
  }

  @media (max-width:600px){
    nav {
      padding: 35px 40px;
    }
    .hero .image{
      width: 90%;
    }

    .features .card{
        width: 100%;
    }

    .testimonial .card{
        width: 100%;
    }

    .contact{
        padding: 80px 50px;
    }

    .contact form {
        width: 100%;
    }

    
  }

  @media (max-width: 500px) {
    .hero{
      padding: 350px 35px;
    }

    .features{
      padding: 80px 35px;
    }

    .testimonial{
      padding: 80px 35px;
    }

    .hero .image {
        width: 100%;
    }

    .contact{
      padding: 80px 35px;
    }
  }

  @media (max-width:450px) {
    .hero .text h1{
      font-size: 29px;
    }

    .features .card{
        padding: 20px;
    }

    .features .image img{
        height: 220px;
    }
  }

  @media (max-width:400px) {
    .hero .text p span{
      display: none;
    }
  }
 

</style>