<template>
    <div class="my-Contact">
        <div class="container">
        <div class="Title">
                <h2>
                    {{ title }}
                </h2>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.01773734973!2d12.395912571608152!3d41.90998597209594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2seg!4v1672873478319!5m2!1sen!2seg" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h3>CONTACT ADDRESS</h3>
                    <ul class="information">
                        <li v-for="(value, key) in myInformation" :key="(value, key)">
                            <span> <b-icon :icon="value.icon"></b-icon> {{ key }}: </span>
                            <p> {{ value.title }} </p>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h3>CONTACT FORM</h3>
                    <form>
                        <div class="user-box">
                            <input type="text" name="name" id="name" required="">
                            <label>Your Name</label>
                        </div>
                        <div class="user-box">
                            <input type="EMail" name="Email" id="Email" required="">
                            <label>E-Mail</label>
                        </div>
                        <div class="user-box">
                            <input type="tel" name="phone" id="Phone" required="">
                            <label>Phone</label>
                        </div>                       
                        <div class="user-box">
                            <textarea type="text" name="Message" required="" id="Message"></textarea>
                            <label for="Message">Your Message</label>
                        </div>
                        <div class="Send">
                            <button type="submit"  value="Submit">Send Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data: function () {
    return {
    title: "CONTACT ME",
    pageName: "My Contact",
    pageDescription: "This Is Contact Page",
    myInformation: {
      Address: {
          title: '1234 Street Road, City Name',
          icon: "geo-alt"
      },
      Phone: {
          title: '01234567890',
          icon: "telephone"
      },
      EMail: {
          title: 'johndoe@gmail.com',
          icon: "envelope"
      },
      Website: {
          title: 'JOHNDOE.com',
          icon: "house"
      }, 
    }
    };
},
    name: 'Contact'
}
</script>
<style lang="sass">
.my-Contact
    padding-top: 50px
    background-color: #fff
    height: 100vh 
    h3
        text-align: left
        padding: 40px 0
    .information
        li
            display: flex
            align-items: center
            font-family: "Manrope-Bold"
            font-size: 20px
            padding-bottom: 40px
            span
                color: #707070
                padding-right: 5px
                svg
                    color: #fff
                    background-color: #06CB79
                    padding: 5px
                    font-size: 30px
                    margin-right: 5px
            p
                color: #000
    form
        text-align: left
        .user-box
            position: relative
            margin-bottom: 20px
            input,textarea
                width: 100%
                border: none
                border-bottom: 2px solid #707070
                background-color: transparent
                color: #000
                outline: none
                padding: 10px 0
                z-index: 1
                &:focus ~label,
                &:valid ~label
                    top: -20px
                    left: 0
                    color: #06CB79
                    font-size: 15px
            label
                position: absolute
                top: 0
                left: 0
                padding: 10px 0
                z-index: 0
                transition: .5s
        .Send
            display: flex
            justify-content: right
            

</style>