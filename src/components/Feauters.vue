<template>
<div class="feauter">
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="item in data" :key="item.name">
                <router-link :to="item.path">
                    <button class="feauter__col feauter__col_pad">
                        <img class="feauter__icon" :src="require(`../assets/img/icons/${item.icon}.png`)" :alt="item.title" />
                        <h4 class="feauter__title">{{item.title}}</h4>
                        <p class="feauter__p">{{item.text}}</p>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    feauterData
} from '@/data/data.dummy';

export default {
    data() {
        return {
            data: feauterData,
        }
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },

}
</script>
