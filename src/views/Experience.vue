<template>
    <div class="my-Experience">
        <div class="container">
            <div class="Title">
                <h2>
                {{ title }}
                </h2>
            </div>
          <section class="timeline">
              <ul>
                   <li>
                        <div>
                            <b-button v-b-toggle.collapse-1 @click="isShow = !isShow"  class="top-section">
                                <div class="title"><h2>Lorem Ipsum </h2></div>
                                <div class="date"><p>(<span> Jan 2014</span> - <span>Dec 2015 </span>) </p></div>
                                <b-icon  class="toggleUpDown" :class='{ "rotate": isShow }' :icon="icon"></b-icon>
                            </b-button>
                            <b-collapse id="collapse-1" class="mt-2 info">
                        
                                <div class="category">Front End Developer </div>
                                <div class="disc">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lorem, porttitor in ligula a, malesuada ullamcorper augue. Maecenas dictum, felis nec sodales pulvinar, nisl leo scelerisque nibh, quis pellentesque odio lorem eu dolor.
                                    </p>
                                </div>
                           
                            </b-collapse>
                        </div>
                    </li>
                   <li>
                        <div>
                            <b-button v-b-toggle.collapse-2 @click="isShow = !isShow"  class="top-section">
                                <div class="title"><h2>Lorem Ipsum </h2></div>
                                <div class="date"><p>( Jan 2014 - Dec 2015 ) </p></div>
                                <b-icon  class="toggleUpDown" :class='{ "rotate": isShow }' :icon="icon"></b-icon>
                            </b-button>
                            <b-collapse id="collapse-2" class="mt-2 info">
                        
                                <div class="category">Front End Developer </div>
                                <div class="disc">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lorem, porttitor in ligula a, malesuada ullamcorper augue. Maecenas dictum, felis nec sodales pulvinar, nisl leo scelerisque nibh, quis pellentesque odio lorem eu dolor.
                                    </p>
                                </div>
                           
                            </b-collapse>
                        </div>
                    </li>
                   <li>
                        <div>
                            <b-button v-b-toggle.collapse-3 @click="isShow = !isShow"  class="top-section">
                                <div class="title"><h2>Lorem Ipsum </h2></div>
                                <div class="date"><p>( Jan 2014 - Dec 2015 ) </p></div>
                                <b-icon  class="toggleUpDown" :class='{ "rotate": isShow }' :icon="icon"></b-icon>
                            </b-button>
                            <b-collapse id="collapse-3" class="mt-2 info">
                        
                                <div class="category">Front End Developer </div>
                                <div class="disc">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lorem, porttitor in ligula a, malesuada ullamcorper augue. Maecenas dictum, felis nec sodales pulvinar, nisl leo scelerisque nibh, quis pellentesque odio lorem eu dolor.
                                    </p>
                                </div>
                           
                            </b-collapse>
                        </div>
                    </li>
                   <li>
                        <div>
                            <b-button v-b-toggle.collapse-4 @click="isShow = !isShow"  class="top-section">
                                <div class="title"><h2>Lorem Ipsum </h2></div>
                                <div class="date"><p>( Jan 2014 - Dec 2015 ) </p></div>
                                <b-icon  class="toggleUpDown" :class='{ "rotate": isShow }' :icon="icon"></b-icon>
                            </b-button>
                            <b-collapse id="collapse-4" class="mt-2 info">
                        
                                <div class="category">Front End Developer </div>
                                <div class="disc">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus lorem, porttitor in ligula a, malesuada ullamcorper augue. Maecenas dictum, felis nec sodales pulvinar, nisl leo scelerisque nibh, quis pellentesque odio lorem eu dolor.
                                    </p>
                                </div>
                           
                            </b-collapse>
                        </div>
                    </li>
              </ul>
          </section>
        </div>
    </div>
</template>
<script>
export default {

    data: function () {
        return {
            title: "Experience",
            isShow: false,
            icon : "chevron-double-down",
        };
    },
    name: 'Experience',

}

</script>
<style lang="sass">
.toggleUpDown
    transition: transform .3s ease-in-out !important
.toggleUpDown.rotate
    transform: rotate(180deg)
.my-Experience
    padding-top: 50px
    background-color: #fff
    height: 100vh !important
    .timeline
        padding-top: 50px
        ul
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            li
                list-style-type: none
                position: relative
                width: 7px
                background: #C0F2DD
                &::before
                    content: ""
                    position: absolute
                    left: 50%
                    top: 20px
                    transform: translateX(-50%)
                    width: 20px
                    height: 20px
                    border-radius: 50%
                    z-index: 1
                    background-color: #06CB79
                div
                    .top-section
                        background-color: #06CB79
                        padding: 10px
                        width: 100%
                        outline: none
                        .title
                            color: #fff
                            h2
                                font-size: 20px
                        .date
                            color: #ffffffc9
                            font-size: 15px
                    button:hover::before, button:focus::before
                        background-color: #06CB79
                    .info
                        padding: 20px 10px
                        background-color: #DFDFDFB3
                        border-bottom: 4px solid #06CB79
                        border-radius: 5px
                        .category
                            padding-bottom: 35px
                            font-size: 18px
                        .desc
                            font-family: "Manrope-Regular"
                            font-size: 16px
                            text-align: justify
            li>div
                position: relative
                bottom: 0
                width: 430px
                padding: 0
                &::before
                    content: ""
                    position: absolute
                    top: 25px
                    width: 0
                    height: 0
                    border-style: solid
            li:nth-child(odd)
                div
                    left: -465px
                    &::before
                        right: -15px
                        border-width: 8px 0 8px 16px
                        border-color: transparent transparent transparent #06CB79
            li:nth-child(even)
                div
                    left: 40px
                    &::before
                        left: -14px
                        border-width: 8px 16px 8px 0
                        border-color: transparent #06CB79 transparent transparent
.btn-secondary
    border-color: transparent !important
    &:focus
        box-shadow: none !important
.btn
    &:focus
        box-shadow: none
.btn-secondary:hover
    border-color: transparent
.btn-check:focus + .btn-secondary, .btn-secondary:focus, .btn-check:focus + .btn, .btn:focus
    box-shadow: none
@media (max-width:991px)
    .my-Experience
        .timeline
            ul
                display: flex
                flex-direction: column
                align-items: flex-end
                li
                    margin-bottom: 7px !important
                    >div
                        left: -465px !important
                        &::before
                            border-width: 8px 0 8px 16px !important
                            right: -15px !important
                        .top-section
                            margin-bottom: 10px !important
@media (max-width:479px)
    .my-Experience
        .timeline
            ul
                li
                    >div
                        width: 300px
                        left: -329px !important
</style>