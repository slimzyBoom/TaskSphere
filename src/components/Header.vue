 <template>
  <header class="header">
    <div class="cont">
        <div class="title">
            <WelcomeMessage :headerProps="headerProps"/>
        </div>
        <div class="icons" v-if="headerProps.icons">
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
        <SearchBar v-if="headerProps.search"></SearchBar>
        <FilterTab v-if="headerProps.filter"></FilterTab>
    </div>
  </header>
</template>

<script>
import { images } from '../assets/assets';
import FilterTab from './FilterTab.vue';
import SearchBar from './SearchBar.vue';
import WelcomeMessage from './WelcomeMessage.vue';

export default {
    props : ['headerProps'],
    components:{
        SearchBar,
        FilterTab,
        WelcomeMessage
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