
import axios from 'axios'
export default async function submitUserData(data) {
    //let url = '/api/submitform';
    let url = 'https://formspree.io/f/xrgjpgbe';
    console.log(url);
    const res = await axios.post(url, data)
        .catch(function (error) {
            console.log(error);
        });
    console.log(res);

    return res;
}