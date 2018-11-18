import React, {Component} from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import { Icon } from 'semantic-ui-react'
import './Contacts.css'

const mapState = {center: [53.714734, 91.422927], zoom: 18 };

export default class Contacts extends Component{
    render(){
        return(
        <div className = "contacts">
            <div className = "contacts_map">
            <YMaps >
                <Map state = {mapState}/>
            </YMaps>
            </div>
        <div>
            <ul>
            <li>Our Contacts:</li><br/>
            <li><Icon link name='call' size="big"/>8-800-555-35-35</li>
              <li><Icon link name='mail' size="big"/>andrey.gozon@gmail.com</li>
              <li><Icon link name='instagram' size="big"/>SnowStorm</li>
              <li><Icon link name='vk' size="big"/>snowstorm-vk</li>
              <li><Icon link name='map marker alternate' size="big"/>Andrey Travin, Pushkin Street, Kolotushkin 205, Los Angeles</li>
            </ul>

        </div>
        </div>
        )
    }
}