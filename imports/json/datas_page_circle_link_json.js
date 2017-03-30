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
					"text": "e-stat",
					"url": "/datas/estat/"
				}],
				[{
					"circle_color" : "purple",
					"text": "作成中",
					"url": "/datas/"
				}],
				[{
					"circle_color" : "red",
					"text": "作成中",
					"url": "/datas/"
				}]
			]},
			{"row": [
				[{
					"circle_color": "orange",
					"text": "作成中",
					"url": "/datas/"
				}],
				[{
					"circle_color" : "blue",
					"text": "作成中",
					"url": "/datas/"
				}],
				[{
					"circle_color" : "brown",
					"text": "作成中",
					"url": "/datas/"
				}]
			]}
		];
	}
}
