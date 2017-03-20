export default class DatasPageCircleLinkJson {
    /**
     * @return {
     *  "x_axis": number;        // X座標
     *  "y_axis": number;        // Y座標
     *  "radius": number;        // 半径
     *  "circle_color": string;  // 円の色
     *  "text": string;          // 表示文字列
     *  "link_url" string;       // URL
     * }[]
     */
    get json() {
        return [
            {
                "x_axis": 50,
                "y_axis": 50,
                "radius": 50,
                "circle_color": "green",
                "text": "農林水産省",
                "link_url": "/datas/norinsuisan/"
            },
            {
                "x_axis": 180,
                "y_axis": 50,
                "radius": 50,
                "circle_color" : "purple",
                "text": "総務省",
                "link_url": "/datas/somu/"
            },
            {
                "x_axis": 50,
                "y_axis": 180,
                "radius": 50,
                "circle_color" : "red",
                "text": "文部科学省",
                "link_url": "/datas/monbukagaku/"
            }
        ];
    }
}
