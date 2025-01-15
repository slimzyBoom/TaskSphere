 <template>
    <div class="dashboard">
        <Header :headerProps = "headerProps"></Header>
        <main>
            
        </main>
    </div>
  
</template>

<script>
import Header from '../components/Header.vue';
export default {
    components:{
       Header,
    },
    setup(){
        const userName = 'Freddie';
        const headerProps = {
            title :  `Hi ${userName}`,
            titleText: "Let's finish your task today !",
            search : true,
            filter: true,
            icons: true,
        }
        

        return{
            headerProps,
        }
    }
}
</script>

<style scoped>
    .dashboard{
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: var(--light-gray-bg) ;
    }

    .dashboard main{
        padding: 35px 30px;

    }
</style>