<template>
  <div class="notifications-tab">
    <NotificationToggle :notification="'Message'"/>
    <NotificationToggle :notification="'Task Update'"/>
    <NotificationToggle :notification="'Task Deadline'"/>
    <NotificationToggle :notification="'Mentor Help'"/>

  </div>
</template>

<script>
import NotificationToggle from './NotificationToggle.vue';

export default {
    components:{
        NotificationToggle
    }

}
</script>

<style>
    .notifications-tab{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 25px;
    }
</style>