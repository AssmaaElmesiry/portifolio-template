<template>
    <div class="sideBar">
        <div class="searchBox">
            <input type="search" class="form-control" placeholder="Search"/>
            <i class="fas fa-search"></i>
        </div>
        <h3>POPULAR BLOG</h3>
        <section class="PopularBlog">
            <ul class="items">
                <li>
                    <a href="#">
                        <div class="mask">
                            <img src="../images/Projects1.png">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                    <div class="comment">
                        <b-icon icon="chat-square-fill"></b-icon> {{ counter }} comments
                    </div>
                </li>
                <li>
                    <a href="#">
                        <div class="mask">
                            <img src="../images/Projects1.png">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                    <div class="comment">
                        <b-icon icon="chat-square-fill"></b-icon>  {{ counter }} comments
                    </div>
                </li>
                            <li>
                    <a href="#">
                        <div class="mask">
                            <img src="../images/Projects1.png">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                    <div class="comment">
                        <b-icon icon="chat-square-fill"></b-icon>  {{ counter }} comments
                    </div>
                </li>
                            <li>
                    <a href="#">
                        <div class="mask">
                            <img src="../images/Projects1.png">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                    <div class="comment">
                        <b-icon icon="chat-square-fill"></b-icon>  {{ counter }} comments
                    </div>
                </li>
                            <li>
                    <a href="#">
                        <div class="mask">
                            <img src="../images/Projects1.png">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                    <div class="comment">
                       <b-icon icon="chat-square-fill"></b-icon> {{ counter }} comments
                    </div>
                </li>         
            </ul>
        </section>
        <srction class="TagItem">
          <h3>TAG BLOG</h3>
            <ul class="Tags">
                <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>
        </srction>
      <section class="RecentBlog">
            <h3>RECENT BLOG</h3>
            <ul>
                <li v-for="hash in hashtag" :key="hash" class="item">
                <span> {{hash}} </span>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                <p class="comment"><b-icon icon="chat-square-fill"></b-icon> {{counter}} comments</p>
                </li>
            </ul>
      </section>
      <section class="Categories">
        <h3>CATEGORIES</h3>
        <ul>
            <li v-for="Category in Categories" :key="Category">
                <p>{{ Category }}</p>
                <span v-for="item in items" :key="item"> ( {{ item }} )</span>
            </li>
        </ul>
      </section>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            counter: '15',
            tags: ["Lorem Ipsum1", "Lorem Ipsum2","Lorem Ipsum1", "Lorem Ipsum2","Lorem Ipsum1", "Lorem Ipsum2",],
            hashtag: ['#PHP #LARAVEL','#PHP #LARAVEL','#PHP #LARAVEL','#PHP #LARAVEL','#PHP #LARAVEL'],
            Categories: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum',],
            items: '5'
        };
    },
    props: ['Counter'],
    name: "sideBar",
};
</script>
<style lang="sass">
.sideBar
    h3
        text-align: left
        font-size: 24px
        color: #06CB79
        font-family: "Manrope-Bold"
        padding-bottom: 30px
        padding-top: 50px
    .searchBox
        input
            border: 1px solid #06CB79
            box-shadow: none
    .PopularBlog
        height: 500px
        overflow-y: scroll
        .items
            li
                position: relative
                margin-bottom: 35px
                transition: 0.5s all
                &::before
                    content: ""
                    position: absolute
                    bottom: -15px
                    left: 0
                    height: 2px
                    width: 100%
                    background-color: #707070
                &:hover
                    p
                        color: #06CB79
                        transition: 0.5s all
                .comment
                    text-align: left
                    font-family: "Manrope-Bold"
                    padding-top: 5px
                    cursor: pointer
            .mask
                display: flex
                align-items: center
                p
                    text-align: start
                    padding-left: 10px
                    color: #000
                img
                    width: 100%
                    height: 100%
    .Tags
        display: flex
        flex-wrap: wrap
        li
            border: 1px solid #000
            padding: 7px 5px
            margin: 5px
            border-radius: 5px
            font-family: "Manrope-Bold"
            color: #707070
            transition: 0.7s all
            &:hover
                background-color: #06CB79
                color: #fff
                transition: 0.7s all
                border: 1px solid #06CB79
    .RecentBlog
        ul
            li
                text-align: left
                color: #707070
                position: relative
                padding-top: 5px
                cursor: pointer
                &::before
                    content: ""
                    position: absolute
                    bottom: 0
                    left: 0
                    width: 100%
                    height: 1px
                    background-color: #707070
                span
                    font-size: 12px
                    font-family: "Manrope-Regular"
                p
                    padding-bottom: 20px
                    padding-top: 15px
                    font-size: 12px
                    font-family: "Manrope-Regular"
                .comment
                    font-size: 11px
                    font-family: "Manrope-Bold"
    .Categories
        ul
            li
                display: flex
                justify-content: space-between
                position: relative
                padding: 15px 0
                &::before
                    content: ""
                    position: absolute
                    height: 1px
                    background-color: #707070
                    width: 100%
                    bottom: 0
                    left: 0


</style>