<template>
    <div class="BlogDetails">
        <div class="container">
          <div class="row">
                <div class="col-md-8">
                    <BlogPosts />
                </div>
                <div class="col-md-4">
                    <sideBar />
                </div>            
            </div>
        </div>    
    </div>
</template>
<script>
import BlogPosts from "../components/BlogPosts.vue"
import sideBar from "../components/sideBar.vue"

export default {
    name: 'Blog',
    components: {
        BlogPosts,
        sideBar,
    },
}
</script>
<style lang="sass">
.BlogDetails
    padding-top: 50px
    background-color: #fff
    height: auto
</style>