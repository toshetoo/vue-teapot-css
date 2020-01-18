<template>
    <div class="card-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CardBody'
}
</script>

<style lang="scss" scoped>
    .card-body {
        padding: 15px;
        padding-top: 0;
    }
</style>