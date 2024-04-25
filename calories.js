function readvalues(){
  const fs=require("node:fs")
  const content=fs.readFileSync("./values.js","UTF-8")
   return content
}
function getvalues_as_array(values){
const arr_values=values.split(/\r?\n/)
return arr_values  
}
function get_arr_of_arr(arr_value){    
//   console.log(a)
const final_arr=[]
var sub_arr=[]
const space=''
    for(i=0;i<arr_value.length;i++){
      if(arr_value[i]!==space){
        number=parseInt(arr_value[i])
        sub_arr.push(number)
      }
      else{
        if(sub_arr.length>0){
          final_arr.push(sub_arr)
          sub_arr=[]
        }
       }
     }
if(sub_arr>0){
  final_arr.push(sub_arr) 
}
return final_arr
//  console.log(arr)
}
function sum_of_subarr_values( calory=get_arr_of_arr()){
 //  console.log(calos)
  calories=[]   // to keep the sum of all values in sub_arr
  for(i=0;i<calory.length;i++){
    var sum=0
    for(j=0;j<calory[i].length;j++){
      sum+=calory[i][j]
    }calories.push(sum)
   }return calories
  
}
function finding_greatest_value( array){
const greatest=Math.max(...array)
return greatest
 }
 const values=readvalues()
const arr_values=getvalues_as_array(values)
const final_arr=get_arr_of_arr(arr_values)
const sum_array=sum_of_subarr_values(final_arr)
const greatest_value=finding_greatest_value(sum_array)
console.log(greatest_value)
 
#hiiii
