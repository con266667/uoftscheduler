import { error } from '@sveltejs/kit';

export async function POST({ request }) {
  
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-Type", "application/json");

    var requestJson = await request.json()

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(requestJson),
        redirect: 'follow'
    };
    
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    };
  
    var response = await fetch("https://api.easi.utoronto.ca/ttb/getPageableCourses", requestOptions)
    var json = JSON.stringify(await response.json());
    return new Response(json, init);
}