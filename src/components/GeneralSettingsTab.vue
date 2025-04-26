<template>
  <div class="general-tab">
    <div class="cont">
        <h2>Language</h2>
        <DropDown :data="languaage"/>
    </div>

    <div class="cont">
        <h2>Timezone</h2>
        <DropDown :data="timezones"/>
    </div>
    <div class="cont">
        <h2>Timezone</h2>
        <div class="tmz-cont">
            <div class="box" :class="{active: tmzBoxActive===('24hours')}"  @click="toggleTmzBox('24hours')">
                <p>24 hours</p>
                <span></span>
            </div>
            <div class="box" :class="{active: tmzBoxActive===('12hours')}" @click="toggleTmzBox('12hours')">
                <p>12 hours</p>
                <span></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DropDown from './DropDown.vue'
export default {
  components: { DropDown },

  setup(){
    const languaage = ['english', 'latin', 'german', 'french', 'hausa', 'igbo']
    const timezones = [
        "Pacific/Midway",
        "Pacific/Honolulu",
        "America/Anchorage",
        "America/Los_Angeles",
        "America/Denver",
        "America/Chicago",
        "America/New_York",
        "America/Caracas",
        "America/Sao_Paulo",
        "Atlantic/Azores",
        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Europe/Moscow",
        "Asia/Dubai",
        "Asia/Karachi",
        "Asia/Kolkata",
        "Asia/Bangkok",
        "Asia/Hong_Kong",
        "Asia/Tokyo",
        "Australia/Sydney",
        "Pacific/Auckland"
        ];
    const tmzBoxActive = ref('24hours')

    function toggleTmzBox(data) {
        tmzBoxActive.value = data
    }


    return{
        languaage,
        timezones,
        tmzBoxActive,
        toggleTmzBox,
    }
  }

}
</script>

<style>
    .general-tab{
        position: relative;
        width: 40%;
    }

    .general-tab .cont{
        display:flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 24px ;
    }

    .general-tab .cont h2{
        font-weight: 500;
    }

    .general-tab .cont .tmz-cont{
        display: flex;
        justify-content: space-between;
    }

    .general-tab .cont .tmz-cont .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        border: 1px solid var(--dark-gray-bg);
        padding:10px;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
        transition: .2s ease;

    }

    .general-tab .cont .tmz-cont .box span{
        width: 20px;
        height: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
    }

    .general-tab .cont .tmz-cont .box.active{
        border: 1px solid var(--light-blue);
    }

    .general-tab .cont .tmz-cont .box.active span{
        border: 2px solid var(--light-blue);
    }
</style>