import React, { Component } from 'react';
import { Input, Tooltip, Icon } from 'antd';
import { Layout } from 'antd';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core'
import { Card } from 'antd';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';
import { DatePicker } from 'antd';

import './main.css'



import {
  Form,



  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
   Menu, Dropdown,

  AutoComplete,
} from 'antd';
const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item>
      <Button>Male</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>Female</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>Other</Button>
    </Menu.Item>
  </Menu>
);
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


const dateFormat = 'YYYY/MM/DD';


class Reg extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    fn:'',
    mn:'',
    phone:'',
    username:'',
    email:'',
    password:'',
    dob:'',
    gend:''

  };


  handel_input(event){
    this.setState({
      [event.target.name]:event.target.value
    })
    console.log(this.state.fn);

  }


  onChange_date(date, dateString) {
  console.log(date, dateString);
}










  render() {
    return (
      <>
      <div className='reg_b'>
      <AppBar color='inherit'  style={{'background-color': 'rgb(233, 0, 0, 0.0)','border':'4px sloid red'}}>
        <Toolbar variant="dense" style={{'background-color':'rgba(233, 0, 0, 0.0)'}}>
        <Container><h4 style={{color:'rgba(0, 0, 0)','font-family':'AkzidenzGrotesk','text-align':'center','padding-top':'3px','fontSize': '60px'}}>Finde Me</h4></Container>
      <Divider/>
    <Container>
      <nav className='nav_1'>
        <ul>
          <li><a href='/'> <Button>Home</Button></a></li>
          <li><Button>Login</Button></li>
        </ul>
      </nav>
    </Container>

      </Toolbar>

      <Container><div style={{'align-items':'center'}}>
        <Divider orientation='horizontal' style={{'color':'black'}}/>
      <Toolbar>
        <Container>
      <nav className='nav_1'>
        <ul>
      <li><Button>Regster</Button></li>
      <li><Button>Login</Button></li>
      <li><Button>About</Button></li>
    <li>
    </li>
        </ul>
      </nav>
    </Container>
    </Toolbar>
      </div>
    </Container>

      </AppBar>
      <div style={{'margin-top':'15%'}}>
      <Container>
        <Grid container >

        <Grid item xs={9}>




          <Grid container spacing={3}>

          <Grid item xs={6} sm={3}>
            <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>First name</h3><Input type='text' name='fn' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

          </Grid>
          <Grid item xs={6} sm={3}>
            <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Middle name</h3><Input name='mn' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

          </Grid>
          <Grid item xs={6} sm={3}>
            <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Phone</h3><Input name='phone' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

          </Grid>
        </Grid>
        <Grid container spacing={3}>

        <Grid item xs={6} sm={3}>
          <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>User Name</h3><Input name='username' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Email</h3><Input name='email' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Password</h3><Input type='password' name='password' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

        </Grid>
      </Grid>
      <Grid container spacing={3}>

      <Grid item xs={6} sm={3}>
        <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>D.O.B</h3><DatePicker onChange={this.onChange_date} />

      </Grid>
      <Grid item xs={6} sm={3}>
        <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Gender</h3>
      <Dropdown style={{
          'width':'20px'
        }}  overlay={menu}>
        <Button style={{'width':'80%','border':' 1px solid gray'}}>choice</Button>
        </Dropdown>

      </Grid>
      <Grid item xs={6} sm={3}>
        <h3 style={{'fontFamily':'AkzidenzGrotesk','height':'50px'}}>Contry</h3><Input name='contry' onChange={this.handel_input.bind(this)} style={{'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'0px'}} placeholder="Basic usage" />

      </Grid>
      <Grid container spacing={3}>

      <Grid item xs={6} sm={3}>
        <Button>JOIN US</Button>

      </Grid>
    </Grid>
  </Grid>

        </Grid>



        <Grid item xs={3}>
          <h1 style={{'fontFamily':'AkzidenzGrotesk','textAlign': 'center'}}>Finde ME PARTNER</h1>
        <Divider/>
        </Grid>

      </Grid>
      </Container>
    </div>
  </div>


      </>
    );
  }

}

export default Reg;
