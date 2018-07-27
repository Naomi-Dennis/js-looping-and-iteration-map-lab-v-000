// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map( (ele) => { return ele.toLowerCase() })
}
function nameToAttributes(list){
  return list.map( (ele) => {
    let names = ele.split(' ');
    returnn {'firstName':names[0], 'lastName': names[1]}
   })
}
