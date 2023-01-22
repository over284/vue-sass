<template>
<nav class="navbar navbar-expand-lg p-0">
    <div class="container">
        <a class="navbar-brand logo" href="/"><img src="../assets/img/icons/logo.png" alt="logo" width="165"></a>
        <div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item menu-link" v-for="(menu, index) in HeaderMenuList" :key="index">
                    <router-link class="nav-link active" aria-current="page" :to="menu.path">
                        {{menu.name}}
                    </router-link>
                </li>
            </ul>
            <div class="icons">
                <a href="https://instagram.com/vadim_st_vadim/" target="_blank"><img src="../assets/img/icons/icons8-instagram-24.png" alt=""></a>
                <a href="https://t.me/Vad3x" target="_blank"><img src="../assets/img/icons/icons8-телеграмма-app-24.png" alt=""></a>
                <a href="https://github.com/over284" target="_blank"><img src="../assets/img/icons/icons8-github-24.png" alt=""></a>
                <a href="https://vk.com/id32547665" target="_blank"><img src="../assets/img/icons/icons8-vk-в-круге-24.png" alt=""></a>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import {
    menuList
} from '../constants/MenuLinks'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            HeaderMenuList: menuList,
        }
    }
}
</script>

<style lang="scss">
@import '../assets/layouts/index.scss';

.navbar {
    height: 60px;
}

.navbar-nav {
    height: 60px;
}

.logo {
    padding-right: 180px;
}

.collapse-fontsize {
    font-size: 18px;
    font-weight: bold;
}

.menu-link {
    padding: 8px 10px;

    &:hover {
        background: $greyLight;
    }
}

.icons {
    a {
        width: 30px;
        height: 30px;
        text-align: center;
        border: 1px solid $greyLight;
        border-radius: 50%;
        margin-right: 10px;
        display: inline-block;
    }
}
</style>
