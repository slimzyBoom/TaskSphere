<template>
    <div class="dropdown-container">
        <div class="selected" @click="toggleDropdownActive()"> 
            <p>{{ selected }}</p>
            <font-awesome-icon icon="chevron-down" v-if="!dropdownActive"></font-awesome-icon>
            <font-awesome-icon icon="chevron-up" v-if="dropdownActive"></font-awesome-icon>
            
        </div>
        <div v-if="dropdownActive" class="dropdown">
            <li v-for="dt in data" :key="dt" @click="dropdownSelect(dt)">
                {{dt}}
            </li>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['data'],

    setup(props) {
        const selected = ref(props.data[0])
        const dropdownActive = ref(false)
        
        function toggleDropdownActive() {
            dropdownActive.value = !dropdownActive.value
        }

        function dropdownSelect(data){
            selected.value = data
        }

        return{
            selected,
            dropdownActive,
            toggleDropdownActive,
            dropdownSelect,
        }
    }

}
</script>

<style scoped>

    .dropdown-container .selected{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        text-transform: capitalize;
        padding: 10px;
        border: 1px solid var(--dark-gray-bg);
        border-radius: 10px;
        cursor: pointer;
        font-size: 15px;
    }

    .dropdown-container .dropdown{
        position: absolute;
        width: 100%;
        height: 150px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        padding: 10px;
        /* gap: 10px; */
        background-color: var(--light-gray-bg);
        text-transform: capitalize;
        border-radius: 5px;
        margin-top: 5px;
        z-index: 1;
    }

    .dropdown-container .dropdown::-webkit-scrollbar{
        width: 4px;
    }

    .dropdown-container .dropdown::-webkit-scrollbar-thumb{
        background: #ccc;
    }

    .dropdown-container .dropdown li{
        border-bottom: 1px solid #e5e7eb;
        padding: 5px 5px;
        font-size: 14px;
        cursor: pointer;

    }

    .dropdown-container .dropdown li:last-child{
        border: none;
    }

    
</style>