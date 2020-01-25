<template>
    <div class="badges-holder">
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Round Badges</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>A couple of main badges rounded</small>
                            </div>
                        </div>
                        <div class="row d-flex">
                            <HtmlPreview>
                               <div class="badge basic badge-round">
                                    <label class="badge-label">1</label>
                                </div>
                                <div class="badge main badge-round">
                                    <label class="badge-label">2</label>
                                </div>
                                <div class="badge info badge-round">
                                    <label class="badge-label">3</label>
                                </div>
                                <div class="badge warn badge-round">
                                    <label class="badge-label">4</label>
                                </div>
                                <div class="badge danger badge-round">
                                    <label class="badge-label">5</label>
                                </div>
                                <div class="badge success badge-round">
                                    <label class="badge-label">6</label>
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
                        <p>Square Badges</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>A couple of main badges squared</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="badge basic">
                                    <label class="badge-label">Basic</label>
                                </div>
                                <div class="badge main">
                                    <label class="badge-label">Main</label>
                                </div>
                                <div class="badge info">
                                    <label class="badge-label">Info</label>
                                </div>
                                <div class="badge warn">
                                    <label class="badge-label">Warn</label>
                                </div>
                                <div class="badge danger">
                                    <label class="badge-label">Danger</label>
                                </div>
                                <div class="badge success">
                                    <label class="badge-label">Success</label>
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
    name: 'Badges',
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
        display: flex;
    }
</style>

