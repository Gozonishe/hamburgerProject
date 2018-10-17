import React, {Component} from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import { Icon } from 'semantic-ui-react'
import './Contacts.css'

const mapState = {center: [61.385704, 47.509668], zoom: 10 };

export default class Contacts extends Component{
    render(){
        return(
        <div className = "contacts">
            <div className = "contacts_map">
            <YMaps>
                <Map state = {mapState}/>
            </YMaps>
            </div>
        <div className = "contacts_detail">

        <h1>Our Contacts</h1>

        <div>
            <ul>
            <li><Icon link name='call' size="big"/>8-800-555-35-35</li>
              <li><Icon link name='mail' size="big"/>andrey.gozon@gmail.com</li>
              <li><Icon link name='instagram' size="big"/>SnowStorm</li>
              <li><Icon link name='vk' size="big"/>snowstorm-vk</li>
              <li><Icon link name='map marker alternate' size="big"/></li>
            </ul>

        </div>
        </div>
        </div>
        )
    }
}