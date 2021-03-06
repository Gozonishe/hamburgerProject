import React, {Component} from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import './signUpPage.css';

export default class SignUp extends Component{
  onRegister = () =>{
    alert('Under Construction!')
  }
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
            {/* <Image src='/manondeck.png' /> */}
            <Grid id='signForm' textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' id='regHead' textAlign='center' >
                   Register your account
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
        
                    <Button color='teal' fluid size='large' onClick={this.onRegister}>
                      Register
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
            </div>
            )
        }
    }