<template>
    <div class="my-Skill">
        <div class="container">
            <div class="Title">
                <h2>
                    {{ title }}
                </h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                        <p>PHP & MySQL</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">
                            <span>
                                80%
                            </span>
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
            pageName: "My Skill",
            pageDescription: "This Is Skill Page",
            title: "SKILL",
        };
    },
name: 'Skill'
}
</script>
<style lang="sass">
.my-Skill 
    height: 100vh
    padding-top: 50px
    background-color: #fff
    .row 
        padding-top: 75px 
        .title 
            display: flex 
            justify-content: left 
            p
                font-size: 18px 
                font-family: "Manrope-Bold"
        .progress 
            height: 10px !important
            overflow: initial !important 
            position: relative 
            background-color: #06CB7980 
            margin-bottom: 50px 
            .progress-bar 
                border-radius: 5px
                color: #000 
                background-color: #06CB79
                span
                    position: absolute
                    right: 0
                    top: -26px 
                    font-size: 16px
                    font-family: "Manrope-Regular"
                    color: #58666E
</style>