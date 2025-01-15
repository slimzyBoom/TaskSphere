<template>
  <header class="header">
    <div class="cont">
        <div class="title">
            <h1 v-if="headerProps.title">{{headerProps.title}}</h1>
            <p v-if="headerProps.titleText">{{headerProps.titleText }}</p>
        </div>
        <div class="icons">
            <div class="notification">
                <router-link to="/">
                    <font-awesome-icon :icon="['far', 'bell']"></font-awesome-icon>
                </router-link>
            </div>
            <div class="profile-img">
                <router-link to="/">
                    <img :src="images.profileOne" alt="">
                </router-link>
            </div>
        </div>
    </div>
    <div class="cont">
        <SearchBar></SearchBar>
    </div>
  </header>
</template>

<script>
import { images } from '../assets/assets';
import SearchBar from './SearchBar.vue';

export default {
    props : ['headerProps'],
    components:{
        SearchBar,
    },
    setup(props){
        return{
           images,
        }
    }
}
</script>

<style scoped>
    header{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background: var(--white);
        padding: 25px 30px;
        padding-top: 30px;
    }

    header .cont{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    header .title h1{
        font-size: 22px;
        font-weight: 600;
        color: var(--black);
    }

    header .title p{
        font-size: 15px;
        color: var(--gray-text-primary);
    }

    header .profile-img{
        width: 50px;
        height: 50px;
        
    }

    header .profile-img img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    header .icons{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    header .icons svg{
        font-size: 20px;
        border: 1px solid #eaeaec;
        padding: 10px 12px;
        border-radius: 50%;
        color: var(--gray-text-secondary);
    }


</style>