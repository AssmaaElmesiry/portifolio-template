<template>
    <div class="my-Project">
        <div class="container">
            <div class="Title">
                <h2>
                {{ title }}
                </h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <img src="../images/Projects.png">
                        <p>Projects Name</p>
                        <div class="mask">
                            <div class="icon">
                                <b-icon icon="eye-fill"></b-icon>
                                <b-icon icon="link45deg"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
        pageName: "My Project",
        title: "PROJECTS",
        };
    },        
    name: 'Projects'
}
</script>
<style lang="sass">
.my-Project
    padding-top: 50px
    background-color: #fff
    height: 100vh
    .row
        padding-top: 50px
    .item
        position: relative
        overflow: hidden
        margin-bottom: 20px
        img
            width: 100%
            height: 100%
        .mask
            position: absolute
            bottom: -100px
            transition: all 1s ease
            .icon
                position: absolute
                color: #000
                left: -70px
                top: 70px
                font-size: 20px
                display: flex
                width: 55px
                justify-content: space-between
                flex-direction: row-reverse
        p
            position: absolute
            color: #fff
            font-size: 25px
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            transition: all 1s ease
        &:hover
            .mask
                border-left: 160px solid transparent
                border-bottom: 100px solid #fdeeee94
                height: 0
                width: 0
                position: absolute
                right: 0px
                bottom: 0
                z-index: 2
                transition: all 1s ease
            &::before
                content: ""
                position: absolute
                top: 0
                width: 100%
                height: 100%
                left: 0
                background-color: #0000009c
            p
                position: absolute
                top: 55px
                transition: all 1s ease
@media (max-width:991px)
    .my-Project
        .item
            p
                font-size: 16px
            &:hover
                p
                    top: 22px
@media (max-width:767px)
    .my-Project
        .item
            p
                font-size: 25px
            &:hover
                p
                    top: 55px
</style>