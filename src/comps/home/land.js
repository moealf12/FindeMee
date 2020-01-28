import React, { Component } from 'react';
import { Layout,Input,Affix } from 'antd';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import 'rc-texty/assets/index.css';
import { Avatar } from 'antd';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core'
import { Card } from 'antd';
import { Icon,Drawer, Radio } from 'antd';
import CardContent from '@material-ui/core/CardContent';
import ScrollAnim from 'rc-scroll-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { OverPack } from 'rc-scroll-anim';
import Texty from 'rc-texty';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import ReactMapGL, {Marker} from 'react-map-gl';




import './home.css'

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const RadioGroup = Radio.Group;



class Home extends Component {
  state={
    home:null,
    show_input:'show_input',
    head_l1:'rgba(233, 0, 0, 0.0)',
    hide_input:'hide_input',
    search_val:null,
    search_result:null,
    show: true,
    visible: false,
    placement: 'left',
    show_app_bar:'1',
    fade_loader:'0',
    loader_transition:'0.3',
    affter_search_found:'0',
    top: 1,
    bottom: 1,

  }
  switch_home(){
    this.setState({
      home:'rgba(233, 0, 0, 0.4)'
    })
  }
  switch_home_back(){
    this.setState({
      home:''
    })
  }
  openSearch = () => {
    this.setState({ openSearch: false });
  }

  open_input(){
    this.setState({
      'hide_input':'show_input'
    })
  }
  close_input(){
    this.setState({
      'hide_input':'hide_input'
    })
  }


  lookup(){
    this.setState({'fade_loader':'1'})
    fetch(`https://dhub-ai.herokuapp.com/item/advisor/${this.state.search_val}`)
    .then(res=>res.json())
    .then(data=>this.setState({
      search_result:data,
      fade_loader:'0',
      affter_search_found:'1'
    }))
    .then((this.state.search_result != null) ? this.state.search_result.result.map(x=>{
      console.log(x)
    }):'')

  }

