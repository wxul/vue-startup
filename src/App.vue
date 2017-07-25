<template>
    <div class="app">
        <div class="menu">
            <router-link to="/index">index</router-link>
            <router-link to="/about">about</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import '@assets/style.less';
export default {

};
</script>
<style lang="less">
a {
    text-decoration: none;
    color: #000;
    &.active {
        color: red;
    }
}
</style>