export const allocationUtil = (arr) => {
    if(arr != null && arr.length > 0){
    let _item = arr.filter(i => isNaN(i.val) === false);  
    let _temp = _item.reduce((total,item) => {
        return  total+parseInt(item.val)
    },0); 

    return _temp;
    }

};

export const filterItems = (arr) => {

    return arr.filter(e => e.val !== undefined &&  e.val !== '' && e.val > 0);

}