import { UserIdContext } from '../App'

class ServicesService {
  static getServices(token, callback) {
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let url = "https://miq-db-12.lvn.broadcom.net/api/services?expand=resources"

    let userId = UserIdContext.Provider
    if (userId && userId.length !== "undefined" && userId.length > 0) {
      url = url + "&filter[]=evm_owner_id=" + userId
    }

    console.log("url: " + url)

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        callback(result)
      })
      .catch(error => console.log('error', error));
  }
}

export default ServicesService