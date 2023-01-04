<template>
    <section class="post-box">
        <section class="BlogPosts">
            <div class="postArea">
                <img src="../images/Projects.png">
                <div class="topSection">
                    <div class="hashtag" >
                    <span v-for="hashtag in hashtags" :key="hashtag">
                        {{ hashtag }}
                    </span>
                    </div>
                    <h2>{{ title }}</h2>
                    <div class="item">
                        <div class="admin">
                            <div class="img">
                                <img src="../images/avatar.png"> 
                            </div>
                            <p>
                            <a href="#">
                                {{ name }}
                            </a>
                            </p>
                        </div>
                        <p>
                            <b-icon icon="chat-square-fill"></b-icon> {{ counter }}
                        </p>
                    </div>
                </div>
                <section class="Post">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, reprehenderit magni velit eius consectetur deleniti provident nobis ratione. Fugiat eligendi nulla corporis doloribus molestias vitae veritatis corrupti error, voluptate exercitationem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam blanditiis eos ex praesentium corporis iure laudantium dolorem error voluptatibus alias quam, ducimus enim? Error eligendi architecto sequi itaque cupiditate!
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, reprehenderit magni velit eius consectetur deleniti provident nobis ratione. Fugiat eligendi nulla corporis doloribus molestias vitae veritatis corrupti error, voluptate exercitationem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam blanditiis eos ex praesentium corporis iure laudantium dolorem error voluptatibus alias quam, ducimus enim? Error eligendi architecto sequi itaque cupiditate!
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, reprehenderit magni velit eius consectetur deleniti provident nobis ratione. Fugiat eligendi nulla corporis doloribus molestias vitae veritatis corrupti error, voluptate exercitationem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam blanditiis eos ex praesentium corporis iure laudantium dolorem error voluptatibus alias quam, ducimus enim? Error eligendi architecto sequi itaque cupiditate!
                    </p>
                </section>
            </div>
            <section class="comment-box">
                <div class="title">
                    <h3> comment  ( {{ counter }})</h3>
                </div>
                <ul class="comment-inner">
                    <li class="comment parent">
                        <article class="comment-body">
                            <a href="#" class="userImage">
                                <img src="../images/avatar.png">
                            </a>
                            <div class="details">
                                <a href="#" class="userName">
                                    Mido Hegazy
                                </a>
                                <span class="date">
                                    March 20, 2015 at 1:00 pm
                                </span>
                                <a href="#" id="reply" class="reply">
                                    Reply
                                </a>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, mollitia! Mollitia, quia excepturi quibusdam velit, facilis aliquam repudiandae aperiam aliquid impedit corrupti doloribus, dolorum maxime adipisci accusamus libero rerum reprehenderit.
                                </p>
                            </div>                        
                        </article>
                        <ul class="child">
                            <li>
                                <article class="comment-body">
                                    <a href="#" class="userImage">
                                        <img src="../images/avatar.png">
                                    </a>
                                    <div class="details">
                                        <a href="#" class="userName">
                                            Mido Hegazy
                                        </a>
                                        <span class="date">
                                            March 20, 2015 at 1:00 pm
                                        </span>
                                        <a href="#" id="reply" class="reply">
                                            Reply
                                        </a>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, mollitia! Mollitia, quia excepturi quibusdam velit, facilis aliquam repudiandae aperiam aliquid impedit corrupti doloribus, dolorum maxime adipisci accusamus libero rerum reprehenderit.
                                        </p>
                                    </div>                        
                                </article>
                                <ul class="child">
                                    <li>
                                        <article class="comment-body">
                                            <a href="#" class="userImage">
                                                <img src="../images/avatar.png">
                                            </a>
                                            <div class="details">
                                                <a href="#" class="userName">
                                                    Mido Hegazy
                                                </a>
                                                <span class="date">
                                                    March 20, 2015 at 1:00 pm
                                                </span>
                                                <a href="#" id="reply" class="reply">
                                                    Reply
                                                </a>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, mollitia! Mollitia, quia excepturi quibusdam velit, facilis aliquam repudiandae aperiam aliquid impedit corrupti doloribus, dolorum maxime adipisci accusamus libero rerum reprehenderit.
                                                </p>
                                            </div>                        
                                        </article>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="comment parent">
                        <article class="comment-body">
                            <a href="#" class="userImage">
                                <img src="../images/avatar.png">
                            </a>
                            <div class="details">
                                <a href="#" class="userName">
                                    Mido Hegazy
                                </a>
                                <span class="date">
                                    March 20, 2015 at 1:00 pm
                                </span>
                                <a href="#" id="reply" class="reply">
                                    Reply
                                </a>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, mollitia! Mollitia, quia excepturi quibusdam velit, facilis aliquam repudiandae aperiam aliquid impedit corrupti doloribus, dolorum maxime adipisci accusamus libero rerum reprehenderit.
                                </p>
                            </div>                        
                        </article>
                    </li>
                    <form>
                        <div class="user-box">
                            <input type="text" name="name" required="">
                            <label>Name*</label>
                        </div>
                        <div class="user-box">
                            <textarea type="text" name="comments" required="" id="comments"></textarea>
                            <label for="comments">Type Comment Here*</label>
                        </div>
                        <button>LEAVE COMMENT</button>
                </form>
                </ul>
            </section>
        </section>
    </section>
