function input(){
    const fs=require("node:fs")
    const content=fs.readFileSync("./input.txt","UTF-8")
    const a=content.split(/\r?\n/)
   return a
  //  console.log(a)
  }input()
  function opp_array(){
    const n=input()
    const opp=n.map(word=>word.charAt(0))
            //  console.log(opp)  
              return opp 
   } opp_array()
   
   function them_array(){
     const n=input()
     const your=n.map(word=>word.charAt(2))
              // console.log(your)  
              return your
   }them_array()
  
  
   function opponent_values() {
    const opp_opts = opp_array();
    for ( i = 0; i < opp_opts.length; i++) {
        if (opp_opts[i] === 'A') {
            opp_opts[i] = 1;
           var opp1_values=opp_opts 
        } 
        else if (opp1_values[i] === 'B') {
            opp1_values[i] = 2;
        }
        else if (opp1_values[i] === 'C') {
            opp1_values[i] = 3;
        }
    }return opp1_values
   }opponent_values()
  
   function me_values(){
    const your_opts=them_array()
    for (let i = 0; i < your_opts.length; i++) {
        if (your_opts[i] === 'Y') {
            your_opts[i] = 2
            var opp2_values=your_opts  
        } 
        else if (opp2_values[i] === 'X') {
        opp2_values[i] = 1  
        } 
        else if(opp2_values[i]=='Z'){
            opp2_values[i]=3
        }
    }return opp2_values
   }me_values()
  
  function game(){
      var ply1=opponent_values()
      var ply2=me_values()
      var win=6
      var loss=0
      var draw=3
     var round_res1=0
     var round_res2=0
     var draw_pt=0
      for(let i=0;i<ply1.length;i++){
         for (j=0;j<ply2.length;j++){         //1=rock
              if(ply1[i]!==ply2[i]){         //2=paper
                                             //3=scissor
                  if(ply1[i]==1 && ply2[i]==2 || ply1[i]==3 && ply2[i]==1 || ply1[i]==2 && ply2[i]==3){   
                     round_res1+=ply2[i]+win 
                  }
                  else if(ply1[i]==2 && ply2[i]==1 || ply1[i]==1 && ply2[i]==3 || ply1[i]==3 && ply2[i]==2) {
                       round_res2+=ply2[i]+loss     
                  }       
                 }
              else {
                  if(ply1[i]==ply2[i]){
                       draw_pt+=ply2[i]+draw
                 }
              }
            }
      }
      var total=round_res1+round_res2+draw_pt
      console.log(round_res1)
      console.log(round_res2)
      console.log(draw_pt)
      console.log(total)
  }game()
  
  