import React from "react";
import ReactDOM from "react-dom/client";

/**
        * Header
        *   -Logo
        *   -Nav Items
        *   -Cart
        * Body
        *   - Search Bar
        *   - Restaurant List
              - RestaurantC ard
                - Image
                -Name
                -Rating
                -Cuisines
        * Footer
                - Links
                - Copyright
        */

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
        alt="Logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "710261",
      name: "Wrolls",
      uuid: "c451eb69-f764-414f-a228-5a56d9174e39",
      city: "10",
      area: "Gandhinagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "7b39908e1448b789bb94a2f72b15d169",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 6,
      slugs: {
        restaurant: "wrolls-gandhinagar-gandhinagar",
        city: "ahmedabad",
      },
      cityState: "10",
      address: "B-28 PRAMUKH ARCADE,KUDASAN, Kudasan , Gandhinagar- 382421",
      locality: "Pramukh Arcade",
      parentId: 424339,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "710261",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 6,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
    scrubber: {
      value: "₹100 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "452611",
      name: "Grameen Kulfi",
      uuid: "96393c9f-17fd-48b4-a78c-89134dbd14df",
      city: "10",
      area: "Gandhinagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "scbjqf5vjg3lz6jrbsex",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 12000,
      costForTwoString: "₹120 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "grameen-kulfi-pramukh-cyprus-gandhinagar",
        city: "ahmedabad",
      },
      cityState: "10",
      address: "27, Pramukh Cyprus, Kudasan, Gandhinagar, Gujarat 382421",
      locality: "Kudasan",
      parentId: 12175,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹99",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "452611",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹120 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "416531",
      name: "Chai G",
      uuid: "5924a915-24b6-45ea-9bef-f817e312f583",
      city: "10",
      area: "Gandhinagar",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "qpyftmxguwl6a42adzk5",
      cuisines: ["Snacks"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "chai-g-gandhinagar-gandhinagar-2",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "Shop 1, Ground Floor, Elixir Business Hub, PDPU Road, Koba, Opposite Shree Rang Upvan Bunglows, Airport Gandhinagar Highway, Gandhinagar",
      locality: "Elixir Business Hub",
      parentId: 56999,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "416531",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹150 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "484953",
      name: "The Lassi Corner",
      uuid: "05c8f19a-1124-4ac4-9bb1-7b1db348b31b",
      city: "10",
      area: "Gandhinagar",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "zylhmju6xjbhoyjuq1gt",
      cuisines: ["Beverages", "Fast Food", "Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 4.900000095367432,
      slugs: {
        restaurant: "the-lassi-corner-gandhinagar-gandhinagar",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "The Lassi Corner,Shop No. 82, Ground floor, Pramukh Mastana, Reliance Cross Road, Kudasan Gandhinagar, Gandhinagar Municipal Corporation, Gandhinagar Municipal Corporation, , Gujarat, 382010",
      locality: "Reliance Cross Road",
      parentId: 210790,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "484953",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 4.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹150 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "251485",
      name: "Bombay Sandwich",
      uuid: "3c99506c-85e8-4e1c-9621-25640525a7ef",
      city: "10",
      area: "Kudasan",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "hgrsupik1nnr2lgu1qfp",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "bombay-sandwich-laldarwaja-laldarwaja",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "C-201, shrifal heights, near prominent hotel, opp. Radhe crystal, sardar chawk, kudasan, gandhinagar - 3824821.",
      locality: "Sardar Chawk",
      parentId: 7941,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "251485",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹150 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "453130",
      name: "Natural Ice Cream",
      uuid: "83410d7e-3544-4d21-a358-342f8853f496",
      city: "10",
      area: "Gandhinagar RK",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "oyi54sgegwu5vhcswsx8",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 8.300000190734863,
      slugs: {
        restaurant:
          "natural-ice-cream-gandhinagar-swagat-rainforest-gandhinagar",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "H-74, Capital Flora,Behind Capital Icon, opp. Aashka Hospital, Sargasan, Gandhinagar, Gujarat 382421",
      locality: "Gandhinagar (Swagat Rainforest)",
      parentId: 2093,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6900,
        message: "",
        title: "Delivery Charge",
        amount: "6900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "453130",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 8.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹150 FOR TWO",
    },
  },
];

// const RestaurantCard = (props) => {
// const RestaurantCard = ({ restaurant }) => {
//   const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.data;

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="image"
      />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {/*<RestaurantCard restaurant={RestaurantList[0]} /> */}
      {/* <RestaurantCard {...restaurantList[0].data} /> */}
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
