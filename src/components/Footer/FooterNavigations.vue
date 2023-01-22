<template>
<div class="col">
    <h3 class="footer__title">Навигация</h3>
    <ul class="footer__list">
        <li v-for="(menu, index) in footerMenu" :key="index">
            <router-link :to="menu.path" class="footer__link">{{menu.name}}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        footerMenu: {
            type: Array,
            required: true
        }
    }
}
</script>
