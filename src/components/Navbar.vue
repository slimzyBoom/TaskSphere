<template>
    <nav>
        <div class="logo">
            <h1>Logo</h1>
        </div>
        <ul>
            <li>
                <router-link to="/" class="active">Home</router-link>
            </li>
            <li>
                <router-link to="/">Features</router-link>
            </li>
            <li>
                <router-link to="/">Testimonial</router-link>
            </li>
            <li>
                <router-link to="/">Contact</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100vw;
        padding: 35px 50px;
        margin-bottom: 60px;
        background-color: var(--white) ;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }

    nav ul{
        display: flex;
        gap: 30px;
    }

    nav ul li a{
        position: relative;
        padding: 5px 0px;
        opacity: .7;

    }

    nav ul li a::before{
       content: "";
       position: absolute;
       width: 0%;
       height: 2px;
       background-color: var(--black);
       bottom: 0;
       transition: .3s ease;
    }

    nav ul li a:hover::before,
    nav ul li a.active::before{
        width: 100%;
    }

    nav .logo{
        color: var(--light-blue);
    }
</style>
