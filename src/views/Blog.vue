<template>
    <div class="Blog">
        <div class="container">
            <div class="Title">
                <h2>
                {{ title }}
                </h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="item">
                        <div class="mask"  @click="goToBlogDetails()">
                            <img src="../images/Projects.png">
                        </div>
                        <div class="section">
                            <h3  @click="goToBlogDetails()">
                                Lorem Ipsum
                            </h3>
                            <p  @click="goToBlogDetails()">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur eget erat ut mollis. Ut eget tellus at metus sodales consequat eget id dolor. Ut volutpat finibus ornare. Aliquam erat volutpat. Nullam lobortis felis a nisl tristique sagittis in ut est
                            </p>
                            <div class="icon">
                                <b-icon icon="hash" id="hash"></b-icon>
                                <b-icon icon="person-fill" id="user"></b-icon>
                                <b-icon icon="chat-square-fill" id="comment"></b-icon>
                                <b-icon icon="eye-fill" id="seen"></b-icon>
                            </div>
                            <b-tooltip target="hash" variant="success" title="PHP | LARAVEL"></b-tooltip>
                            <b-tooltip target="user" variant="success" title="Admin"></b-tooltip>
                            <b-tooltip target="comment" variant="success" title="4"></b-tooltip>
                            <b-tooltip target="seen" variant="success" title="20"></b-tooltip>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <div class="mask"  @click="goToBlogDetails()">
                            <img src="../images/Projects.png">
                        </div>
                        <div class="section">
                            <h3  @click="goToBlogDetails()">
                                Lorem Ipsum
                            </h3>
                            <p  @click="goToBlogDetails()">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur eget erat ut mollis. Ut eget tellus at metus sodales consequat eget id dolor. Ut volutpat finibus ornare. Aliquam erat volutpat. Nullam lobortis felis a nisl tristique sagittis in ut est
                            </p>
                            <div class="icon">
                                <b-icon icon="hash" id="hash1"></b-icon>
                                <b-icon icon="person-fill" id="user1"></b-icon>
                                <b-icon icon="chat-square-fill" id="comment1"></b-icon>
                                <b-icon icon="eye-fill" id="seen1"></b-icon>
                            </div>
                            <b-tooltip target="hash1" variant="success" title="PHP | LARAVEL"></b-tooltip>
                            <b-tooltip target="user1" variant="success" title="Admin"></b-tooltip>
                            <b-tooltip target="comment1" variant="success" title="4"></b-tooltip>
                            <b-tooltip target="seen1" variant="success" title="20"></b-tooltip>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <div class="mask"  @click="goToBlogDetails()">
                            <img src="../images/Projects.png">
                        </div>
                        <div class="section">
                            <h3  @click="goToBlogDetails()">
                                Lorem Ipsum
                            </h3>
                            <p  @click="goToBlogDetails()">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur eget erat ut mollis. Ut eget tellus at metus sodales consequat eget id dolor. Ut volutpat finibus ornare. Aliquam erat volutpat. Nullam lobortis felis a nisl tristique sagittis in ut est
                            </p>
                            <div class="icon">
                                <b-icon icon="hash" id="hash2"></b-icon>
                                <b-icon icon="person-fill" id="user2"></b-icon>
                                <b-icon icon="chat-square-fill" id="comment2"></b-icon>
                                <b-icon icon="eye-fill" id="seen2"></b-icon>
                            </div>
                            <b-tooltip target="hash2" variant="success" title="PHP | LARAVEL"></b-tooltip>
                            <b-tooltip target="user2" variant="success" title="Admin"></b-tooltip>
                            <b-tooltip target="comment2" variant="success" title="4"></b-tooltip>
                            <b-tooltip target="seen2" variant="success" title="20"></b-tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="goToBlogPage()">VIEW MORE <b-icon icon="chevron-double-right"></b-icon></button>
        
        </div>
    </div>
</template>
<script>
export default {
    name: 'Blog',
    components: {
    },
    data: function () {
        return {
            title: "Blog",
        };
    },
    methods:{
        goToBlogPage(){
            this.$router.push({ path: '/' });
            this.$router.push({ name: 'BlogPage' });
            // this.$router.push('/BlogPage'); 
        },
        goToBlogDetails(){
            this.$router.push({ path: '/' });
            this.$router.push({ name: 'BlogDetails' });
            // this.$router.push('/BlogDetails'); 
        }
    },
};
</script>
<style lang="sass">
.Blog
    padding-top: 50px
    background-color: #fff
    height: 100vh 
    .item
        padding-top: 20px
        height: 100%
        &:hover
            img
                transform: scale(1.5)
            .section
                position: relative
                h3
                    color: #06CB79
        .mask
            position: relative
            overflow: hidden
            img
                width: 100%
                height: 100%
                transition: transform .5s ease
            &::before
                content: "03 Feb"
                position: absolute
                top: 5px
                right: 5px
                background-color: #06CB79
                width: 75px
                height: 75px
                color: #fff
                font-size: 24px
                font-family: "Manrope-Bold"
                z-index: 9
        .section
            background-color: #F5F5F5
            padding: 10px
            h3
                font-size: 38px
                font-size: #000
                transition: transform .7s all
            p
                font-size: 12px
                font-family: "Manrope-Regular"
                text-align: justify
                padding: 10px
        .icon
            display: flex
            justify-content: space-around
            padding: 5px
            svg
                font-size: 20px
                &:hover
                    color: #06CB79
        .tooltip
            background-color: red
    button
        margin-top: 20px
@media (max-width:991px)
    .Blog
        .item
            .mask
                position: relative
                &::before
                    content: "03 Feb"
                    width: 50px
                    height: 50px
                    color: #fff
                    font-size: 16px
                    font-family: "Manrope-Bold"
                    z-index: 9
            .section
                h3
                    font-size: 30px
</style>