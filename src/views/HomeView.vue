<script>
   import Navbar from '../components/Navbar.vue'
   import { images } from '../assets/assets';
    export default{
        components:{
            Navbar
        },

        setup(){
          
          return {
            images
          }
        }
    }
</script>

<template>
  <div class="home-view">
    <header>
      <Navbar/>
    </header>
    <main>
      <section class="hero">
        <!-- <div class="blur-cover"></div> -->
        <div class="hero-container">
          <div class="text">
            <h1>Organize, collaborate and achieve</h1>
            <p>
              Boost your team's productivity with tools designed to simplify task management. Plan projects, assign tasks, 
              and track progress—all in one place. Stay organized, work smarter, and achieve your goals effortlessly.
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

      <section class="contact">
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
              <font-awesome-icon icon=""/>
              <p>: </p>
              <p>gogetter@gmail.com</p>
            </span>
          </div>
        </div>
       
      </section>

    </main>
  </div>
 
</template>

<style>
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
    padding: 0 50px;

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
    padding: 50px;
    padding-bottom: 80px;
  }

  .contact .text{
    width: 50%;
  }

  .contact .title{
    text-align: left;
    margin: 0;
  }

  .contact .info span{
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .contact .info span svg{
    color: var(--light-blue);
    margin-top: 3px;
    
  }

</style>