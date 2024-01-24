var assert=require('assert')

function strings(str_array){
  const arr=[]
  for(let i=0;i<str_array.length;i++){
      var num=str_array[i].replace(/[^0-9]/g, "")
      arr.push(num)
  }
  // console.log(arr)
   return arr
   
}

function firstnum(array){
    var first_last=[]
    for(i=0;i<array.length;i++){
    var index=array[i]
    first_last.push(parseInt(index[0]+index[index.length-1]))
    }
    // console.log(first_last)
    return first_last
   }
   function adding(my_array){
    var sum=0
    for(let i=0;i<my_array.length;i++){
 
     sum+=my_array[i]
    //   console.log(sum)
   
    } return sum
}

describe("String numbers",function(){
    it("It returns all the digits from the array of strings",function(){
        const result_arr=strings(["s3edf5","ft6v7"])
        assert.deepEqual(result_arr,['35','67'])
    })
    it("it should convert the strings to digits",function(){
        const digits=firstnum(["35","45"])
        assert.deepEqual(digits,[35,45])
    })
    it("it should return the sum of array values",function(){
        const add=adding([34, 22, 46])
        assert.deepEqual(add,102)
    })
})
