<template>
<div class="properties">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="properties__h2">
                    <b>Рекомендации</b>
                </h2>
                <div class="properties__subtitle">
                    Список рекомендаций может совмещать новые, самые продаваемые и рекомендуемые игры
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-12" v-for="property in propertiesData" :key="property.id">
                <router-link :to="{ name: 'propertyPage', params: {id: property.id}}" class="more-info">
                    <button class="properties__col">
                        <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/${property.image}.jpg`)" :alt="property.title" class="properties__img">
                        <h4 class="properties__h4">{{ property.title }}</h4>
                        <div class="properties__sub">{{ property.genre }}</div>
                        <ul class="properties__desc">
                            <li class="properties__item">{{ property.labels.first }}</li>
                            <li class="properties__item">{{ property.labels.second }}</li>
                            <li class="properties__item">{{ property.labels.third }}</li>
                        </ul>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    propertiesData
} from '@/data/data.dummy';

export default {
    data() {
        return {
            propertiesData: propertiesData,
        }
    },
    props: {
        propertiesData: {
            type: Array,
            default: () => [],
        },
        property: {
            type: Object
        }

    }
}
</script>
