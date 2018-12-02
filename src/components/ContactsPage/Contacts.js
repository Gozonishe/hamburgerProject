import React, {Component} from 'react';
import YandexMap from './yandexMap';
import { Icon } from 'semantic-ui-react';
import './Contacts.css';

export default class Contacts extends Component{
    render(){
        return(
            
        <div className = "contacts">
            <div className = "map" >
            <YandexMap/>
            </div>
            <div className='contacts_detail'>
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