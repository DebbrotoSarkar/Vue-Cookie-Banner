# Vue-Cookie-Banner
Vue cookie banner using vue component, mixin and props
/*
## Features

* Cookie banner component built with the power of Vue.
* Controlling dynamic data and function with Props.
* Easily possible to inherit any global script using mixing.
* Supports multiple sections.
* Using stylus for CSS


## Usage

Place the component into the page

```html
<cookie-banner :set-cookie="SetCookie" :check-cookie="CheckCookie"></cookie-banner>

```

Load js into the page

```js
<script src="{{ url_for('static', filename='js/common_component/cookie_banner.js')}}"></script>
<script src="{{ url_for('static', filename='js/common_mixin/global_mixin.js')}}"></script>
<script>
    var MixinList = [GlobalMixin];
</script>
```

Add the functionalities into global mixin

```js
SetCookie: function(cookie_name, cookie_value, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
    return true;
},
CheckCookie: function(cookie_name){
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
         c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return true;
        }
    }
    return false;
}
```

## [Props](#props)

| Prop                           | Type     | Required | Description                                               |
| :------------------------------| :------- | :------: | :-------------------------------------------------------- |
| `cookie_banner_title`          | String   |          | Banner title.                                             |
| `cookie_banner_button_text`    | String   |          | Banner click button text.                                 |
| `privacy_policy_link_text`     | String   |          | Privacy policy link text.                                 |
| `setCookie`                    | Function |     ✓    | Set cookie in the browser using pre define name and value |
| `checkCookie`                  | Function |     ✓    | Get cookie name and value from browser and verify it      |
| `cookieFooterBanner`           | Class    |          | Cookie banner main body class                             |
| `cookieBannerCloseButton`      | Class    |          | Cookie banner close button class                          |
| `cookieFooterBannerContent`    | Class    |          | Cookie banner content section                             |
| `cookieFooterBannerTitle`      | Class    |          | Cookie banner title                                       |
| `cookieFooterBannerButton`     | Class    |          | Cookie banner button                                      |


## FAQ
*/
