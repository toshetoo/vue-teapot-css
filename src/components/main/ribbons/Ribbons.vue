<template>
    <div class="ribbons-holder">
        <div class="row">
                    <div class="col pl-3 pr-3">
                        <CardView>
                            <CardHeader>                        
                                <p>Ribbon Left</p>
                            </CardHeader>
                            <CardBody>
                                <div class="row">
                                    <div class="col">
                                        <small>Full card view with left ribbon</small>
                                    </div>
                                </div>
                                <div class="row">
                                    <HtmlPreview>
                                    <div class="card">
                                <div class="ribbon cornered left">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="placeholder-wrapper fluid">
                                    <div class="placeholder-header image medium">
                                        <div class="placeholder-line short"></div>
                                        <div class="placeholder-line short"></div>
                                        <div class="placeholder-line short"></div>
                                        <div class="placeholder-line"></div>
                                        <div class="placeholder-line"></div>
                                    </div>
                                </div>
                                <div class="placeholder-wrapper fluid">
                                    <div class="placeholder-line long"></div>
                                    <div class="placeholder-line medium"></div>
                                    <div class="placeholder-line short"></div>
                                    <div class="placeholder-line medium"></div>
                                    <div class="placeholder-line long"></div>
                                    <div class="placeholder-line short"></div>
                                    <div class="placeholder-line medium"></div>
                                    <div class="placeholder-line long"></div>
                                    <div class="placeholder-line medium"></div>
                                    <div class="placeholder-line short"></div>
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
                        <p>Ribbon Rigth</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>Full card view with right ribbon</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="card">
                        <div class="ribbon cornered right">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="placeholder-wrapper fluid">
                            <div class="placeholder-header image medium">
                                <div class="placeholder-line short"></div>
                                <div class="placeholder-line short"></div>
                                <div class="placeholder-line short"></div>
                                <div class="placeholder-line"></div>
                                <div class="placeholder-line"></div>
                            </div>
                        </div>
                        <div class="placeholder-wrapper fluid">
                            <div class="placeholder-line long"></div>
                            <div class="placeholder-line medium"></div>
                            <div class="placeholder-line short"></div>
                            <div class="placeholder-line medium"></div>
                            <div class="placeholder-line long"></div>
                            <div class="placeholder-line short"></div>
                            <div class="placeholder-line medium"></div>
                            <div class="placeholder-line long"></div>
                            <div class="placeholder-line medium"></div>
                            <div class="placeholder-line short"></div>
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
    name: 'Ribbons',
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