  handel_input(event){
    this.setState({
      [event.target.name]:event.target.value
    })
    console.log(this.state.search_val);

  }
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }


  loa(){
    return(
    <>
    <div className="controls"></div>
    <div className="spinner windcatcher" id="windcatcher">
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
      <div className="blade"></div>
    </div>
  </>)
  }


  hide_loa(){
    this.setStat({
      item_loader_state:'none'
    })
    (this.state.search_result != null) ? this.state.search_result.result.map(x=>{
      console.log(x)
    }):console.log('w8')
  }



  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement:'left',
    });
  };


  hide_head(){
    this.setState({show_app_bar:'0','display_head':'none'})
    console.log('hello')
  }
  show_head(){
    this.setState({show_app_bar:'1','display_head':''})
    console.log('hello')
  }





  render() {
    let api_resp =[]
    let reclean_extra = []
    let reclean_jareer = []
    let reclean_sooq = []
    let reclean_noon = []
    const card_result_rev =(item_name,item_price,item_img,from_logo)=>(


  <div className='img_c'>

    <div className='wrap'>

  <Grid container spacing={0}>

        <Grid item xs={2}>

            <div className='img_in_card'>
            <Paper className='img_cont'>


        </Paper>
          </div>


          <div className='info'>
          <Paper style={{'border-radius': '0px','height':'100%','width':'1000px','transition': '0.7s',
          'transform': '0.6s','display':'flex'}}>
          <Divider/>
        <img className='img_cent' src={item_img}/>


      <Container><h5>{item_name}<Divider/><img style={{'padding-top':'3%'}} width='100px' height='100px' src={from_logo} /></h5></Container>

          <Divider/>
        </Paper>
          </div>
        <Divider/>
      <Paper style={{'border-radius':'0px'}} className='price_box'>
        <div className='price_box_wrapper'><h6 style={{'margin-top':'9px'}}>SAR {item_price}</h6><div className='card_buttons'><Button className='add_btn'><Icon size='big' type="plus-square" theme="filled" /></Button></div></div>
      <Divider/>
  </Paper>





      </Grid>
  <Divider/>
    </Grid>

  </div>


  </div>














        )
      let for_noon = []


    return (
      <>
      <div className='statec_bg'>

      <Container>
      <Container>

      <div style={{'fontFamily':'AkzidenzGrotesk'}}>
        <Container >


      <div class="th">
          <h1> <span>ALL IN</span>
        <span> ONE PLACE</span> </h1>



        <Divider/>
      <h4 style={{'fontFamily':'AkzidenzGrotesk','textAlign': 'center','margin-bottom':'200px'}}>Your new favorite Shoping Expirince</h4>

        </div>


      <video style={{'width':'110%','margin-top':''}}   loop autoPlay>
        <source src='https://firebasestorage.googleapis.com/v0/b/projec3-75671.appspot.com/o/prodimg%2FAbstract%20-%2020071.mp4?alt=media&token=d787f2ac-f849-4f71-a27e-36f65ca10a2f' type="video/mp4" />

      </video>



  </Container>


      <AppBar color='inherit'  style={{'background-color': 'rgb(233, 0, 0, 0.0)','border':'4px sloid red','opacity':`${this.state.show_app_bar}`,'transition': '0.5s','display':`${this.state.display_head}`}}>
        <Toolbar variant="dense" className='head_l1'>
        <Container><h4 style={{color:'rgba(0, 0, 0)','font-family':'AkzidenzGrotesk','text-align':'center','padding-top':'3px','fontSize': '60px'}}>Finde Me</h4></Container>
      <Divider/>
    <Container>
      <nav className='nav_1'>
        <ul>
          <li><a href='/regster'> <Button>Regster</Button></a></li>
          <li><Button>Login</Button></li>
        <li><Button type="primary" onClick={this.showDrawer}>
          <Icon type="setting"   /></Button></li>
        </ul>
      </nav>
    </Container>

      </Toolbar>

      <Container><div style={{'align-items':'center'}}>
        <Divider style={{'color':'black'}}/>
      <Toolbar  className='head_l2'>
        <Container >
      <nav className='nav_1'>
        <ul>
      <li><Button>Regster</Button></li>
      <li><Button>Login</Button></li>
      <li><Button>About</Button></li>
    <li><div style={{'padding-left':'100px'}}><div className='show_input'><div className='sr_btn'><Button onClick={this.lookup.bind(this)} onMouseOver={()=>{this.open_input()}}><Icon type="search" /></Button></div><div className={this.state.hide_input}><Input name='search_val' onChange={this.handel_input.bind(this)} style={{'transition':0.5,'fontFamily':'AkzidenzGrotesk','width':'100%','height':'30px','border-radius':'4px','margin-top':'20px'}} placeholder="Basic usage" /></div></div></div></li>
    <li>
    </li>
        </ul>
      </nav>
    </Container>
    </Toolbar>
      </div>
    </Container>

      </AppBar>


  </div>
  </Container>
  <Divider/>
<div style={{'margin-top':'80px'}}>


  <Container>




    <Container>
      <div >
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.2, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        >


      <h1 style={{'fontFamily':'AkzidenzGrotesk','textAlign': 'center'}}>CAUSE WE CARE</h1><br/><h4 style={{'fontFamily':'AkzidenzGrotesk','textAlign': 'center'}}>WE GOT YOU COVER WITH OUR SERVISES</h4>
  </Parallax>
  </div>
    </Container>



    <Divider style={{'width': '50%','margin-left':'25%'}}/>



  <Container>

    <OverPack style={{ overflow: 'hidden', height: 200 }} >
      <TweenOne key="0" animation={{ opacity: 1 }}
          className="code-box-shape"
          style={{ opacity: 0, marginBottom: 10 }}
        >
    <Grid container spacing={0}>

          <Grid item xs>
            <figure className="card-templet "><img src="https://images.unsplash.com/photo-1512101147095-d05249ea9a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1667&q=80" alt="sample93" />
        <figcaption>
          <h3>Salary </h3>
          <p>Make a program that reads a seller's name, his/her fixed salary </p>
        </figcaption><i className="ion-ios-personadd-outline"></i>
        <a href="#"></a>
      </figure>






          </Grid>


          <Grid item xs>
            <figure className="card-templet "><img src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="sample93" />
        <figcaption>
          <h3>Salary </h3>
          <p>Make a program that reads a seller's name, his/her fixed salary </p>
        </figcaption><i className="ion-ios-personadd-outline"></i>
        <a href="#"></a>
      </figure>



          </Grid>

          <Grid item xs>
            <figure className="card-templet "><img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80" alt="sample93" />
        <figcaption>
          <h3>Salary </h3>
          <p>Make a program that reads a seller's name, his/her fixed salary </p>
        </figcaption><i className="ion-ios-personadd-outline"></i>
        <a href="#"></a>
      </figure>

          </Grid>
        </Grid>
      </TweenOne>
      </OverPack>
      <Affix offsetTop={this.state.top}>
        <Parallax
          animation={{ x: 0, opacity:1, playScale: [0.4, 0.9] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        >
        <OverPack className='vid_in_head'  >
        <TweenOne className='code-box-shape' style={{ 'margin-bottom':'13px' }}>
          <video style={{'width':'110%','margin-bottom':'5px'}}   loop autoPlay>
            <source src='https://firebasestorage.googleapis.com/v0/b/projec3-75671.appspot.com/o/prodimg%2FAbstract%20-%2020071.mp4?alt=media&token=d787f2ac-f849-4f71-a27e-36f65ca10a2f' type="video/mp4" />

          </video>
       </TweenOne>
     </OverPack>
   </Parallax>
         </Affix>
         <br />
         <Affix offsetBottom={this.state.bottom}>

         </Affix>


      {
        (this.state.search_result != null) ? api_resp.push(this.state.search_result):console.log('hold for pushing')
      }
      {
        (api_resp != null) ? api_resp.map(x=>{
          let mm_r = x.result
          reclean_extra.push(mm_r.extra)
          reclean_jareer.push(mm_r.jareer)
          reclean_noon.push(mm_r.noon)
          reclean_sooq.push(mm_r.sooq)
        }):console.log('hold for maping')
      }




      <Container style={{alignItems: 'center'}}>


        {
          (this.state.search_result != null) ? this.hide_loa.bind(this):console.log('laoding')
        }
        <div style={{'transition':'0.8s','padding-left':'45%','padding-top':'20%','display':`${this.state.item_loader_state}`,'opacity':`${this.state.fade_loader}`}}>
        <div className="controls"></div>
        <div className="spinner windcatcher" id="windcatcher">
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
        </div>








      </div>



      <div style={{'transition':'0.8s','opacity':`${this.state.affter_search_found}` }}>


          {
            (reclean_sooq!= null) ? reclean_sooq.map(x=>{
              for_noon.push(x['item img'])

              return (
                card_result_rev(x['item name'],x['item price'],x['item img'],'https://cf1.s3.souqcdn.com/public/style/img/en/souqAmazon-logo-v2-X2.png')

              )
            }):console.log('w8 for re clean')
          }





    </div>

    <div style={{'transition':'0.8s','opacity':`${this.state.affter_search_found}` }}>
    {
      (reclean_noon!= null) ? reclean_noon.map(x=>{

        return (
          card_result_rev(x['item name'],x['item price'],for_noon[0],'https://k.nooncdn.com/s/app/2019/noon-bigalog/f79d58566acd74026f180a3a850c1ef750e20a7d/static/images/noon_logo_black_arabic.svg')
        )
      }):console.log('w8 for re clean')
    }
  </div>



    <div style={{'transition':'0.8s','opacity':`${this.state.affter_search_found}` }}>
    {
      (reclean_jareer!= null) ? reclean_jareer.map(x=>{
        console.log(x["itme price"])

        return (
          card_result_rev(x['item name'],x['itme price'],x['item img'],'https://www.jarir.com/skin/frontend/jarir/default/images/svg/jarir.svg')
        )
      }):console.log('w8 for re clean')
    }

  </div>



    <div style={{'transition':'0.8s','opacity':`${this.state.affter_search_found}` }}>
    {
      (reclean_extra != null) ? reclean_extra.map(x=>{
        for_noon.push(x['item img'])

        return (
          card_result_rev(x['item name'],x['item price'],x['item img'],'https://upload.wikimedia.org/wikipedia/ar/thumb/7/7e/Extra_Logo.svg/320px-Extra_Logo.svg.png')
        )
      }):console.log('w8 for re clean')
    }
  </div>































</Container>

</Container>























  </Container>



</div>





</Container>













</div>









  </>












    );
  }

}

export default Home;