</template>
<script>
export default {
data() {
    return {        
        hashtags: ['#PHP','#LARAVEL'],
        title: 'Lorem Ipsum',
        name:'by Admin',
        counter: '15',
    }
},
name: "post",

};
</script>
<style lang="sass">
.post-box
    background-color: #fff
    .postArea
        background-color: #F5F5F5
        img
            width: 100%
            height: 100%
    .topSection
        text-align: center
        padding: 50px 0
        .hashtag
            span
                font-size: 12px
                color: #2c3e50
                font-family: "Manrope-Bold"
        h2
            font-size: 30px
            color: #000
            font-family: "Manrope-Bold"
            position: relative
            padding: 20px 0 30px 0
            &::before
                content: "03 Feb"
                position: absolute
                top: 0
                left: 0
                width: 75px
                height: 75px
                background-color: #06CB79
                color: #fff
        .item
            display: flex
            justify-content: center
            color: #2c3e50
            .admin
                display: flex
                justify-content: center
                padding-right: 52px
                color: #2c3e50
                .img
                    width: 25px
                    height: 25px
                    border: 1px solid transparent
                    border-radius: 50%
                    overflow: hidden
                    display: flex
                    align-items: center
                    img
                        width: 100%
                        height: 100%
                p
                    padding-left: 15px
                    a
                        color: #2c3e50 !important
    .Post
        text-align: justify
        padding: 0 25px
        p
            padding-bottom: 20px
    .comment-box
        h3
            text-align: left
            padding: 30px 0 30px 10px
            color: #06CB79
            font-size: 32px
            font-family: "Manrope-Bold"
        .comment-inner
            background-color: #F5F5F5
            padding: 20px !important
            li
                .comment-body
                    display: flex
                    .userImage
                        width: 60px
                        height: 60px
                        display: flex
                        border-radius: 50%
                        border: 1px solid transparent
                        img
                            border-radius: 50%
                    .details
                        text-align: left
                        .userName
                            display: block
                            text-align: left
                            font-size: 18px
                            color: #58666E
                            font-family: "Manrope-Regular"
                        .date
                            color: #58666E
                            position: relative
                            &::before
                                content: ""
                                position: absolute
                                bottom: -15px
                                left: 0
                                background-color: #707070
                                width: 150px
                                height: 2px
                        .reply
                            color: #06CB79
                            font-size: 18px
                            font-family: "Manrope-Regular"
                        p
                            padding-top: 48px
                            font-size: 18px
                            color: #000
                            text-align: justify
                            font-family: "Manrope-Regular"
                .child
                    li
                        margin-left: 55px
                        margin-top: 25px
        form
            text-align: left
            margin-top: 70px
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
                    transition: .5s
</style>