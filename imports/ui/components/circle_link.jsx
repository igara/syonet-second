import React, {Component, PropTypes} from "react";
import * as d3 from "d3";
import {Link} from "react-router";
import DatasPageCircleLinkJson from "../../json/datas_page_circle_link_json.js";

export default class CircleLink extends Component {

    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        const circle_link = new DatasPageCircleLinkJson();
        this.json = circle_link.json;
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<svg className="circle_link_svg">
    {this.json.map((object, index) => {
        return <Link className={"circle_link_" + index} key={index} to={object[0].url} />;
    })};
</svg>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
        this.setAdjustment();
        this.setAddResizeEvent();
        this.createCircleLink();
    }

    /**
     * 円状のリンクを作成する
     */
    createCircleLink() {
        this.json.map((object, index) => {
            // 円状
            this.createCircleForCreateCircleLink(index);
            // テキスト
            this.createTextForCreateCircleLink(index);
        });
    }

    /**
     * 円形を生成する
     */
    createCircleForCreateCircleLink(index) {
        const d3$svg = d3.select(".circle_link_" + index);
        const circles = d3$svg.selectAll("circle")
        .data(this.json[index])
        .enter()
        .append("circle");

        const circle_attributes = circles
        /**
         * X座標指定
         * @param this.json[{number}] d
         * @return {number} d.x_axis // X座標
         */
        .attr("cx",(d) => {
            return d.x_axis;
        })
        /**
         * Y座標指定
         * @param this.json[{number}] d
         * @return {number} d.y_axis // Y座標
         */
        .attr("cy",(d) => {
            return d.y_axis;
        })
        /**
         * 円の大きさ指定
         * @param this.json[{number}] d
         * @return {number} d.radius // 半径
         */
        .attr("r",(d) => {
            return d.radius;
        })
        /**
         * 色指定
         * @param this.json[{number}] d
         * @return {number} d.circle_color // 色
         */
        .style("fill",(d) => {
            return d.circle_color;
        });
    }

    /**
     * テキスト文字を生成する
     */
    createTextForCreateCircleLink(index) {
        const d3$svg = d3.select(".circle_link_" + index);
        const text = d3$svg.selectAll("text")
        .data(this.json[index])
        .enter()
        .append("text");
    
        const text_attributes = text
        /**
         * X座標指定
         * @param this.json[{number}] d
         * @return {number} d.x_axis // X座標
         */
        .attr("x",(d) => {
            return d.x_axis;
        })
        /**
         * Y座標指定
         * @param this.json[{number}] d
         * @return {number} d.y_axis // Y座標
         */
        .attr("y",(d) => {
            return d.y_axis;
        })
        /**
         * 表示文字列指定
         * @param this.json[{number}] d
         * @return {string} d.text // 表示文字列
         */
        .text((d) => {
            return d.text;
        })
        /**
         * 文字の大きさ指定
         * @param {number} 文字サイズ数[px] 
         */
        .attr("font-size", 10)
        /**
         * 文字の配置指定
         * @param {string} 文字の配置 
         */
        .style("text-anchor", "middle")
        /**
         * 文字の色指定
         * @param this.json[{number}] d
         * @return {string} "white"
         */
        .style("fill",(d) => {
            return "white";
        });
    }

    /**
     * When Window Resize Event
     */
    setAddResizeEvent() {
        window.onresize = () => {
            this.setAdjustment();
        };
    }
    setAdjustment() {
        this.setAdjustmentHeight();
        this.setAdjustmentWidth();
    }

    /**
     * 横調整を行う
     */
    setAdjustmentWidth() {
        const body_content_width = document.body.clientWidth;
        const $svg_content = document.querySelector(".circle_link_svg");
        // ヘッダーフッターの調整を行う
        $svg_content.style.width = body_content_width + "px";
    }
    /**
     * 高さ調整を行う
     */
    setAdjustmentHeight() {
        const body_content_height = document.body.clientHeight - 80;
        const $svg_content = document.querySelector(".circle_link_svg");
        // ヘッダーフッターの調整を行う
        $svg_content.style.height = body_content_height + "px";
    }
}
