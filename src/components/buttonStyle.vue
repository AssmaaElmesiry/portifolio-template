<template><button>{{ downloadCv }}</button></template>

<script>
// @ is an alias to /src
export default {
 data: function () {
    return {
    downloadCv: "Download My CV",
    }
  },
  name: "buttonStyle",
}
</script>
<style lang="sass">
button
    font-size: 18px
    letter-spacing: 2px
    text-transform: uppercase
    display: inline-block
    text-align: center
    font-weight: bold
    padding: 0.7em 2em
    border: 4px solid #06CB79
    background-color: #06CB79
    border-radius: 2px
    position: relative
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1)
    color: #FFF
    text-decoration: none
    transition: 0.3s ease all
    z-index: 1
    &:before
        transition: 0.5s all ease
        position: absolute
        top: 0
        left: 50%
        right: 50%
        bottom: 0
        opacity: 0
        content: ''
        background-color: #fff
        color: #06CB79
        z-index: -1
    &:hover, &:focus
        color: #06CB79
    &:hover:before,&:focus:before
        transition: 0.5s all ease
        left: 0
        right: 0
        opacity: 1
    &:active
        transform: scale(0.9)

</style>