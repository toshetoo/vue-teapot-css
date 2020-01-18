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
    </div>
</template>

<script>

import CardView from '../../shared/card-view/CardView';
import CardBody from '../../shared/card-view/card-body/CardBody';
import CardHeader from '../../shared/card-view/card-header/CardHeader';
import HtmlPreview from '../../shared/html-preview/HtmlPreview';
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

