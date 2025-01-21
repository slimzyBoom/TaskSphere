<template>
  <div class="box">
    <div class="cont">
        <h3>Running Task</h3>
        <h1>65</h1>
    </div>
    <div class="cont">
        <div class="progress-circle" :style=" `--progress: ${progress}%`" >
            <h2>45%</h2>
        </div>
        <div class="total-task">
            <h2>100</h2>
            <p>Task</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {


    setup(){

        const progress = 45

        return{
            progress
        }
    }
}
</script>

<style scoped>
    .box{
        display: flex;
        flex-direction: column;
        width: 204px;
        /* width: 30%; */
        height: 214px;
        border-radius: 10px;
        background-color: var(--black);
        padding: 20px 20px;
        color: var(--white);
        
    }

    .box h3{
        color: var(--white);
    }

    .box h1{
        font-size: 32px;
        font-weight: 600;
        padding: 20px 0;
    }

    .box .cont:nth-child(2){
        display: flex;
        gap: 38px;
        align-items: center;
    }

    .box .progress-circle{        
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: conic-gradient(var(--light-blue) var(--progress), #546eff23 0%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        

    }

    .box .progress-circle::before {
        content: '';
        width: 92%;
        height: 92%;
        border-radius: 50%;
        background-color: var(--black);
        position: absolute;
        font-size: 18px;
    }

   
    .box .cont p{
        color: var(--gray-text-secondary);
    }

    .box .cont h2{
        font-size: 20px;
        font-weight: 600;
    }

    .box .progress-circle h2{
        z-index: 2;
        font-size: 18px;
        font-weight: 400;
    }



</style>