const sensorAddress = 'http://192.168.86.218/'

export async function canIGo(){
  return fetch(`${sensorAddress}/occupied`, {
    method: 'GET',
  })
  .then((response) => { return response.json()})
  .then((responseJson) => {return responseJson.return_value});
}