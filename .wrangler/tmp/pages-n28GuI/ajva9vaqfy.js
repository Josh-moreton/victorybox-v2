// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/favicon.ico",
    "/css/nuxt-google-fonts.css",
    "/data/bicycle1PageData.ts",
    "/data/bicycle2PageData.ts",
    "/data/bike1PageData.ts",
    "/data/bikePageData.ts",
    "/data/blogDefaultData.ts",
    "/data/blogPageData.ts",
    "/data/carCategories.ts",
    "/data/clothing1PageData.ts",
    "/data/compitation2PageData.ts",
    "/data/contestPageData.ts",
    "/data/defaultTestimonials.ts",
    "/data/electornic1PageData.ts",
    "/data/electronicPageData.ts",
    "/data/faqAndTabData.ts",
    "/data/featurePageData.ts",
    "/data/innerPagesData.ts",
    "/data/jewellery1PageData.ts",
    "/data/jewellery2PageData.ts",
    "/data/jewelleryPageData.ts",
    "/data/jwellery2PageData.ts",
    "/data/lotteryServiceSlidersData.tsx",
    "/data/multiProductPageData.ts",
    "/data/national2PageData.ts",
    "/data/nationPageData.ts",
    "/data/navbarData.ts",
    "/data/nft1PageData.ts",
    "/data/realestate1PageData.ts",
    "/data/realEstatePageData.ts",
    "/data/userPanelData.ts",
    "/data/winnerPageData.ts",
    "/fonts/Nunito_Sans-400-1.woff2",
    "/fonts/Nunito_Sans-400-2.woff2",
    "/fonts/Nunito_Sans-400-3.woff2",
    "/fonts/Nunito_Sans-400-4.woff2",
    "/fonts/Nunito_Sans-400-5.woff2",
    "/images/banner/banner-10v1.png",
    "/images/banner/banner-10v2.png",
    "/images/banner/banner-bicycle1.png",
    "/images/banner/banner-car2.png",
    "/images/banner/banner-car3.png",
    "/images/banner/banner-thumb-car1.png",
    "/images/banner/banner-v11-illastration.png",
    "/images/banner/banner-v12left.png",
    "/images/banner/banner-v12right.png",
    "/images/banner/banner-v13-one.png",
    "/images/banner/banner-v13-two.png",
    "/images/banner/banner-v14-bg.png",
    "/images/banner/banner-v14-simble.png",
    "/images/banner/banner-v14.png",
    "/images/banner/banner-v2-bg.png",
    "/images/banner/banner-v2-text1.png",
    "/images/banner/banner-v2-text2.png",
    "/images/banner/banner-v4one.png",
    "/images/banner/banner-v7j1.png",
    "/images/banner/banner-v7j2.png",
    "/images/banner/banner-videobg1.png",
    "/images/banner/banner1.png",
    "/images/banner/banner10.png",
    "/images/banner/banner11.png",
    "/images/banner/banner12.png",
    "/images/banner/banner13.png",
    "/images/banner/banner14.png",
    "/images/banner/banner15.png",
    "/images/banner/banner16-small1.png",
    "/images/banner/banner16-small2.png",
    "/images/banner/banner16.png",
    "/images/banner/banner17.png",
    "/images/banner/banner18.png",
    "/images/banner/banner19-bg.png",
    "/images/banner/banner19-thumb.png",
    "/images/banner/banner19.png",
    "/images/banner/banner2.png",
    "/images/banner/banner20.png",
    "/images/banner/banner3.png",
    "/images/banner/banner4.png",
    "/images/banner/banner5.png",
    "/images/banner/banner6.png",
    "/images/banner/banner7.png",
    "/images/banner/banner8.png",
    "/images/banner/banner9.png",
    "/images/banner/bannerv10.png",
    "/images/banner/bannerv11.png",
    "/images/banner/bannerv15-1.png",
    "/images/banner/bannerv15-2.png",
    "/images/banner/bannerv16.png",
    "/images/banner/bannerv17.png",
    "/images/banner/bannerv18-bg.png",
    "/images/banner/bannerv18.png",
    "/images/banner/bannerv20.png",
    "/images/banner/bannerv3-slide-bike1.png",
    "/images/banner/bannerv3-slide-bike2.png.png",
    "/images/banner/bannerv3-slide-bike3.png",
    "/images/banner/bannerv9.png",
    "/images/banner/bn-v2-avatar.png",
    "/images/banner/bn8-sl1.png",
    "/images/banner/bn8-sl2.png"
  ]
};

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/joshmoreton/GitHub/lottovibe/.wrangler/tmp/pages-n28GuI/bundledWorker-0.06371883602807049.mjs";
import { isRoutingRuleMatch } from "/Users/joshmoreton/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/joshmoreton/GitHub/lottovibe/.wrangler/tmp/pages-n28GuI/bundledWorker-0.06371883602807049.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=ajva9vaqfy.js.map
