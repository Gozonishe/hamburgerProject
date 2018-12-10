import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component{
    render(){
        return(
          <div id='login-background'>
            <div className='login-form'>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            {/* <Image id='imgLogo' src='/manondeck.png' /> */}
            <Grid id='loginForm' textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header id='logIn'as='h2' textAlign='center'>
                   Log in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
        
                    <Button color='teal' fluid size='large'>
                      Login
                    </Button><br/>
                    <Button color='teal' fluid size='large' href='/admin'>
                      Admin
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <Link to='/signup'>Register</Link>
                </Message>
              </Grid.Column>
            </Grid>
        </div></div>
            )
        }
    }