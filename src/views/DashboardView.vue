 <template>
    <div class="dashboard">
        <div class="dashboard-container">
            <Header :headerProps = "headerProps"></Header>
            <main>
                <div class="analysis">
                    <TaskSummary></TaskSummary>
                    <ActivityGraph></ActivityGraph>
                   
                </div>
                <CardContainer :containerData="upcomingDeadline"/>
                <CardContainer :containerData="newTask" />

            </main>
        </div>

        <RightSideBar></RightSideBar>
        
    </div>
  
</template>

<script>
import ActivityGraph from '../components/ActivityGraph.vue';
import Header from '../components/Header.vue';
import TaskSummary from '../components/TaskSummary.vue';
import CardContainer from '../components/CardContainer.vue';
import RightSideBar from '../components/RightSideBar.vue';

export default {
    components:{
        Header,
        TaskSummary,
        ActivityGraph,
        CardContainer,
        RightSideBar
    },
    setup(){
        const userName = 'Freddie';
        const headerProps = {
            title :  `Hi ${userName}`,
            titleText: "Let's finish your task today !",
            search : false,
            filter: false,
            icons: true,
        }
        const upcomingDeadline = {
            title : 'Upcoming Deadline',
            cardLimit : 10,
        }
        
        const newTask = {
            title : 'New Task',
            cardLimit : 10,
        }

        return{
            headerProps,
            upcomingDeadline,
            newTask,
        }
    }
}
</script>

<style scoped>
    .dashboard{
        position: relative;
        display: flex;
        width: 100%;
    }

    .dashboard .dashboard-container {
        position: relative;
        width: 72%;
        background-color: var(--light-gray-bg) ;
        overflow: hidden;
    }


    .dashboard main{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 35px 30px;

    }

    .dashboard .analysis{
        display: flex;
        gap: 25px;
    }
</style>