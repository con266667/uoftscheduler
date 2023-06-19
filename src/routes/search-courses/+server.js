import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export async function GET({ url }) {
    let params = new URLSearchParams(url.search);
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    };

    if (dev) {
        return new Response(JSON.stringify(test_data), init);
    }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
  
    var response = await fetch("https://api.easi.utoronto.ca/ttb/getOptimizedMatchingCourseTitles?" + params.toString, requestOptions)
    var json = JSON.stringify(await response.json());
    return new Response(json, init);
}

const test_data = {
    "payload": {
        "codesAndTitles": [
            {
                "code": "MAT136H1",
                "sectionCode": "Y",
                "name": "Calculus II",
                "description": "this second part of the introductory calculus sequence focuses on integral calculus beginning with the fundamental theorem of calculus, the connection between two seemingly unrelated problems: measuring changing quantities and finding areas of curved shapes. students will develop a deep understanding of the integral, and use it to: unpack equations involving derivatives; to make sense of infinite sums; to write complicated functions as 'infinite polynomials'; and to compute areas, volumes, and totals in applied problems. this course will further develop students' abilities to translate between algebraic, graphical, numerical, and verbal descriptions of mathematics in a variety of applied contexts. this course is a continuation of mat135h1 and will be useful for students interested in learning applied calculus in relation to future studies in economics, life science, and physical and mathematical science programs.",
                "sessions": [
                    "20235"
                ],
                "division": {
                    "code": "ARTSC",
                    "name": "Faculty of Arts and Science"
                },
                "rank": 6
            },
            {
                "code": "MAT136H1",
                "sectionCode": "F",
                "name": "Calculus II",
                "description": "this second part of the introductory calculus sequence focuses on integral calculus beginning with the fundamental theorem of calculus, the connection between two seemingly unrelated problems: measuring changing quantities and finding areas of curved shapes. students will develop a deep understanding of the integral, and use it to: unpack equations involving derivatives; to make sense of infinite sums; to write complicated functions as 'infinite polynomials'; and to compute areas, volumes, and totals in applied problems. this course will further develop students' abilities to translate between algebraic, graphical, numerical, and verbal descriptions of mathematics in a variety of applied contexts. this course is a continuation of mat135h1 and will be useful for students interested in learning applied calculus in relation to future studies in economics, life science, and physical and mathematical science programs.",
                "sessions": [
                    "20235F"
                ],
                "division": {
                    "code": "ARTSC",
                    "name": "Faculty of Arts and Science"
                },
                "rank": 6
            },
            {
                "code": "MAT136H1",
                "sectionCode": "S",
                "name": "Calculus II",
                "description": "this second part of the introductory calculus sequence focuses on integral calculus beginning with the fundamental theorem of calculus, the connection between two seemingly unrelated problems: measuring changing quantities and finding areas of curved shapes. students will develop a deep understanding of the integral, and use it to: unpack equations involving derivatives; to make sense of infinite sums; to write complicated functions as 'infinite polynomials'; and to compute areas, volumes, and totals in applied problems. this course will further develop students' abilities to translate between algebraic, graphical, numerical, and verbal descriptions of mathematics in a variety of applied contexts. this course is a continuation of mat135h1 and will be useful for students interested in learning applied calculus in relation to future studies in economics, life science, and physical and mathematical science programs.",
                "sessions": [
                    "20235S"
                ],
                "division": {
                    "code": "ARTSC",
                    "name": "Faculty of Arts and Science"
                },
                "rank": 6
            },
        ]
    },
    "status": [
        {
            "code": 0,
            "message": "Success"
        }
    ]
}