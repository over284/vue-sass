<template>
<div class="home">
    <Carousel />
    <div class="container home__offering">
        <div class="row">
            <div class="col-md-4 home_border">
                <h3 class="home__offeringTitle">Блог о играх и не только</h3>
            </div>
            <div class="col-md-8">
                <p class="home__paragraph">Игровые блоги — новости, слухи, скандалы в игровой индустрии, обсуждение игр и не только. Всё самое интересное на JkSite</p>
            </div>
        </div>
    </div>
    <Feauters :data="feauterData" />
    <Properties :propertiesData="propertiesData" />
</div>
</template>

<script>
import {
    feauterData,
    propertiesData
} from '@/data/data.dummy';

import Carousel from '@/components/Carousel.vue';
import Feauters from '@/components/Feauters.vue';
import Properties from '@/components/Properties.vue';

export default {
    name: 'Home',
    components: {
        Carousel,
        Feauters,
        Properties
    },
    data() {
        return {
            feauterData: feauterData,
            propertiesData: propertiesData,
        }
    }
}
</script>
