<template>
    
    <header class="desktop-nav" v-if="!mobileView">
        <div class="header-right">
            <div class="logo">
                <a href="/"><img class="logo-img" src="../assets/hayche-logo.png" alt="hayche logo"></a>
            </div>
        </div>
        <div class="header-left">
            <ul class="nav-links">
               <li class="nav-link"><a href="/about">About Us</a></li>
                <!-- <li class="nav-link"><a href="">Business Units</a></li> -->
                <li  @click="active = !active" :aria-pressed="active ? 'true' : 'false'" class="nav-link">Business Units</li>
                <li class="nav-link"><a href="/reviews">Reviews</a></li>
                <li class="nav-link"><a href="">Contact</a></li>
                <li class="nav-link"><a href="">Blog</a></li>
            </ul>
        </div>
        <div class="navCta">
            <a href="" class="loginBtn">login</a>
        </div>
       
    </header>
    <DropDown :class="{ big: active }"/>


    <MobileNavigationMenu :class="{ 'open': showNav }" />
    <div class="mobile-nav" v-if="mobileView" @click="showNav = !showNav">
        <div class="mobile-nav-logo" @click="showNav = !showNav">
            <img class="logo-img" src="../assets/hayche-logo.png" alt="hayche logo">
        </div>
        <div id="nav-icon" class="nav-icon">
            <i class="fas fa-bars"></i>
        </div>
    </div>
   
</template>

<script>

import MobileNavigationMenu from './mobileNavigationMenu.vue';

import DropDown from './dropDown.vue';

export default {
    name: "Navigation-Bar",
    //     data: () => {
    // return {
    //   mobileView: true,
    //   showNav: false
    // };
    data: () => ({
        mobileView: true,
        showNav: false,
        active: false
    }),
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 990;
        }
    },
    components: { MobileNavigationMenu, DropDown },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    },
    // components: { MobileNavigation,}
}
</script>

<style scoped>

.big{
    display: block;
    position: fixed;
    z-index: 100;
    top: 100px;
   left: 0;
    background: var(--dark-purple);
    width: 100%;
}

.nav-link{
    color: var(--light);
    cursor: pointer;
}

.mobile-nav {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #1111113f;
    width: 100%;
    height: 80px;
    padding: 0 10px;
    z-index: 999;

}

#nav-icon {
    cursor: pointer;
}

#nav-icon i {
    font-size: 25px;
    color: var(--light);
}

.desktop-nav {
    display: flex;
    flex-direction: row;
    padding: 20px 100px;
    justify-content: space-between;
    align-items: center;
    background: #1111113f;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

}



.logo-img {
    height: 55px;
}

.nav-links {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 78px;
}

.nav-link a {
    color: var(--light);
    transition: 0.3s all ease;
    padding-bottom: 10px;
    font-weight: 500;

}

.nav-link a:hover {
    transition: 0.3s all ease;
    color: rgb(223, 223, 223);
    border-bottom: 2px solid var(--light);
}

.open {
    /* transform: translate(0px); */
    opacity: 100;
    z-index: 9999;
}

.navCta a {
    color: var(--light);
    transition: 0.3s all ease;
    padding: 10px 30px;
    font-weight: 500;
    text-transform: capitalize;
    background: var(--light-purple);
    border-radius: 10px;
}

.navCta a:hover {
    background: var(--dark-purple);
}
</style>