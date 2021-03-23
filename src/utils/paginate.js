import _ from 'lodash';

export function paginate(items,pageNumber,pageSize)
{
    // console.log(items.splice(0)); 
    const startIndex=(pageNumber-1)*pageSize;  // pageNo:2   (2-1)*4=4 so 0,1,2,3 will be on first page while items starting from 4 will be on second page
    // const x=_(items).splice(startIndex).take(pageSize).value(); //.value changes lodash object into regular array
     
    return items.slice(startIndex,startIndex+pageSize); 
}