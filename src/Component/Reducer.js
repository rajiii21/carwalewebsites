import array from './File.json'

export const initialstate = {
   readmore: false,
   Cars: array.Cars,
   Branddetail:array.Branddetail,
   Filterprice:array.filterprice,
   Comparecar:array.comparecar,
   carid1:"",
   carid2:"",
   carname1:"",
   carname2:"",
   carprice1:"",
   carprice2:"",
   carengine1:"",
   carengine2:""
}

export const reducer = (state, action) => {

   if (action.type === "updatereadmore") {
      return { ...state, readmore: action.payload }
   }
   if (action.type === "updateCar") {
      return { ...state, Cars: action.payload }
   }
   if (action.type === "updateBrand"){
      return { ...state,  Branddetail: action.payload}
   }
   if (action.type === "updateComparecar"){
      return { ...state,  Comparecar: action.payload}
   }
   if (action.type === "updatecarid1"){
      return { ...state,  carid1: action.payload}
   }
   if (action.type === "updatecarid2"){
      return { ...state,  carid2: action.payload}
   }
   if (action.type === "updatecarname1"){
      return { ...state,  carname1: action.payload}
   }
   if (action.type === "updatecarname2"){
      return { ...state,  carname2: action.payload}
   }
   if (action.type === "updatecarprice1"){
      return { ...state,  carprice1: action.payload}
   }
   if (action.type === "updatecarprice2"){
      return { ...state,  carprice2: action.payload}
   }
   if (action.type === "updatecarengine1"){
      return { ...state,  carengine1: action.payload}
   }
   if (action.type === "updatecarengine2"){
      return { ...state,  carengine2: action.payload}
   }
   else {
      return "loading...."
   }
}


// "detailpage":[
//    {
//        "img1":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
//        "img2":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80",
//        "img3":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
//        "img4":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
//        "img5":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
//        "img6":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-rear-view.jpeg?isig=0&q=80",
//        "img7":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-front-view.jpeg?isig=0&q=80",
//        "img8":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-interior-dashboard.jpeg?isig=0&q=80",
//        "img9":"https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-rear-view.jpeg?isig=0&q=80",
//        "color":"Colors",
//        "images":"Images",
//        "video":"Videos",
//        "variant":"variant",
//        "selectVariant":"Select variant",
//        "city":"City",
//        "SelectCity":"SelectCity",
//        "EMI":"EMI Rs. 15,488",
//        "EMI year":"For 5 years",
//        "EMI calculator":"EMI Calculator",
//        "EMI btn":"GET EMI offers",
//        "waiting period":"Waiting Period: 17-22 Weeks",
//        "year offer btn":"Get Year- End Offers",
//        "Tata Nexon Car Specifications":[
//            {
//                "title":"Tata Nexon Car Specifications",
//                "price":"Rs. 9.55 Lakh onwar    ds",
//                "Mileage":"17.01 to 24.08 kmpl",
//                "Engine":"1199 to 1497 cc",
//                "Safety":"5 Star (Global NCAP)",
//                "Fuel Type":"Petrol & Diesel",
//                "Transmission":"Manual & Automatic",
//                "Seating Capacity":"5 Seater"
//            }
//        ],
//        "Tata Nexon Summary":[
//            {
//                "title":"Tata Nexon Summary",
//                "head1":"Price",
//                "detail1":"Tata Nexon price ranges between Rs. 9.55 Lakh - Rs. 18.72 Lakh depending on the variant selected.",
//                "head2":"When was the Tata Nexon facelift launched?",
//                "detail2":"The Tata Nexon facelift was launched in India on 14 September.",
//                "head3":"What variants does it get? ",
//                "detail3":"The facelifted Nexon is available in 11 variants - Smart, Smart+, Smart+ S, Pure, Pure S, Creative, Creative+, Creative+ S, Fearless, Fearless S, and Fearless+ S.",
//                "head4":"What features are available in the Tata Nexon facelift?",
//                "detail4":"Exterior highlights of the new Tata Nexon include split LED headlamps, new grille, LED light bars at the front and rear, new front and rear bumpers, 16-inch alloy wheels, Y-shaped LED taillights, and vertically stacked reverse light and reflector housings.",
//                "detail5":"Inside, the refreshed sub-four-metre SUV gets features including touch controls for the AC function, electric sunroof, 10.25-inch touchscreen infotainment system, wireless Apple CarPlay and Android Auto connectivity, and a two-spoke steering wheel with a backlit Tata logo. It also receives a fully digital instrument cluster, new gear lever, ventilated and height-adjustable front seats, and purple upholstery.",
//                "head5":"What are the engine, performance, and specifications of the Tata Nexon facelift?",
//                "detail6":"The Nexon facelift is offered with a 1.2-litre, turbo-petrol engine paired with five-speed manual, six-speed manual, AMT, and seven-speed DCT units, and a 1.5-litre diesel engine mated with a six-speed manual unit and an AMT unit. The petrol mill is capable of producing 118bhp and 170Nm of torque, while the 1.5-litre diesel mill is tuned to generate 113bhp and 260Nm of torque.",
//                "head6":"Is the Tata Nexon facelift a safe car?",
//                "detail7":"The updated Nexon has not been tested by an NCAP body as yet.",
//                "head7":"What are the rivals to the Tata Nexon facelift? ",
//                "detail8":"The 2023 Nexon competes against the Maruti Brezza, Hyundai Venue, Kia Sonet, Renault Kiger, Mahindra XUV300, and the Nissan Magnite.",
//                "update":"Last updated on 14 September, 2023."
//            }
//        ]
//    }
// ]   