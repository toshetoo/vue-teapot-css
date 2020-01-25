<template>
    <div class="grid-holder">
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Autowrapped Grid</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>The columns will split the space between themselves.</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="row">
                                    <div class="col" style="background-color: red">
                                        COL 1
                                    </div>
                                    <div class="col" style="background-color: blue">
                                        COL 2
                                    </div>
                                    <div class="col" style="background-color: red">
                                        COL 3
                                    </div>
                                    <div class="col" style="background-color: blue">
                                        COL 4
                                    </div>
                                </div>
                            </HtmlPreview>
                        </div>
                    </CardBody>
                </CardView>
            </div>
        </div>  
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>12 Column Grid</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>The framework provides column classes for each device.</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-x-lg-3" style="background-color: red">
                                        COL 1
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-x-lg-3" style="background-color: blue">
                                        COL 2
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-x-lg-3" style="background-color: red">
                                        COL 3
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-x-lg-3" style="background-color: blue">
                                        COL 4
                                    </div>
                                </div>
                            </HtmlPreview>
                        </div>
                    </CardBody>
                </CardView>
            </div>
        </div>      
    </div>
</template>

<script>

import CardView from '../../shared/card-view/CardView';
import CardBody from '../../shared/card-view/card-body/CardBody';
import CardHeader from '../../shared/card-view/card-header/CardHeader';
import HtmlPreview from 'vue-html-viewer';
export default {
    name: 'Grid',
    components: {
        CardView,
        CardBody,
        CardHeader,
        HtmlPreview
    }
}
</script>

<style lang="sass" scoped>

</style>

