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
<div>
            {this.json.map((row, row_index) => {
                return (
    <div key={row_index}>
                    {row.row.map((object, object_index) => {
                        return (
        <svg className="circle_link_svg" key={object_index}>
            <Link className={"circle_link_" + ((row_index * 3) + object_index)} to={object[0].url} />
        </svg>
                        );
                    })}
    </div>
                );
            })}
</div>
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
        let index = 0;
        this.json.map((row, row_index) => {
            row.row.map((object, object_index) => {
                const index = ((row_index * 3) + object_index);
                // 円状
                this.createCircleForCreateCircleLink(index, object);
                // テキスト
                this.createTextForCreateCircleLink(index, object);
            });
        });
    }

    /**
     * 円形を生成する
     * @param {number} index
     * @param this.json[{number}] json
     */
    createCircleForCreateCircleLink(index, json) {
        const d3$svg = d3.select(".circle_link_" + index);
        const circles = d3$svg.selectAll("circle")
        .data(json)
        .enter()
        .append("circle");

        const body_content_width = document.body.clientWidth;
        const adjustment_size = body_content_width / 3 / 2;

        const circle_attributes = circles
        /**
         * X座標指定
         * @param this.json[{number}] d
         * @return {number} adjustment_size // X座標
         */
        .attr("cx",(d) => {
            return adjustment_size;
        })
        /**
         * Y座標指定
         * @param this.json[{number}] d
         * @return {number} adjustment_size // Y座標
         */
        .attr("cy",(d) => {
            return adjustment_size;
        })
        /**
         * 円の大きさ指定
         * @param this.json[{number}] d
         * @return {number} adjustment_size // 半径
         */
        .attr("r",(d) => {
            return adjustment_size;
        })
        /**
         * クラス指定
         * @param this.json[{number}] d
         * @return {string} // クラス名
         */
        .attr("class",(d) => {
            return "d3_circles_link";
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
     * @param {number} index
     * @param this.json[{number}] json
     */
    createTextForCreateCircleLink(index, json) {
        const d3$svg = d3.select(".circle_link_" + index);
        const text = d3$svg.selectAll("text")
        .data(json)
        .enter()
        .append("text");

        const body_content_width = document.body.clientWidth;
        const adjustment_size = body_content_width / 3 / 2;

        const text_attributes = text
        /**
         * X座標指定
         * @param this.json[{number}] d
         * @return {number} adjustment_size // X座標
         */
        .attr("x",(d) => {
            return adjustment_size;
        })
        /**
         * Y座標指定
         * @param this.json[{number}] d
         * @return {number} adjustment_size // Y座標
         */
        .attr("y",(d) => {
            return adjustment_size;
        })
        /**
         * クラス指定
         * @param this.json[{number}] d
         * @return {string} // クラス名
         */
        .attr("class",(d) => {
            return "d3_circles_text";
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

    /**
     * 大きさ調整を行う
     */
    setAdjustment() {
        const body_content_width = document.body.clientWidth;
        const svg_size = body_content_width / 3;
        const circle_size = svg_size / 2;
        const text_size = circle_size;

        const $svg_content = document.querySelectorAll(".circle_link_svg");

        $svg_content.forEach((element) => {
            element.style.width = svg_size + "px";
            element.style.height = svg_size + "px";
        }, this);
        const $circle = document.querySelectorAll(".d3_circles_link");
        $circle.forEach((element) => {
            element.setAttribute("cx", circle_size);
            element.setAttribute("cy", circle_size);
            element.setAttribute("r", circle_size);
        }, this);
        const $text = document.querySelectorAll(".d3_circles_text");
        $text.forEach((element) => {
            element.setAttribute("x", text_size);
            element.setAttribute("y", text_size);
        }, this);
    }
}
