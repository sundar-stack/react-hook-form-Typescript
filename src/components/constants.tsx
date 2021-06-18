export const getDates =(date:number):number[]=>{
    let dates:number[] = []
    for(let i = 0; i < date ; i++){
        dates = [...dates , i + 1 ]
     }
return dates;
} 
 
export const getYears = (year:number):number[]=>{
    let years:number[] = []
    for(let i = 1960; i < year ; i++){
        // console.log(i);
        years = [...years , i ]
      }
      return years;
}

export const months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]

export const heights = [
    "4ft","4ft 01in","4ft 02in","4ft 03in","4ft 04in","4ft 05in","4ft 06in","4ft 07in","4ft 08in","4ft 09in","4ft 010in","4ft 011in",
    "5ft","5ft 01in","5ft 02in","5ft 03in","5ft 04in","5ft 05in","5ft 06in","5ft 07in","5ft 08in","5ft 09in","5ft 010in","5ft 011in",
    "6ft","6ft 01in","6ft 02in","6ft 03in","6ft 04in","6ft 05in","6ft 06in","6ft 07in","6ft 08in","6ft 09in","6ft 010in","6ft 011in",
]

export const postedBy = [
    "Parents","Self","Friend","Sibling","Relatives"
]
