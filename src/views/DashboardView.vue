 <template>
    <div class="dashboard">
        
        <Sidebar/>
    </div>
  
</template>

<script>
import Sidebar from '../layout/Sidebar.vue';
export default {
    components:{
        Sidebar,
    },
    setup(){
        

        return{
            
        }
    }
}
</script>

<style scoped>
    .dashboard{
        width: 100vw;
        height: 100vh;
        background-color: var(--light-gray-bg) ;
    }
</style>