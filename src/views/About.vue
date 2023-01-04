<template>
  <div class="about">
    <div class="container">
      <div class="Title">
        <h2>
          {{ title }}
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="mask">
            <img src="../images/avatar.png">
          </div>
        </div>
        <div class="col-md-6">
          <div class="cardInfo">
            <span class="top">HELLO</span>
            <p>I'M <span> JOHN DOE</span></p>
            <span>WEB DEVELOPER</span>
            <div class="info">
              <ul>
                <li v-for="(value, key) in myInformation" :key="(value, key)">
                  <span> {{ key }}: </span>
                  <p> {{ value }} </p>
                </li>
              </ul>
            </div>
            <ul class="social">
              <li><a href="#"><b-icon icon="github"></b-icon></a></li>
              <li><a href="#"><b-icon icon="linkedin"></b-icon></a></li>
              <li><a href="#"><b-icon icon="facebook"></b-icon></a></li>
              <li><a href="#"><b-icon icon="twitter"></b-icon></a></li>
              <li><a href="#"><b-icon icon="google"></b-icon></a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="disc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lorem, porttitor in ligula a, malesuada ullamcorper augue. Maecenas dictum, felis nec sodales pulvinar, nisl leo scelerisque nibh, quis pellentesque odio lorem eu dolor. Sed tempus, nunc id tincidunt accumsan, arcu dolor ullamcorper nulla, eu convallis massa libero id erat. Fusce posuere pretium egestas. Proin id nulla ante. Sed condimentum tristique eros, sit amet auctor libero egestas non. Nulla quis tempus lorem, at pretium ipsum. Quisque auctor mattis molestie. Pellentesque sed blandit nisl. Suspendisse luctus tincidunt rhoncus. Donec neque est, lobortis vitae eros ac, consectetur ultricies dolor.
      </p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
// @ is an alias to /src
export default {
  data: function () {
    return {
      title: "ABOUT ME",
      myInformation: {
        Address: '1234 Street Road, City Name',
        Phone: '01234567890',
        EMail: ' johndoe@gmail.com',
        Website: 'JOHNDOE.com', 
      }
    };
  },
  name: "about",
};
</script>
<style lang="sass">
p
  margin: 0 !important
.about
  height: 100vh
  padding-top: 50px
  background-color: #fff
  .row
    padding-top: 50px
    .mask
      display: flex
      width: 50%
      border: 1px solid #06CB79
      margin: auto
      overflow: hidden
      img
        padding: 5px
        width: 100%
        transition: transform .5s ease
        &:hover
          padding: 1px
          transform: scale(1.1)
    .cardInfo
      display: flex
      flex-direction: column
      text-align: left
      padding: 10px 0 10px 25px
      .top
        padding: 8px 24px 9px 18px
        border: 1px solid #06CB79
        position: relative
        background-color: #06CB79
        color: #fff
        font-size: 14px
        width: fit-content
        margin-bottom: 20px
        &::before
          content: ""
          position: absolute
          top: 100%
          left: 50%
          margin-left: -12px
          border-width: 10px
          border-style: solid
          border-color: #06CB79 transparent transparent transparent
      >p
        margin: 0
        font-size: 25px
        font-family: "Manrope-Regular"
        color: #58666E
        >span
          font-size: 30px
          display: block
          font-family: "Manrope-Bold"
      span
        font-size: 20px
      .info
        position: relative
        padding-top: 25px
        padding-bottom: 20px
        &::after
          content: ""
          position: absolute
          width: 100%
          height: 1px
          background-color: #707070
          top: 10px
        ul
          position: relative
          &::before
            content: ""
            position: absolute
            top: 0px
            bottom: 0
            left: 11px
            margin: auto
            width: 1px
            height: 78%
            background-color: #cacdd6
            z-index: -1
          li
            display: flex
            padding-left: 30px
            &::before
              content: ""
              position: absolute
              left: 4px
              margin: 5px 0
              width: 15px
              height: 15px
              border-radius: 50%
              background-color: #06CB79
              // border: 1px solid #1685c8
            >p
              position: relative
              padding-right: 10px
              padding-bottom: 10px
              color: #000
              &::before
                content: ""
                position: absolute
                right: 5px
            p,span
              font-size: 15px
              font-family: "Manrope-Bold"
            span
              color: #707070
              padding-right: 5px
    .social
      display: flex
      justify-content: space-between
      width: 100%
      li
        border: 1px solid transparent
        background-color: #06CB79
        padding: 3px 7px
        border-radius: 5px
        a
          color: #fff
        svg
          font-size: 20px



  .disc
    padding-top: 30px
    padding-bottom: 20px
    font-size: 24px
    font-family: "Manrope-Regular"
    color: #58666E
    text-align: justify
</style>
