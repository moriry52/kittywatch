const weatherCodeTable = {
    "100": [
        "100.svg",
        "500.svg",
        "100",
        "晴",
        "CLEAR"
    ],
    "101": [
        "101.svg",
        "501.svg",
        "100",
        "晴時々曇",
        "PARTLY CLOUDY"
    ],
    "102": [
        "102.svg",
        "502.svg",
        "300",
        "晴一時雨",
        "CLEAR, OCCASIONAL SCATTERED SHOWERS"
    ],
    "103": [
        "102.svg",
        "502.svg",
        "300",
        "晴時々雨",
        "CLEAR, FREQUENT SCATTERED SHOWERS"
    ],
    "104": [
        "104.svg",
        "504.svg",
        "400",
        "晴一時雪",
        "CLEAR, SNOW FLURRIES"
    ],
    "105": [
        "104.svg",
        "504.svg",
        "400",
        "晴時々雪",
        "CLEAR, FREQUENT SNOW FLURRIES"
    ],
    "106": [
        "102.svg",
        "502.svg",
        "300",
        "晴一時雨か雪",
        "CLEAR, OCCASIONAL SCATTERED SHOWERS OR SNOW FLURRIES"
    ],
    "107": [
        "102.svg",
        "502.svg",
        "300",
        "晴時々雨か雪",
        "CLEAR, FREQUENT SCATTERED SHOWERS OR SNOW FLURRIES"
    ],
    "108": [
        "102.svg",
        "502.svg",
        "300",
        "晴一時雨か雷雨",
        "CLEAR, OCCASIONAL SCATTERED SHOWERS AND / OR THUNDER"
    ],
    "110": [
        "110.svg",
        "510.svg",
        "100",
        "晴後時々曇",
        "CLEAR, PARTLY CLOUDY LATER"
    ],
    "111": [
        "110.svg",
        "510.svg",
        "100",
        "晴後曇",
        "CLEAR, CLOUDY LATER"
    ],
    "112": [
        "112.svg",
        "512.svg",
        "300",
        "晴後一時雨",
        "CLEAR, OCCASIONAL SCATTERED SHOWERS LATER"
    ],
    "113": [
        "112.svg",
        "512.svg",
        "300",
        "晴後時々雨",
        "CLEAR, FREQUENT SCATTERED SHOWERS LATER"
    ],
    "114": [
        "112.svg",
        "512.svg",
        "300",
        "晴後雨",
        "CLEAR, RAIN LATER"
    ],
    "115": [
        "115.svg",
        "515.svg",
        "400",
        "晴後一時雪",
        "CLEAR, OCCASIONAL SNOW FLURRIES LATER"
    ],
    "116": [
        "115.svg",
        "515.svg",
        "400",
        "晴後時々雪",
        "CLEAR, FREQUENT SNOW FLURRIES LATER"
    ],
    "117": [
        "115.svg",
        "515.svg",
        "400",
        "晴後雪",
        "CLEAR, SNOW LATER"
    ],
    "118": [
        "112.svg",
        "512.svg",
        "300",
        "晴後雨か雪",
        "CLEAR, RAIN OR SNOW LATER"
    ],
    "119": [
        "112.svg",
        "512.svg",
        "300",
        "晴後雨か雷雨",
        "CLEAR, RAIN AND / OR THUNDER LATER"
    ],
    "120": [
        "102.svg",
        "502.svg",
        "300",
        "晴朝夕一時雨",
        "OCCASIONAL SCATTERED SHOWERS IN THE MORNING AND EVENING, CLEAR DURING THE DAY"
    ],
    "121": [
        "102.svg",
        "502.svg",
        "300",
        "晴朝の内一時雨",
        "OCCASIONAL SCATTERED SHOWERS IN THE MORNING, CLEAR DURING THE DAY"
    ],
    "122": [
        "112.svg",
        "512.svg",
        "300",
        "晴夕方一時雨",
        "CLEAR, OCCASIONAL SCATTERED SHOWERS IN THE EVENING"
    ],
    "123": [
        "100.svg",
        "500.svg",
        "100",
        "晴山沿い雷雨",
        "CLEAR IN THE PLAINS, RAIN AND THUNDER NEAR MOUTAINOUS AREAS"
    ],
    "124": [
        "100.svg",
        "500.svg",
        "100",
        "晴山沿い雪",
        "CLEAR IN THE PLAINS, SNOW NEAR MOUTAINOUS AREAS"
    ],
    "125": [
        "112.svg",
        "512.svg",
        "300",
        "晴午後は雷雨",
        "CLEAR, RAIN AND THUNDER IN THE AFTERNOON"
    ],
    "126": [
        "112.svg",
        "512.svg",
        "300",
        "晴昼頃から雨",
        "CLEAR, RAIN IN THE AFTERNOON"
    ],
    "127": [
        "112.svg",
        "512.svg",
        "300",
        "晴夕方から雨",
        "CLEAR, RAIN IN THE EVENING"
    ],
    "128": [
        "112.svg",
        "512.svg",
        "300",
        "晴夜は雨",
        "CLEAR, RAIN IN THE NIGHT"
    ],
    "130": [
        "100.svg",
        "500.svg",
        "100",
        "朝の内霧後晴",
        "FOG IN THE MORNING, CLEAR LATER"
    ],
    "131": [
        "100.svg",
        "500.svg",
        "100",
        "晴明け方霧",
        "FOG AROUND DAWN, CLEAR LATER"
    ],
    "132": [
        "101.svg",
        "501.svg",
        "100",
        "晴朝夕曇",
        "CLOUDY IN THE MORNING AND EVENING, CLEAR DURING THE DAY"
    ],
    "140": [
        "102.svg",
        "502.svg",
        "300",
        "晴時々雨で雷を伴う",
        "CLEAR, FREQUENT SCATTERED SHOWERS AND THUNDER"
    ],
    "160": [
        "104.svg",
        "504.svg",
        "400",
        "晴一時雪か雨",
        "CLEAR, SNOW FLURRIES OR OCCASIONAL SCATTERED SHOWERS"
    ],
    "170": [
        "104.svg",
        "504.svg",
        "400",
        "晴時々雪か雨",
        "CLEAR, FREQUENT SNOW FLURRIES OR SCATTERED SHOWERS"
    ],
    "181": [
        "115.svg",
        "515.svg",
        "400",
        "晴後雪か雨",
        "CLEAR, SNOW OR RAIN LATER"
    ],
    "200": [
        "200.svg",
        "200.svg",
        "200",
        "曇",
        "CLOUDY"
    ],
    "201": [
        "201.svg",
        "601.svg",
        "200",
        "曇時々晴",
        "MOSTLY CLOUDY"
    ],
    "202": [
        "202.svg",
        "202.svg",
        "300",
        "曇一時雨",
        "CLOUDY, OCCASIONAL SCATTERED SHOWERS"
    ],
    "203": [
        "202.svg",
        "202.svg",
        "300",
        "曇時々雨",
        "CLOUDY, FREQUENT SCATTERED SHOWERS"
    ],
    "204": [
        "204.svg",
        "204.svg",
        "400",
        "曇一時雪",
        "CLOUDY, OCCASIONAL SNOW FLURRIES"
    ],
    "205": [
        "204.svg",
        "204.svg",
        "400",
        "曇時々雪",
        "CLOUDY FREQUENT SNOW FLURRIES"
    ],
    "206": [
        "202.svg",
        "202.svg",
        "300",
        "曇一時雨か雪",
        "CLOUDY, OCCASIONAL SCATTERED SHOWERS OR SNOW FLURRIES"
    ],
    "207": [
        "202.svg",
        "202.svg",
        "300",
        "曇時々雨か雪",
        "CLOUDY, FREQUENT SCCATERED SHOWERS OR SNOW FLURRIES"
    ],
    "208": [
        "202.svg",
        "202.svg",
        "300",
        "曇一時雨か雷雨",
        "CLOUDY, OCCASIONAL SCATTERED SHOWERS AND / OR THUNDER"
    ],
    "209": [
        "200.svg",
        "200.svg",
        "200",
        "霧",
        "FOG"
    ],
    "210": [
        "210.svg",
        "610.svg",
        "200",
        "曇後時々晴",
        "CLOUDY, PARTLY CLOUDY LATER"
    ],
    "211": [
        "210.svg",
        "610.svg",
        "200",
        "曇後晴",
        "CLOUDY, CLEAR LATER"
    ],
    "212": [
        "212.svg",
        "212.svg",
        "300",
        "曇後一時雨",
        "CLOUDY, OCCASIONAL SCATTERED SHOWERS LATER"
    ],
    "213": [
        "212.svg",
        "212.svg",
        "300",
        "曇後時々雨",
        "CLOUDY, FREQUENT SCATTERED SHOWERS LATER"
    ],
    "214": [
        "212.svg",
        "212.svg",
        "300",
        "曇後雨",
        "CLOUDY, RAIN LATER"
    ],
    "215": [
        "215.svg",
        "215.svg",
        "400",
        "曇後一時雪",
        "CLOUDY, SNOW FLURRIES LATER"
    ],
    "216": [
        "215.svg",
        "215.svg",
        "400",
        "曇後時々雪",
        "CLOUDY, FREQUENT SNOW FLURRIES LATER"
    ],
    "217": [
        "215.svg",
        "215.svg",
        "400",
        "曇後雪",
        "CLOUDY, SNOW LATER"
    ],
    "218": [
        "212.svg",
        "212.svg",
        "300",
        "曇後雨か雪",
        "CLOUDY, RAIN OR SNOW LATER"
    ],
    "219": [
        "212.svg",
        "212.svg",
        "300",
        "曇後雨か雷雨",
        "CLOUDY, RAIN AND / OR THUNDER LATER"
    ],
    "220": [
        "202.svg",
        "202.svg",
        "300",
        "曇朝夕一時雨",
        "OCCASIONAL SCCATERED SHOWERS IN THE MORNING AND EVENING, CLOUDY DURING THE DAY"
    ],
    "221": [
        "202.svg",
        "202.svg",
        "300",
        "曇朝の内一時雨",
        "CLOUDY OCCASIONAL SCCATERED SHOWERS IN THE MORNING"
    ],
    "222": [
        "212.svg",
        "212.svg",
        "300",
        "曇夕方一時雨",
        "CLOUDY, OCCASIONAL SCCATERED SHOWERS IN THE EVENING"
    ],
    "223": [
        "201.svg",
        "601.svg",
        "200",
        "曇日中時々晴",
        "CLOUDY IN THE MORNING AND EVENING, PARTLY CLOUDY DURING THE DAY, "
    ],
    "224": [
        "212.svg",
        "212.svg",
        "300",
        "曇昼頃から雨",
        "CLOUDY, RAIN IN THE AFTERNOON"
    ],
    "225": [
        "212.svg",
        "212.svg",
        "300",
        "曇夕方から雨",
        "CLOUDY, RAIN IN THE EVENING"
    ],
    "226": [
        "212.svg",
        "212.svg",
        "300",
        "曇夜は雨",
        "CLOUDY, RAIN IN THE NIGHT"
    ],
    "228": [
        "215.svg",
        "215.svg",
        "400",
        "曇昼頃から雪",
        "CLOUDY, SNOW IN THE AFTERNOON"
    ],
    "229": [
        "215.svg",
        "215.svg",
        "400",
        "曇夕方から雪",
        "CLOUDY, SNOW IN THE EVENING"
    ],
    "230": [
        "215.svg",
        "215.svg",
        "400",
        "曇夜は雪",
        "CLOUDY, SNOW IN THE NIGHT"
    ],
    "231": [
        "200.svg",
        "200.svg",
        "200",
        "曇海上海岸は霧か霧雨",
        "CLOUDY, FOG OR DRIZZLING ON THE SEA AND NEAR SEASHORE"
    ],
    "240": [
        "202.svg",
        "202.svg",
        "300",
        "曇時々雨で雷を伴う",
        "CLOUDY, FREQUENT SCCATERED SHOWERS AND THUNDER"
    ],
    "250": [
        "204.svg",
        "204.svg",
        "400",
        "曇時々雪で雷を伴う",
        "CLOUDY, FREQUENT SNOW AND THUNDER"
    ],
    "260": [
        "204.svg",
        "204.svg",
        "400",
        "曇一時雪か雨",
        "CLOUDY, SNOW FLURRIES OR OCCASIONAL SCATTERED SHOWERS"
    ],
    "270": [
        "204.svg",
        "204.svg",
        "400",
        "曇時々雪か雨",
        "CLOUDY, FREQUENT SNOW FLURRIES OR SCATTERED SHOWERS"
    ],
    "281": [
        "215.svg",
        "215.svg",
        "400",
        "曇後雪か雨",
        "CLOUDY, SNOW OR RAIN LATER"
    ],
    "300": [
        "300.svg",
        "300.svg",
        "300",
        "雨",
        "RAIN"
    ],
    "301": [
        "301.svg",
        "701.svg",
        "300",
        "雨時々晴",
        "RAIN, PARTLY CLOUDY"
    ],
    "302": [
        "302.svg",
        "302.svg",
        "300",
        "雨時々止む",
        "SHOWERS THROUGHOUT THE DAY"
    ],
    "303": [
        "303.svg",
        "303.svg",
        "400",
        "雨時々雪",
        "RAIN, FREQUENT SNOW FLURRIES"
    ],
    "304": [
        "300.svg",
        "300.svg",
        "300",
        "雨か雪",
        "RAINORSNOW"
    ],
    "306": [
        "300.svg",
        "300.svg",
        "300",
        "大雨",
        "HEAVYRAIN"
    ],
    "308": [
        "308.svg",
        "308.svg",
        "300",
        "雨で暴風を伴う",
        "RAINSTORM"
    ],
    "309": [
        "303.svg",
        "303.svg",
        "400",
        "雨一時雪",
        "RAIN, OCCASIONAL SNOW"
    ],
    "311": [
        "311.svg",
        "711.svg",
        "300",
        "雨後晴",
        "RAIN, CLEAR LATER"
    ],
    "313": [
        "313.svg",
        "313.svg",
        "300",
        "雨後曇",
        "RAIN, CLOUDY LATER"
    ],
    "314": [
        "314.svg",
        "314.svg",
        "400",
        "雨後時々雪",
        "RAIN, FREQUENT SNOW FLURRIES LATER"
    ],
    "315": [
        "314.svg",
        "314.svg",
        "400",
        "雨後雪",
        "RAIN, SNOW LATER"
    ],
    "316": [
        "311.svg",
        "711.svg",
        "300",
        "雨か雪後晴",
        "RAIN OR SNOW, CLEAR LATER"
    ],
    "317": [
        "313.svg",
        "313.svg",
        "300",
        "雨か雪後曇",
        "RAIN OR SNOW, CLOUDY LATER"
    ],
    "320": [
        "311.svg",
        "711.svg",
        "300",
        "朝の内雨後晴",
        "RAIN IN THE MORNING, CLEAR LATER"
    ],
    "321": [
        "313.svg",
        "313.svg",
        "300",
        "朝の内雨後曇",
        "RAIN IN THE MORNING, CLOUDY LATER"
    ],
    "322": [
        "303.svg",
        "303.svg",
        "400",
        "雨朝晩一時雪",
        "OCCASIONAL SNOW IN THE MORNING AND EVENING, RAIN DURING THE DAY"
    ],
    "323": [
        "311.svg",
        "711.svg",
        "300",
        "雨昼頃から晴",
        "RAIN, CLEAR IN THE AFTERNOON"
    ],
    "324": [
        "311.svg",
        "711.svg",
        "300",
        "雨夕方から晴",
        "RAIN, CLEAR IN THE EVENING"
    ],
    "325": [
        "311.svg",
        "711.svg",
        "300",
        "雨夜は晴",
        "RAIN, CLEAR IN THE NIGHT"
    ],
    "326": [
        "314.svg",
        "314.svg",
        "400",
        "雨夕方から雪",
        "RAIN, SNOW IN THE EVENING"
    ],
    "327": [
        "314.svg",
        "314.svg",
        "400",
        "雨夜は雪",
        "RAIN, SNOW IN THE NIGHT"
    ],
    "328": [
        "300.svg",
        "300.svg",
        "300",
        "雨一時強く降る",
        "RAIN, EXPECT OCCASIONAL HEAVY RAINFALL"
    ],
    "329": [
        "300.svg",
        "300.svg",
        "300",
        "雨一時みぞれ",
        "RAIN, OCCASIONAL SLEET"
    ],
    "340": [
        "400.svg",
        "400.svg",
        "400",
        "雪か雨",
        "SNOWORRAIN"
    ],
    "350": [
        "300.svg",
        "300.svg",
        "300",
        "雨で雷を伴う",
        "RAIN AND THUNDER"
    ],
    "361": [
        "411.svg",
        "811.svg",
        "400",
        "雪か雨後晴",
        "SNOW OR RAIN, CLEAR LATER"
    ],
    "371": [
        "413.svg",
        "413.svg",
        "400",
        "雪か雨後曇",
        "SNOW OR RAIN, CLOUDY LATER"
    ],
    "400": [
        "400.svg",
        "400.svg",
        "400",
        "雪",
        "SNOW"
    ],
    "401": [
        "401.svg",
        "801.svg",
        "400",
        "雪時々晴",
        "SNOW, FREQUENT CLEAR"
    ],
    "402": [
        "402.svg",
        "402.svg",
        "400",
        "雪時々止む",
        "SNOWTHROUGHOUT THE DAY"
    ],
    "403": [
        "403.svg",
        "403.svg",
        "400",
        "雪時々雨",
        "SNOW, FREQUENT SCCATERED SHOWERS"
    ],
    "405": [
        "400.svg",
        "400.svg",
        "400",
        "大雪",
        "HEAVYSNOW"
    ],
    "406": [
        "406.svg",
        "406.svg",
        "400",
        "風雪強い",
        "SNOWSTORM"
    ],
    "407": [
        "406.svg",
        "406.svg",
        "400",
        "暴風雪",
        "HEAVYSNOWSTORM"
    ],
    "409": [
        "403.svg",
        "403.svg",
        "400",
        "雪一時雨",
        "SNOW, OCCASIONAL SCCATERED SHOWERS"
    ],
    "411": [
        "411.svg",
        "811.svg",
        "400",
        "雪後晴",
        "SNOW, CLEAR LATER"
    ],
    "413": [
        "413.svg",
        "413.svg",
        "400",
        "雪後曇",
        "SNOW, CLOUDY LATER"
    ],
    "414": [
        "414.svg",
        "414.svg",
        "400",
        "雪後雨",
        "SNOW, RAIN LATER"
    ],
    "420": [
        "411.svg",
        "811.svg",
        "400",
        "朝の内雪後晴",
        "SNOW IN THE MORNING, CLEAR LATER"
    ],
    "421": [
        "413.svg",
        "413.svg",
        "400",
        "朝の内雪後曇",
        "SNOW IN THE MORNING, CLOUDY LATER"
    ],
    "422": [
        "414.svg",
        "414.svg",
        "400",
        "雪昼頃から雨",
        "SNOW, RAIN IN THE AFTERNOON"
    ],
    "423": [
        "414.svg",
        "414.svg",
        "400",
        "雪夕方から雨",
        "SNOW, RAIN IN THE EVENING"
    ],
    "425": [
        "400.svg",
        "400.svg",
        "400",
        "雪一時強く降る",
        "SNOW, EXPECT OCCASIONAL HEAVY SNOWFALL"
    ],
    "426": [
        "400.svg",
        "400.svg",
        "400",
        "雪後みぞれ",
        "SNOW, SLEET LATER"
    ],
    "427": [
        "400.svg",
        "400.svg",
        "400",
        "雪一時みぞれ",
        "SNOW, OCCASIONAL SLEET"
    ],
    "450": [
        "400.svg",
        "400.svg",
        "400",
        "雪で雷を伴う",
        "SNOW AND THUNDER"
    ]
};
const regionCodes = [["011000", "宗谷地方", [["011000", "宗谷地方"]]], ["012000", "上川・留萌地方", [["012010", "上川地方"], ["012020", "留萌地方"]]], ["013000", "網走・北見・紋別地方", [["013010", "網走地方"], ["013020", "北見地方"], ["013030", "紋別地方"]]], ["014030", "十勝地方", [["014030", "十勝地方"]]], ["014100", "釧路・根室地方", [["014010", "根室地方"], ["014020", "釧路地方"]]], ["015000", "胆振・日高地方", [["015010", "胆振地方"], ["015020", "日高地方"]]], ["016000", "石狩・空知・後志地方", [["016010", "石狩地方"], ["016020", "空知地方"], ["016030", "後志地方"]]], ["017000", "渡島・檜山地方", [["017010", "渡島地方"], ["017020", "檜山地方"]]], ["020000", "青森県", [["020010", "津軽"], ["020020", "下北"], ["020030", "三八上北"]]], ["030000", "岩手県", [["030010", "内陸"], ["030020", "沿岸北部"], ["030030", "沿岸南部"]]], ["040000", "宮城県", [["040010", "東部"], ["040020", "西部"]]], ["050000", "秋田県", [["050010", "沿岸"], ["050020", "内陸"]]], ["060000", "山形県", [["060010", "村山"], ["060020", "置賜"], ["060030", "庄内"], ["060040", "最上"]]], ["070000", "福島県", [["070010", "中通り"], ["070020", "浜通り"], ["070030", "会津"]]], ["080000", "茨城県", [["080010", "北部"], ["080020", "南部"]]], ["090000", "栃木県", [["090010", "南部"], ["090020", "北部"]]], ["100000", "群馬県", [["100010", "南部"], ["100020", "北部"]]], ["110000", "埼玉県", [["110010", "南部"], ["110020", "北部"], ["110030", "秩父地方"]]], ["120000", "千葉県", [["120010", "北西部"], ["120020", "北東部"], ["120030", "南部"]]], ["130000", "東京都", [["130010", "東京地方"], ["130020", "伊豆諸島北部"], ["130030", "伊豆諸島南部"], ["130040", "小笠原諸島"]]], ["140000", "神奈川県", [["140010", "東部"], ["140020", "西部"]]], ["150000", "新潟県", [["150010", "下越"], ["150020", "中越"], ["150030", "上越"], ["150040", "佐渡"]]], ["160000", "富山県", [["160010", "東部"], ["160020", "西部"]]], ["170000", "石川県", [["170010", "加賀"], ["170020", "能登"]]], ["180000", "福井県", [["180010", "嶺北"], ["180020", "嶺南"]]], ["190000", "山梨県", [["190010", "中・西部"], ["190020", "東部・富士五湖"]]], ["200000", "長野県", [["200010", "北部"], ["200020", "中部"], ["200030", "南部"]]], ["210000", "岐阜県", [["210010", "美濃地方"], ["210020", "飛騨地方"]]], ["220000", "静岡県", [["220010", "中部"], ["220020", "伊豆"], ["220030", "東部"], ["220040", "西部"]]], ["230000", "愛知県", [["230010", "西部"], ["230020", "東部"]]], ["240000", "三重県", [["240010", "北中部"], ["240020", "南部"]]], ["250000", "滋賀県", [["250010", "南部"], ["250020", "北部"]]], ["260000", "京都府", [["260010", "南部"], ["260020", "北部"]]], ["270000", "大阪府", [["270000", "大阪府"]]], ["280000", "兵庫県", [["280010", "南部"], ["280020", "北部"]]], ["290000", "奈良県", [["290010", "北部"], ["290020", "南部"]]], ["300000", "和歌山県", [["300010", "北部"], ["300020", "南部"]]], ["310000", "鳥取県", [["310010", "東部"], ["310020", "中・西部"]]], ["320000", "島根県", [["320010", "東部"], ["320020", "西部"], ["320030", "隠岐"]]], ["330000", "岡山県", [["330010", "南部"], ["330020", "北部"]]], ["340000", "広島県", [["340010", "南部"], ["340020", "北部"]]], ["350000", "山口県", [["350010", "西部"], ["350020", "中部"], ["350030", "東部"], ["350040", "北部"]]], ["360000", "徳島県", [["360010", "北部"], ["360020", "南部"]]], ["370000", "香川県", [["370000", "香川県"]]], ["380000", "愛媛県", [["380010", "中予"], ["380020", "東予"], ["380030", "南予"]]], ["390000", "高知県", [["390010", "中部"], ["390020", "東部"], ["390030", "西部"]]], ["400000", "福岡県", [["400010", "福岡地方"], ["400020", "北九州地方"], ["400030", "筑豊地方"], ["400040", "筑後地方"]]], ["410000", "佐賀県", [["410010", "南部"], ["410020", "北部"]]], ["420000", "長崎県", [["420010", "南部"], ["420020", "北部"], ["420030", "壱岐・対馬"], ["420040", "五島"]]], ["430000", "熊本県", [["430010", "熊本地方"], ["430020", "阿蘇地方"], ["430030", "天草・芦北地方"], ["430040", "球磨地方"]]], ["440000", "大分県", [["440010", "中部"], ["440020", "北部"], ["440030", "西部"], ["440040", "南部"]]], ["450000", "宮崎県", [["450010", "南部平野部"], ["450020", "北部平野部"], ["450030", "南部山沿い"], ["450040", "北部山沿い"]]], ["460040", "奄美地方", [["460040", "奄美地方"]]], ["460100", "鹿児島県（奄美地方除く）", [["460010", "薩摩地方"], ["460020", "大隅地方"], ["460030", "種子島・屋久島地方"]]], ["471000", "沖縄本島地方", [["471010", "本島中南部"], ["471020", "本島北部"], ["471030", "久米島"]]], ["472000", "大東島地方", [["472000", "大東島地方"]]], ["473000", "宮古島地方", [["473000", "宮古島地方"]]], ["474000", "八重山地方", [["474010", "石垣島地方"], ["474020", "与那国島地方"]]]]