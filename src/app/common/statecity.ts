import { JsonpClientBackend } from "@angular/common/http";

const csv = require('csvtojson');

class State{
    name: string = "";
}

class City{
    Rank: number = 0;
    City: string = "";
    State: string = "";
    Population2011: string = "";
    Population2001: string = "";
}

class City1{
    name: string = "";
    state: string = "";
}

export class StateCity{

    cityState: Array<City> = [
        {
          "Rank": 1,
          "City": "Mumbai",
          "Population2011": "12,442,373",
          "Population2001": "11,978,450",
          "State": "Maharashtra"
        },
        {
          "Rank": 2,
          "City": "Delhi",
          "Population2011": "11,007,835",
          "Population2001": "9,879,172",
          "State": "Delhi"
        },
        {
          "Rank": 3,
          "City": "Bangalore",
          "Population2011": "8,436,675",
          "Population2001": "4,301,326",
          "State": "Karnataka"
        },
        {
          "Rank": 4,
          "City": "Hyderabad",
          "Population2011": "6,809,970",
          "Population2001": "3,637,483",
          "State": "Telangana"
        },
        {
          "Rank": 5,
          "City": "Ahmedabad",
          "Population2011": "5,570,585",
          "Population2001": "3,520,085",
          "State": "Gujarat"
        },
        {
          "Rank": 6,
          "City": "Chennai",
          "Population2011": "4,681,087",
          "Population2001": "4,343,645",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 7,
          "City": "Kolkata",
          "Population2011": "4,486,679",
          "Population2001": "4,572,876",
          "State": "West Bengal"
        },
        {
          "Rank": 8,
          "City": "Surat",
          "Population2011": "4,467,797",
          "Population2001": "2,433,835",
          "State": "Gujarat"
        },
        {
          "Rank": 9,
          "City": "Pune",
          "Population2011": "3,115,431",
          "Population2001": "2,538,473",
          "State": "Maharashtra"
        },
        {
          "Rank": 10,
          "City": "Jaipur",
          "Population2011": "3,046,163",
          "Population2001": "2,322,575",
          "State": "Rajasthan"
        },
        {
          "Rank": 11,
          "City": "Lucknow",
          "Population2011": "2,815,601",
          "Population2001": "2,185,927",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 12,
          "City": "Kanpur",
          "Population2011": "2,767,031",
          "Population2001": "2,551,337",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 13,
          "City": "Nagpur",
          "Population2011": "2,405,665",
          "Population2001": "2,052,066",
          "State": "Maharashtra"
        },
        {
          "Rank": 14,
          "City": "Indore",
          "Population2011": "1,960,631",
          "Population2001": "1,474,968",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 15,
          "City": "Thane",
          "Population2011": "1,818,872",
          "Population2001": "1,262,551",
          "State": "Maharashtra"
        },
        {
          "Rank": 16,
          "City": "Bhopal",
          "Population2011": "1,795,648",
          "Population2001": "1,437,354",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 17,
          "City": "Coimbatore",
          "Population2011": "1,746,681",
          "Population2001": "1,153,583",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 18,
          "City": "Visakhapatnam[4]",
          "Population2011": "1,730,320",
          "Population2001": "1,345,938",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 19,
          "City": "Pimpri-Chinchwad",
          "Population2011": "1,727,692",
          "Population2001": "1,012,472",
          "State": "Maharashtra"
        },
        {
          "Rank": 20,
          "City": "Patna",
          "Population2011": "1,684,222",
          "Population2001": "1,366,444",
          "State": "Bihar"
        },
        {
          "Rank": 21,
          "City": "Vadodara",
          "Population2011": "1,670,806",
          "Population2001": "1,306,227",
          "State": "Gujarat"
        },
        {
          "Rank": 22,
          "City": "Ghaziabad",
          "Population2011": "1,648,643",
          "Population2001": "968,256",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 23,
          "City": "Ludhiana",
          "Population2011": "1,618,879",
          "Population2001": "1,398,467",
          "State": "Punjab"
        },
        {
          "Rank": 24,
          "City": "Agra",
          "Population2011": "1,585,704",
          "Population2001": "1,275,134",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 25,
          "City": "Nashik",
          "Population2011": "1,486,053",
          "Population2001": "1,077,236",
          "State": "Maharashtra"
        },
        {
          "Rank": 26,
          "City": "Ranchi",
          "Population2011": "1,456,528",
          "Population2001": "1,079,968",
          "State": "Jharkhand"
        },
        {
          "Rank": 27,
          "City": "Faridabad",
          "Population2011": "1,414,050",
          "Population2001": "1,055,938",
          "State": "Haryana"
        },
        {
          "Rank": 28,
          "City": "Meerut",
          "Population2011": "1,305,429",
          "Population2001": "1,039,405",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 29,
          "City": "Rajkot",
          "Population2011": "1,286,678",
          "Population2001": "967,476",
          "State": "Gujarat"
        },
        {
          "Rank": 30,
          "City": "Kalyan-Dombivli",
          "Population2011": "1,247,327",
          "Population2001": "1,193,512",
          "State": "Maharashtra"
        },
        {
          "Rank": 31,
          "City": "Vasai-Virar",
          "Population2011": "1,222,390",
          "Population2001": "693,350",
          "State": "Maharashtra"
        },
        {
          "Rank": 32,
          "City": "Varanasi",
          "Population2011": "1,201,815",
          "Population2001": "1,091,918",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 33,
          "City": "Srinagar",
          "Population2011": "1,180,570",
          "Population2001": "898,440",
          "State": "Jammu and Kashmir"
        },
        {
          "Rank": 34,
          "City": "Aurangabad",
          "Population2011": "1,175,116",
          "Population2001": "873,311",
          "State": "Maharashtra"
        },
        {
          "Rank": 35,
          "City": "Dhanbad",
          "Population2011": "1,162,472",
          "Population2001": "1,065,327",
          "State": "Jharkhand"
        },
        {
          "Rank": 36,
          "City": "Amritsar",
          "Population2011": "1,132,383",
          "Population2001": "966,862",
          "State": "Punjab"
        },
        {
          "Rank": 37,
          "City": "Navi Mumbai",
          "Population2011": "1,120,547",
          "Population2001": "704,002",
          "State": "Maharashtra"
        },
        {
          "Rank": 38,
          "City": "Allahabad",
          "Population2011": "1,112,544",
          "Population2001": "975,393",
          "State": "Uttar Pradesh[5]"
        },
        {
          "Rank": 39,
          "City": "Howrah",
          "Population2011": "1,077,075",
          "Population2001": "1,007,532",
          "State": "West Bengal"
        },
        {
          "Rank": 40,
          "City": "Gwalior",
          "Population2011": "1,069,276",
          "Population2001": "827,026",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 41,
          "City": "Jabalpur",
          "Population2011": "1,055,525",
          "Population2001": "932,484",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 42,
          "City": "Madurai",
          "Population2011": "1,050,721",
          "Population2001": "930,882",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 43,
          "City": "Vijayawada",
          "Population2011": "1,034,358",
          "Population2001": "851,282",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 44,
          "City": "Jodhpur",
          "Population2011": "1,033,918",
          "Population2001": "851,051",
          "State": "Rajasthan"
        },
        {
          "Rank": 45,
          "City": "Salem",
          "Population2011": "1,017,865",
          "Population2001": "928,869",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 46,
          "City": "Raipur",
          "Population2011": "1,010,087",
          "Population2001": "605,747",
          "State": "Chhattisgarh"
        },
        {
          "Rank": 47,
          "City": "Kota[6]",
          "Population2011": "1,001,694",
          "Population2001": "694,316",
          "State": "Rajasthan"
        },
        {
          "Rank": 48,
          "City": "Chandigarh",
          "Population2011": "960,787",
          "Population2001": "808,515",
          "State": "Chandigarh"
        },
        {
          "Rank": 49,
          "City": "Guwahati",
          "Population2011": "957,352",
          "Population2001": "809,895",
          "State": "Assam"
        },
        {
          "Rank": 50,
          "City": "Solapur",
          "Population2011": "951,558",
          "Population2001": "872,478",
          "State": "Maharashtra"
        },
        {
          "Rank": 51,
          "City": "Hubli–Dharwad",
          "Population2011": "943,788",
          "Population2001": "786,195",
          "State": "Karnataka"
        },
        {
          "Rank": 52,
          "City": "Mysore[7][8][9]",
          "Population2011": "920,550",
          "Population2001": "762,408",
          "State": "Karnataka"
        },
        {
          "Rank": 53,
          "City": "Tiruchirappalli[10]",
          "Population2011": "916,674",
          "Population2001": "752,066",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 54,
          "City": "Bareilly",
          "Population2011": "898,167",
          "Population2001": "718,395",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 55,
          "City": "Aligarh",
          "Population2011": "889,810",
          "Population2001": "672,315",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 56,
          "City": "Tiruppur",
          "Population2011": "877,778",
          "Population2001": "344,543",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 57,
          "City": "Gurgaon",
          "Population2011": "876,824",
          "Population2001": "173,542",
          "State": "Haryana"
        },
        {
          "Rank": 58,
          "City": "Moradabad",
          "Population2011": "872,575",
          "Population2001": "669,087",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 59,
          "City": "Jalandhar",
          "Population2011": "862,196",
          "Population2001": "706,043",
          "State": "Punjab"
        },
        {
          "Rank": 60,
          "City": "Bhubaneswar",
          "Population2011": "837,737",
          "Population2001": "648,032",
          "State": "Odisha"
        },
        {
          "Rank": 61,
          "City": "Warangal[11][12]",
          "Population2011": "830,281",
          "Population2001": "530,636",
          "State": "Telangana"
        },
        {
          "Rank": 62,
          "City": "Mira-Bhayandar",
          "Population2011": "814,655",
          "Population2001": "520,388",
          "State": "Maharashtra"
        },
        {
          "Rank": 63,
          "City": "Jalgaon",
          "Population2011": "798,514",
          "Population2001": "462,280",
          "State": "Maharashtra"
        },
        {
          "Rank": 64,
          "City": "Guntur[13]",
          "Population2011": "670,073",
          "Population2001": "514,461",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 65,
          "City": "Thiruvananthapuram",
          "Population2011": "752,490",
          "Population2001": "368,618",
          "State": "Kerala"
        },
        {
          "Rank": 66,
          "City": "Bhiwandi",
          "Population2011": "711,329",
          "Population2001": "598,741",
          "State": "Maharashtra"
        },
        {
          "Rank": 67,
          "City": "Saharanpur",
          "Population2011": "703,345",
          "Population2001": "455,754",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 68,
          "City": "Gorakhpur",
          "Population2011": "671,048",
          "Population2001": "622,701",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 69,
          "City": "Bikaner",
          "Population2011": "647,804",
          "Population2001": "529,690",
          "State": "Rajasthan"
        },
        {
          "Rank": 70,
          "City": "Amravati",
          "Population2011": "646,801",
          "Population2001": "549,510",
          "State": "Maharashtra"
        },
        {
          "Rank": 71,
          "City": "Noida",
          "Population2011": "642,381",
          "Population2001": "305,058",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 72,
          "City": "Jamshedpur",
          "Population2011": "631,364",
          "Population2001": "573,096",
          "State": "Jharkhand"
        },
        {
          "Rank": 73,
          "City": "Bhilai",
          "Population2011": "625,697",
          "Population2001": "556,366",
          "State": "Chhattisgarh"
        },
        {
          "Rank": 74,
          "City": "Cuttack",
          "Population2011": "606,007",
          "Population2001": "534,654",
          "State": "Odisha"
        },
        {
          "Rank": 75,
          "City": "Firozabad",
          "Population2011": "603,797",
          "Population2001": "279,102",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 76,
          "City": "Kochi",
          "Population2011": "601,574",
          "Population2001": "596,473",
          "State": "Kerala"
        },
        {
          "Rank": 77,
          "City": "Nellore[14][15]",
          "Population2011": "558,548",
          "Population2001": "378,428",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 78,
          "City": "Bhavnagar",
          "Population2011": "593,768",
          "Population2001": "511,085",
          "State": "Gujarat"
        },
        {
          "Rank": 79,
          "City": "Dehradun",
          "Population2011": "578,420",
          "Population2001": "426,674",
          "State": "Uttarakhand"
        },
        {
          "Rank": 80,
          "City": "Durgapur",
          "Population2011": "566,937",
          "Population2001": "493,405",
          "State": "West Bengal"
        },
        {
          "Rank": 81,
          "City": "Asansol",
          "Population2011": "564,491",
          "Population2001": "475,439",
          "State": "West Bengal"
        },
        {
          "Rank": 82,
          "City": "Rourkela",
          "Population2011": "552,734",
          "Population2001": "426,354",
          "State": "Odisha"
        },
        {
          "Rank": 83,
          "City": "Nanded",
          "Population2011": "550,564",
          "Population2001": "430,733",
          "State": "Maharashtra"
        },
        {
          "Rank": 84,
          "City": "Kolhapur",
          "Population2011": "549,283",
          "Population2001": "493,167",
          "State": "Maharashtra"
        },
        {
          "Rank": 85,
          "City": "Ajmer",
          "Population2011": "542,580",
          "Population2001": "485,575",
          "State": "Rajasthan"
        },
        {
          "Rank": 86,
          "City": "Akola",
          "Population2011": "537,149",
          "Population2001": "400,520",
          "State": "Maharashtra"
        },
        {
          "Rank": 87,
          "City": "Gulbarga",
          "Population2011": "532,031",
          "Population2001": "422,569",
          "State": "Karnataka"
        },
        {
          "Rank": 88,
          "City": "Jamnagar",
          "Population2011": "529,308",
          "Population2001": "443,518",
          "State": "Gujarat"
        },
        {
          "Rank": 89,
          "City": "Ujjain",
          "Population2011": "515,215",
          "Population2001": "430,427",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 90,
          "City": "Loni",
          "Population2011": "512,296",
          "Population2001": "120,945",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 91,
          "City": "Siliguri",
          "Population2011": "509,709",
          "Population2001": "472,374",
          "State": "West Bengal"
        },
        {
          "Rank": 92,
          "City": "Jhansi",
          "Population2011": "507,293",
          "Population2001": "383,644",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 93,
          "City": "Ulhasnagar",
          "Population2011": "506,937",
          "Population2001": "473,731",
          "State": "Maharashtra"
        },
        {
          "Rank": 94,
          "City": "Jammu[16]",
          "Population2011": "503,690",
          "Population2001": "369,959",
          "State": "Jammu and Kashmir"
        },
        {
          "Rank": 95,
          "City": "Sangli-Miraj & Kupwad",
          "Population2011": "502,697",
          "Population2001": "436,781",
          "State": "Maharashtra"
        },
        {
          "Rank": 96,
          "City": "Mangalore",
          "Population2011": "499,486",
          "Population2001": "399,565",
          "State": "Karnataka"
        },
        {
          "Rank": 97,
          "City": "Erode[17]",
          "Population2011": "498,129",
          "Population2001": "173,600",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 98,
          "City": "Belgaum",
          "Population2011": "488,292",
          "Population2001": "399,653",
          "State": "Karnataka"
        },
        {
          "Rank": 99,
          "City": "Kurnool[18]",
          "Population2011": "484,327",
          "Population2001": "345,987",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 100,
          "City": "Ambattur",
          "Population2011": "478,134",
          "Population2001": "310,967",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 101,
          "City": "Rajahmundry[19][20]",
          "Population2011": "476,873",
          "Population2001": "315,251",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 102,
          "City": "Tirunelveli",
          "Population2011": "473,637",
          "Population2001": "411,831",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 103,
          "City": "Malegaon",
          "Population2011": "471,006",
          "Population2001": "409,403",
          "State": "Maharashtra"
        },
        {
          "Rank": 104,
          "City": "Gaya",
          "Population2011": "463,454",
          "Population2001": "385,432",
          "State": "Bihar"
        },
        {
          "Rank": 105,
          "City": "Tirupati[21][22]",
          "Population2011": "461,900",
          "Population2001": "228,202",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 106,
          "City": "Udaipur",
          "Population2011": "451,735",
          "Population2001": "389,438",
          "State": "Rajasthan"
        },
        {
          "Rank": 107,
          "City": "Kakinada",
          "Population2011": "443,028",
          "Population2001": "325,985",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 108,
          "City": "Davanagere",
          "Population2011": "435,128",
          "Population2001": "364,523",
          "State": "Karnataka"
        },
        {
          "Rank": 109,
          "City": "Kozhikode",
          "Population2011": "432,097",
          "Population2001": "436,556",
          "State": "Kerala"
        },
        {
          "Rank": 110,
          "City": "Maheshtala",
          "Population2011": "429,423",
          "Population2001": "385,266",
          "State": "West Bengal"
        },
        {
          "Rank": 111,
          "City": "Rajpur Sonarpur",
          "Population2011": "423,806",
          "Population2001": "336,707",
          "State": "West Bengal"
        },
        {
          "Rank": 112,
          "City": "Bokaro",
          "Population2011": "413,934",
          "Population2001": "393,805",
          "State": "Jharkhand"
        },
        {
          "Rank": 113,
          "City": "South Dumdum",
          "Population2011": "410,524",
          "Population2001": "392,444",
          "State": "West Bengal"
        },
        {
          "Rank": 114,
          "City": "Bellary",
          "Population2011": "409,644",
          "Population2001": "316,766",
          "State": "Karnataka"
        },
        {
          "Rank": 115,
          "City": "Patiala",
          "Population2011": "405,164",
          "Population2001": "303,151",
          "State": "Punjab"
        },
        {
          "Rank": 116,
          "City": "Gopalpur",
          "Population2011": "404,991",
          "Population2001": "271,811",
          "State": "West Bengal"
        },
        {
          "Rank": 117,
          "City": "Agartala",
          "Population2011": "399,688",
          "Population2001": "271,811",
          "State": "Tripura"
        },
        {
          "Rank": 118,
          "City": "Bhagalpur",
          "Population2011": "398,138",
          "Population2001": "340,767",
          "State": "Bihar"
        },
        {
          "Rank": 119,
          "City": "Muzaffarnagar",
          "Population2011": "392,451",
          "Population2001": "316,729",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 120,
          "City": "Bhatpara",
          "Population2011": "390,467",
          "Population2001": "442,385",
          "State": "West Bengal"
        },
        {
          "Rank": 121,
          "City": "Panihati",
          "Population2011": "383,522",
          "Population2001": "348,438",
          "State": "West Bengal"
        },
        {
          "Rank": 122,
          "City": "Latur",
          "Population2011": "382,754",
          "Population2001": "299,985",
          "State": "Maharashtra"
        },
        {
          "Rank": 123,
          "City": "Dhule",
          "Population2011": "376,093",
          "Population2001": "341,755",
          "State": "Maharashtra"
        },
        {
          "Rank": 124,
          "City": "Rohtak",
          "Population2011": "373,133",
          "Population2001": "286,807",
          "State": "Haryana"
        },
        {
          "Rank": 125,
          "City": "Sagar",
          "Population2011": "370,296",
          "Population2001": "232,133",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 126,
          "City": "Korba",
          "Population2011": "363,210",
          "Population2001": "315,690",
          "State": "Chhattisgarh"
        },
        {
          "Rank": 127,
          "City": "Bhilwara",
          "Population2011": "360,009",
          "Population2001": "280,128",
          "State": "Rajasthan"
        },
        {
          "Rank": 128,
          "City": "Berhampur",
          "Population2011": "355,823",
          "Population2001": "307,792",
          "State": "Odisha"
        },
        {
          "Rank": 129,
          "City": "Muzaffarpur",
          "Population2011": "351,838",
          "Population2001": "305,525",
          "State": "Bihar"
        },
        {
          "Rank": 130,
          "City": "Ahmednagar",
          "Population2011": "350,905",
          "Population2001": "307,615",
          "State": "Maharashtra"
        },
        {
          "Rank": 131,
          "City": "Mathura",
          "Population2011": "349,336",
          "Population2001": "302,770",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 132,
          "City": "Kollam",
          "Population2011": "349,033",
          "Population2001": "361,560",
          "State": "Kerala"
        },
        {
          "Rank": 133,
          "City": "Avadi",
          "Population2011": "344,701",
          "Population2001": "229,403",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 134,
          "City": "Kadapa[23]",
          "Population2011": "344,893",
          "Population2001": "125,725",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 135,
          "City": "Anantapuram[24]",
          "Population2011": "340,613",
          "Population2001": "255,134",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 136,
          "City": "Kamarhati",
          "Population2011": "336,579",
          "Population2001": "314,507",
          "State": "West Bengal"
        },
        {
          "Rank": 137,
          "City": "Bilaspur",
          "Population2011": "335,761",
          "Population2001": "296,662",
          "State": "Odisha"
        },
        {
          "Rank": 138,
          "City": "Sambalpur",
          "Population2011": "330,106",
          "Population2001": "274,917",
          "State": "Chhattisgarh"
        },
        {
          "Rank": 139,
          "City": "Shahjahanpur",
          "Population2011": "327,975",
          "Population2001": "296,662",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 140,
          "City": "Satara",
          "Population2011": "326,789",
          "Population2001": "228,175",
          "State": "Maharashtra"
        },
        {
          "Rank": 141,
          "City": "Bijapur",
          "Population2011": "326,360",
          "Population2001": "228,175",
          "State": "Karnataka"
        },
        {
          "Rank": 142,
          "City": "Rampur",
          "Population2011": "325,248",
          "Population2001": "281,494",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 143,
          "City": "Shimoga",
          "Population2011": "322,428",
          "Population2001": "274,352",
          "State": "Karnataka"
        },
        {
          "Rank": 144,
          "City": "Chandrapur",
          "Population2011": "321,036",
          "Population2001": "289,450",
          "State": "Maharashtra"
        },
        {
          "Rank": 145,
          "City": "Junagadh",
          "Population2011": "320,250",
          "Population2001": "168,686",
          "State": "Gujarat"
        },
        {
          "Rank": 146,
          "City": "Thrissur",
          "Population2011": "315,596",
          "Population2001": "317,526",
          "State": "Kerala"
        },
        {
          "Rank": 147,
          "City": "Alwar",
          "Population2011": "315,310",
          "Population2001": "260,593",
          "State": "Rajasthan"
        },
        {
          "Rank": 148,
          "City": "Bardhaman",
          "Population2011": "314,638",
          "Population2001": "285,602",
          "State": "West Bengal"
        },
        {
          "Rank": 149,
          "City": "Kulti",
          "Population2011": "313,977",
          "Population2001": "289,903",
          "State": "West Bengal"
        },
        {
          "Rank": 150,
          "City": "Nizamabad",
          "Population2011": "310,467",
          "Population2001": "288,722",
          "State": "Telangana"
        },
        {
          "Rank": 151,
          "City": "Parbhani",
          "Population2011": "307,191",
          "Population2001": "259,329",
          "State": "Maharashtra"
        },
        {
          "Rank": 152,
          "City": "Tumkur",
          "Population2011": "305,821",
          "Population2001": "248,929",
          "State": "Karnataka"
        },
        {
          "Rank": 153,
          "City": "Khammam",
          "Population2011": "305,000",
          "Population2001": "218,689",
          "State": "Telangana"
        },
        {
          "Rank": 154,
          "City": "Uzhavarkarai",
          "Population2011": "300,028",
          "Population2001": "217,707",
          "State": "Puducherry"
        },
        {
          "Rank": 155,
          "City": "Bihar Sharif",
          "Population2011": "296,889",
          "Population2001": "232,071",
          "State": "Bihar"
        },
        {
          "Rank": 156,
          "City": "Panipat",
          "Population2011": "294,150",
          "Population2001": "261,740",
          "State": "Haryana"
        },
        {
          "Rank": 157,
          "City": "Darbhanga",
          "Population2011": "294,116",
          "Population2001": "267,348",
          "State": "Bihar"
        },
        {
          "Rank": 158,
          "City": "Bally",
          "Population2011": "291,972",
          "Population2001": "260,906",
          "State": "West Bengal"
        },
        {
          "Rank": 159,
          "City": "Aizawl",
          "Population2011": "291,822",
          "Population2001": "228,280",
          "State": "Mizoram"
        },
        {
          "Rank": 160,
          "City": "Dewas",
          "Population2011": "289,438",
          "Population2001": "231,672",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 161,
          "City": "Ichalkaranji",
          "Population2011": "287,570",
          "Population2001": "257,610",
          "State": "Maharashtra"
        },
        {
          "Rank": 162,
          "City": "Karnal",
          "Population2011": "286,974",
          "Population2001": "210,476",
          "State": "Haryana"
        },
        {
          "Rank": 163,
          "City": "Bathinda",
          "Population2011": "285,813",
          "Population2001": "217,256",
          "State": "Punjab"
        },
        {
          "Rank": 164,
          "City": "Jalna",
          "Population2011": "285,349",
          "Population2001": "235,795",
          "State": "Maharashtra"
        },
        {
          "Rank": 165,
          "City": "Eluru[25]",
          "Population2011": "283,648",
          "Population2001": "190,347",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 166,
          "City": "Barasat",
          "Population2011": "283,443",
          "Population2001": "231,515",
          "State": "West Bengal"
        },
        {
          "Rank": 167,
          "City": "Kirari Suleman Nagar",
          "Population2011": "282,598",
          "Population2001": "153,874",
          "State": "Delhi"
        },
        {
          "Rank": 168,
          "City": "Purnia[26]",
          "Population2011": "280,547",
          "Population2001": "171,687",
          "State": "Bihar"
        },
        {
          "Rank": 169,
          "City": "Satna",
          "Population2011": "280,248",
          "Population2001": "225,464",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 170,
          "City": "Mau",
          "Population2011": "279,060",
          "Population2001": "212,657",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 171,
          "City": "Sonipat",
          "Population2011": "277,053",
          "Population2001": "214,974",
          "State": "Haryana"
        },
        {
          "Rank": 172,
          "City": "Farrukhabad",
          "Population2011": "275,750",
          "Population2001": "228,333",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 173,
          "City": "Durg",
          "Population2011": "268,679",
          "Population2001": "232,517",
          "State": "Chhattisgarh"
        },
        {
          "Rank": 174,
          "City": "Imphal",
          "Population2011": "264,986",
          "Population2001": "221,492",
          "State": "Manipur"
        },
        {
          "Rank": 175,
          "City": "Ratlam",
          "Population2011": "264,810",
          "Population2001": "222,202",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 176,
          "City": "Hapur",
          "Population2011": "262,801",
          "Population2001": "211,983",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 177,
          "City": "Arrah",
          "Population2011": "261,099",
          "Population2001": "203,380",
          "State": "Bihar"
        },
        {
          "Rank": 178,
          "City": "Anantapur",
          "Population2011": "261,004",
          "Population2001": "218,808",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 179,
          "City": "Karimnagar",
          "Population2011": "260,899",
          "Population2001": "205,653",
          "State": "Telangana"
        },
        {
          "Rank": 180,
          "City": "Etawah",
          "Population2011": "256,838",
          "Population2001": "210,453",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 181,
          "City": "Ambarnath",
          "Population2011": "254,003",
          "Population2001": "203,795",
          "State": "Maharashtra"
        },
        {
          "Rank": 182,
          "City": "North Dumdum",
          "Population2011": "253,625",
          "Population2001": "220,042",
          "State": "West Bengal"
        },
        {
          "Rank": 183,
          "City": "Bharatpur",
          "Population2011": "252,109",
          "Population2001": "204,587",
          "State": "Rajasthan"
        },
        {
          "Rank": 184,
          "City": "Begusarai",
          "Population2011": "251,136",
          "Population2001": "93,378",
          "State": "Bihar"
        },
        {
          "Rank": 185,
          "City": "New Delhi",
          "Population2011": "249,998",
          "Population2001": "302,147",
          "State": "Delhi"
        },
        {
          "Rank": 186,
          "City": "Gandhidham",
          "Population2011": "248,705",
          "Population2001": "166,388",
          "State": "Gujarat"
        },
        {
          "Rank": 187,
          "City": "Baranagar",
          "Population2011": "248,466",
          "Population2001": "250,768",
          "State": "West Bengal"
        },
        {
          "Rank": 188,
          "City": "Tiruvottiyur",
          "Population2011": "248,059",
          "Population2001": "212,281",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 189,
          "City": "Pondicherry",
          "Population2011": "241,773",
          "Population2001": "220,749",
          "State": "Puducherry"
        },
        {
          "Rank": 190,
          "City": "Sikar",
          "Population2011": "237,579",
          "Population2001": "184,904",
          "State": "Rajasthan"
        },
        {
          "Rank": 191,
          "City": "Thoothukudi",
          "Population2011": "237,374",
          "Population2001": "216,058",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 192,
          "City": "Rewa",
          "Population2011": "235,422",
          "Population2001": "183,274",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 193,
          "City": "Mirzapur",
          "Population2011": "233,691",
          "Population2001": "205,053",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 194,
          "City": "Raichur",
          "Population2011": "232,456",
          "Population2001": "207,421",
          "State": "Karnataka"
        },
        {
          "Rank": 195,
          "City": "Pali",
          "Population2011": "229,956",
          "Population2001": "187,641",
          "State": "Rajasthan"
        },
        {
          "Rank": 196,
          "City": "Ramagundam[27]",
          "Population2011": "229,644",
          "Population2001": "236,600",
          "State": "Telangana"
        },
        {
          "Rank": 197,
          "City": "Silchar",
          "Population2011": "229,136",
          "Population2001": "184,105",
          "State": "Assam"
        },
        {
          "Rank": 198,
          "City": "Haridwar",
          "Population2011": "228,832",
          "Population2001": "175,010",
          "State": "Uttarakhand"
        },
        {
          "Rank": 199,
          "City": "Vijayanagaram",
          "Population2011": "228,025",
          "Population2001": "174,324",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 200,
          "City": "Tenali",
          "Population2011": "225,982",
          "Population2001": "184,937",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 201,
          "City": "Nagercoil",
          "Population2011": "224,849",
          "Population2001": "208,179",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 202,
          "City": "Sri Ganganagar",
          "Population2011": "224,773",
          "Population2001": "210,713",
          "State": "Rajasthan"
        },
        {
          "Rank": 203,
          "City": "Karawal Nagar",
          "Population2011": "224,666",
          "Population2001": "148,549",
          "State": "Delhi"
        },
        {
          "Rank": 204,
          "City": "Mango",
          "Population2011": "223,805",
          "Population2001": "166,125",
          "State": "Jharkhand"
        },
        {
          "Rank": 205,
          "City": "Thanjavur",
          "Population2011": "222,943",
          "Population2001": "215,314",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 206,
          "City": "Bulandshahr",
          "Population2011": "222,519",
          "Population2001": "176,425",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 207,
          "City": "Uluberia",
          "Population2011": "222,240",
          "Population2001": "202,135",
          "State": "West Bengal"
        },
        {
          "Rank": 208,
          "City": "Katni",
          "Population2011": "221,883",
          "Population2001": "187,029",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 209,
          "City": "Sambhal",
          "Population2011": "220,813",
          "Population2001": "182,478",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 210,
          "City": "Singrauli",
          "Population2011": "220,257",
          "Population2001": "185,190",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 211,
          "City": "Nadiad",
          "Population2011": "218,095",
          "Population2001": "192,913",
          "State": "Gujarat"
        },
        {
          "Rank": 212,
          "City": "Secunderabad",
          "Population2011": "217,910",
          "Population2001": "206,102",
          "State": "Telangana"
        },
        {
          "Rank": 213,
          "City": "Naihati",
          "Population2011": "217,900",
          "Population2001": "215,303",
          "State": "West Bengal"
        },
        {
          "Rank": 214,
          "City": "Yamunanagar",
          "Population2011": "216,677",
          "Population2001": "189,696",
          "State": "Haryana"
        },
        {
          "Rank": 215,
          "City": "Bidhannagar",
          "Population2011": "215,514",
          "Population2001": "164,221",
          "State": "West Bengal"
        },
        {
          "Rank": 216,
          "City": "Pallavaram",
          "Population2011": "215,417",
          "Population2001": "144,623",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 217,
          "City": "Bidar",
          "Population2011": "214,373",
          "Population2001": "172,877",
          "State": "Karnataka"
        },
        {
          "Rank": 218,
          "City": "Munger",
          "Population2011": "213,303",
          "Population2001": "188,050",
          "State": "Bihar"
        },
        {
          "Rank": 219,
          "City": "Panchkula",
          "Population2011": "211,355",
          "Population2001": "140,925",
          "State": "Haryana"
        },
        {
          "Rank": 220,
          "City": "Burhanpur",
          "Population2011": "210,886",
          "Population2001": "193,725",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 221,
          "City": "Raurkela Industrial Township",
          "Population2011": "210,317",
          "Population2001": "206,693",
          "State": "Odisha"
        },
        {
          "Rank": 222,
          "City": "Kharagpur",
          "Population2011": "207,604",
          "Population2001": "188,761",
          "State": "West Bengal"
        },
        {
          "Rank": 223,
          "City": "Dindigul",
          "Population2011": "207,327",
          "Population2001": "196,955",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 224,
          "City": "Gandhinagar",
          "Population2011": "206,167",
          "Population2001": "195,985",
          "State": "Gujarat"
        },
        {
          "Rank": 225,
          "City": "Hospet",
          "Population2011": "206,167",
          "Population2001": "164,240",
          "State": "Karnataka"
        },
        {
          "Rank": 226,
          "City": "Nangloi Jat",
          "Population2011": "205,596",
          "Population2001": "150,948",
          "State": "Delhi"
        },
        {
          "Rank": 227,
          "City": "Malda",
          "Population2011": "205,521",
          "Population2001": "161,456",
          "State": "West Bengal"
        },
        {
          "Rank": 228,
          "City": "Ongole",
          "Population2011": "204,746",
          "Population2001": "150,471",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 229,
          "City": "Deoghar",
          "Population2011": "203,123",
          "Population2001": "112,525",
          "State": "Jharkhand"
        },
        {
          "Rank": 230,
          "City": "Chapra",
          "Population2011": "202,352",
          "Population2001": "79,190",
          "State": "Bihar"
        },
        {
          "Rank": 231,
          "City": "Haldia",
          "Population2011": "200,827",
          "Population2001": "170,673",
          "State": "West Bengal"
        },
        {
          "Rank": 232,
          "City": "Khandwa",
          "Population2011": "200,738",
          "Population2001": "172,242",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 233,
          "City": "Nandyal",
          "Population2011": "200,516",
          "Population2001": "152,676",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 234,
          "City": "Morena",
          "Population2011": "200,482",
          "Population2001": "150,959",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 235,
          "City": "Amroha",
          "Population2011": "198,471",
          "Population2001": "165,129",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 236,
          "City": "Anand",
          "Population2011": "198,282",
          "Population2001": "130,685",
          "State": "Gujarat"
        },
        {
          "Rank": 237,
          "City": "Bhind",
          "Population2011": "197,585",
          "Population2001": "153,752",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 238,
          "City": "Bhalswa Jahangir Pur",
          "Population2011": "197,148",
          "Population2001": "152,339",
          "State": "Delhi"
        },
        {
          "Rank": 239,
          "City": "Madhyamgram",
          "Population2011": "196,127",
          "Population2001": "155,451",
          "State": "West Bengal"
        },
        {
          "Rank": 240,
          "City": "Bhiwani",
          "Population2011": "196,057",
          "Population2001": "169,531",
          "State": "Haryana"
        },
        {
          "Rank": 241,
          "City": "Berhampore",
          "Population2011": "195,223",
          "Population2001": "160,143",
          "State": "West Bengal"
        },
        {
          "Rank": 242,
          "City": "Ambala",
          "Population2011": "195,153",
          "Population2001": "139,279",
          "State": "Haryana"
        },
        {
          "Rank": 243,
          "City": "Morbi",
          "Population2011": "194,947",
          "Population2001": "145,719",
          "State": "Gujarat"
        },
        {
          "Rank": 244,
          "City": "Fatehpur",
          "Population2011": "193,193",
          "Population2001": "151,757",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 245,
          "City": "Raebareli",
          "Population2011": "191,316",
          "Population2001": "169,333",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 246,
          "City": "Khora, Ghaziabad",
          "Population2011": "190,400",
          "Population2001": "―",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 247,
          "City": "Chittoor[28]",
          "Population2011": "189,332",
          "Population2001": "152,654",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 248,
          "City": "Bhusawal",
          "Population2011": "187,421",
          "Population2001": "172,372",
          "State": "Maharashtra"
        },
        {
          "Rank": 249,
          "City": "Orai",
          "Population2011": "187,137",
          "Population2001": "139,318",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 250,
          "City": "Bahraich",
          "Population2011": "186,223",
          "Population2001": "168,323",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 251,
          "City": "Phusro",
          "Population2011": "186,139",
          "Population2001": "83,463",
          "State": "Jharkhand"
        },
        {
          "Rank": 252,
          "City": "Vellore",
          "Population2011": "185,803",
          "Population2001": "177,230",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 253,
          "City": "Mehsana",
          "Population2011": "184,991",
          "Population2001": "141,453",
          "State": "Gujarat"
        },
        {
          "Rank": 254,
          "City": "Raiganj",
          "Population2011": "183,612",
          "Population2001": "165,212",
          "State": "West Bengal"
        },
        {
          "Rank": 255,
          "City": "Sirsa",
          "Population2011": "182,534",
          "Population2001": "160,735",
          "State": "Haryana"
        },
        {
          "Rank": 256,
          "City": "Danapur",
          "Population2011": "182,429",
          "Population2001": "131,176",
          "State": "Bihar"
        },
        {
          "Rank": 257,
          "City": "Serampore",
          "Population2011": "181,842",
          "Population2001": "197,857",
          "State": "West Bengal"
        },
        {
          "Rank": 258,
          "City": "Sultan Pur Majra",
          "Population2011": "181,554",
          "Population2001": "164,426",
          "State": "Delhi"
        },
        {
          "Rank": 259,
          "City": "Guna",
          "Population2011": "180,935",
          "Population2001": "137,175",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 260,
          "City": "Jaunpur",
          "Population2011": "180,362",
          "Population2001": "160,055",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 261,
          "City": "Panvel",
          "Population2011": "180,020",
          "Population2001": "104,058",
          "State": "Maharashtra"
        },
        {
          "Rank": 262,
          "City": "Shivpuri",
          "Population2011": "179,977",
          "Population2001": "146,892",
          "State": "Madhya Pradesh"
        },
        {
          "Rank": 263,
          "City": "Surendranagar Dudhrej",
          "Population2011": "177,851",
          "Population2001": "156,161",
          "State": "Gujarat"
        },
        {
          "Rank": 264,
          "City": "Unnao",
          "Population2011": "177,658",
          "Population2001": "144,662",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 265,
          "City": "Chinsurah",
          "Population2011": "177,259",
          "Population2001": "170,201",
          "State": "West Bengal"
        },
        {
          "Rank": 266,
          "City": "Alappuzha",
          "Population2011": "174,164",
          "Population2001": "177,029",
          "State": "Kerala"
        },
        {
          "Rank": 267,
          "City": "Kottayam",
          "Population2011": "172,878",
          "Population2001": "129,894",
          "State": "Kerala"
        },
        {
          "Rank": 268,
          "City": "Machilipatnam",
          "Population2011": "169,892",
          "Population2001": "179,353",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 269,
          "City": "Shimla",
          "Population2011": "169,578",
          "Population2001": "142,555",
          "State": "Himachal Pradesh"
        },
        {
          "Rank": 270,
          "City": "Adoni",
          "Population2011": "166,537",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 271,
          "City": "Udupi",
          "Population2011": "165,401",
          "Population2001": "―",
          "State": "Karnataka"
        },
        {
          "Rank": 272,
          "City": "Katihar",
          "Population2011": "164,937",
          "Population2001": "115,169",
          "State": "Bihar"
        },
        {
          "Rank": 273,
          "City": "Proddatur",
          "Population2011": "163,600",
          "Population2001": "86,896",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 274,
          "City": "Mahbubnagar",
          "Population2011": "158,000",
          "Population2001": "–",
          "State": "Telangana"
        },
        {
          "Rank": 275,
          "City": "Saharsa[29]",
          "Population2011": "155,175",
          "Population2001": "125,167",
          "State": "Bihar"
        },
        {
          "Rank": 276,
          "City": "Dibrugarh",
          "Population2011": "154,296",
          "Population2001": "137,661",
          "State": "Assam"
        },
        {
          "Rank": 277,
          "City": "Jorhat",
          "Population2011": "153,889",
          "Population2001": "112,026",
          "State": "Assam"
        },
        {
          "Rank": 278,
          "City": "Hazaribagh",
          "Population2011": "153,599",
          "Population2001": "127,243",
          "State": "Jharkhand"
        },
        {
          "Rank": 279,
          "City": "Hindupur",
          "Population2011": "151,835",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 280,
          "City": "Nagaon",
          "Population2011": "148,496",
          "Population2001": "123,265",
          "State": "Assam"
        },
        {
          "Rank": 281,
          "City": "Sasaram[30]",
          "Population2011": "147,396",
          "Population2001": "131,172",
          "State": "Bihar"
        },
        {
          "Rank": 282,
          "City": "Hajipur[31]",
          "Population2011": "147,126",
          "Population2001": "119,412",
          "State": "Bihar"
        },
        {
          "Rank": 283,
          "City": "Port Blair",
          "Population2011": "140,572",
          "Population2001": "―",
          "State": "Andaman and Nicobar Islands UT"
        },
        {
          "Rank": 284,
          "City": "Giridih",
          "Population2011": "143,529",
          "Population2001": "―",
          "State": "Jharkhand"
        },
        {
          "Rank": 285,
          "City": "Bhimavaram",
          "Population2011": "142,280",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 286,
          "City": "Kumbakonam",
          "Population2011": "140,056",
          "Population2001": "144,021",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 287,
          "City": "Bongaigaon",
          "Population2011": "139,650",
          "Population2001": "101,213",
          "State": "Assam"
        },
        {
          "Rank": 288,
          "City": "Dehri[30]",
          "Population2011": "137,068",
          "Population2001": "119,057",
          "State": "Bihar"
        },
        {
          "Rank": 289,
          "City": "Madanapalle",
          "Population2011": "135,669",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 290,
          "City": "Siwan[32]",
          "Population2011": "134,458",
          "Population2001": "109,919",
          "State": "Bihar"
        },
        {
          "Rank": 291,
          "City": "Bettiah[33]",
          "Population2011": "132,896",
          "Population2001": "116,670",
          "State": "Bihar"
        },
        {
          "Rank": 292,
          "City": "Ramgarh",
          "Population2011": "132,441",
          "Population2001": "73,455",
          "State": "Jharkhand"
        },
        {
          "Rank": 293,
          "City": "Tinsukia",
          "Population2011": "126,389",
          "Population2001": "101,957",
          "State": "Assam"
        },
        {
          "Rank": 294,
          "City": "Guntakal",
          "Population2011": "126,270",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 295,
          "City": "Srikakulam",
          "Population2011": "125,939",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 296,
          "City": "Motihari[34]",
          "Population2011": "125,183",
          "Population2001": "100,683",
          "State": "Bihar"
        },
        {
          "Rank": 297,
          "City": "Dharmavaram",
          "Population2011": "121,874",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 298,
          "City": "Medininagar",
          "Population2011": "120,325",
          "Population2001": "―",
          "State": "Jharkhand"
        },
        {
          "Rank": 299,
          "City": "Gudivada",
          "Population2011": "118,167",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 300,
          "City": "Phagwara",
          "Population2011": "117,966",
          "Population2001": "―",
          "State": "Punjab"
        },
        {
          "Rank": 301,
          "City": "Pudukkottai",
          "Population2011": "117,745",
          "Population2001": "―",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 302,
          "City": "Hosur",
          "Population2011": "116,821",
          "Population2001": "102,000",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 303,
          "City": "Narasaraopet",
          "Population2011": "116,250",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 304,
          "City": "Suryapet",
          "Population2011": "115,250",
          "Population2001": "94,585",
          "State": "Telangana"
        },
        {
          "Rank": 305,
          "City": "Miryalaguda",
          "Population2011": "109,891",
          "Population2001": "91,395",
          "State": "Telangana"
        },
        {
          "Rank": 306,
          "City": "Tadipatri",
          "Population2011": "108,171",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 307,
          "City": "Karaikudi",
          "Population2011": "106,714",
          "Population2001": "86,596",
          "State": "Tamil Nadu"
        },
        {
          "Rank": 308,
          "City": "Kishanganj[35]",
          "Population2011": "105,782",
          "Population2001": "85,590",
          "State": "Bihar"
        },
        {
          "Rank": 309,
          "City": "Jamalpur[36]",
          "Population2011": "105,221",
          "Population2001": "96,983",
          "State": "Bihar"
        },
        {
          "Rank": 310,
          "City": "Ballia",
          "Population2011": "104,271",
          "Population2001": "―",
          "State": "Uttar Pradesh"
        },
        {
          "Rank": 311,
          "City": "Kavali",
          "Population2011": "104,000",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 312,
          "City": "Tadepalligudem",
          "Population2011": "103,906",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 313,
          "City": "Amaravati",
          "Population2011": "103,000",
          "Population2001": "―",
          "State": "Andhra Pradesh"
        },
        {
          "Rank": 314,
          "City": "Buxar[37]",
          "Population2011": "102,591",
          "Population2001": "83,168",
          "State": "Bihar"
        },
        {
          "Rank": 315,
          "City": "Tezpur",
          "Population2011": "102,505",
          "Population2001": "83,028",
          "State": "Assam"
        },
        {
          "Rank": 316,
          "City": "Jehanabad[38]",
          "Population2011": "102,456",
          "Population2001": "81,503",
          "State": "Bihar"
        },
        {
          "Rank": 317,
          "City": "Aurangabad[39]",
          "Population2011": "101,520",
          "Population2001": "79,393",
          "State": "Bihar"
        },
        {
          "Rank": 318,
          "City": "Gangtok",
          "Population2011": "100,286",
          "Population2001": "29,354",
          "State": "Sikkim"
        },
        {
          "Rank": 319,
          "City": "Vasco Da Gama",
          "Population2011": "100,000",
          "Population2001": "―",
          "State": "Goa"
        }
       ];

    getStates(){
        let states = Array<State>();
        this.cityState.forEach(e => {
            states.push({
                name: e.State
            });
        });
        let unique = [... new Set(states.map(item => item.name))];
        let uniqueStates = Array<State>();
        unique.forEach(e=>{
            uniqueStates.push({
                name: e
            });
        })
        console.log(uniqueStates);
        return uniqueStates;
    }

    getCitiesOfState(state: string){
        let cities = Array<City1>();
        this.cityState.forEach(e => {
            if(e.State == state){
                cities.push({
                    name: e.City.substr(0,e.City.indexOf('[') == -1 ? e.City.length : e.City.indexOf('[')),
                    state: e.State,
                })
            }
        });
        return cities;
    }
}