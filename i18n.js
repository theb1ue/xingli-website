/* 苏州猩力科技官网 - 中英双语切换 (i18n.js)
 * 说明：页面文本打 data-i18n（纯文本）或 data-i18n-html（含HTML）标记，
 *       本文件提供字典与切换逻辑。语言偏好存 localStorage('xingli-lang')，默认中文。
 */
(function () {
    'use strict';

    var SITE = {
        zh: {
            'logo': '猩力<span>科技</span>',
            'nav.home': '首页',
            'nav.products': '产品',
            'nav.about': '关于',
            'nav.contact': '联系',
            'nav.terms': '服务条款',
            'lang.btn': 'EN',

            'hero.badge': '创新驱动未来',
            'hero.title': '用科技连接<span class="highlight">生活</span><br>用创新点亮<span class="highlight">未来</span>',
            'hero.subtitle': '苏州猩力科技有限公司，专注于移动互联网应用开发，致力于为用户打造优质的产品体验',
            'hero.cta.main': '探索产品',
            'hero.cta.secondary': '了解更多',

            'products.title': '我们的产品',
            'products.subtitle': '打造精品应用，让科技融入日常生活',
            'product.chushu.name': '厨树',
            'product.chushu.tagline': '你的私人厨房管家',
            'product.chushu.desc': '精选万道家常菜谱，智能推荐，一键采购，让做饭变得更简单。',
            'product.frog.name': '每日蛙',
            'product.frog.tagline': '每天进步一点点',
            'product.frog.desc': '趣味外语学习，AI口语陪练，让语言学习像玩游戏一样有趣。',
            'product.xingqiu.name': '每日猩球',
            'product.xingqiu.tagline': '在家也能科学健身',
            'product.xingqiu.desc': '专业教练课程，智能训练计划，随时随地开启健身之旅。',
            'product.download': '立即下载',

            'about.title': '关于猩力科技',
            'about.p1': '苏州猩力科技有限公司成立于苏州，是一家专注于移动互联网应用开发的科技公司。我们秉持"用户至上、创新驱动"的理念，致力于为用户提供优质的产品体验。',
            'about.p2': '旗下产品涵盖美食、健康、学习等多个领域，服务数百万用户。我们将继续深耕移动互联网领域，用技术创造价值，用创新引领未来。',
            'stat.products': '款产品',
            'stat.users': '用户',
            'stat.rating': '平均评分',

            'copyright': '© 2026 苏州猩力科技有限公司. All rights reserved.'
        },

        en: {
            'logo': 'XingLi<span>Tech</span>',
            'nav.home': 'Home',
            'nav.products': 'Products',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.terms': 'Terms of Use',
            'lang.btn': '中',

            'hero.badge': 'Innovation Drives the Future',
            'hero.title': 'Connecting <span class="highlight">Life</span> with Technology<br>Lighting Up the <span class="highlight">Future</span> with Innovation',
            'hero.subtitle': 'Suzhou XingLi Technology Co., Ltd. focuses on mobile internet application development, committed to delivering premium product experiences for users.',
            'hero.cta.main': 'Explore Products',
            'hero.cta.secondary': 'Learn More',

            'products.title': 'Our Products',
            'products.subtitle': 'Crafting premium apps that bring technology into everyday life',
            'product.chushu.name': 'ChuShu',
            'product.chushu.tagline': 'Your Personal Kitchen Assistant',
            'product.chushu.desc': 'Curated recipes, smart recommendations, and one-tap shopping — making cooking simpler than ever.',
            'product.frog.name': 'Frogly',
            'product.frog.tagline': 'A Little Progress Every Day',
            'product.frog.desc': 'Fun language learning with AI speaking practice — making learning as enjoyable as playing a game.',
            'product.xingqiu.name': 'XingQiu',
            'product.xingqiu.tagline': 'Smart Fitness at Home',
            'product.xingqiu.desc': 'Professional coach-led courses and intelligent training plans, anytime and anywhere.',
            'product.download': 'Download',

            'about.title': 'About XingLi Tech',
            'about.p1': 'Founded in Suzhou, Suzhou XingLi Technology Co., Ltd. is a tech company specializing in mobile internet application development. Guided by a "user-first, innovation-driven" philosophy, we are dedicated to delivering excellent product experiences.',
            'about.p2': 'Our products span food, health, and learning, serving millions of users. We will keep deepening our work in the mobile internet space — creating value with technology and leading the future with innovation.',
            'stat.products': 'Products',
            'stat.users': 'Users',
            'stat.rating': 'Avg. Rating',

            'copyright': '© 2026 Suzhou XingLi Technology Co., Ltd. All rights reserved.'
        }
    };

    var TERMS = {
        zh: {
            'terms.title': '使用条款',
            'terms.updated': '最近更新：2026 年 9 月 3 日',
            'terms.notice': '<strong>重要声明：</strong>苏州猩力科技有限公司（以下简称"我们"）旗下 iOS 应用（包括但不限于"每日蛙"、"每日猩球"、"厨树"等）在 App Store 提供的服务，均适用 <strong>Apple 标准最终用户许可协议（Standard Apple End-User License Agreement, EULA）</strong>。',
            'terms.p1': '请在使用我们的应用及服务前，仔细阅读本使用条款。您下载、安装或使用我们的应用，即表示您已阅读、理解并同意受本条款及 Apple 标准最终用户许可协议的约束。',
            'terms.s1.title': '一、适用协议',
            'terms.s1.body': '本应用提供的所有内容与服务适用 <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Apple 标准最终用户许可协议（Stdeula）</a>。该协议由 Apple 提供并持续更新，请以 Apple 官方发布的最新版本为准。',
            'terms.s2.title': '二、自动续订订阅（如适用）',
            'terms.s2.p1': '对于提供自动续订订阅的应用，您需知悉并同意：',
            'terms.s2.l1': '订阅为自动续订服务，将按您选择的周期从您的 Apple ID 账户中扣费；',
            'terms.s2.l2': '在订阅期结束前 24 小时内将自动续订并扣除下一期的费用；',
            'terms.s2.l3': '您可在订阅期间随时取消自动续订。取消后，在当前订阅期结束前仍可继续使用相应服务；',
            'terms.s2.l4': '如需管理或取消订阅，请前往设备"设置" → 您的 Apple ID → "订阅"进行操作；',
            'terms.s2.l5': '购买自动续订订阅即表示您同意 Apple 标准最终用户许可协议及本使用条款。',
            'terms.s3.title': '三、知识产权',
            'terms.s3.p1': '本应用及其相关内容的全部知识产权归苏州猩力科技有限公司或相应权利人所有。未经书面许可，您不得复制、修改、传播或反编译本应用的任何部分。',
            'terms.s4.title': '四、隐私',
            'terms.s4.body': '我们非常重视您的隐私。有关我们如何收集、使用和保护您的个人信息，请参阅我们的<a href="index.html">隐私政策</a>。',
            'terms.s5.title': '五、责任限制',
            'terms.s5.p1': '在法律允许的最大范围内，我们不对因使用或无法使用本应用而产生的任何间接、偶然、特殊或后果性损害承担责任。',
            'terms.s6.title': '六、条款变更',
            'terms.s6.p1': '我们可能不时更新本使用条款。更新后的条款将在本页面公布，并标注更新日期。您在条款变更后继续使用本应用，即视为接受变更后的条款。',
            'terms.s7.title': '七、法律适用与争议解决',
            'terms.s7.p1': '本条款适用中华人民共和国法律。因本条款引起的争议，双方应友好协商解决；协商不成的，任何一方均可向本公司所在地有管辖权的人民法院提起诉讼。',
            'terms.contact.title': '联系我们',
            'terms.contact.p1': '如对本使用条款有任何疑问，欢迎联系我们：',
            'terms.contact.company': '公司名称：苏州猩力科技有限公司',
            'terms.contact.website': '官方网站：'
        },

        en: {
            'terms.title': 'Terms of Use',
            'terms.updated': 'Last updated: September 3, 2026',
            'terms.notice': '<strong>Important Notice:</strong> The iOS applications (including but not limited to "Frogly", "XingQiu", and "ChuShu") operated by Suzhou XingLi Technology Co., Ltd. ("we", "us") are offered on the App Store and are all subject to the <strong>Apple Standard End-User License Agreement (EULA)</strong>.',
            'terms.p1': 'Please read these Terms of Use carefully before using our applications and services. By downloading, installing, or using our applications, you acknowledge that you have read, understood, and agree to be bound by these Terms and the Apple Standard End-User License Agreement.',
            'terms.s1.title': '1. Governing Agreement',
            'terms.s1.body': 'All content and services provided in this application are governed by the <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Apple Standard End-User License Agreement (Stdeula)</a>. This agreement is provided and continuously updated by Apple; please refer to the latest version published by Apple.',
            'terms.s2.title': '2. Auto-Renewable Subscriptions (if applicable)',
            'terms.s2.p1': 'For applications offering auto-renewable subscriptions, you acknowledge and agree that:',
            'terms.s2.l1': 'Subscriptions are auto-renewing and will be charged to your Apple ID account according to the period you select;',
            'terms.s2.l2': 'Your subscription will automatically renew and you will be charged for the next period within 24 hours before the end of the current period;',
            'terms.s2.l3': 'You may cancel auto-renewal at any time during the subscription period. After cancellation, you may continue using the service until the end of the current subscription period;',
            'terms.s2.l4': 'To manage or cancel your subscription, go to your device "Settings" → your Apple ID → "Subscriptions";',
            'terms.s2.l5': 'By purchasing an auto-renewable subscription, you agree to the Apple Standard End-User License Agreement and these Terms of Use.',
            'terms.s3.title': '3. Intellectual Property',
            'terms.s3.p1': 'All intellectual property rights in this application and its related content belong to Suzhou XingLi Technology Co., Ltd. or the respective rights holders. Without prior written permission, you may not copy, modify, distribute, or decompile any part of this application.',
            'terms.s4.title': '4. Privacy',
            'terms.s4.body': 'We take your privacy seriously. For information on how we collect, use, and protect your personal data, please refer to our <a href="index.html">Privacy Policy</a>.',
            'terms.s5.title': '5. Limitation of Liability',
            'terms.s5.p1': 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of or inability to use this application.',
            'terms.s6.title': '6. Changes to These Terms',
            'terms.s6.p1': 'We may update these Terms of Use from time to time. Updated terms will be posted on this page with the date of the update. Your continued use of this application after any changes constitutes acceptance of the revised terms.',
            'terms.s7.title': '7. Governing Law and Dispute Resolution',
            'terms.s7.p1': 'These Terms are governed by the laws of the People\'s Republic of China. Any disputes arising from these Terms shall first be resolved through friendly negotiation; if negotiation fails, either party may initiate legal proceedings in the competent court at the company\'s location.',
            'terms.contact.title': 'Contact Us',
            'terms.contact.p1': 'If you have any questions about these Terms of Use, please contact us:',
            'terms.contact.company': 'Company: Suzhou XingLi Technology Co., Ltd.',
            'terms.contact.website': 'Website: '
        }
    };

    function isTermsPage() {
        return document.body && document.body.querySelector('main.legal') !== null;
    }

    function getDict(lang) {
        if (isTermsPage()) {
            // 条款页同时使用通用字典(SITE)与条款字典(TERMS)，TERMS 优先
            return Object.assign({}, SITE[lang], TERMS[lang]);
        }
        return SITE[lang];
    }

    function applyLang(lang) {
        var dict = getDict(lang);
        var btn = document.getElementById('langToggle');
        if (btn) {
            btn.textContent = (lang === 'en' ? '中' : 'EN');
        }
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        try { localStorage.setItem('xingli-lang', lang); } catch (e) {}
    }

    function init() {
        var saved = null;
        try { saved = localStorage.getItem('xingli-lang'); } catch (e) {}
        var lang = (saved === 'en') ? 'en' : 'zh';
        applyLang(lang);

        var btn = document.getElementById('langToggle');
        if (btn) {
            btn.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('lang');
                var next = (current === 'en') ? 'zh' : 'en';
                applyLang(next);
            });
            // 语言按钮放进 nav，便于固定定位；移动端点击后也关闭菜单
            var menuToggle = document.getElementById('menuToggle');
            if (menuToggle && typeof menuToggle !== 'undefined') {
                btn.addEventListener('click', function () {
                    var navLinks = document.getElementById('navLinks');
                    if (navLinks && navLinks.classList) {
                        navLinks.classList.remove('active');
                    }
                });
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();