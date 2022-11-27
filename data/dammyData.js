// import defaultImage from "../public/assets/images/trending3.jpg";
import Package from "../models/package";
import image1 from "../public/assets/images/packageShortImage15942006035f05921b2d1cd.jpg"
import image2 from "../public/assets/images/packageShortImage15942434345f06396a43f29.jpg"
import image3 from "../public/assets/images/packageShortImage15942667715f069493cca8d.jpg"
import image4 from "../public/assets/images/packageShortImage1653513053628e9b5da0a6c.jpg"
import Category from "../models/category-pac";
import ToursTyps from "../models/toures"

export const PackageS = [
  new Package(
    "p1",
    "Classic Oman Tour",
    image1,
    "5 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p2",
    "Classic Oman Tour",
    image2,
    "5 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0.3
  ),
  new Package(
    "p3",
    "Classic Oman Tours",
    image1,
    "7 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p4",
    "Classic Oman Tour",
    image2,
    "7 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0.2
  ),
  new Package(
    "p5",
    "Classic Oman Tour",
    image1,
    "5 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p6",
    "Best of Dubai and Abu Dhabi",
    image2,
    "7 days",
    "Asia",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p7",
    "Best of Dubai and Abu Dhabi",
    image1,
    "5 days",
    "Asia",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p8",
    "Best of Dubai and Abu Dhabi",
    image2,
    "5 days",
    "Asia",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p",
    "Best of Dubai and Abu Dhabi",
    image1,
    "7 days",
    "Africa",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p",
    "Best of Dubai and Abu Dhabi",
    image1,
    "7 days",
    "Africa",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 177.00",
    0
  ),
  new Package(
    "p10",
    "Best of Dubai and Abu Dhabi",
    image2,
    "7 days",
    "Africa",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p11",
    "Best of Dubai and Abu Dhabi",
    image1,
    "5 days",
    "Africa",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p12",
    "Best of Dubai and Abu Dhabi",
    image3,
    "7 days",
    "Africa",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p13",
    "Best of Dubai and Abu Dhabi",
    image1,
    "5 days",
    "Africa",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p14",
    "Best of Dubai and Abu Dhabi",
    image2,
    "5 days",
    "Africa",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p15",
    "Best of Dubai and Abu Dhabi",
    image1,
    "7 days",
    "Africa",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p16",
    "Bhutan Honeymoon Retreat",
    image1,
    "7 days",
    "Europe",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p17",
    "Bhutan Honeymoon Retreat",
    image2,
    "5 days",
    "Europe",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p18",
    "Bhutan Honeymoon Retreat",
    image1,
    "7 days",
    "Europe",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.6
  ),

  new Package(
    "p19",
    "Bhutan Honeymoon Retreat",
    image3,
    "5 days",
    "Europe",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p20",
    "Bhutan Honeymoon Retreat",
    image1,
    "5 days",
    "Europe",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p21",
    "Bhutan Honeymoon Retreat",
    image3,
    "7 days",
    "Europe",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p22",
    "Bhutan Honeymoon Retreat",
    image1,
    "7 days",
    "Europe",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p23",
    "Bhutan Honeymoon Retreat",
    image2,
    "5 days",
    "Europe",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0.4
  ),

  new Package(
    "p24",
    "Bhutan Honeymoon Retreat",
    image2,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Bhutan Honeymoon Retreat",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Latin America",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image4,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image3,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image3,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Golden Triangle Tour of India",
    image3,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Sri Lanka Adventure Package",
    image3,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
  new Package(
    "p24",
    "Sri Lanka Adventure Package",
    image3,
    "7 days",
    "Multi Destinations",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
];

export const CATEGORY = [
  new Category(1, "Asia"),
  new Category(2, "Africa"),
  new Category(3, "Europe"),
  new Category(4, "Latin America"),
  new Category(5, "Multi Destruction"),
];

const FaQ = {
 
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

// export const blogsData = [
//   new Blogs(
//     "b1",
//     BlogsImage,
//     "Inspire Runner With Autism Graces Of Women's Running",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "David Scott",
//     slagImage
//   ),
//   new Blogs(
//     "b2",
//     BlogsImage,
//     "Services To Grow Your Business Sell Affiliate Products",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "John Bolden",
//     slagImage
//   ),
//   new Blogs(
//     "b3",
//     BlogsImage,
//     "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "Sollmond Nell",
//     slagImage
//   ),
//   new Blogs(
//     " b4",
//     BlogsImage,
//     "Inspire Runner With Autism Graces Of Women's Running",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "David Scott",
//     slagImage
//   ),
//   new Blogs(
//     " b5",
//     BlogsImage,
//     "Services To Grow Your Business Sell Affiliate Products",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "John Bolden",
//     slagImage
//   ),
//   new Blogs(
//     "b6",
//     BlogsImage,
//     "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
//     "Sollmond Nell",
//     slagImage
//   ),
// ];

// export const testimonialsData = [
//   {
//     image: imageAfater,
//     review:
//       "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
//     name: "MATHEW HENDRICKSON",
//     status: "ENTREPRENEUR",
//   },
//   {
//     image: imageAfater,
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
//     name: "JOHN KEVIN",
//     status: "COACH",
//   },
//   {
//     image: imageAfater,
//     review:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
//     name: "devalpers ",
//     status: "CUSTOMER",
//   },
//   {
//     image: imageAfater,
//     review:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
//     name: "FRANKLIN",
//     status: "CUSTOMER",
//   },
// ];



// export const PackageToTravelpackaes = [
//   new Package(
//     "p1",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p2",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 66.00",
//     0.3
//   ),
//   new Package(
//     "p3",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p4",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 500.00",
//     0.2
//   ),
//   new Package(
//     "p5",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 88.00",
//     0
//   ),
//   new Package(
//     "p6",
//     "Honeymoon Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "refat tour to hell",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 200.00",
//     0
//   ),

//   new Package(
//     "p7",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p7",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 66.00",
//     0
//   ),
//   new Package(
//     "p8",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p9",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 500.00",
//     0
//   ),
//   new Package(
//     "p10",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 88.00",
//     0
//   ),
//   new Package(
//     "p11",
//     "Egypt Easter Vacations",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 200.00",
//     0
//   ),

//   new Package(
//     "p12",
//     "Christmas and New Year tours",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p13",
//     "Christmas and New Year tours",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 66.00",
//     0
//   ),
//   new Package(
//     "p14",
//     "Christmas and New Year tours",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p15",
//     "Christmas and New Year tours",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 500.00",
//     0
//   ),
//   new Package(
//     "p16",
//     "Christmas and New Year tours",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 88.00",
//     0
//   ),
//   new Package(
//     "p17",
//     "Christmas and New Year tours",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 200.00",
//     0.6
//   ),

//   new Package(
//     "p18",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p19",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 66.00",
//     0
//   ),
//   new Package(
//     "p20",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Piazza Castello",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 77.00",
//     0
//   ),
//   new Package(
//     "p21",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 500.00",
//     0
//   ),
//   new Package(
//     "p22",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "5 days",
//     "Egypt",
//     "Santorini, Oia",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 88.00",
//     0.4
//   ),
//   new Package(
//     "p23",
//     "Classical Egypt Travel Packages",
//     defaultImage,
//     "7 days",
//     "Egypt",
//     "Hurawalhi Island",
//     5,
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
//     " 200.00",
//     0.5
//   ),
// ];
// export const ToursOfTyps = [
//   new ToursTyps("1","cruises", "Bucket List" ,"Egypt River" , "Nile Cruises" , "The best Nile Cruise trip with the best prices. Choose your cruise route from Luxor to Aswan or Cruise Lake Nasser.",["Luxor Aswan Nile Cruises", "Lake Nasser Nile Cruises","Dahabiya Nile Cruises" , "Christmas Nile Cruises",  ],PackageS ),
//   new ToursTyps("1","travel","Bucket List" ,"Egypt Travel" , "Packages  " ,
//    "Start your Trip by the ancient Giza Pyramids, Egyptian Museum and old Cairo then mix it with Nile Cruise from Luxor to Aswan, end your trip with Red Sea Relaxation  ",
//    ["Classical Egypt Travel Packages", "Christmas and New Year tours","Egypt Easter Vacations" , "Honeymoon Travel Packages",  ],PackageToTravelpackaes ),
  
// ];
