<template>
<div class="categories">
    <div class="row">
        <div class="col">
            <h2 class="categories__h2">
                <b>Категории</b>
            </h2>
            <div class="categories__subtitle">
                Загляни в любой уголочек сайта на твой выбор
            </div>
        </div>
    </div>
    <Feauters :data="feauterData" />
</div>
</template>

<script>
import {
    feauterData
} from '@/data/data.dummy';

import Feauters from '@/components/Feauters.vue';

export default {
    name: 'reviews',
    components: {Feauters},
    data() {
        return {
            feauterData: feauterData,
        }
    }
}
</script>