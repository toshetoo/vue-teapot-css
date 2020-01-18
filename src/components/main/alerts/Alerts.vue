<template>
    <div class="alerts-holder">
        <div class="row">
            <div class="col pl-3 pr-3">
                <CardView>
                    <CardHeader>                        
                        <p>Alerts</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>A few alerts for different status</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="alert main">
                                    <div class="alert-header">
                                        <div class="title">Alert title!</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>

                                <div class="alert info">
                                    <div class="alert-header">
                                        <div class="title">Alert title!</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>

                                <div class="alert warn">
                                    <div class="alert-header">
                                        <div class="title">Alert title!</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>

                                <div class="alert danger">
                                    <div class="alert-header">
                                        <div class="title">Alert title!</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>

                                <div class="alert success">
                                    <div class="alert-header">
                                        <div class="title">Alert title!</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
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
                        <p>Animated Alerts</p>
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col">
                                <small>Alerts with animation</small>
                            </div>
                        </div>
                        <div class="row">
                            <HtmlPreview>
                               <div class="alert main animated fade-in mr-2">
                                    <div class="alert-header">
                                        <div class="title">Fade in alert</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>
                                <div class="alert main animated fade-out mr-2">
                                    <div class="alert-header">
                                        <div class="title">Fade out alert</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
                                    </div>
                                </div>
                                <div class="alert main animated fade-move mr-2">
                                    <div class="alert-header">
                                        <div class="title">Move alert</div>
                                    </div>
                                    <div class="alert-body">
                                        <p class="body-text">
                                            Simple alert with body text!
                                        </p>
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
    name: 'Alerts',
    components: {
        CardView,
        CardBody,
        CardHeader,
        HtmlPreview
    }
}
</script>

<style lang="scss" scoped>

</style>

