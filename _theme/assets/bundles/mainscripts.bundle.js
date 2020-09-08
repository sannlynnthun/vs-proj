if ("undefined" == typeof jQuery)
    throw new Error("jQuery plugins need to be before this file");

$.getJSON("../../../config/menu-setting.json", function(res) {
    // console.table(res.lstMenuGroup);
    // console.table(res.lstMenuItem);
    var menuData = '';
    for (var i = 0; i < res.lstMenuGroup.length; i++) {
        var menuItemData = '';
        var group = res.lstMenuGroup[i];
        var items = res.lstMenuItem.filter(x => x.id == group.id);
        for (let j = 0; j < items.length; j++) {
            var item = items[j];
            menuItemData += `
                    <li>
                        <a href="#" class="href-link"
                        data-group-name="${group.name}"
                        data-form-type="${item.form_type}" 
                        data-href="${item.href}">${item.name}</a>
                    </li>
                `;
        }
        menuData +=
            `<li>
                <a href="javascript:void(0);" class="menu-toggle">
                    <i class="zmdi zmdi-home"></i>
                    <span>${group.name}</span>
                </a>
                <ul class="ml-menu">
                    ${menuItemData}
                </ul>
            </li>`;
    }
    $('#ul-Menu-Data').append(menuData);

    $('.href-link').bind('click', function() {
        $('#div-Main').hide();
        var l_FormType = $(this).data('form-type');
        var l_Link = $(this).data('href');
        var l_Title = $(this).html();
        $('#lblTitle').html(l_Title);
        $('#lblGroupTitle').html($(this).data('group-name'));
        if (l_FormType == 'iframe') {
            var l_Link = `<iframe id="div_Content" height="500px" src="${l_Link}" frameborder="0" width="100%"></iframe>`;
            $('#div-Content').append(l_Link);
        } else if (l_FormType == 'link') {
            $('#div-Content').load(l_Link);
        }
        $('#div-Main').show();
    });
});

$.AdminOreo = {},
    $.AdminOreo.options = { colors: { red: "#ec3b57", pink: "#E91E63", purple: "#ba3bd0", deepPurple: "#673AB7", indigo: "#3F51B5", blue: "#2196f3", lightBlue: "#03A9F4", cyan: "#00bcd4", green: "#4CAF50", lightGreen: "#8BC34A", yellow: "#ffe821", orange: "#FF9800", deepOrange: "#f83600", grey: "#9E9E9E", blueGrey: "#607D8B", black: "#000000", blush: "#dd5e89", white: "#ffffff" }, leftSideBar: { scrollColor: "rgba(0,0,0,0.5)", scrollWidth: "4px", scrollAlwaysVisible: !1, scrollBorderRadius: "0", scrollRailBorderRadius: "0" }, dropdownMenu: { effectIn: "fadeIn", effectOut: "fadeOut" } }, $.AdminOreo.leftSideBar = {
        activate: function() {
            var t = this,
                i = $("body"),
                r = $(".overlay");
            $(window).on("click", function(e) { var a = $(e.target); "i" === e.target.nodeName.toLowerCase() && (a = $(e.target).parent()), !a.hasClass("bars") && t.isOpen() && 0 === a.parents("#leftsidebar").length && (a.hasClass("js-right-sidebar") || r.fadeOut(), i.removeClass("overlay-open")) }), $.each($(".menu-toggle.toggled"), function(e, a) { $(a).next().slideToggle(0) }), $.each($(".menu .list li.active"), function(e, a) {
                var t = $(a).find("a:eq(0)");
                t.addClass("toggled"), t.next().show()
            }), $(".menu-toggle").on("click", function(e) {
                var a = $(this),
                    t = a.next();
                if ($(a.parents("ul")[0]).hasClass("list")) {
                    var i = $(e.target).hasClass("menu-toggle") ? e.target : $(e.target).parents(".menu-toggle");
                    $.each($(".menu-toggle.toggled").not(i).next(), function(e, a) { $(a).is(":visible") && ($(a).prev().toggleClass("toggled"), $(a).slideUp()) })
                }
                a.toggleClass("toggled"), t.slideToggle(320)
            }), t.checkStatuForResize(!0), $(window).resize(function() { t.checkStatuForResize(!1) }), Waves.attach(".menu .list a", ["waves-block"]), Waves.init()
        },
        checkStatuForResize: function(e) {
            var a = $("body"),
                t = $(".navbar .navbar-header .bars"),
                i = a.width();
            e && a.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function() { $(this).removeClass("no-animate").dequeue() }), i < 1170 ? (a.addClass("ls-closed"), t.fadeIn()) : (a.removeClass("ls-closed"), t.fadeOut())
        },
        isOpen: function() { return $("body").hasClass("overlay-open") }
    }, $.AdminOreo.rightSideBar = {
        activate: function() {
            var t = this,
                i = $("#rightsidebar"),
                r = $(".overlay");
            $(window).on("click", function(e) { var a = $(e.target); "i" === e.target.nodeName.toLowerCase() && (a = $(e.target).parent()), !a.hasClass("js-right-sidebar") && t.isOpen() && 0 === a.parents("#rightsidebar").length && (a.hasClass("bars") || r.fadeOut(), i.removeClass("open")) }), $(".js-right-sidebar").on("click", function() { i.toggleClass("open"), t.isOpen() ? r.fadeIn() : r.fadeOut() })
        },
        isOpen: function() { return $(".right-sidebar").hasClass("open") }
    }, $.AdminOreo.navbar = {
        activate: function() {
            var e = $("body"),
                a = $(".overlay");
            $(".bars").on("click", function() { e.toggleClass("overlay-open"), e.hasClass("overlay-open") ? a.fadeIn() : a.fadeOut() }), $('.nav [data-close="true"]').on("click", function() {
                var e = $(".navbar-toggle").is(":visible"),
                    a = $(".navbar-collapse");
                e && a.slideUp(function() { a.removeClass("in").removeAttr("style") })
            })
        }
    }, $.AdminOreo.select = { activate: function() { $.fn.selectpicker && $("select:not(.ms)").selectpicker() } }, $(".boxs-close").on("click", function() { $(this).parents(".card").addClass("closed").fadeOut() });
