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
      <section class="features">
        
      </section>
    </main>
  </div>
 
</template>

<style>

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

  .blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.707); /* Semi-transparent black */
    /* backdrop-filter: blur(10px); */
    z-index: 1;
  }
</style>