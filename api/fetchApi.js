import axios from 'axios'

export async function getChildrenData() {
    return new Promise((resolve, reject) => {
        axios.get(`https://stg-svc.worldvision.ca/donorservice/api/profile/7ef79d2ac8c64a239f92527261ab333b/donor/children/en/`, {
        }).then(res => {
          console.log(res)
          resolve(res);
        }).catch(err => {
          const { message } = err;
          reject(message);
        })
      })
  }