var edge = "Microsoft Edge",
    ie10 = "Internet Explorer 10",
    ie11 = "Internet Explorer 11",
    opera = "Opera",
    firefox = "Mozilla Firefox",
    chrome = "Google Chrome",
    safari = "Safari";

function initSparkline() {
    $(".sparkline").each(function() {
        var e = $(this);
        e.sparkline("html", e.data())
    })
}

function initCounters() { $(".count-to").countTo() }

function skinChanger() {
    $(".right-sidebar .choose-skin li").on("click", function() {
        var e = $("body"),
            a = $(this),
            t = $(".right-sidebar .choose-skin li.active").data("theme");
        $(".right-sidebar .choose-skin li").removeClass("active"), e.removeClass("theme-" + t), a.addClass("active"), e.addClass("theme-" + a.data("theme"))
    })
}

function CustomScrollbar() { $(".sidebar .menu .list").slimscroll({ height: "calc(100vh - 60px)", color: "rgba(0,0,0,0.2)", position: "left", size: "2px", alwaysVisible: !1, borderRadius: "3px", railBorderRadius: "0" }), $(".navbar-left .dropdown-menu .body .menu").slimscroll({ height: "300px", color: "rgba(0,0,0,0.2)", size: "3px", alwaysVisible: !1, borderRadius: "3px", railBorderRadius: "0" }), $(".chat-widget").slimscroll({ height: "300px", color: "rgba(0,0,0,0.4)", size: "2px", alwaysVisible: !1, borderRadius: "3px", railBorderRadius: "2px" }), $(".right-sidebar .slim_scroll").slimscroll({ height: "calc(100vh - 60px)", color: "rgba(0,0,0,0.4)", size: "2px", alwaysVisible: !1, borderRadius: "3px", railBorderRadius: "0" }) }
$.AdminOreo.browser = { activate: function() { "" !== this.getClassName() && $("html").addClass(this.getClassName()) }, getBrowser: function() { var e = navigator.userAgent.toLowerCase(); return /edge/i.test(e) ? edge : /rv:11/i.test(e) ? ie11 : /msie 10/i.test(e) ? ie10 : /opr/i.test(e) ? opera : /chrome/i.test(e) ? chrome : /firefox/i.test(e) ? firefox : navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? safari : void 0 }, getClassName: function() { var e = this.getBrowser(); return e === edge ? "edge" : e === ie11 ? "ie11" : e === ie10 ? "ie10" : e === opera ? "opera" : e === chrome ? "chrome" : e === firefox ? "firefox" : e === safari ? "safari" : "" } }, $(function() { $.AdminOreo.browser.activate(), $.AdminOreo.leftSideBar.activate(), $.AdminOreo.rightSideBar.activate(), $.AdminOreo.navbar.activate(), $.AdminOreo.select.activate(), setTimeout(function() { $(".page-loader-wrapper").fadeOut() }, 50) }), $(function() {
    "use strict";
    initSparkline(), initCounters(), skinChanger(), CustomScrollbar()
}), $(function() { $(".theme-light-dark .t-light").on("click", function() { $("body").removeClass("menu_dark") }), $(".theme-light-dark .t-dark").on("click", function() { $("body").addClass("menu_dark") }), $(".m_img_btn").on("click", function() { $("body").toggleClass("menu_img") }), $(".ls-toggle-btn").on("click", function() { $("body").toggleClass("ls-toggle-menu") }), $(".chat-launcher").on("click", function() { $(".chat-launcher").toggleClass("active"), $(".chat-wrapper").toggleClass("is-open pullUp") }), $(".form-control").on("focus", function() { $(this).parent(".input-group").addClass("input-group-focus") }).on("blur", function() { $(this).parent(".input-group").removeClass("input-group-focus") }) });
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date;
! function() {
    var e = document.createElement("script"),
        a = document.getElementsByTagName("script")[0];
    e.async = !0, e.src = "https://embed.tawk.to/59f5afbbbb0c3f433d4c5c4c/default", e.charset = "UTF-8", e.setAttribute("crossorigin", "*"), a.parentNode.insertBefore(e, a)
}();