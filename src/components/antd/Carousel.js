import {Card, Carousel} from 'antd';
import React from "react";
import {relic_1} from "../../assets/img";

export default class CarouselTest extends React.Component {

    onChange = (a, b, c) => {
        console.log(a, b, c);
    };

    render() {
        return (
            <Card bordered={false} style={{height: '300px', width: '300px'}}>
                <Carousel afterChange={this.onChange} autoplay>
                    <img alt='' src={relic_1}/>
                    <img alt='' src={relic_1}/>
                    <img alt='' src={relic_1}/>
                    <img alt='' src={relic_1}/>
                </Carousel>
            </Card>

        )
    }
}
