<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                <a href="/">
                    <img src="../images/logo.png">
                </a>
            </div>
            <Push left isOpen width="75" class="nav">
                <router-link to="/" tag="li" exact>
                <a>
                <b-icon icon="house-door"></b-icon>
                <p>Home</p>
                </a>
                </router-link>
                <router-link to="/about" tag="li"><a><b-icon icon="person"></b-icon><p>About</p></a></router-link>
                <router-link to="/Skill" tag="li"><a><b-icon icon="gear"></b-icon><p>Skill</p></a></router-link>
                <router-link to="/Experience" tag="li"><a><b-icon icon="patch-check"></b-icon><p>Experience</p></a></router-link>
                <router-link to="/Projects" tag="li"><a><b-icon icon="laptop"></b-icon><p>Projects</p></a></router-link>
                <router-link to="/Blog" tag="li"><a><b-icon icon="grid1x2"></b-icon><p>Blog</p></a></router-link>
                <router-link to="/Contact" tag="li"><a><b-icon icon="envelope-open"></b-icon><p>Contact</p></a></router-link>
            </Push>
        </div></div>
</template>

<script>
import { Push } from 'vue-burger-menu'
export default{
    name: 'AppHeader',
     components: {
        Push,
    }
}
</script>
<style lang="sass">
.bm-burger-button
    opacity: 0
.bm-burger-bars
    background-color: #06CB79
.bm-item-list
    margin: 0
.cross-style
    display: none
.bm-menu
    background-color: #000000c9
    height: 100%
    left: 0
    overflow-x: hidden
    position: fixed
    top: 0
    padding-top: 140px
    transition: .5s
    z-index: 1000
    width: 75px !important
.header
    .logo
        img
            position: fixed
            top: 25px
            left: 10px
            width: 56px
            z-index: 9999
    .router-link-active
        a
            color: #06CB79 !important
    .nav
        display: flex
        list-style: none
        justify-content: center
        font-size: 17px
        margin: 0
        padding: 0
        height: 100%
        li
            display: flex
            justify-content: center
            align-self: center
            height: 50px
            width: 100%
            transition: all 0.5s
            padding: 0 !important
            a
                align-self: center
                text-decoration: none
                color: #93939d
            p
                display: none
                transition: all 0.5s ease-out
            svg
                transition: all 0.5s ease-out
            &:hover
                p
                    display: block
                    transition: all 0.5s ease-out
                    font-size: 11px
                    color: #06CB79
                svg
                    display: none
                    transition: all 0.5s ease-out
@media (max-width:767px)
    .bm-menu
        background-color: #000000c9
        left: 0
        overflow-x: hidden
        position: fixed
        top: 0
        transition: 0.5s
        z-index: 1000
        width: 100% !important
        height: 80px
        padding-top: 0 !important
        overflow: inherit
        .bm-item-list
            display: flex
            justify-content: space-around
            position: absolute
            top: 35px
            left: 0
            width: 100%
    .header
        .logo
            img
                position: fixed
                left: 50%
                width: 13%
                transform: translate(-50%, -50%)

</style>