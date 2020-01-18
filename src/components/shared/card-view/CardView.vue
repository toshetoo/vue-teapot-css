<template>
    <div class="card">        
        <slot></slot>      
    </div>
</template>

<script>

export default {
    name: 'CardView'
}
</script>

<style lang="scss" scoped>
.card {
    background: #27293d;
    border: 0;
    max-width: none;
    margin-bottom: 30px;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .2857rem;
}
</style>