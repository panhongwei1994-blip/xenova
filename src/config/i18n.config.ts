/**
 * Centralized i18n Translation Object
 *
 * All user-facing text is mapped here. The client-side script reads
 * `navigator.language` and injects the correct value via `data-i18n` keys.
 *
 * Usage in templates:
 *   <span data-i18n="hero.headline">English fallback</span>
 *
 * The translate() helper is only used server-side to set initial HTML lang.
 */

export type Locale = 'en' | 'zh';

export interface TranslationMap {
  [key: string]: string;
}

export const translations: Record<Locale, TranslationMap> = {
  en: {
    // ── Site-wide ──
    'site.name': 'FoodFlow Digital',
    'site.description': 'We build independent ordering systems and high-converting websites for restaurants. Drive massive traffic via Google & Facebook.',

    // ── Navigation ──
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // ── Hero ──
    'hero.badge': 'F&B Digital Growth Experts',
    'hero.headline': 'Stop Giving 30% to Delivery Apps.',
    'hero.headline2': 'Build Your Digital Empire.',
    'hero.subheadline': 'We build independent delivery systems and high-converting websites. Drive massive traffic to your restaurant via Google & Facebook.',
    'hero.cta': 'Get Free Audit',
    'hero.cta2': 'View Our Work',

    // ── Services ──
    'services.badge': 'Services',
    'services.title': 'What We Do',
    'services.subtitle': 'End-to-end digital solutions for restaurants.',
    'services.1.title': 'Mobile-First Professional Website',
    'services.1.desc': 'A stunning, fast-loading website designed for mobile customers. Showcase your menu, ambiance, and brand story — optimized for conversions.',
    'services.2.title': 'Branded Delivery System (0% Commission)',
    'services.2.desc': 'Your own branded delivery system with no platform commissions. Keep 100% of your revenue, build your customer database, and own the relationship.',
    'services.3.title': 'Google & FB Traffic Engine',
    'services.3.desc': 'Precision ad campaigns on Google and Facebook that drive hungry customers directly to your door. Measurable ROI, transparent reporting.',

    // ── About ──
    'about.badge': 'About Us',
    'about.title': 'Born from the restaurant industry.',
    'about.title.highlight': 'Your growth partner.',
    'about.p1': 'We understand the F&B business because we\'ve been in it. Our team combines restaurant operations experience with cutting-edge digital marketing expertise.',
    'about.p2': 'We help restaurants break free from third-party platform dependency and build their own digital presence.',
    'about.cta': 'Learn More',
    'about.stat1': '200+ Restaurants Served',
    'about.stat2': 'F&B Specialized',
    'about.stat3': 'Serving Worldwide',
    'about.stat4': 'Based in Melbourne, AU',

    // ── Portfolio ──
    'portfolio.badge': 'Portfolio',
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Sample sites built for our restaurant clients.',
    'portfolio.sushi-master.title': 'Sushi Master Premium',
    'portfolio.sushi-master.description': 'High-end Japanese dining site with reservation and multilingual menu showcase.',
    'portfolio.pizza-burger.title': 'City Bistro Systems',
    'portfolio.pizza-burger.description': 'Boutique bistro ordering system with POS integration for a smooth experience.',
    'portfolio.oriental-kitchen.title': 'Sumi Ramen Lines',
    'portfolio.oriental-kitchen.description': 'Authentic ramen shop combining a virtual queue and seamless ordering system.',

    // ── Testimonials ──
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Real feedback from restaurant owners.',
    'testimonials.1.quote': '"Within 3 months of launching our independent ordering system, we cut Uber Eats dependency by 60%. The ROI on the website paid for itself in the first month."',
    'testimonials.1.name': 'David Chen',
    'testimonials.1.role': 'Owner, Golden Dragon',
    'testimonials.2.quote': '"Their Google Ads strategy brought us 150+ new orders per week. We finally have our own customer database and don\'t rely on delivery platforms anymore."',
    'testimonials.2.name': 'Maria Santos',
    'testimonials.2.role': 'GM, Pizza Republic',

    // ── Blog / News ──
    'blog.badge': 'Resources',
    'blog.title': 'Latest Tips',
    'blog.viewall': 'View all posts',

    // ── CTA ──
    'cta.title': 'Ready to scale your restaurant?',
    'cta.subtitle': 'Stop losing 30% to delivery apps. Let us build your digital empire — from website to ordering system to ad campaigns.',
    'cta.button': 'Contact Us',
    'cta.button2': 'Learn More',

    // ── Footer ──
    'footer.copyright': '© {year} FoodFlow Digital. All rights reserved.',
  },

  zh: {
    // ── 全站 ──
    'site.name': 'FoodFlow Digital',
    'site.description': '为您搭建独立点餐系统与高转化网站。通过谷歌和Facebook精准引流，助您餐厅业绩翻倍。',

    // ── 导航 ──
    'nav.services': '服务',
    'nav.portfolio': '案例展示',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',

    // ── Hero ──
    'hero.badge': '餐饮数字化增长专家',
    'hero.headline': '停止向外卖平台缴纳30%佣金，',
    'hero.headline2': '打造您的数字帝国。',
    'hero.subheadline': '为您搭建品牌自有外卖系统与高转化网站。通过谷歌和Facebook精准引流，助您餐厅业绩倍增。',
    'hero.cta': '获取免费诊断',
    'hero.cta2': '查看我们的案例',

    // ── 服务 ──
    'services.badge': '核心服务',
    'services.title': '我们的服务',
    'services.subtitle': '为餐饮企业量身打造的数字化解决方案。',
    'services.1.title': '移动端专业品牌网页',
    'services.1.desc': '设计精美、加载极速的移动端优先网站。完美展示您的菜单、环境与品牌故事——专为转化优化。',
    'services.2.title': '品牌自有外卖系统 (0%抽成)',
    'services.2.desc': '拥有自己品牌的外卖系统，零平台佣金。100%保留您的利润，积累自有客户数据库，掌握客户关系。',
    'services.3.title': '谷歌与FB广告获客',
    'services.3.desc': '在谷歌和Facebook上精准投放广告，将饥饿的客户直接引至您的餐厅。可衡量的投资回报，透明的数据报告。',

    // ── 关于 ──
    'about.badge': '关于我们',
    'about.title': '从餐饮行业中诞生。',
    'about.title.highlight': '您的增长伙伴。',
    'about.p1': '我们深谙餐饮行业，因为我们就来自这个行业。我们的团队将餐厅运营经验与前沿数字营销技术完美结合。',
    'about.p2': '我们帮助餐厅摆脱第三方平台依赖，建立自己的数字化自主阵地。',
    'about.cta': '了解更多',
    'about.stat1': '服务200+餐厅',
    'about.stat2': '餐饮行业专精',
    'about.stat3': '服务遍布全球',
    'about.stat4': '总部位于墨尔本',

    // ── 案例展示 ──
    'portfolio.badge': '案例展示',
    'portfolio.title': '我们的作品',
    'portfolio.subtitle': '为餐饮客户打造的样板网站。',
    'portfolio.sushi-master.title': 'Sushi Master 高级日料',
    'portfolio.sushi-master.description': '高端日料餐饮品牌官网，突出匠人精神，搭配高级预约系统与多语言菜单展示。',
    'portfolio.pizza-burger.title': 'City Bistro 城市小酒馆',
    'portfolio.pizza-burger.description': '连锁精品小酒馆点餐系统，打通POS机与后厨，提供极其顺畅的二次下单体验。',
    'portfolio.oriental-kitchen.title': 'Sumi Ramen 拉面排队系统',
    'portfolio.oriental-kitchen.description': '地道日式拉面馆，结合排队领号与无缝点餐系统，通过本地化社区营销获客。',

    // ── 客户评价 ──
    'testimonials.badge': '客户评价',
    'testimonials.title': '客户怎么说',
    'testimonials.subtitle': '来自餐厅老板的真实反馈。',
    'testimonials.1.quote': '"上线独立点餐系统3个月内，我们对Uber Eats的依赖减少了60%。网站投资在第一个月就收回了成本。"',
    'testimonials.1.name': '陈大卫',
    'testimonials.1.role': '金龙餐厅老板',
    'testimonials.2.quote': '"他们的Google广告策略每周为我们带来150+新订单。我们终于有了自己的客户数据库，不再依赖外卖平台了。"',
    'testimonials.2.name': '玛丽亚·桑托斯',
    'testimonials.2.role': 'Pizza Republic 总经理',

    // ── 博客 / 资讯 ──
    'blog.badge': '行业资讯',
    'blog.title': '最新文章',
    'blog.viewall': '查看全部文章',

    // ── CTA ──
    'cta.title': '准备好提升您的餐厅业绩了吗？',
    'cta.subtitle': '停止向外卖平台缴纳30%佣金。让我们为您打造数字帝国——从品牌网站到点餐系统到广告投放。',
    'cta.button': '联系我们',
    'cta.button2': '了解更多',

    // ── Footer ──
    'footer.copyright': '© {year} FoodFlow Digital. 保留所有权利。',
  },
};

/**
 * Get a translation value (server-side helper, used for default lang)
 */
export function t(key: string, locale: Locale = 'en'): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
