<template>
  <div class="notification-box">
    <div class="icon">
        <font-awesome-icon icon="bell"></font-awesome-icon>
    </div>
    <div class="details">
        <h2>New Task Created</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae adipisci cumque quidem ducimus amet non, tempora fuga voluptatum. Voluptas fugit nulla eius aliquam rerum voluptatibus delectus tenetur. Nisi, labore esse!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .notification-box{
        display: flex;
        height: 100px;
        background-color: var(--white);
        border-radius: 10px;
        /* gap: 20px; */
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), /* Slight shadow below */
                0 1px 3px rgba(0, 0, 0, 0.06);
    }

    .notification-box .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        width: 200px;
        height: 100%;
        color: var(--white);
        background-color: red;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

    }

    .notification-box .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        padding: 15px 20px;

    }

    .notification-box .details h2{
        font-size: 17px;
        font-weight: 600;
        color: var(--black);
    }

    .notification-box .details p{
        font-size: 13.5px;
        color: var(--gray-text-primary);
    }


</style>