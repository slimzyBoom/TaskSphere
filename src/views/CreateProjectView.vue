<template>
  <div class="create-project">
    
    <main>
        <form class="create-project-container">
            <div class="title">
                <h2>Create Project</h2>
            </div>
            <div class="cont">
                <label>Project Name</label>
                <input type="text" placeholder="Name of your project">
            </div>

            <div class="cont">
                <label>Project Description</label>
                <textarea placeholder="Describe your project"></textarea>
            </div>
            <div class="cont">
                <label>Category</label>
                <DropDown :data="categories"/>
            </div>
            <div class="cont">
                <label>Image</label>
                <div class="image-box">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </div>
            </div>
            
            <button>
                Create Project
            </button>
        </form>
    </main>
  </div>
</template>

<script>
import DropDown from '../components/DropDown.vue';
export default {
    components:{
        DropDown
    },

    setup(){
        const categories = ['UI/UX Designer', 'Front-end Development', 'Back-end Development', 'Web Development', 'Mobile App Development', 'Others']                

        return {
            categories
        }
    }

}
</script>

<style scoped>
     .create-project{
        min-height: 100vh;
        width: 100%;
        background-color: var(--light-gray-bg) ;

    }

    .create-project main{
        display: flex;
        flex-direction: column;
        /* gap: 30px; */
        padding: 30px;

    }

    .create-project main .create-project-container{
        display: flex;
        flex-direction: column;
        gap:40px;
        background-color: var(--white);
        position: relative;
        padding: 30px;
        border-radius: 10px;
        min-height: 650px;

    }

    .create-project main .create-project-container .title{
        display: flex;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
    }

    .create-project main .create-project-container .cont{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;

    }

    .create-project main .create-project-container .cont label{
        font-size: 14px;
        font-weight: 450;
    }

    .create-project main .create-project-container .cont input,
    .create-project main .create-project-container .cont textarea{
        border: 1.2px solid var(--dark-gray-bg);
        border-radius: 10px;
        padding: 10px;
    }

    .create-project main .create-project-container .cont textarea{
        height: 120px;
    }

    .create-project main .create-project-container .cont .image-box{
        display:flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        font-size: 20px;
        height: 200px;
        border: 1px dashed rgba(212, 211, 211, 0.919);
        border-radius: 10px;
    }

    .create-project main .create-project-container .cont .image-box svg{
        border-radius: 50%;
        background-color: var(--light-gray-bg);
        padding: 10px 12px;
        cursor: pointer;
    }

    .create-project main .create-project-container  button{
        position: relative;
        padding: 12px;
        color: var(--white);
        background-color: var(--light-blue);
        top: 100%;
        margin-top: 20px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 10px;
    }
</style>