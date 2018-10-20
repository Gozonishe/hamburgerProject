import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export default class SignUp extends Component{
    render(){
        return(
            <div className='sign-up-form'>
               <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' /> Register your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Firstname' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Lastname' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
        
                    <Button color='teal' fluid size='large'>
                      Register
                    </Button>
                  </Segment>
                </Form>
                <Message info={true}>
                  SomeMessage
                </Message>
              </Grid.Column>
            </Grid>
            </div>
            )
        }
    }