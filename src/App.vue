<template>
    <router-view></router-view>
</template>
<script lang='ts' setup>
</script>
<style>
html,body,#app {
    min-width: 1280px;
    height: 100%;
    background: url('./assets/images/421.jpg') no-repeat  scroll ;
    background-size: cover;
    overflow: auto;
}
::-webkit-scrollbar {
    width: 1px;
    height: 3px;
    border-radius: 1px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 10px;
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.44,rgb(255, 255, 255)),color-stop(0.72,rgb(253, 252, 251)),color-stop(0.86,rgb(252, 251, 250)));
    transition: 0.3s ease-in-out;
}
::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

</style>