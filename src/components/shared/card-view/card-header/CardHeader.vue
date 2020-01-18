<template>
    <div class="card-header">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CardHeader'
}
</script>

<style lang="scss" scoped>
    .card-header {
    padding: 15px 15px 0;
    border: 0;
    background-color: transparent;
    color: hsla(0,0%,100%,.8);
}
</style>