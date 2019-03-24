Vue.component('cookie-banner', {
    props: {
        //Variables
        cookie_banner_title: {
            type: String,
            default: "By browsing this website, you agree to the use of cookies, allowing us to perform traffic statistics while improving the quality of this website. To learn more, please consult our"
        },
        cookie_banner_button_text: {
            type: String,
            default: "I Accept"
        },
        privacy_policy_link_text: {
            type: String,
            default: "Privacy Policy."
        },
        //Function
        setCookie: {
            type: Function
        },
        checkCookie: {
            type: Function
        },
        //Classes
        cookieFooterBanner: {
            type: String,
            default: "cookie_footer_banner"
        },
        cookieBannerCloseButton: {
            type: String,
            default: "cookie_banner_close_button"
        },
        cookieFooterBannerContent: {
            type: String,
            default: "cookie_footer_banner_content"
        },
        cookieFooterBannerTitle: {
            type: String,
            default: "cookie_footer_banner_title"
        },
        cookieFooterBannerButton: {
            type: String,
            default: "cookie_footer_banner_button"
        }
    },
    data: function () {
        return {
            cookie_hide: true,
            check_cookie: null,
            cookie_name: 'cookie_banner_viewed',
            cookie_value: 'Y',
            exdays: 365
        }
    },
    mounted() {
        if(this.checkCookie('cookie_banner_viewed') == true){
            this.cookie_hide = true;
        }else{
            this.cookie_hide = false;
        }
    },
    template:
        '<div :class="cookieFooterBanner" :hidden="cookie_hide">' +
            '<div :class="cookieBannerCloseButton" @click="setCookie(cookie_name, cookie_value, exdays); cookie_hide = true">+</div>' +
            '<div :class="cookieFooterBannerContent">' +
                '<div :class="cookieFooterBannerTitle">{{ cookie_banner_title }} <a href="/privacy-policy"> {{ privacy_policy_link_text }}</a></div>' +
                '<div :class="cookieFooterBannerButton"><button @click="setCookie(cookie_name, cookie_value, exdays); cookie_hide = true">{{ cookie_banner_button_text }}</button></div>' +
            '</div>' +
        '</div>'
})
