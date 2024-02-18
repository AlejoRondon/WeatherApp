import React from 'react';
import './CityList.css';
import CityItem from '../CityItem/CityItem';

function CityList({ searchStr, onClickCityItem, style }) {
  let filtered_cities = cities_list.filter((e) => {
    return e.name.toLowerCase().startsWith(searchStr.toLowerCase());
  });

  return (
    <div className='city-list' style={style}>
      <ul>
        {filtered_cities.length
          ? filtered_cities.map((city, index) => (
              <CityItem
                key={index}
                cityName={city.name}
                onClickCityItem={onClickCityItem}
                cityCode={city.code}
              ></CityItem>
            ))
          : 'no element matches the search'}
      </ul>
    </div>
  );
}

export default CityList;

const cities_list = [
  { name: 'Kabul', code: 1138958 }, // Afghanistan
  { name: 'Tirana', code: 3183875 }, // Albania
  { name: 'Algiers', code: 2507480 }, // Algeria
  { name: 'Andorra la Vella', code: 3041563 }, // Andorra
  { name: 'Luanda', code: 2240449 }, // Angola
  { name: "Saint John's", code: 3576022 }, // Antigua and Barbuda
  { name: 'Buenos Aires', code: 3435910 }, // Argentina
  { name: 'Yerevan', code: 616052 }, // Armenia
  { name: 'Canberra', code: 2172517 }, // Australia
  { name: 'Vienna', code: 2761369 }, // Austria
  { name: 'Baku', code: 587084 }, // Azerbaijan
  { name: 'Nassau', code: 3571824 }, // Bahamas
  { name: 'Manama', code: 290340 }, // Bahrain
  { name: 'Dhaka', code: 1185241 }, // Bangladesh
  { name: 'Bridgetown', code: 3374036 }, // Barbados
  { name: 'Minsk', code: 625144 }, // Belarus
  { name: 'Brussels', code: 2800866 }, // Belgium
  { name: 'Belmopan', code: 3582678 }, // Belize
  { name: 'Porto-Novo', code: 2392087 }, // Benin
  { name: 'Thimphu', code: 1252416 }, // Bhutan
  { name: 'Sucre', code: 3904906 }, // Bolivia
  { name: 'Sarajevo', code: 3191281 }, // Bosnia and Herzegovina
  { name: 'Gaborone', code: 933773 }, // Botswana
  { name: 'Brasília', code: 3469058 }, // Brazil
  { name: 'Bandar Seri Begawan', code: 1820906 }, // Brunei
  { name: 'Sofia', code: 727011 }, // Bulgaria
  { name: 'Ouagadougou', code: 2362344 }, // Burkina Faso
  { name: 'Bujumbura', code: 425378 }, // Burundi
  { name: 'Phnom Penh', code: 1821306 }, // Cambodia
  { name: 'Yaoundé', code: 2220957 }, // Cameroon
  { name: 'Ottawa', code: 6094817 }, // Canada
  { name: 'Praia', code: 3374333 }, // Cape Verde
  { name: 'Bangui', code: 2389853 }, // Central African Republic
  { name: "N'Djamena", code: 2427123 }, // Chad
  { name: 'Santiago', code: 3871336 }, // Chile
  { name: 'Beijing', code: 1816670 }, // China
  { name: 'Bogotá', code: 3688689 }, // Colombia
  { name: 'Moroni', code: 921772 }, // Comoros
  { name: 'Brazzaville', code: 2260535 }, // Congo (Republic of the)
  { name: 'San José', code: 3621849 }, // Costa Rica
  { name: 'Yamoussoukro', code: 2279755 }, // Côte d'Ivoire
  { name: 'Zagreb', code: 3186886 }, // Croatia
  { name: 'Havana', code: 3553478 }, // Cuba
  { name: 'Nicosia', code: 146268 }, // Cyprus
  { name: 'Prague', code: 3067696 }, // Czech Republic
  { name: 'Copenhagen', code: 2618425 }, // Denmark
  { name: 'Djibouti', code: 223817 }, // Djibouti
  { name: 'Roseau', code: 3575635 }, // Dominica
  { name: 'Santo Domingo', code: 3492908 }, // Dominican Republic
  { name: 'Quito', code: 3652462 }, // Ecuador
  { name: 'Cairo', code: 360630 }, // Egypt
  { name: 'San Salvador', code: 3583361 }, // El Salvador
  { name: 'Malabo', code: 2309527 }, // Equatorial Guinea
  { name: 'Asmara', code: 343300 }, // Eritrea
  { name: 'Tallinn', code: 588409 }, // Estonia
  { name: 'Addis Ababa', code: 344979 }, // Ethiopia
  { name: 'Suva', code: 2198148 }, // Fiji
  { name: 'Helsinki', code: 658225 }, // Finland
  { name: 'Paris', code: 2988507 }, // France
  { name: 'Libreville', code: 2399697 }, // Gabon
  { name: 'Banjul', code: 2413451 }, // Gambia
  { name: 'Tbilisi', code: 611717 }, // Georgia
  { name: 'Berlin', code: 2950159 }, // Germany
  { name: 'Accra', code: 2306104 }, // Ghana
  { name: 'Athens', code: 264371 }, // Greece
  { name: "Saint George's", code: 3580239 }, // Grenada
  { name: 'Guatemala City', code: 3598132 }, // Guatemala
  { name: 'Conakry', code: 2420477 }, // Guinea
  { name: 'Bissau', code: 2374775 }, // Guinea-Bissau
  { name: 'Georgetown', code: 3378644 }, // Guyana
  { name: 'Port-au-Prince', code: 3718426 }, // Haiti
  { name: 'Tegucigalpa', code: 3600949 }, // Honduras
  { name: 'Budapest', code: 3054643 }, // Hungary
  { name: 'Reykjavik', code: 6692263 }, // Iceland
  { name: 'New Delhi', code: 1273294 }, // India
  { name: 'Jakarta', code: 1642911 }, // Indonesia
  { name: 'Tehran', code: 112931 }, // Iran
  { name: 'Baghdad', code: 98182 }, // Iraq
  { name: 'Dublin', code: 2964574 }, // Ireland
  { name: 'Jerusalem', code: 281184 }, // Israel
  { name: 'Rome', code: 3169070 }, // Italy
  { name: 'Kingston', code: 3489854 }, // Jamaica
  { name: 'Tokyo', code: 1850147 }, // Japan
  { name: 'Amman', code: 250441 }, // Jordan
  { name: 'Nur-Sultan', code: 1526273 }, // Kazakhstan
  { name: 'Nairobi', code: 184745 }, // Kenya
  { name: 'South Tarawa', code: 2110257 }, // Kiribati
  { name: 'Pyongyang', code: 1871859 }, // North Korea
  { name: 'Seoul', code: 1835848 }, // South Korea
  { name: 'Pristina', code: 786714 }, // Kosovo
  { name: 'Kuwait City', code: 285787 }, // Kuwait
  { name: 'Bishkek', code: 1528675 }, // Kyrgyzstan
  { name: 'Vientiane', code: 1651944 }, // Laos
  { name: 'Riga', code: 456172 }, // Latvia
  { name: 'Beirut', code: 276781 }, // Lebanon
  { name: 'Maseru', code: 932692 }, // Lesotho
  { name: 'Monrovia', code: 2274895 }, // Liberia
  { name: 'Tripoli', code: 2210247 }, // Libya
  { name: 'Vaduz', code: 3042030 }, // Liechtenstein
  { name: 'Vilnius', code: 593116 }, // Lithuania
  { name: 'Luxembourg', code: 2960316 }, // Luxembourg
  { name: 'Skopje', code: 785842 }, // North Macedonia
  { name: 'Antananarivo', code: 1070940 }, // Madagascar
  { name: 'Lilongwe', code: 927967 }, // Malawi
  { name: 'Kuala Lumpur', code: 1735161 }, // Malaysia
  { name: 'Male', code: 1282027 }, // Maldives
  { name: 'Bamako', code: 2460596 }, // Mali
  { name: 'Valletta', code: 2562305 }, // Malta
  { name: 'Majuro', code: 2113779 }, // Marshall Islands
  { name: 'Nouakchott', code: 2377450 }, // Mauritania
  { name: 'Port Louis', code: 934154 }, // Mauritius
  { name: 'Mexico City', code: 3530597 }, // Mexico
  { name: 'Palikir', code: 2081986 }, // Micronesia
  { name: 'Chisinau', code: 618426 }, // Moldova
  { name: 'Monaco', code: 2993457 }, // Monaco
  { name: 'Ulaanbaatar', code: 2028462 }, // Mongolia
  { name: 'Podgorica', code: 3193044 }, // Montenegro
  { name: 'Rabat', code: 2538475 }, // Morocco
  { name: 'Maputo', code: 1040652 }, // Mozambique
  { name: 'Naypyidaw', code: 6611853 }, // Myanmar
  { name: 'Windhoek', code: 3352136 }, // Namibia
  { name: 'Yaren', code: 7626844 }, // Nauru
  { name: 'Kathmandu', code: 1283240 }, // Nepal
  { name: 'Amsterdam', code: 2759794 }, // Netherlands
  { name: 'Wellington', code: 2179537 }, // New Zealand
  { name: 'Managua', code: 3617763 }, // Nicaragua
  { name: 'Niamey', code: 2440485 }, // Niger
  { name: 'Abuja', code: 2347470 }, // Nigeria
  { name: 'Oslo', code: 3143244 }, // Norway
  { name: 'Muscat', code: 287286 }, // Oman
  { name: 'Islamabad', code: 1176615 }, // Pakistan
  { name: 'Ngerulmud', code: 7303944 }, // Palau
  { name: 'Jerusalem', code: 281184 }, // Palestine
  { name: 'Panama City', code: 3703443 }, // Panama
  { name: 'Port Moresby', code: 2088122 }, // Papua New Guinea
  { name: 'Asunción', code: 3439389 }, // Paraguay
  { name: 'Lima', code: 3936456 }, // Peru
  { name: 'Manila', code: 1701668 }, // Philippines
  { name: 'Warsaw', code: 756135 }, // Poland
  { name: 'Lisbon', code: 2267057 }, // Portugal
  { name: 'Doha', code: 290030 }, // Qatar
  { name: 'Bucharest', code: 683506 }, // Romania
  { name: 'Moscow', code: 524901 }, // Russia
  { name: 'Kigali', code: 202061 }, // Rwanda
  { name: 'Basseterre', code: 3575551 }, // Saint Kitts and Nevis
  { name: 'Castries', code: 3576812 }, // Saint Lucia
  { name: 'Kingstown', code: 3577887 }, // Saint Vincent and the Grenadines
  { name: 'Apia', code: 4035413 }, // Samoa
  { name: 'San Marino', code: 3168064 }, // San Marino
  { name: 'São Tomé', code: 2410763 }, // São Tomé and Príncipe
  { name: 'Riyadh', code: 108410 }, // Saudi Arabia
  { name: 'Dakar', code: 2245662 }, // Senegal
  { name: 'Belgrade', code: 792680 }, // Serbia
  { name: 'Victoria', code: 241131 }, // Seychelles
  { name: 'Freetown', code: 2403846 }, // Sierra Leone
  { name: 'Singapore', code: 1880252 }, // Singapore
  { name: 'Bratislava', code: 3060972 }, // Slovakia
  { name: 'Ljubljana', code: 3196359 }, // Slovenia
  { name: 'Honiara', code: 2108502 }, // Solomon Islands
  { name: 'Mogadishu', code: 53654 }, // Somalia
  { name: 'Pretoria', code: 964137 }, // South Africa
  { name: 'Juba', code: 374737 }, // South Sudan
  { name: 'Madrid', code: 3117735 }, // Spain
  { name: 'Colombo', code: 1248991 }, // Sri Lanka
  { name: 'Khartoum', code: 379252 }, // Sudan
  { name: 'Paramaribo', code: 3383330 }, // Suriname
  { name: 'Stockholm', code: 2673730 }, // Sweden
  { name: 'Bern', code: 2658434 }, // Switzerland
  { name: 'Damascus', code: 170654 }, // Syria
  { name: 'Taipei', code: 1668341 }, // Taiwan
  { name: 'Dushanbe', code: 1221874 }, // Tajikistan
  { name: 'Dodoma', code: 160196 }, // Tanzania
  { name: 'Bangkok', code: 1609350 }, // Thailand
  { name: 'Dili', code: 1645457 }, // Timor-Leste
  { name: 'Lomé', code: 2367550 }, // Togo
  { name: "Nuku'alofa", code: 4032402 }, // Tonga
  { name: 'Port of Spain', code: 3573890 }, // Trinidad and Tobago
  { name: 'Tunis', code: 2464470 }, // Tunisia
  { name: 'Ankara', code: 323786 }, // Turkey
  { name: 'Ashgabat', code: 162183 }, // Turkmenistan
  { name: 'Funafuti', code: 2110227 }, // Tuvalu
  { name: 'Kampala', code: 232422 }, // Uganda
  { name: 'Kyiv', code: 703448 }, // Ukraine
  { name: 'Abu Dhabi', code: 292968 }, // United Arab Emirates
  { name: 'London', code: 2643743 }, // United Kingdom
  { name: 'Washington, D.C.', code: 4140963 }, // United States
  { name: 'Montevideo', code: 3441575 }, // Uruguay
  { name: 'Tashkent', code: 1512569 }, // Uzbekistan
  { name: 'Port Vila', code: 2135171 }, // Vanuatu
  { name: 'Vatican City', code: 6691831 }, // Vatican City
  { name: 'Caracas', code: 3646738 }, // Venezuela
  { name: 'Hanoi', code: 1581130 }, // Vietnam
  { name: "Sana'a", code: 71137 }, // Yemen
  { name: 'Lusaka', code: 909137 }, // Zambia
  { name: 'Harare', code: 890299 }, // Zimbabwe
  // --------------------------------------------
  { name: 'Medellín', code: 3674962 },
  { name: 'Cali', code: 3687925 },
  { name: 'Barranquilla', code: 3689147 },
  { name: 'Cartagena', code: 3687238 },
  { name: 'Cúcuta', code: 3685533 },
  { name: 'Bucaramanga', code: 3688465 },
  { name: 'Pereira', code: 3672778 },
  { name: 'Santa Marta', code: 3668605 },
  { name: 'Ibagué', code: 3680656 },
  { name: 'Pasto', code: 3672770 },
  { name: 'Manizales', code: 3675605 },
  { name: 'Neiva', code: 3673899 },
  { name: 'Soledad', code: 3668600 },
  { name: 'Armenia', code: 3688455 },
  { name: 'Villavicencio', code: 3665956 },
  { name: 'Soacha', code: 3667905 },
  { name: 'Valledupar', code: 3666304 },
  { name: 'Montería', code: 3675504 },
  { name: 'Sincelejo', code: 3668438 },
  { name: 'Popayán', code: 3671916 },
  { name: 'Floridablanca', code: 3682462 },
  { name: 'Palmira', code: 3672876 },
  { name: 'Buenaventura', code: 3689140 },
  { name: 'Barrancabermeja', code: 3689801 },
  { name: 'Dosquebradas', code: 3685542 },
  { name: 'Tuluá', code: 3666640 },
  { name: 'Envigado', code: 3682213 },
  { name: 'Cartago', code: 3685539 },
  { name: 'Maicao', code: 3675601 },
  { name: 'Florencia', code: 3681954 },
  { name: 'Girardot', code: 3681952 },
  { name: 'Sogamoso', code: 3665831 },
  { name: 'Tumaco', code: 3666643 },
  { name: 'Magangué', code: 3675602 },
  { name: 'Ipiales', code: 3680830 },
  { name: 'Jamundí', code: 3673278 },
  { name: 'Ciénaga', code: 3685266 },
  { name: 'Yopal', code: 3665686 },
  { name: 'Quibdó', code: 3671116 },
  { name: 'Aguachica', code: 3690654 },
  { name: 'Apartadó', code: 3689205 },
  { name: 'Riohacha', code: 3670745 },
  { name: 'Facatativá', code: 3682353 },
  { name: 'Turbo', code: 3666642 },
  { name: 'Caldas', code: 3686783 },
  { name: 'Chiquinquirá', code: 3689725 },
  { name: 'Fusagasugá', code: 3681883 },
  { name: 'Copacabana', code: 3683867 },
  { name: 'Piedecuesta', code: 3673045 },
  { name: 'Chía', code: 3682473 },
  { name: 'Madrid', code: 3675607 },
  { name: 'Malambo', code: 3674735 },
  { name: 'Buga', code: 3688450 },
  { name: 'Funza', code: 3682358 },
  { name: 'Espinal', code: 3682359 },
  { name: 'Caucasia', code: 3686513 },
  { name: 'Zipaquirá', code: 3665622 },
  { name: 'Tunja', code: 3667305 },
  { name: 'Sabanalarga', code: 3668326 },
  { name: 'Girón', code: 3681916 },
  { name: 'La Dorada', code: 3678650 },
  { name: 'Puerto Tejada', code: 3671778 },
  { name: 'Acacías', code: 3691175 },
  { name: 'Rionegro', code: 3670786 },
  { name: 'Cereté', code: 3685950 },
  { name: 'Curumaní', code: 3683361 },
  { name: 'La Ceja', code: 3676397 },
  { name: 'Villa del Rosario', code: 3666293 },
  { name: 'La Virginia', code: 3677712 },
  { name: 'Santander de Quilichao', code: 3668192 },
  { name: 'Fundación', code: 3682003 },
  { name: 'Arjona', code: 3689314 },
  { name: 'San Juan del Cesar', code: 3668680 },
  { name: 'Sabaneta', code: 3668432 },
  { name: 'La Estrella', code: 3676697 },
  { name: 'Turbaco', code: 3666640 },
  { name: 'Ciénaga', code: 3685266 },
  { name: 'Túquerres', code: 3666710 },
  { name: 'El Banco', code: 3688398 },
  { name: 'Caldono', code: 3686773 },
  { name: 'San Andrés', code: 3668605 },
  { name: 'Candelaria', code: 3687505 },
  { name: 'Ciénega', code: 3685257 },
  { name: 'La Plata', code: 3675835 },
  { name: 'San Gil', code: 3668434 },
  { name: 'Cimitarra', code: 3684224 },
  { name: 'Pitalito', code: 3670741 },
  { name: 'Turmequé', code: 3667034 },
  { name: 'San Juan Nepomuceno', code: 3668717 },
  { name: 'Sonsón', code: 3668542 },
  { name: 'La Unión', code: 3670336 },
  { name: 'Aracataca', code: 3689325 },
  { name: 'Tame', code: 3667202 },
  { name: 'Uribia', code: 3669995 },
  { name: 'Bello', code: 3688649 },
  { name: 'Cota', code: 3683228 },
  { name: 'Pamplona', code: 3672439 },
  { name: 'Tocancipá', code: 3666640 },
  { name: 'Plato', code: 3672086 },
  { name: 'Pacho', code: 3673145 },
  { name: 'San Martín', code: 3667992 },
  { name: 'Santa Lucía', code: 3667826 },
  { name: 'Barrancas', code: 3689228 },
  { name: 'Cota', code: 3683228 },
  { name: 'San Carlos', code: 3669077 },
  { name: 'Ocaña', code: 3673762 },
  { name: 'Circasia', code: 3683657 },
  { name: 'Villeta', code: 3666190 },
  { name: 'Ariguaní', code: 3689246 },
  { name: 'Barrancas', code: 3689228 },
  { name: 'San Carlos', code: 3669077 },
  { name: 'Pacho', code: 3673145 },
  { name: 'Villanueva', code: 3666057 },
  { name: 'Tibú', code: 3666659 },
  { name: 'Silvania', code: 3667236 },
  { name: 'Cúcuta', code: 3685533 },
  { name: 'Anolaima', code: 3689312 },
  { name: 'Chinú', code: 3688002 },
  { name: 'Villamaría', code: 3665941 },
  { name: 'La Jagua de Ibirico', code: 3673142 },
  { name: 'El Zulia', code: 3689143 },
  { name: 'Jamundí', code: 3673278 },
  { name: 'La Unión', code: 3670336 },
  { name: 'Ayapel', code: 3666032 },
  { name: 'Guayabetal', code: 3682250 },
  { name: 'Tocancipá', code: 3666640 },
  { name: 'Cucunubá', code: 3686385 },
  { name: 'La Mesa', code: 3676640 },
  { name: 'Ponedera', code: 3672490 },
  { name: 'Chiquinquirá', code: 3689725 },
  { name: 'Pacho', code: 3673145 },
  { name: 'Guaduas', code: 3682324 },
  { name: 'Istmina', code: 3682210 },
  { name: 'Río Viejo', code: 3670213 },
  { name: 'San Onofre', code: 3669345 },
  { name: 'Puerto Colombia', code: 3671497 },
  { name: 'Suárez', code: 3667345 },
  { name: 'Baranoa', code: 3689615 },
  { name: 'Granada', code: 3688456 },
  { name: 'Santuario', code: 3667928 },
  { name: 'Ciénaga', code: 3685266 },
  { name: 'Puerto Santander', code: 3671482 },
  { name: 'San Pablo', code: 3668623 },
  { name: 'Puerto Gaitán', code: 3671450 },
  { name: 'Ponedera', code: 3672490 },
  { name: 'Turbana', code: 3666640 },
  { name: 'El Retén', code: 3667901 },
  { name: 'Santiago de Tolú', code: 3670216 },
  { name: 'Yotoco', code: 3666622 },
  { name: 'San Vicente del Caguán', code: 3668228 },
  { name: 'La Cruz', code: 3674676 },
  { name: 'Pelaya', code: 3672998 },
  { name: 'La Paz', code: 3673676 },
  { name: 'San Cayetano', code: 3669191 },
  { name: 'Sampués', code: 3668119 },
  { name: 'San Carlos', code: 3669077 },
  { name: 'San Andrés de Sotavento', code: 3668620 },
  { name: 'Sabana de Torres', code: 3668233 },
  { name: 'Tibacuy', code: 3666640 },
  { name: 'San Sebastián de Mariquita', code: 3667893 },
  { name: 'Salamina', code: 3667812 },
  { name: 'San Juan del Cesar', code: 3668680 },
  { name: 'Tunja', code: 3667305 },
  { name: 'Aranzazu', code: 3689169 },
  { name: 'La Pintada', code: 3672467 },
  { name: 'La Cruz', code: 3674676 },
  { name: 'San Gil', code: 3668434 },
  { name: 'Agustín Codazzi', code: 3667085 },
  { name: 'La Paz', code: 3673676 },
  { name: 'El Peñón', code: 3673725 },
  { name: 'San Bernardo del Viento', code: 3668734 },
  { name: 'Tibacuy', code: 3666640 },
  { name: 'El Carmen de Bolívar', code: 3687504 },
  { name: 'San Vicente del Caguán', code: 3668228 },
  { name: 'Cumbal', code: 3685524 },
  { name: 'Guarne', code: 3681898 },
];
