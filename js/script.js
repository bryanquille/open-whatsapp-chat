const countryNumberCode = document.querySelector("#country-number-code");
const userInput = document.querySelector("#user-input");
const runBtn = document.querySelector("#run-btn");
const whatsappCountries = [
    { countryCode: "AF", numericCode: "93" }, // Afghanistan
    { countryCode: "AL", numericCode: "355" }, // Albania
    { countryCode: "DZ", numericCode: "213" }, // Algeria
    { countryCode: "AD", numericCode: "376" }, // Andorra
    { countryCode: "AO", numericCode: "244" }, // Angola
    { countryCode: "AR", numericCode: "54" }, // Argentina
    { countryCode: "AM", numericCode: "374" }, // Armenia
    { countryCode: "AU", numericCode: "61" }, // Australia
    { countryCode: "AT", numericCode: "43" }, // Austria
    { countryCode: "AZ", numericCode: "994" }, // Azerbaijan
    { countryCode: "BH", numericCode: "973" }, // Bahrain
    { countryCode: "BD", numericCode: "880" }, // Bangladesh
    { countryCode: "BY", numericCode: "375" }, // Belarus
    { countryCode: "BE", numericCode: "32" }, // Belgium
    { countryCode: "BZ", numericCode: "501" }, // Belize
    { countryCode: "BJ", numericCode: "229" }, // Benin
    { countryCode: "BT", numericCode: "975" }, // Bhutan
    { countryCode: "BO", numericCode: "591" }, // Bolivia
    { countryCode: "BA", numericCode: "387" }, // Bosnia and Herzegovina
    { countryCode: "BW", numericCode: "267" }, // Botswana
    { countryCode: "BR", numericCode: "55" }, // Brazil
    { countryCode: "BN", numericCode: "673" }, // Brunei
    { countryCode: "BG", numericCode: "359" }, // Bulgaria
    { countryCode: "BF", numericCode: "226" }, // Burkina Faso
    { countryCode: "BI", numericCode: "257" }, // Burundi
    { countryCode: "KH", numericCode: "855" }, // Cambodia
    { countryCode: "CM", numericCode: "237" }, // Cameroon
    { countryCode: "CA", numericCode: "1" }, // Canada
    { countryCode: "CV", numericCode: "238" }, // Cape Verde
    { countryCode: "CF", numericCode: "236" }, // Central African Republic
    { countryCode: "TD", numericCode: "235" }, // Chad
    { countryCode: "CL", numericCode: "56" }, // Chile
    { countryCode: "CN", numericCode: "86" }, // China
    { countryCode: "CO", numericCode: "57" }, // Colombia
    { countryCode: "KM", numericCode: "269" }, // Comoros
    { countryCode: "CR", numericCode: "506" }, // Costa Rica
    { countryCode: "HR", numericCode: "385" }, // Croatia
    { countryCode: "CU", numericCode: "53" }, // Cuba
    { countryCode: "CY", numericCode: "357" }, // Cyprus
    { countryCode: "CZ", numericCode: "420" }, // Czech Republic
    { countryCode: "DK", numericCode: "45" }, // Denmark
    { countryCode: "DJ", numericCode: "253" }, // Djibouti
    { countryCode: "TL", numericCode: "670" }, // Timor-Leste
    { countryCode: "EC", numericCode: "593" }, // Ecuador
    { countryCode: "EG", numericCode: "20" }, // Egypt
    { countryCode: "SV", numericCode: "503" }, // El Salvador
    { countryCode: "GQ", numericCode: "240" }, // Equatorial Guinea
    { countryCode: "ER", numericCode: "291" }, // Eritrea
    { countryCode: "EE", numericCode: "372" }, // Estonia
    { countryCode: "ET", numericCode: "251" }, // Ethiopia
    { countryCode: "FJ", numericCode: "679" }, // Fiji
    { countryCode: "FI", numericCode: "358" }, // Finland
    { countryCode: "FR", numericCode: "33" }, // France
    { countryCode: "GA", numericCode: "241" }, // Gabon
    { countryCode: "GM", numericCode: "220" }, // Gambia
    { countryCode: "GE", numericCode: "995" }, // Georgia
    { countryCode: "DE", numericCode: "49" }, // Germany
    { countryCode: "GH", numericCode: "233" }, // Ghana
    { countryCode: "GR", numericCode: "30" }, // Greece
    { countryCode: "GT", numericCode: "502" }, // Guatemala
    { countryCode: "GN", numericCode: "224" }, // Guinea
    { countryCode: "GW", numericCode: "245" }, // Guinea-Bissau
    { countryCode: "GY", numericCode: "592" }, // Guyana
    { countryCode: "HT", numericCode: "509" }, // Haiti
    { countryCode: "HN", numericCode: "504" }, // Honduras
    { countryCode: "HU", numericCode: "36" }, // Hungary
    { countryCode: "IS", numericCode: "354" }, // Iceland
    { countryCode: "IN", numericCode: "91" }, // India
    { countryCode: "ID", numericCode: "62" }, // Indonesia
    { countryCode: "IR", numericCode: "98" }, // Iran
    { countryCode: "IQ", numericCode: "964" }, // Iraq
    { countryCode: "IE", numericCode: "353" }, // Ireland
    { countryCode: "IL", numericCode: "972" }, // Israel
    { countryCode: "IT", numericCode: "39" }, // Italy
    { countryCode: "JM", numericCode: "1" }, // Jamaica
    { countryCode: "JP", numericCode: "81" }, // Japan
    { countryCode: "JO", numericCode: "962" }, // Jordan
    { countryCode: "KZ", numericCode: "7" }, // Kazakhstan
    { countryCode: "KE", numericCode: "254" }, // Kenya
    { countryCode: "KI", numericCode: "686" }, // Kiribati
    { countryCode: "KW", numericCode: "965" }, // Kuwait
    { countryCode: "KG", numericCode: "996" }, // Kyrgyzstan
    { countryCode: "LA", numericCode: "856" }, // Laos
    { countryCode: "LV", numericCode: "371" }, // Latvia
    { countryCode: "LB", numericCode: "961" }, // Lebanon
    { countryCode: "LS", numericCode: "266" }, // Lesotho
    { countryCode: "LR", numericCode: "231" }, // Liberia
    { countryCode: "LY", numericCode: "218" }, // Libya
    { countryCode: "LI", numericCode: "423" }, // Liechtenstein
    { countryCode: "LT", numericCode: "370" }, // Lithuania
    { countryCode: "LU", numericCode: "352" }, // Luxembourg
    { countryCode: "MG", numericCode: "261" }, // Madagascar
    { countryCode: "MW", numericCode: "265" }, // Malawi
    { countryCode: "MY", numericCode: "60" }, // Malaysia
    { countryCode: "MV", numericCode: "960" }, // Maldives
    { countryCode: "ML", numericCode: "223" }, // Mali
    { countryCode: "MT", numericCode: "356" }, // Malta
    { countryCode: "MH", numericCode: "692" }, // Marshall Islands
    { countryCode: "MR", numericCode: "222" }, // Mauritania
    { countryCode: "MU", numericCode: "230" }, // Mauritius
    { countryCode: "MX", numericCode: "52" }, // Mexico
    { countryCode: "FM", numericCode: "691" }, // Micronesia
    { countryCode: "MD", numericCode: "373" }, // Moldova
    { countryCode: "MC", numericCode: "377" }, // Monaco
    { countryCode: "MN", numericCode: "976" }, // Mongolia
    { countryCode: "ME", numericCode: "382" }, // Montenegro
    { countryCode: "MA", numericCode: "212" }, // Morocco
    { countryCode: "MZ", numericCode: "258" }, // Mozambique
    { countryCode: "MM", numericCode: "95" }, // Myanmar (Burma)
    { countryCode: "NA", numericCode: "264" }, // Namibia
    { countryCode: "NR", numericCode: "674" }, // Nauru
    { countryCode: "NP", numericCode: "977" }, // Nepal
    { countryCode: "NL", numericCode: "31" }, // Netherlands
    { countryCode: "NZ", numericCode: "64" }, // New Zealand
    { countryCode: "NI", numericCode: "505" }, // Nicaragua
    { countryCode: "NE", numericCode: "227" }, // Niger
    { countryCode: "NG", numericCode: "234" }, // Nigeria
    { countryCode: "KP", numericCode: "850" }, // North Korea
    { countryCode: "NO", numericCode: "47" }, // Norway
    { countryCode: "OM", numericCode: "968" }, // Oman
    { countryCode: "PK", numericCode: "92" }, // Pakistan
    { countryCode: "PW", numericCode: "680" }, // Palau
    { countryCode: "PS", numericCode: "970" }, // Palestine
    { countryCode: "PA", numericCode: "507" }, // Panama
    { countryCode: "PG", numericCode: "675" }, // Papua New Guinea
    { countryCode: "PY", numericCode: "595" }, // Paraguay
    { countryCode: "PE", numericCode: "51" }, // Peru
    { countryCode: "PH", numericCode: "63" }, // Philippines
    { countryCode: "PL", numericCode: "48" }, // Poland
    { countryCode: "PT", numericCode: "351" }, // Portugal
    { countryCode: "QA", numericCode: "974" }, // Qatar
    { countryCode: "RO", numericCode: "40" }, // Romania
    { countryCode: "RU", numericCode: "7" }, // Russia
    { countryCode: "RW", numericCode: "250" }, // Rwanda
    { countryCode: "WS", numericCode: "685" }, // Samoa
    { countryCode: "SM", numericCode: "378" }, // San Marino
    { countryCode: "ST", numericCode: "239" }, // Sao Tome and Principe
    { countryCode: "SA", numericCode: "966" }, // Saudi Arabia
    { countryCode: "SN", numericCode: "221" }, // Senegal
    { countryCode: "RS", numericCode: "381" }, // Serbia
    { countryCode: "SC", numericCode: "248" }, // Seychelles
    { countryCode: "SL", numericCode: "232" }, // Sierra Leone
    { countryCode: "SG", numericCode: "65" }, // Singapore
    { countryCode: "SK", numericCode: "421" }, // Slovakia
    { countryCode: "SI", numericCode: "386" }, // Slovenia
    { countryCode: "SB", numericCode: "677" }, // Solomon Islands
    { countryCode: "SO", numericCode: "252" }, // Somalia
    { countryCode: "ZA", numericCode: "27" }, // South Africa
    { countryCode: "KR", numericCode: "82" }, // South Korea
    { countryCode: "SS", numericCode: "211" }, // South Sudan
    { countryCode: "ES", numericCode: "34" }, // Spain
    { countryCode: "LK", numericCode: "94" }, // Sri Lanka
    { countryCode: "SD", numericCode: "249" }, // Sudan
    { countryCode: "SR", numericCode: "597" }, // Suriname
    { countryCode: "SZ", numericCode: "268" }, // Swaziland
    { countryCode: "SE", numericCode: "46" }, // Sweden
    { countryCode: "CH", numericCode: "41" }, // Switzerland
    { countryCode: "SY", numericCode: "963" }, // Syria
    { countryCode: "TW", numericCode: "886" }, // Taiwan
    { countryCode: "TJ", numericCode: "992" }, // Tajikistan
    { countryCode: "TZ", numericCode: "255" }, // Tanzania
    { countryCode: "TH", numericCode: "66" }, // Thailand
    { countryCode: "TG", numericCode: "228" }, // Togo
    { countryCode: "TO", numericCode: "676" }, // Tonga
    { countryCode: "TT", numericCode: "1" }, // Trinidad and Tobago
    { countryCode: "TN", numericCode: "216" }, // Tunisia
    { countryCode: "TR", numericCode: "90" }, // Turkey
    { countryCode: "TM", numericCode: "993" }, // Turkmenistan
    { countryCode: "TV", numericCode: "688" }, // Tuvalu
    { countryCode: "UG", numericCode: "256" }, // Uganda
    { countryCode: "UA", numericCode: "380" }, // Ukraine
    { countryCode: "AE", numericCode: "971" }, // United Arab Emirates
    { countryCode: "GB", numericCode: "44" }, // United Kingdom
    { countryCode: "US", numericCode: "1" }, // United States
    { countryCode: "UY", numericCode: "598" }, // Uruguay
    { countryCode: "UZ", numericCode: "998" }, // Uzbekistan
    { countryCode: "VU", numericCode: "678" }, // Vanuatu
    { countryCode: "VA", numericCode: "379" }, // Vatican City
    { countryCode: "VE", numericCode: "58" }, // Venezuela
    { countryCode: "VN", numericCode: "84" }, // Vietnam
    { countryCode: "YE", numericCode: "967" }, // Yemen
    { countryCode: "ZM", numericCode: "260" }, // Zambia
    { countryCode: "ZW", numericCode: "263" } // Zimbabwe
];

const printCountryCode = () => {
    whatsappCountries.forEach(country => {
        countryNumberCode.innerHTML += `<option value="${country.numericCode}">${country.countryCode}: +${country.numericCode}</option>`;
    });
}

const getCountryCode = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.countryCode;
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", () => {
    printCountryCode();

    // Check if browser support geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            // Getting latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Using inverse geolocation API to get country info
            const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

            // Setting the country code to the select element
            getCountryCode(apiUrl)
                .then(countryCode => {
                    document.querySelectorAll("option").forEach(option => {
                        if (countryCode === option.textContent.slice(0,2)) {
                            option.selected = true;
                        }
                    });
                })
        })
    } else {
        alert("Geolocation is not available in your browser. Please select the country code before input the phone number.");
    }
});

runBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = userInput.value;
    const code = countryNumberCode.value;

    // Checking value
    const regex = /[a-zA-Z-]/g;
    if (regex.test(value) || value === "") {
        alert("Please enter a phone number without letters, spaces or simbols.");
        return;
    }

    // Creating the whatsapp api url
    const url = `https://api.whatsapp.com/send?phone=${code}${value}`;

    // Open the chat
    window.open(url);
});