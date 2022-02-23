const codes = [
    {
        id:1,
        category:"html",
        title:"javascript map function",
        desc:"map is a keyword to access object one by one",
        code:` <div className="cards">
        <img src={img} alt="" style={{width:"100%",height:"40vh"}} />
        <h1 style={{fontSize:30,fontWeight:"normal",letterSpacing:2,lineHeight:2}}>{title}?</h1>
        <p style={{fontSize:15,margin:"10px",fontWeight:"normal",textTransform:"capitalize"}}>{desc}</p>
        <Link to="https://github.com/krishtechn/website-using-php" style={{outline:"none",border:"2px solid black",padding:"0.3rem 2rem",borderRadius:"30px"}}>source code</Link>
    </div>`,
    },
    {
        id:1,
        title:"React native tutorial",
        desc:"map is a keyword to access object one by one",
        code:` import React from "react";
        import { View,Text,StyleSheet, TextInput, ScrollView,Image } from "react-native";
        
        const FirstPage = ()=>{
            const text = "hello world hello world";
          
          const logo = {
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          width: 100,
          height: 100,
          };
        return (
          <>
            <View>
        <Text style={{color:'red',backgroundColor:'orange',borderBottomRightRadius:10,borderBottomLeftRadius:10,textAlign:'center',marginBottom:9,padding:34,fontSize:30}}>{text}</Text>
         </View>
        <ScrollView>
         <ScrollView style={{padding:10,display:"flex",textAlign:'center',color:'red',backgroundColor:'#000',textAlign:'center',shadowColor:'black',}}>
             <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                 <View style={{width:300,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                     <Image source={logo} style={{marginTop:30}} />
                     <Image source={logo} style={{marginTop:30}} />
                 </View>
                 <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:70}}>Hello world</Text>
             </View>
               <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                 <Image source={logo} style={{marginTop:30,}} />
                 <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
             </View>     
             <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Image source={logo} style={{marginTop:30,}} />
                 <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
             </View>  
                <View style={{backgroundColor:'#f1f1f1',marginTop:30,marginBottom:100,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Image source={logo} style={{marginTop:30,}} />
                 <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
             </View>
        </ScrollView>    
        </ScrollView>
        </>
        );
        }
          
        export default FirstPage`,
    },
    {
        id:1,
        title:"javascript map function",
        desc:"map is a keyword to access object one by one",
        code:` <div className="cards">
        <img src={img} alt="" style={{width:"100%",height:"40vh"}} />
        <h1 style={{fontSize:30,fontWeight:"normal",letterSpacing:2,lineHeight:2}}>{title}?</h1>
        <p style={{fontSize:15,margin:"10px",fontWeight:"normal",textTransform:"capitalize"}}>{desc}</p>
        <Link to="https://github.com/krishtechn/website-using-php" style={{outline:"none",border:"2px solid black",padding:"0.3rem 2rem",borderRadius:"30px"}}>source code</Link>
    </div>`,
    },
    {
        id:1,
        title:"javascript map function",
        desc:"map is a keyword to access object one by one",
        code:` <div className="cards">
        <img src={img} alt="" style={{width:"100%",height:"40vh"}} />
        <h1 style={{fontSize:30,fontWeight:"normal",letterSpacing:2,lineHeight:2}}>{title}?</h1>
        <p style={{fontSize:15,margin:"10px",fontWeight:"normal",textTransform:"capitalize"}}>{desc}</p>
        <Link to="https://github.com/krishtechn/website-using-php" style={{outline:"none",border:"2px solid black",padding:"0.3rem 2rem",borderRadius:"30px"}}>source code</Link>
    </div>`,
    },
    {
        id:1,
        title:"CSS Scrollbar Selectors",
        desc:`You can use the following pseudo-elements to customize various parts of the scrollbar for webkit browsers:

        ::-webkit-scrollbar — the entire scrollbar.
        ::-webkit-scrollbar-button — the buttons on the scrollbar (arrows pointing upwards and downwards that scroll one line at a time).
        ::-webkit-scrollbar-thumb — the draggable scrolling handle.
        ::-webkit-scrollbar-track — the track (progress bar) of the scrollbar, where there is a gray bar on top of a white bar.
        ::-webkit-scrollbar-track-piece — the part of the track (progress bar) not covered by the handle.
        ::-webkit-scrollbar-corner — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet This is often the bottom-right corner of the browser window.
        ::-webkit-resizer — the draggable resizing handle that appears at the bottom corner of some elements.`,
        code:`.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
            display: block;
            width: 10em;
            overflow: auto;
            height: 2em;
          }
          
          .invisible-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Demonstrate a "mostly customized" scrollbar
           * (won't be visible otherwise if width/height is specified) */
          .mostly-customized-scrollbar::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background-color: #aaa; /* or add it to the track */
          }
          
          /* Add a thumb */
          .mostly-customized-scrollbar::-webkit-scrollbar-thumb {
              background: #000;
          }
          `,
    }

];


export default codes;