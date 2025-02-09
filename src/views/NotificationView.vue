<template>
  <div class="notifications">
    <Header :header-props="headerProps"></Header>
    <div
      class="notifications-container"
      v-for="notification in notificationStore.notifications"
      :key="notification.id"
    >
      <NotificationBox
        :colour="notificationStore.getCategoryColor(notification.category)"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import NotificationBox from "../components/NotificationBox.vue";
import { useNotificationStore } from "../stores/notifications";
const notificationStore = useNotificationStore();

const headerProps = {
  title: "Notifications",
  titleText: null,
  search: false,
  filter: false,
  icons: true,
  button: false,
};
</script>

<style scoped>
.notifications {
  min-height: 100vh;
  width: 100%;
  background-color: var(--light-gray-bg);
}

.notifications .title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
}

.notifications-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
}
</style>
