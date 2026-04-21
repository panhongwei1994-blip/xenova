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
    'site.name': 'Hi Sora',
    'site.description': 'Hi Sora — We build independent ordering systems and high-converting websites for restaurants.',

    // ── Navigation ──
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // ── Pricing ──
    'pricing.page.title.lead': 'Simple, Honest',
    'pricing.page.title.highlight': 'Pricing',
    'pricing.page.subtitle': 'One-time payment. No subscriptions. No hidden fees. No renewal charges.',
    'pricing.trust.1': 'Free Hosting',
    'pricing.trust.2': 'Free Domain',
    'pricing.trust.3': 'One-Time Payment',
    'pricing.trust.4': 'Yours Forever',
    'pricing.card.note': 'One-time · No renewal · No hidden fees',
    'pricing.included.title': 'Free Included',
    'pricing.included.1': 'Free lifetime hosting & free domain',
    'pricing.included.2': 'Free SSL certificate',
    'pricing.included.3': 'Mobile-optimised',
    'pricing.features.title': 'What’s Included',
    'pricing.cta': 'Get Started',
    'pricing.starter.label': 'Starter Plan',
    'pricing.starter.name': 'Showcase Site',
    'pricing.starter.eyebrow': 'Starter package for restaurants that need a polished digital front door',
    'pricing.starter.features.1': 'Menu showcase with photos & descriptions',
    'pricing.starter.features.2': 'Opening hours, address & Google Maps embed',
    'pricing.starter.features.3': 'Online table reservation system',
    'pricing.starter.features.4': 'Customer reviews section',
    'pricing.starter.features.5': 'Brand story / About page',
    'pricing.starter.features.6': 'Social media links (WeChat, Instagram, Facebook etc.)',
    'pricing.starter.features.7': 'WhatsApp / contact button',
    'pricing.pro.label': 'Pro Plan',
    'pricing.pro.recommended': 'Most Popular',
    'pricing.pro.name': 'Delivery & Order Site',
    'pricing.pro.eyebrow': 'Built for restaurants ready to own delivery, pickup, payments, and repeat customers',
    'pricing.pro.features.0': 'Everything in Starter, plus:',
    'pricing.pro.features.1': 'Online ordering system (delivery + pickup)',
    'pricing.pro.features.2': 'Online payment (credit card, multi-platform)',
    'pricing.pro.features.3': 'Order management dashboard',
    'pricing.pro.features.4': 'Cart & real-time checkout',
    'pricing.pro.features.5': 'Menu category management',
    'pricing.pro.features.6': 'Customer notification system',
    'pricing.pro.features.7': '0% platform commission — keep 100% of revenue',
    'pricing.pro.features.8': 'No Uber Eats, no DoorDash, no middleman',
    'pricing.pro.demo.title': 'Live Demo',
    'pricing.pro.demo.body.before': 'See a live example of the Pro plan experience at',

    // ── Hero ──
    'hero.badge': 'F&B Digital Growth Experts',
    'hero.headline': 'Stop Giving 30% to Delivery Apps.',
    'hero.headline2': 'Build Your Digital Empire.',
    'hero.subheadline': 'We build independent delivery systems and high-converting websites. Drive massive traffic to your restaurant via Google & Facebook.',
    'hero.cta': 'Calculate My Savings',
    'hero.cta2': 'View Our Work',

    // ── ROI Calculator ──
    'roi.title': 'ROI Calculator',
    'roi.desc': 'See how much money you are leaving on the table with 3rd-party delivery apps.',
    'roi.revenue_label': 'Monthly Delivery Revenue',
    'roi.commission_label': 'Platform Commission Rate',
    'roi.savings_label': 'What you save in a year using our system:',
    'roi.savings_desc': '*Based on shifting your regular customers to a zero-commission direct ordering system.',
    'roi.contact_btn': 'Build My System',

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
    'about.stat4': 'Based in Zurich, CH',

    // ── About Page ──
    'about.page.badge': 'About Us',
    'about.page.title': 'Hi Sora — F&B Digital Experts',
    'about.page.desc': 'We craft high-converting websites and ordering systems for restaurants. We know what it takes to succeed in the food industry.',
    'about.page.partnership.badge': 'Our Approach',
    'about.page.partnership.title': 'Technology & Marketing Combined',
    'about.page.partnership.p1': "With deep roots in the F&B industry, Hi Sora doesn't just build websites. We create digital ecosystems that drive actual reservations and delivery orders without the heavy 30% commission fees.",
    'about.page.partnership.p2': 'Every design decision is optimized for conversion. Every ad campaign targets hungry customers in your neighborhood. We ensure your brand stands out, maximizing your profit margins.',
    'about.page.values.badge': 'Our Values',
    'about.page.values.title': 'How We Work',
    'about.page.values.desc': "We focus strictly on results. If it doesn't increase your restaurant's bottom line, we don't do it.",
    'about.page.v1.title': 'Performance First',
    'about.page.v1.desc': 'Fast menus rank better, convert better, and keep hungry visitors happy.',
    'about.page.v2.title': 'ROI Focused',
    'about.page.v2.desc': 'Every marketing dollar spent must show clear, measurable returns for your venue.',
    'about.page.v3.title': 'Restaurant Specialists',
    'about.page.v3.desc': 'We solely work with F&B. We understand POS systems, kitchen operations, and hospitality.',

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
    'footer.copyright': '© {year} Hi Sora. All rights reserved.',
  },

  zh: {
    // ── 全站 ──
    'site.name': 'Hi Sora',
    'site.description': '为您搭建独立点餐系统与高转化网站。通过谷歌和Facebook精准引流，助您餐厅业绩翻倍。',

    // ── 导航 ──
    'nav.services': '服务',
    'nav.portfolio': '案例展示',
    'nav.pricing': '定价',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',

    // ── 定价 ──
    'pricing.page.title.lead': '简单透明的',
    'pricing.page.title.highlight': '定价',
    'pricing.page.subtitle': '一次付费。无订阅。无隐藏费用。无续费。',
    'pricing.trust.1': '免费托管',
    'pricing.trust.2': '免费域名',
    'pricing.trust.3': '一次付费',
    'pricing.trust.4': '永久归你',
    'pricing.card.note': '一次付费 · 无续费 · 无隐藏费用',
    'pricing.included.title': '免费包含',
    'pricing.included.1': '永久免费托管，免费域名',
    'pricing.included.2': '免费 SSL 证书',
    'pricing.included.3': '移动端优化',
    'pricing.features.title': '方案内容',
    'pricing.cta': '开始咨询',
    'pricing.starter.label': '基础版',
    'pricing.starter.name': '餐厅展示版',
    'pricing.starter.eyebrow': '适合需要一套专业品牌官网、快速上线展示门店形象的餐厅',
    'pricing.starter.features.1': '菜单展示，支持图片与菜品描述',
    'pricing.starter.features.2': '营业时间、地址与 Google Maps 嵌入',
    'pricing.starter.features.3': '在线订位系统',
    'pricing.starter.features.4': '客户评价展示区',
    'pricing.starter.features.5': '品牌故事 / 关于我们页面',
    'pricing.starter.features.6': '社交媒体链接（微信、Instagram、Facebook 等）',
    'pricing.starter.features.7': 'WhatsApp / 联系按钮',
    'pricing.pro.label': '进阶版',
    'pricing.pro.recommended': '最受欢迎',
    'pricing.pro.name': '外卖电商版',
    'pricing.pro.eyebrow': '适合要把外卖、支付、订单管理和回头客都掌握在自己手里的餐厅',
    'pricing.pro.features.0': '包含基础版全部内容，外加：',
    'pricing.pro.features.1': '在线点餐系统（外送 + 自取）',
    'pricing.pro.features.2': '在线支付（信用卡、多平台）',
    'pricing.pro.features.3': '订单管理后台',
    'pricing.pro.features.4': '购物车与实时结账流程',
    'pricing.pro.features.5': '菜单分类管理',
    'pricing.pro.features.6': '客户通知系统',
    'pricing.pro.features.7': '0% 平台抽成，100% 保留营业额',
    'pricing.pro.features.8': '不依赖 Uber Eats、不依赖 DoorDash、没有中间商',
    'pricing.pro.demo.title': '在线示例',
    'pricing.pro.demo.body.before': '查看 Pro 方案线上示例：',

    // ── Hero ──
    'hero.badge': '专注餐饮点餐与线上增长',
    'hero.headline': '停止向外卖平台缴纳30%佣金，',
    'hero.headline2': '建立您自己的外卖接单渠道。',
    'hero.subheadline': '为您搭建独立的外卖系统与高转化网站。通过谷歌和Facebook精准引流，助您餐厅业绩倍增。',
    'hero.cta': '计算我的节约',
    'hero.cta2': '查看我们的案例',

    // ── ROI Calculator (ZH) ──
    'roi.title': '外卖平台算账器',
    'roi.desc': '测算您每年因为昂贵的外卖平台抽成而损失的净利润。',
    'roi.revenue_label': '平均每月外卖营业额',
    'roi.commission_label': '第三方外卖平台抽成比例',
    'roi.savings_label': '如果您拥有自己的零抽成点餐系统，一年能省下：',
    'roi.savings_desc': '*测算基于将高频熟客引导至自有系统省下的平台佣金',
    'roi.contact_btn': '马上定制我的系统',

    // ── 服务 ──
    'services.badge': '核心服务',
    'services.title': '我们的服务',
    'services.subtitle': '为餐饮门店量身定制的网站与点餐方案。',
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
    'about.stat4': '总部位于瑞士苏黎世',

    // ── About Page ──
    'about.page.badge': '关于我们',
    'about.page.title': 'Hi Sora — 餐饮线上增长专家',
    'about.page.desc': '为您打造高转化率的品牌官网和独立外卖系统。我们深知餐饮业成功的秘诀。',
    'about.page.partnership.badge': '我们的方案',
    'about.page.partnership.title': '技术与营销的完美结合',
    'about.page.partnership.p1': '凭借在餐饮行业的深厚经验，Hi Sora 不仅是建站。我们为您打造能带来实际预订和外卖订单的数字生态系统，助您摆脱30%的高昂平台抽成。',
    'about.page.partnership.p2': '每一个设计决策都为转化率而生。每一次广告投放都精准定位您附近的潜在食客。我们帮助您的品牌脱颖而出，利润最大化。',
    'about.page.values.badge': '我们的价值观',
    'about.page.values.title': '我们的工作方式',
    'about.page.values.desc': '我们严格专注于结果。如果不能帮您的餐厅增加净利润，我们就绝对不会去做。',
    'about.page.v1.title': '性能为王',
    'about.page.v1.desc': '极速加载的电子菜单排名更高、转化率更好，顾客更满意。',
    'about.page.v2.title': '关注投资回报率',
    'about.page.v2.desc': '花的每一分营销预算，都必须为您门店带来清晰、可衡量的真实利润。',
    'about.page.v3.title': '深耕餐饮业',
    'about.page.v3.desc': '我们仅服务于餐饮行业。我们真正懂您的POS系统、后厨动线及待客之道。',

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
    'footer.copyright': '© {year} Hi Sora. 保留所有权利。',
  },
};

/**
 * Get a translation value (server-side helper, used for default lang)
 */
export function t(key: string, locale: Locale = 'en'): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
