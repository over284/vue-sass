<template>
<div class="col">
    <h3 class="footer__title">Разделы</h3>
    <ul class="footer__list">
        <li v-for="item in data" :key="item.id">
            <router-link :to="item.path" class="footer__link">{{item.title}}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
import {
    feauterData
} from '@/data/data.dummy';
export default {
    props: {
        msg: String
    },
    data() {
        return {
            data: feauterData,
        }
    },
}
</script>
