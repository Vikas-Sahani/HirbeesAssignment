const productArr = [
  {
    avatar:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00528222.jpg",
    category: "Clothing",
    createdAt: "2022-09-05T06:13:13.699Z",
    description: "Woman Black Dress good quality fabric",
    developerEmail: "khanikhlaq99@gmail.com",
    name: "Woman Black Dress",
    price: 129,
    updatedAt: "2022-09-05T06:13:13.699Z",
    __v: 0,
    _id: "63159379f028c01c8c9ed20c",
  },
  {
    avatar:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=1765&hei=2000&fmt=jpeg&qlt=95&.v=1645065732688",
    category: "Electronics",
    createdAt: "2022-09-07T06:44:17.380Z",
    description:
      "iPad Air lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.",
    developerEmail: "hakan.kocak@upayments.com",
    name: "Ipad Air",
    price: 550,
    updatedAt: "2022-09-07T06:44:17.380Z",
    __v: 0,
    _id: "63183dc15cab639780fa4744",
  },
  {
    avatar:
      "https://www.apple.com/in/iphone-14/images/overview/lock-screen/lock_screen_1__264y35q6anmu_large.png",
    category: "Electronics",
    createdAt: "2022-09-08T07:03:23.574Z",
    description:
      "iPhone 14 has the same super-speedy chip that’s in iPhone 13 Pro.\n\nA15 Bionic, with a 5‑core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultra fluid.\n\nAn updated internal design delivers better thermal efficiency, so you can stay in the action longer.",
    developerEmail: "navnitkapadia@gmail.com",
    name: "iPhone 14",
    price: 100000,
    updatedAt: "2022-09-08T07:03:23.574Z",
    __v: 0,
    _id: "631993bbeb5cda9a65bc657e",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61lqyPr+kwL._SX679_.jpg",
    category: "Electronics",
    createdAt: "2022-09-09T11:01:44.660Z",
    description:
      "Experience Optimized Operation with Zepp OS - Easily find what you’re looking for among the Amazfit GTS 3 smart watch’s applications thanks to the intuitive Zepp OS. With most animations reaching 60 FPS, along with a specifically tailored UI, the Zepp OS makes navigating to the feature you need a seamless interaction that consumes less power. Experience a mini app framework with a rich ecosystem including 10+ mini apps and even the Home Connect third-party app.",
    developerEmail: "navnitkapadia@gmail.com",
    name: "Amazfit GTS 3",
    price: 13990,
    updatedAt: "2022-09-09T11:01:44.660Z",
    __v: 0,
    _id: "631b1d180de691ad149fec17",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iNPr5MJoF3XYsEMJ40hafkmCWuGfEz5SoQ&usqp=CAU",
    category: "Furniture",
    createdAt: "2022-09-09T21:13:30.981Z",
    description: "Great Bin Bag",
    developerEmail: "sibaprasadchoudhury014@gmail.com",
    name: "Bean Bag",
    price: 123,
    updatedAt: "2022-09-09T21:13:30.981Z",
    __v: 0,
    " _id": "631bac7a17bf11d7da4c1905",
  },
  {
    avatar:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-2.jpg",
    category: "Electronics",
    createdAt: "2022-09-11T06:51:29.074Z",
    description:
      "The S20 and S20+ are so incredibly similar that the choice between the two comes down to size preference. Especially if you are in no rush to hop on the 5G early-adopter bandwagon since the vanilla S20 is available in a 4G configuration and an incomplete 5G one (Sub-6 only).\n\nSimilarly, if you are not a photography buff, or the type of person to always go for the best out there, the S20 Ultra isn't the sensible choice.",
    developerEmail: "shabareeshsenniyappan@gmail.com",
    name: "s20+ ultra",
    price: 7845,
    updatedAt: "2022-09-11T06:51:29.074Z",
    __v: 0,
    " _id": "631d857180f5990ad1fed96c",
  },
  {
    avatar:
      "https://i01.appmifile.com/webfile/globalimg/zh/goods/mi_a1/top-pink.png",
    category: "Electronics",
    createdAt: "2022-09-13T14:12:53.179Z",
    description: "Dual camera mobile",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Redmi mi A1",
    price: 13000,
    updatedAt: "2022-09-13T14:12:53.179Z",
    __v: 0,
    " _id": "63208fe5d4c8c646cacf6240",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    category: "Electronics",
    createdAt: "2022-09-13T14:25:34.027Z",
    description: "Awesome function",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Mouse",
    price: 1000,
    updatedAt: "2022-09-13T14:25:34.027Z",
    __v: 0,
    _id: "632092ded4c8c646cacf674c",
  },
  {
    avatar:
      "https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-492849510-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDU5M3xpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDllLzk3ODgwODI5NDYwNzguanBnfDIyMjUzYTY0NmI0OTEwNzliODE3NmE2YTA4MjJhNTIyMzc4ZGViMTFiNzcyMjE2MGI5MTUzNTdlNGU0ZDk1ZGU",
    category: "Electronics",
    createdAt: "2022-09-13T14:31:35.103Z",
    description: "Latest Mobile",
    developerEmail: "nawazgmujawar21@gmail.com",
    name: "IPhone14",
    price: 1000,
    updatedAt: "2022-09-13T14:31:35.103Z",
    __v: 0,
    _id: "63209447d4c8c646cacf6c0d",
  },
  {
    avatar:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-ultra-1.jpg",
    category: "Electronics",
    createdAt: "2022-09-13T14:39:33.410Z",
    description:
      "Samsung Galaxy Note20 Ultra Android smartphone. Announced Aug 2020. Features 6.9″ display, Exynos 990 chipset, 4500 mAh battery, 512 GB storage, 12 GB RAM",
    developerEmail: "satyanarayan.patra5495@gmail.com",
    name: "galaxy note 20",
    price: 120000,
    updatedAt: "2022-09-13T14:39:33.410Z",
    __v: 0,
    _id: "63209625d4c8c646cacf7256",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    category: "Electronics",
    createdAt: "2022-09-13T15:03:46.694Z",
    description:
      "Apple Watch SE (GPS + Cellular, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Smartwatch",
    price: 5000,
    updatedAt: "2022-09-13T15:03:46.694Z",
    __v: 0,
    _id: "63209bd2d4c8c646cacf7a38",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    category: "Clothing",
    createdAt: "2022-09-13T15:16:12.800Z",
    description: "KLOOK Women's A-Line Maxi Dress",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Dress",
    price: 1500,
    updatedAt: "2022-09-13T15:16:12.800Z",
    __v: 0,
    _id: "63209ebcd4c8c646cacf7b31",
  },
  {
    avatar:
      "https://media.istockphoto.com/vectors/shiny-red-traditional-cricket-ball-vector-id181668903?k=20&m=181668903&s=170667a&w=0&h=bY5XMAjpLS55eQh6H3VMgB2dFHrsq3jOH1i9o8MAWaU=",
    category: "Hobby",
    createdAt: "2022-09-13T17:41:43.287Z",
    description: "Red cricket ball ",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Ball",
    price: 399,
    updatedAt: "2022-09-13T17:41:43.287Z",
    __v: 0,
    _id: "6320c0d7d4c8c646cacf9c6c",
  },
  {
    avatar:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627294969/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_u1e0dq.png/mxw_2256,f_auto",
    category: "Electronics",
    createdAt: "2022-09-13T17:45:29.362Z",
    description: "Fully automated washing machine",
    developerEmail: "simranbedi7575@gmail.com",
    name: "Washing machine",
    price: 6999,
    updatedAt: "2022-09-13T17:45:29.362Z",
    __v: 0,
    _id: "6320c1b9d4c8c646cacf9d2a",
  },
  {
    avatar:
      "https://images.bewakoof.com/t640/men-s-blue-contrast-sleeve-polo-t-shirt-329796-1658500145-6.jpg",
    category: "Clothing",
    createdAt: "2022-09-13T18:01:06.993Z",
    description: "asdasdasd",
    developerEmail: "nawazgmujawar21@gmail.com",
    name: "Polo Tshirt",
    price: 500,
    updatedAt: "2022-09-13T18:01:06.993Z",
    __v: 0,
    " _id": "6320c562d4c8c646cacf9f15",
  },
  {
    avatar:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG-2017/NewFurnPage/OfficeChairs/liwuwe_2018-05-09T10-25_d982d9_1111628_750x500_Fabric_gps_cn._CB476843500_.jpg",
    category: "Furniture",
    createdAt: "2022-09-14T10:46:25.148Z",
    description: "Comfortable chair",
    developerEmail: "nawazgmujawar21@gmail.com",
    name: "Office Chair",
    price: 233,
    updatedAt: "2022-09-14T10:46:25.148Z",
    __v: 0,
    " _id": "6321b1013a98705fbf6e484b",
  },
  {
    avatar:
      "https://www.cnet.com/a/img/resize/cd9ea54664751221cdb6dc3ea46262e052dde3e1/2021/11/01/c6aaf7a5-b82d-4f35-a11e-7c7da348eec6/ogi-iphone.jpg?auto=webp&fit=crop&height=675&width=1200",
    category: "Electronics",
    createdAt: "2022-09-14T16:27:00.552Z",
    description: "Naya Hai",
    developerEmail: "vishalkmr272@gmail.com",
    name: "Iphone 14",
    price: 78000,
    updatedAt: "2022-09-14T16:27:00.552Z",
    __v: 0,
    " _id": "632200d4b7c6617f30703a9d",
  },
  {
    avatar:
      "http://res.cloudinary.com/djfgbivby/image/upload/v1663238384/vdbsv5zd294ky1wzuebd.png",
    category: "Clothing",
    createdAt: "2022-09-15T10:39:46.803Z",
    description: "Best Shoe",
    developerEmail: "manishhansalmeh@gmail.com",
    name: "Shoe",
    price: 600,
    updatedAt: "2022-09-15T10:39:46.803Z",
    __v: 0,
    " _id": "632300f2bbf76ca94db698cd",
  },
  {
    avatar:
      "http://res.cloudinary.com/djfgbivby/image/upload/v1663239077/g009cltwgfs1n14mocvz.png",
    category: "Clothing",
    createdAt: "2022-09-15T10:51:19.948Z",
    description: "Nice shoe",
    developerEmail: "manishhansalmeh@gmail.com",
    name: "Sneaker Shoe",
    price: 800,
    updatedAt: "2022-09-15T10:51:19.948Z",
    __v: 0,
    _id: "632303a7bbf76ca94db699f0",
  },
  {
    avatar:
      "http://res.cloudinary.com/djfgbivby/image/upload/v1663239266/kdq5xmm4nyvhknwmp2gt.png",
    category: "Clothing",
    createdAt: "2022-09-15T10:54:28.661Z",
    description: "Nice shoe",
    developerEmail: "manishhansalmeh@gmail.com",
    name: "Nike Shoe",
    price: 1000,
    updatedAt: "2022-09-15T10:54:28.661Z",
    __v: 0,
    _id: "63230464bbf76ca94db69a26",
  },
  {
    avatar:
      "http://res.cloudinary.com/djfgbivby/image/upload/v1663239379/qxt9gsoqdshgie4jycwn.png",
    category: "Clothing",
    createdAt: "2022-09-15T10:56:22.354Z",
    description: "Nice shoe",
    developerEmail: "manishhansalmeh@gmail.com",
    name: "Nike Shoe",
    price: 1000,
    updatedAt: "2022-09-15T10:56:22.354Z",
    __v: 0,
    " _id": "632304d6bbf76ca94db69a5a",
  },
  {
    avatar:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550",
    category: "Electronics",
    createdAt: "2022-09-15T14:31:07.752Z",
    description: "Latest Iphone",
    developerEmail: "nikhilsharma03102000@gmail.com",
    name: "Iphone 14",
    price: 999,
    updatedAt: "2022-09-15T14:31:07.752Z",
    __v: 0,
    " _id": "6323372bbbf76ca94db6df5d",
  },
  {
    avatar:
      "https://www.cnet.com/a/img/resize/cd9ea54664751221cdb6dc3ea46262e052dde3e1/2021/11/01/c6aaf7a5-b82d-4f35-a11e-7c7da348eec6/ogi-iphone.jpg?auto=webp&fit=crop&height=675&width=1200",
    category: "Electronics",
    createdAt: "2022-09-18T18:35:43.792Z",
    description: "special feature with dynamic island",
    developerEmail: "bmvishnu47@gmail.com",
    name: "Iphone 14",
    price: 78000,
    updatedAt: "2022-09-18T18:35:43.792Z",
    __v: 0,
    " _id": "632764ff0ecc4f82e3c54e00",
  },
  {
    avatar:
      "https://media.istockphoto.com/photos/black-polo-shirt-clothes-picture-id699857280?k=20&m=699857280&s=612x612&w=0&h=Q7BpcmV_SgOkQtkIOEgOnMb0WP2iDPqCQYMNBvdov_M=",
    category: "Clothing",
    createdAt: "2022-09-19T07:35:20.107Z",
    description:
      "Navy blue Tshirt for men Solid Regular length Polo collar Short, regular sleeves Knitted linen fabric Button closure",
    developerEmail: "onkarbagade21@gmail.com",
    name: "MANGO MAN Polo Collar T-shirt",
    price: 3000,
    updatedAt: "2022-09-19T07:35:20.107Z",
    __v: 0,
    " _id": "63281bb869758cb3a4f25a33",
  },
  {
    avatar:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8cf96569-609d-40c3-8576-1938fb9bf85c/custom-nike-air-zoom-pegasus-flyease-by-you.png",
    category: "Clothing",
    createdAt: "2022-09-19T10:49:07.331Z",
    description:
      "Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus help you ascend with its comfortable, intuitive design.",
    developerEmail: "ganeshmittha88@gmail.com",
    name: "Nike Air Zoom Pegasus",
    price: 95,
    updatedAt: "2022-09-19T10:49:07.331Z",
    __v: 0,
    " _id": "6328492369758cb3a4f25f43",
  },
  {
    avatar:
      "https://www.cnet.com/a/img/resize/6a267ff7e2ade05fc1decea5455916f6f9098b87/hub/2021/10/23/91f7ed14-0d9c-4cba-9715-3e50ef822252/macbook-pro-2021-cnet-review-14.jpg?auto=webp&fit=crop&height=362&width=644",
    category: "Electronics",
    createdAt: "2022-09-19T13:30:20.939Z",
    description: "Apple laptop...",
    developerEmail: "amirbehesti392@gmail.com",
    name: "MacBook pro",
    price: 110000,
    updatedAt: "2022-09-19T13:30:20.939Z",
    __v: 0,
    " _id": "63286eec69758cb3a4f26d31",
  },
  {
    avatar:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1653493200207",
    category: "Electronics",
    createdAt: "2022-09-19T14:11:02.120Z",
    description: "Apple Macbook 2022",
    developerEmail: "amirbehesti392@gmail.com",
    name: "MacBook",
    price: 220000,
    updatedAt: "2022-09-19T14:11:02.120Z",
    __v: 0,
    " _id": "6328787669758cb3a4f26e8d",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/I/611mRs-imxL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    createdAt: "2022-09-20T17:52:44.894Z",
    description: " Get it by Friday, September 23 FREE Delivery by Amazon",
    developerEmail: "divyabairwa1201@gmail.com",
    name: "iphone 14",
    price: 139000,
    updatedAt: "2022-09-20T17:52:44.894Z",
    __v: 0,
    " _id": "6329fdec11abda0599d94959",
  },
  {
    avatar:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ff/P00528222.jpg",
    category: "Clothing",
    createdAt: "2022-09-21T08:07:10.306Z",
    description: "Woman Black Dress good quality fabric",
    developerEmail: "vikassahani1110@gmail.com",
    name: "black pant",
    price: 129,
    updatedAt: "2022-09-21T08:07:10.306Z",
    __v: 0,
    " _id": "632ac62ea4685740f06e4779",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt94EjayRbU_oim_ZJzHHODBNDhCDQzaUIw&usqp=CAU",
    category: "Hobby",
    createdAt: "2022-09-21T09:14:44.298Z",
    description: "football",
    developerEmail: "sangitakumari0050@gmail.com",
    name: "ball",
    price: 45,
    updatedAt: "2022-09-21T09:14:44.298Z",
    __v: 0,
    " _id": "632ad604a4685740f06e48b3",
  },
];

