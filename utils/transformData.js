export const transformData = (data) =>{
    console.log(data)
    const items =[];
    Object.keys(data).forEach(key =>items.push({id:key,...data[key]}))
    return items;
}