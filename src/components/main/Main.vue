<template>
    <div class="app">
        <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-x-lg-2">
                <div class="sidebar-holder">
                    <Sidebar></Sidebar>
                </div>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-x-lg-10">
                <div class="main-content-holder">
                    <MainContent></MainContent>

                    <div class="footer-holder">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import Sidebar from '../layout/sidebar/Sidebar.vue';
import MainContent from '../layout/main-content/MainContent.vue';
import Footer from '../layout/footer/Footer.vue';

export default {
    name: "Main",
    components: {
        Sidebar,
        MainContent,
        Footer
    }
}
</script>

<style scoped>
    .app {
        background-color: #1e1e2f;
        padding: 15px;
    }

    .main-content-holder {
        background-color: green;
    }

    .footer-holder {
        background-color: blue;
    }
</style>