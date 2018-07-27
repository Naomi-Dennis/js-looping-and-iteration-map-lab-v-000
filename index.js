// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map( (ele) => { return ele.toLowerCase() })
}
function nameToAttributes(list){
  return list.map( (ele) => {
    let names = ele.split(' ');
    return {'firstName':names[0], 'lastName': names[1]}
   })
}
function attributesToPhrase(list){
  return list.map( (ele) => {
    let info = ele.split(' is from ')
    return {'name': info[0], 'hometown':info[1]}
  })
}
