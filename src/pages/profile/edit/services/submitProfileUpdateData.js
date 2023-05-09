import axios from "axios";


async function ProfileData(values, token, setNavigationUrl, traderImage){


    let profileUrl = 'http://127.0.0.1:8000/trader-update';

    const headers = {
        'Authorization': 'Bearer ' + token
        }

    const formData = new FormData();
    formData.append('picture', traderImage);
    formData.append('name', values.name);
    formData.append('mobile_number', values.mobile_number);


    let profileUpdateResponse = await axios.patch(profileUrl, formData, { headers: headers})

    console.log(profileUpdateResponse.status);

    if (profileUpdateResponse.status === 200) {
        setNavigationUrl("/profile");
    }
    else{
         values.name='';
         values.mobile_number='';
         throw new Error('Invalid credentials');
    }
}

export default ProfileData;