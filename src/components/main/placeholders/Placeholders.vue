<template>
    <div class="placeholders-holder">
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Placeholder for lines</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>Animated lines</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="placeholder-wrapper dark">
                                    <div class="placeholder-line long"></div>
                                    <div class="placeholder-line medium"></div>
                                    <div class="placeholder-line short"></div>
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
                        <p>Placeholder Header with image</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>Animated Placeholder Header with small image</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="placeholder-wrapper dark">
                                    <div class="placeholder-header image small">
                                        <div class="placeholder-line"></div>
                                        <div class="placeholder-line"></div>
                                    </div>
                                </div>
                            </HtmlPreview>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="placeholder-wrapper dark">
                                    <div class="placeholder-header image medium">
                                        <div class="placeholder-line"></div>
                                        <div class="placeholder-line"></div>
                                    </div>
                                </div>
                            </HtmlPreview>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="placeholder-wrapper dark">
                                    <div class="placeholder-header image big">
                                        <div class="placeholder-line"></div>
                                        <div class="placeholder-line"></div>
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
                        <p>Fluid Placeholder</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>Animated lines</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="placeholder-wrapper fluid">
                                    <div class="placeholder-header image small">
                                        <div class="placeholder-line"></div>
                                        <div class="placeholder-line"></div>
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
    name: 'Placeholders',
    components: {
        CardView,
        CardBody,
        CardHeader,
        HtmlPreview
    }
}
</script>

<style lang="scss">
    .visual-preview {
        display: block;
    }
</style>

