function converting_input_as_array(){
    const fs=require("node:fs")
    const content=fs.readFileSync("./input.txt","UTF-8")
    const a=content.split(/\r?\n/)
   return a
  //  console.log(a)
  }
  function separating_opponent1_from_col1(){
  
    const opp=inputarray.map(word=>word.charAt(0))
            //  console.log(opp)  
              return opp 
   } 
   
   function separating_them_from_col1(){
    
     const your=inputarray.map(word=>word.charAt(2))
              // console.log(your)  
              return your
   }
  
  
   function allocating_points_to_opponent() {
    
    for ( i = 0; i < opponent.length; i++) {
        if (opponent[i] === 'A') {
            opponent[i] = 1;
           var opp1_values=opponent 
        } 
        else if (opp1_values[i] === 'B') {
            opp1_values[i] = 2;
        }
        else if (opp1_values[i] === 'C') {
            opp1_values[i] = 3;
        }
    }return opp1_values
   }
  
   function allocating_points_to_me(){
    
    for (let i = 0; i < them.length; i++) {
        if (them[i] === 'Y') {
            them[i] = 2
            var opp2_values=them  
        } 
        else if (opp2_values[i] === 'X') {
        opp2_values[i] = 1  
        } 
        else if(opp2_values[i]=='Z'){
            opp2_values[i]=3
        }
    }return opp2_values
   }
  
  function play(){
    
     var win=6
     var loss=0
     var draw=3
     var round_res1=0
     var round_res2=0
     var draw_pt=0
      for(let i=0;i<player1.length;i++){
         for (j=0;j<player2.length;j++){         //1=rock
              if(player1[i]!==player2[i]){         //2=paper                                            //3=scissor
                  if(player1[i]==1 && player2[i]==2 || player1[i]==3 && player2[i]==1 || player1[i]==2 && player2[i]==3){   
                     round_res1+=player2[i]+win 
                  }
                  else if(player1[i]==2 && player2[i]==1 || player1[i]==1 && player2[i]==3 || player1[i]==3 && player2[i]==2) {
                       round_res2+=player2[i]+loss     
                  }       
                 }
              else {
                  if(player1[i]==player2[i]){
                       draw_pt+=player2[i]+draw                  
                 }
              }
            }
      }
      console.log(round_res1)
      console.log(round_res2)
      console.log(draw_pt)
      var total=round_res1+round_res2+draw_pt
   return total
  }
  var inputarray=converting_input_as_array()
  var opponent=separating_opponent1_from_col1(inputarray)
  var them=separating_them_from_col1(inputarray)
  var player1=allocating_points_to_opponent(opponent)
  var player2=allocating_points_to_me(them)
  var game=play(player1,player2)
  console.log(game)
  
  