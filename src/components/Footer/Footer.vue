<template>
<footer class="footer footer_bg">
    <div class="container">
        <div class="row">
            <FooterIcons />
            <FooterNavigations :footerMenu="footerMenu" />
            <FooterClients :footerMenuClient="footerMenuClient" />
            <FooterContacts />
        </div>
    </div>
</footer>
</template>

<script>
import {
    menuList,
    menuClient
} from '../../constants/MenuLinks'

import FooterIcons from '../Footer/FooterIcons.vue'
import FooterNavigations from '../Footer/FooterNavigations.vue'
import FooterClients from './FooterClient.vue'
import FooterContacts from './FooterContacts.vue'

export default {
    data() {
        return {
            footerMenu: menuList,
            footerMenuClient: menuClient
        }
    },
    components: {
        FooterIcons,
        FooterNavigations,
        FooterClients,
        FooterContacts,
    },
}
</script>
