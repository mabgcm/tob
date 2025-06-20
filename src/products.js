const products = [
    {
        id: 3,
        name: "BB Full Cigarettes",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://selectsmokes.se/wp-content/uploads/2023/05/DSC_0008-2_jpg-transformed.png"
    },
    {
        id: 4,
        name: "BB Lights Cigarettes",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://ccw.delivery/wp-content/uploads/2023/08/bb-lights-king-size-carton-and-pack-1.webp"
    },
    {
        id: 5,
        name: "BB Menthol",
        price: 35,
        info: "Cigarettes, Menthol Cigarettes, ",
        image: "https://nativesmokescanada.com/wp-content/uploads/2019/06/bb-menthol-cigarettes.png"
    },
    {
        id: 6,
        name: "Canadian Classics Original",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://nativesmokes4less.one/wp-content/uploads/2022/03/SLS_2924.jpg"
    },
    {
        id: 7,
        name: "Canadian Classics Silver",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativesmokes.com/wp-content/uploads/2023/05/native-smokes-canadian-classics-silver-cigarettes-compressed.png"
    },
    {
        id: 8,
        name: "Canadian Classics Ultra Blue",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://static.wixstatic.com/media/bbef41_73d80e331179444bb19ea9df8f5bfd3b~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_73d80e331179444bb19ea9df8f5bfd3b~mv2.png"
    },
    {
        id: 9,
        name: "Canadian Full",
        price: 30,
        info: "Cigarettes, Full Flavour",
        image: "https://nativesmokes4less.one/wp-content/uploads/2022/03/Canadian-Full-Flavour-510x510.png"
    },
    {
        id: 10,
        name: "Canadian Goose Blue Cigarettes",
        price: 40,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativesmokescanada.com/wp-content/uploads/2023/04/canadian-goose-light-Cigarettes.png"
    },
    {
        id: 11,
        name: "Canadian Goose Red Cigarettes",
        price: 40,
        info: "Cigarettes, Full Flavour",
        image: "https://nativesmokescanada.com/wp-content/uploads/2023/04/canadian-Goose-Cigarettes.png"
    },
    {
        id: 12,
        name: "Canadian Lights",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://d3tr9wn3wvvd3g.cloudfront.net/media/catalog/product/cache/89c597c5142d481043b34c4576f49c28/c/a/canadian_blues_lights_cigarettes_king_size_.png"
    },
    {
        id: 13,
        name: "CANADIAN Menthol",
        price: 30,
        info: "Cigarettes, Menthol Cigarettes",
        image: "https://cigcartel.com/wp-content/uploads/2024/05/canadian-menthol-king-size-carton-and-pack-cigcartel.webp"
    },
    {
        id: 14,
        name: "Canadian Premium Original",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://smokescanada.com/wp-content/uploads/2023/06/40-1.png"
    },
    {
        id: 15,
        name: "CANADIAN Ultra Lights",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://selectsmokes.se/wp-content/uploads/2024/10/DSC_0008-1.png"
    },
    {
        id: 16,
        name: "disCOUNT Full",
        price: 30,
        info: "Cigarettes, Full Flavour, ",
        image: "https://nativesmokes4less.one/wp-content/uploads/2023/08/disCOUNT-Full-Flavour-Cigarettes.png"
    },
    {
        id: 17,
        name: "disCOUNT Lights",
        price: 30,
        info: "Cigarettes, Light Cigarettes, ",
        image: "https://nativesmokes.com/wp-content/uploads/2024/07/discount-lights-cigarettes-1024x683.png"
    },
    {
        id: 18,
        name: "disCOUNT Menthol",
        price: 30,
        info: "Cigarettes, Menthol Cigarettes",
        image: "https://getsmokesonline.co/wp-content/uploads/2023/10/Discount-Menthol-King-Size-Cigarettes-Get-Smokes-Online-2.png"
    },
    {
        id: 19,
        name: "DKs Full",
        price: 30,
        info: "Cigarettes, Full Flavour",
        image: "https://nativesmokescanada.com/wp-content/uploads/2023/07/dk_full.png"
    },
    {
        id: 20,
        name: "DKs Light",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://smokescanada.com/wp-content/uploads/2023/06/54.png"
    },
    {
        id: 21,
        name: "Dumont Charcoal",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativecigarettes.com/storage/2024/01/native-cigarette-dumont-charcoal-optimized.webp"
    },
    {
        id: 22,
        name: "Dumont Extra Lights",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativecigarettes.com/storage/2024/01/native-cigarette-dumont-extra-lights-430x430-optimized.webp"
    },
    {
        id: 23,
        name: "duMont Full",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://ccw.delivery/wp-content/uploads/2024/05/duMont-Full-main-scaled-510x340-1.jpeg"
    },
    {
        id: 24,
        name: "Dumont Lights",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://buycigarettescanada.com/wp-content/uploads/2017/12/dumont-smooth-llight-003.jpg"
    },
    {
        id: 25,
        name: "duMont Menthol",
        price: 35,
        info: "Cigarettes, Menthol Cigarettes",
        image: "https://nativecigarettes.com/storage/2024/01/native-cigarette-dumont-menthol-optimized.webp"
    },
    {
        id: 26,
        name: "ELITE Charcoal Cigarettes",
        price: 35,
        info: "Cigarettes, Full Flavour, ",
        image: "https://static.wixstatic.com/media/bbef41_0d0968f278fe4a938413779752e070c2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
    },
    {
        id: 27,
        name: "ELITE Distinct Cigarettes",
        price: 35,
        info: "Cigarettes, Light Cigarettes, ",
        image: "https://static.wixstatic.com/media/bbef41_17b6678ba76e47a5bb24e7a2497ee53a~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_17b6678ba76e47a5bb24e7a2497ee53a~mv2.jpg"
    },
    {
        id: 28,
        name: "ELITE Full Cigarettes",
        price: 35,
        info: "Cigarettes, Full Flavour, ",
        image: "https://static.wixstatic.com/media/bbef41_7aeca18962484fba8b5921393e09ff74~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_7aeca18962484fba8b5921393e09ff74~mv2.jpg"
    },
    {
        id: 29,
        name: "ELITE Ice Cigarettes",
        price: 35,
        info: "Cigarettes, Menthol Cigarettes, ",
        image: "https://static.wixstatic.com/media/bbef41_ca252ba6976b476490f479a9cfe6cfaa~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_ca252ba6976b476490f479a9cfe6cfaa~mv2.jpg"
    },
    {
        id: 30,
        name: "ELITE Lights Cigarettes",
        price: 35,
        info: "Cigarettes, Light Cigarettes, ",
        image: "https://static.wixstatic.com/media/bbef41_0d69ba9ce262432b8b335338f7739dce~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_0d69ba9ce262432b8b335338f7739dce~mv2.jpg"
    },
    {
        id: 31,
        name: "ELITE Menthol Cigarettes",
        price: 45,
        info: "Cigarettes, Menthol Cigarettes, ",
        image: "https://static.wixstatic.com/media/bbef41_ba82b0a0dc5f42c9824dedd7536e1e70~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_ba82b0a0dc5f42c9824dedd7536e1e70~mv2.jpg"
    },
    {
        id: 32,
        name: "ELITE Signature Cigarettes",
        price: 45,
        info: "Cigarettes, Full Flavour, ",
        image: "https://static.wixstatic.com/media/bbef41_ab6074098a5b4f32bd880dc729ff9bac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
    },
    {
        id: 33,
        name: "ELITE Ultra Lights Cigarettes",
        price: 45,
        info: "Cigarettes, Light Cigarettes, ",
        image: "https://static.wixstatic.com/media/bbef41_00432c6ea409431d94e1518a7710a4c8~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbef41_00432c6ea409431d94e1518a7710a4c8~mv2.jpg"
    },
    {
        id: 34,
        name: "Nexus Full",
        price: 30,
        info: "Cigarettes, Full Flavour",
        image: "https://smokescanada.com/wp-content/uploads/2023/06/Nexus-Full-1.jpg"
    },
    {
        id: 1,
        name: "Oakdale Full",
        price: 75,
        info: "Cigarettes, Full Flavour",
        image: "https://canadasmokes.ca/wp-content/uploads/2024/03/Oakdale_ProductImage-scaled-removebg-preview.png"
    },
    {
        id: 2,
        name: "Oakdale Smooth",
        price: 75,
        info: "Cigarettes, Full Flavour",
        image: "https://canadasmokes.ca/wp-content/uploads/2024/03/Oakdale_ProductImage-scaled-removebg-preview.png"
    },
    {
        id: 35,
        name: "PlayFare’s Full",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativesmokescanada.com/wp-content/uploads/2023/07/playfare_full_flavor.png"
    },
    {
        id: 36,
        name: "Playfare’s Light",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://selectsmokes.se/wp-content/uploads/2023/01/NEW-IMAGE-2023-01-19-19_29_51.png"
    },
    {
        id: 37,
        name: "Playfare’s Menthol",
        price: 30,
        info: "Cigarettes, Menthol Cigarettes, ",
        image: "https://smokescanada.com/wp-content/uploads/2023/06/89.png"
    },
    {
        id: 38,
        name: "PlayFare’s Ultra Light",
        price: 30,
        info: "Cigarettes, Light Cigarettes, ",
        image: "https://selectsmokes.se/wp-content/uploads/2023/06/Untitled-design-15-PhotoRoom.png-PhotoRoom.png"
    },
    {
        id: 39,
        name: "Pop n Smoke – Blueberry Mint",
        price: 35,
        info: "Cigarettes, Bagged, Full Flavour, Light Cigarettes, Menthol Cigarettes, Cigars",
        image: "https://smokescanada.com/wp-content/uploads/2024/06/Pop-n-Smoke-1-1.jpg"
    },
    {
        id: 40,
        name: "Pop n Smoke – Grape",
        price: 35,
        info: "Cigarettes, Bagged, Full Flavour, Light Cigarettes, Menthol Cigarettes, Cigars",
        image: "https://smokescanada.com/wp-content/uploads/2024/06/Pop-n-Smoke-Grape-Mint-1-1.jpg"
    },
    {
        id: 41,
        name: "Pop n Smoke – Menthol",
        price: 35,
        info: "Cigarettes, Bagged, Full Flavour, Light Cigarettes, Menthol Cigarettes, Cigars",
        image: "https://cheapsmokes.cc/wp-content/uploads/2025/04/Applemint.webp"
    },
    {
        id: 42,
        name: "Pop n Smoke – Watermelon",
        price: 50,
        info: "Cigarettes, Bagged, Full Flavour, Light Cigarettes, Menthol Cigarettes, Cigars",
        image: "https://smokescanada.com/wp-content/uploads/2025/03/Pop-N-Smoke-Watermelon.jpg"
    },
    {
        id: 48,
        name: "Putter’s Full",
        price: 30,
        info: "Cigarettes, Full Flavour",
        image: "https://smokescanada.com/wp-content/uploads/2024/04/2-2.png"
    },
    {
        id: 49,
        name: "Putter’s Light",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://selectsmokes.se/wp-content/uploads/2023/01/NEW-5.png.webp"
    },
    {
        id: 50,
        name: "Rolled Gold Full",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://buycigarettescanada.com/wp-content/uploads/2017/12/rolled-gold-full-flavor-004.jpg"
    },
    {
        id: 51,
        name: "Rolled Gold Lights",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://buycigarettescanada.com/wp-content/uploads/2017/12/rolled-gold-light-flavor-003.jpg"
    },
    {
        id: 52,
        name: "SARATOGA Full Cigarettes",
        price: 35,
        info: "Cigarettes, Full Flavour",
        image: "https://nativecigarettes.com/storage/2023/07/saratoga-full-flavor-cigarette-carton-optimized.png"
    },
    {
        id: 53,
        name: "SARATOGA Lights Cigarettes",
        price: 35,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativecigarettes.com/storage/2023/07/saratoga-light-cigarette-carton-optimized.png"
    },
    {
        id: 54,
        name: "Time Blue",
        price: 30,
        info: "Cigarettes, Light Cigarettes",
        image: "https://nativesmokescanada.com/wp-content/uploads/2023/11/TIME-BLUE-FR.png"
    },
    {
        id: 55,
        name: "Time Full Cigarettes",
        price: 30,
        info: "Cigarettes, Full Flavour",
        image: "https://selectsmokes.se/wp-content/uploads/2023/09/Time_Full-1.png.webp"
    }
];

export default products;