<template>
    <div class="buttons-holder">
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Buttons</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>The framework provides a few basic pre-defined buttons.</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                                <button>Simple button</button>
                                <button class="main">Main button</button>
                                <button class="info">info button</button>
                                <button class="warn">warn button</button>
                                <button class="danger">danger button</button>
                                <button class="success">success button</button>
                                <button class="link">link button</button>
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
                        <p>Outline buttons</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>The framework provides a few basic pre-defined buttons.</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                                <button>Simple button</button>
                                <button class="main-outline">Main button</button>
                                <button class="info-outline">info button</button>
                                <button class="warn-outline">warn button</button>
                                <button class="danger-outline">danger button</button>
                                <button class="success-outline">success button</button>
                            </HtmlPreview>
                        </div>
                    </CardBody>
                </CardView>
            </div>
            <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Button Groups</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>The framework provides a few basic pre-defined buttons.</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                                <div class="btn btn-group main">
                                    <div class="btn-group-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="btn-group-body">
                                        Mobile
                                    </div>
                                </div>
                                <div class="btn btn-group main">
                                    <div class="btn-group-body">
                                        Mobile
                                    </div>
                                    <div class="btn-group-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                </div>
                            </HtmlPreview>
                        </div>
                    </CardBody>
                </CardView>
            </div>
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
    name: 'Buttons',
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
        padding: 5px;
    }
</style>