const categoryArr = [
  {
    _id: "62e638f41126b53e1c7deb61",
    name: "Electronics",
    createdAt: "2022-07-31T08:10:28.145Z",
    updatedAt: "2022-07-31T08:10:28.145Z",
    __v: 0,
  },
  {
    _id: "62e638fd1126b53e1c7deb65",
    name: "Clothing",
    createdAt: "2022-07-31T08:10:37.186Z",
    updatedAt: "2022-07-31T08:10:37.186Z",
    __v: 0,
  },
  {
    _id: "62e6390e1126b53e1c7deb69",
    name: "Accessories",
    createdAt: "2022-07-31T08:10:54.540Z",
    updatedAt: "2022-07-31T08:10:54.540Z",
    __v: 0,
  },
  {
    _id: "62e6391f1126b53e1c7deb6d",
    name: "Furniture",
    createdAt: "2022-07-31T08:11:11.918Z",
    updatedAt: "2022-07-31T08:11:11.918Z",
    __v: 0,
  },
  {
    _id: "62e6397e1126b53e1c7deb72",
    name: "Hobby",
    createdAt: "2022-07-31T08:12:46.096Z",
    updatedAt: "2022-07-31T08:12:46.096Z",
    __v: 0,
  },
];

export { productArr, categoryArr };
