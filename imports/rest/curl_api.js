import {Restivus} from "meteor/nimble:restivus";
import {HTTP} from "meteor/http";
import setting from "../estat_api_setting.js";

/**
 * 別のサーバにリクエスト流して得たjsonなどをsyonet側で表示するAPI
 */
export default class CurlApi {

	/**
	 * コンストラクタ
	 */
	constructor() {
		this.Api = new Restivus({
			apiPath: "api/",
			prettyJson: true,
		});
	}

	/**
	 * e-statから政府統計コードによるデータ一覧表を取得する
	 * @param {string} statsCode 政府統計コード
	 */
	setStatsListRoute(statsCode) {
		// Maps to: /api/estat/
		this.Api.addRoute("estat", { 
			get: { 
				authRequired: false,
				action: () => {
					try {
						const result = HTTP.call("GET", "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsList", {
							params: {
								"appId": setting.estat_app_id,
								"statsCode": statsCode,
								"limit": 1,
							}
						});
						if (result.data) {
							return result.data;
						}
						return { 
							status: "sussess", 
							data: { 
								message: "Null Data", 
							},
						};
					} catch (e) {
						return { 
							status: "error", 
							data: { 
								message: "Server Exception", 
							},
						}; 
					}
				}, 
			},
		});
	}
}
