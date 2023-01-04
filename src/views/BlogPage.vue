<template>
    <div class="my-Blog">
        <div class="container">
            <AllBlog />
        </div>    
    </div>
</template>
<script>
import AllBlog from "../components/AllBlog.vue"

export default {
    name: 'Blog',
    components: {
        AllBlog,
    },
}
</script>
<style lang="sass">
.my-Blog
    background-color: #fff
    height: 100vh 
</style>