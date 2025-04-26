<template>
    <div class="settings">
        <Header :header-props="headerProps"></Header>

        <main>
            <div class="settings-container">
                <div class="tabs-link">
                    <span @click="toggleTabs('general')" :class="{active: activeTab === ('general')}">General</span>
                    <span @click="toggleTabs('notification' ) " :class="{active: activeTab === ('notification')}">Notification</span>
                </div>
                <div class="tabs">
                    <GeneralSettingsTab v-if="activeTab === 'general'"/>
                    <NotificationsSettingTab v-if="activeTab === 'notification'"/>

                </div>
                <div class="button">
                    <button>
                        Save Changes
                    </button>
                </div>
            </div>
        </main>
    </div>
  
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import GeneralSettingsTab from '../components/GeneralSettingsTab.vue';
import NotificationsSettingTab from '../components/NotificationsSettingTab.vue';
export default {
    components: {
        Header,
        GeneralSettingsTab,
        NotificationsSettingTab,
    },

    setup(){
        const headerProps = {
            title :  'Settings',
            titleText: null,
            search : false,
            filter: false,
            icons: true,
            button: false,
        }

        const activeTab = ref('general')

        function toggleTabs(tab) {
            activeTab.value = tab
        }

        return{
            headerProps,
            activeTab,
            toggleTabs,
        }
    }

}
</script>

<style scoped>
    .settings{
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: var(--light-gray-bg);
    }

    .settings main{
        width: 100%;
        padding: 30px;
    }

    .settings main .settings-container{
        width:  100%;
        min-height: 530px;
        background-color: var(--white);
        border-radius: 10px;
        padding: 32px;
    }

    .settings-container .tabs-link{
        display:flex;
        gap:10px;
        width: 100%;
        border-bottom: 1px solid var(--dark-gray-bg);
        
    }

    .settings-container .tabs-link span{
        padding:  10px;
        font-size: 14px;
        color: var(--gray-text-secondary);
        cursor: pointer;
    }

    .settings-container .tabs-link span.active{
        color: var(--black);
        border-bottom: 3px solid var(--light-blue);
    }

    .settings .button{
        margin-top: 40px;
    }

    .settings .button button{
        background-color: var(--light-blue);
        width: 180px;
        padding: 10px 0;
        color: var(--white);
        font-weight: 500;
        border-radius: 10px;
    }
</style>