<template>
  <div class="home">
    <section>
      <div class="container">
        <div class="enter">
          <p>
            {{ welcomeMessage }}
          </p>
          <span> {{ MyName }}</span>
          <p>{{ MyJob }}</p>
        </div>
        <ButtonStyle class="botton" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonStyle from "../components/buttonStyle.vue";
// @ is an alias to /src
export default {
  data: function () {
    return {
      welcomeMessage: "HELLO",
      MyName: "I'M JOHN DOE",
      MyJob: " WEB  DEVELOPER",
    };
  },
  name: "Home",
  components: {
    ButtonStyle,
  },
};
</script>
<style lang="sass">
.home
  height: 100%
  section
    background-image: url(../images/enter.png)
    width: 100%
    height: 100vh
    background-size: cover
    background-repeat: no-repeat
    position: relative
    display: flex
    justify-content: center
    align-self: center
    align-items: center
    &::before
      content: ""
      background-color: rgba(0, 0, 0, 0.79)
      height: 100%
      width: 100%
      position: absolute
      top: 0
      left: 0
      z-index: 2
    .enter
      position: relative
      z-index: 9
      font-family: "Manrope-Bold"
      p,span
        font-size: 40px
        color: #fff
    .botton
      margin-top: 50px
      position: relative
      z-index: 9
@media (max-width:479px)
  .enter
    p,span
      font-size: 25px !important
</style>
