export default class DatasPageCircleLinkJson {
    /**
     * @return {
     *  "circle_color": string;  // 円の色
     *  "text": string;          // 表示文字列
     *  "url" string;            // URL
     * }[][]
     */
    get json() {
        return [
            {"row": [
                [{
                    "circle_color": "green",
                    "text": "農林水産省",
                    "url": "/datas/norinsuisan/"
                }],
                [{
                    "circle_color" : "purple",
                    "text": "総務省",
                    "url": "/datas/somu/"
                }],
                [{
                    "circle_color" : "red",
                    "text": "文部科学省",
                    "url": "/datas/monbukagaku/"
                }]
            ]},
            {"row": [
                [{
                    "circle_color": "orange",
                    "text": "厚生労働省",
                    "url": "/datas/koserodo/"
                }],
                [{
                    "circle_color" : "blue",
                    "text": "経済産業省",
                    "url": "/datas/keizaisangyo/"
                }],
                [{
                    "circle_color" : "brown",
                    "text": "国土交通省",
                    "url": "/datas/kokudokotsu/"
                }]
            ]}
        ];
    }
}
