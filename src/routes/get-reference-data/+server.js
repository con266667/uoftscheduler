import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export async function GET({ url }) {
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    };

    // if (dev) {
    //     return new Response(JSON.stringify(test_data), init);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
  
    var response = await fetch("https://api.easi.utoronto.ca/ttb/reference-data", requestOptions)
    var json = JSON.stringify(await response.json());
    return new Response(json, init);
}

const test_data = {
    "payload": {
        "currentSessions": [
            {
                "label": "Summer 2023",
                "value": "Summer",
                "selected": false,
                "header": true,
                "group": "Summer-20235",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Summer First Sub-Session 2023 (F)",
                "value": "20235F",
                "selected": false,
                "header": false,
                "group": "Summer-20235",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Summer Second Sub-Session 2023 (S)",
                "value": "20235S",
                "selected": false,
                "header": false,
                "group": "Summer-20235",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Summer Full Session 2023 (Y)",
                "value": "20235",
                "selected": false,
                "header": false,
                "group": "Summer-20235",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Fall-Winter 2023-2024",
                "value": "Fall-Winter",
                "selected": false,
                "header": true,
                "group": "FallWinter-20239-20241",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Fall 2023 (F)",
                "value": "20239",
                "selected": false,
                "header": false,
                "group": "FallWinter-20239-20241",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Winter 2024  (S)",
                "value": "20241",
                "selected": false,
                "header": false,
                "group": "FallWinter-20239-20241",
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Fall-Winter 2023-2024 (Y)",
                "value": "20239-20241",
                "selected": false,
                "header": false,
                "group": "FallWinter-20239-20241",
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "divisions": [
            {
                "label": "Faculty of Applied Science & Engineering",
                "value": "APSC",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Faculty of Arts and Science",
                "value": "ARTSC",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Faculty of Kinesiology and Physical Education",
                "value": "FPEH",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Faculty of Music",
                "value": "MUSIC",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "John H. Daniels Faculty of Architecture, Landscape, & Design",
                "value": "ARCLA",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "University of Toronto Mississauga",
                "value": "ERIN",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "University of Toronto Scarborough",
                "value": "SCAR",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "campuses": [
            {
                "label": "Scarborough",
                "value": "Scarborough",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Mississauga",
                "value": "University of Toronto at Mississauga",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "St. George",
                "value": "St. George",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "requirements": [
            {
                "label": "Faculty of Applied Science & Engineering (ELECTIVE)",
                "value": "APSC$ELECTIVE",
                "selected": false,
                "header": true,
                "group": "APSC$ELECTIVE",
                "metadata": {
                    "name": "APSC",
                    "type": "ELECTIVE"
                }
            },
            {
                "label": "Complementary Studies",
                "value": "CS",
                "selected": false,
                "header": false,
                "group": "APSC$ELECTIVE",
                "metadata": {
                    "name": "APSC",
                    "type": "ELECTIVE"
                }
            },
            {
                "label": "Humanities & Social Sciences",
                "value": "HSS",
                "selected": false,
                "header": false,
                "group": "APSC$ELECTIVE",
                "metadata": {
                    "name": "APSC",
                    "type": "ELECTIVE"
                }
            },
            {
                "label": "APSc-Natural Science",
                "value": "NSC",
                "selected": false,
                "header": false,
                "group": "APSC$ELECTIVE",
                "metadata": {
                    "name": "APSC",
                    "type": "ELECTIVE"
                }
            },
            {
                "label": "Natural Sciences",
                "value": "NatSci",
                "selected": false,
                "header": false,
                "group": "APSC$ELECTIVE",
                "metadata": {
                    "name": "APSC",
                    "type": "ELECTIVE"
                }
            },
            {
                "label": "University of Toronto Mississauga (DISTRIBUTION)",
                "value": "ERIN$DISTRIBUTION",
                "selected": false,
                "header": true,
                "group": "ERIN$DISTRIBUTION",
                "metadata": {
                    "name": "ERIN",
                    "type": "DISTRIBUTION"
                }
            },
            {
                "label": "Science",
                "value": "Sci",
                "selected": false,
                "header": false,
                "group": "ERIN$DISTRIBUTION",
                "metadata": {
                    "name": "ERIN",
                    "type": "DISTRIBUTION"
                }
            },
            {
                "label": "Social Science",
                "value": "SSc",
                "selected": false,
                "header": false,
                "group": "ERIN$DISTRIBUTION",
                "metadata": {
                    "name": "ERIN",
                    "type": "DISTRIBUTION"
                }
            },
            {
                "label": "Humanities",
                "value": "Hum",
                "selected": false,
                "header": false,
                "group": "ERIN$DISTRIBUTION",
                "metadata": {
                    "name": "ERIN",
                    "type": "DISTRIBUTION"
                }
            },
            {
                "label": "University of Toronto Scarborough (BREADTH)",
                "value": "SCAR$BREADTH",
                "selected": false,
                "header": true,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "Quantitative Reasoning",
                "value": "Quant",
                "selected": false,
                "header": false,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "Arts, Literature & Language",
                "value": "Arts",
                "selected": false,
                "header": false,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "History, Philosophy & Cultural Studies",
                "value": "HisPhil",
                "selected": false,
                "header": false,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "Natural Sciences",
                "value": "NatSci",
                "selected": false,
                "header": false,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "Social & Behavioural Sciences",
                "value": "SocBeh",
                "selected": false,
                "header": false,
                "group": "SCAR$BREADTH",
                "metadata": {
                    "name": "SCAR",
                    "type": "BREADTH"
                }
            },
            {
                "label": "Faculty of Arts and Science (BREADTH)",
                "value": "ARTSC$BREADTH",
                "selected": false,
                "header": true,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": " The Physical and Mathematical Universes(5)",
                "value": "BR=5",
                "selected": false,
                "header": false,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Society and Its Institutions(3)",
                "value": "BR=3",
                "selected": false,
                "header": false,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Thought, Belief and Behaviour(2)",
                "value": "BR=2",
                "selected": false,
                "header": false,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Living Things and Their Environment(4)",
                "value": "BR=4",
                "selected": false,
                "header": false,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Creative and Cultural Representation(1)",
                "value": "BR=1",
                "selected": false,
                "header": false,
                "group": "ARTSC$BREADTH",
                "metadata": {
                    "name": "ARTSC",
                    "type": "BREADTH"
                }
            },
            {
                "label": "John H. Daniels Faculty of Architecture, Landscape, & Design (BREADTH)",
                "value": "ARCLA$BREADTH",
                "selected": false,
                "header": true,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Society and Its Institutions(3)",
                "value": "BR=3",
                "selected": false,
                "header": false,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Living Things and Their Environment(4)",
                "value": "BR=4",
                "selected": false,
                "header": false,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Creative and Cultural Representation(1)",
                "value": "BR=1",
                "selected": false,
                "header": false,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            },
            {
                "label": " The Physical and Mathematical Universes(5)",
                "value": "BR=5",
                "selected": false,
                "header": false,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            },
            {
                "label": " Thought, Belief and Behaviour(2)",
                "value": "BR=2",
                "selected": false,
                "header": false,
                "group": "ARCLA$BREADTH",
                "metadata": {
                    "name": "ARCLA",
                    "type": "BREADTH"
                }
            }
        ],
        "courseLevels": [
            {
                "label": "100/A",
                "value": "100/A",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "200/B",
                "value": "200/B",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "300/C",
                "value": "300/C",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "400/D",
                "value": "400/D",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "5+",
                "value": "5+",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "temporaryDeliveryModes": [
            {
                "label": "In Person",
                "value": "In Person",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Hybrid",
                "value": "Hybrid",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Synchronous",
                "value": "Online Synchronous",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Asynchronous",
                "value": "Online Asynchronous",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Synchronous (with in-person assessments)",
                "value": "Online Synchronous (with in-person assessments)",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Asynchronous (with in-person assessments)",
                "value": "Online Asynchronous (with in-person assessments)",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "deliveryModes": [
            {
                "label": "In Person",
                "value": "In Person",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Hybrid",
                "value": "Hybrid",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Synchronous",
                "value": "Online Synchronous",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Online Asynchronous",
                "value": "Online Asynchronous",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "dayPreferences": [
            {
                "label": "Monday",
                "value": "Monday",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Tuesday",
                "value": "Tuesday",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Wednesday",
                "value": "Wednesday",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Thursday",
                "value": "Thursday",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Friday",
                "value": "Friday",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "timePreferences": [
            {
                "label": "Morning (8am - 11:59am)",
                "value": "Morning (8am - 11:59am)",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Afternoon (12pm - 4:59pm)",
                "value": "Afternoon (12pm - 4:59pm)",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "Evening (5pm - 8:59pm)",
                "value": "Evening (5pm - 8:59pm)",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "creditWeights": [
            {
                "label": "2.33",
                "value": "2.33",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "2.00",
                "value": "2.00",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "1.67",
                "value": "1.67",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "1.33",
                "value": "1.33",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "1.00",
                "value": "1.00",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.67",
                "value": "0.67",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.50",
                "value": "0.50",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.33",
                "value": "0.33",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.20",
                "value": "0.20",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.17",
                "value": "0.17",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            },
            {
                "label": "0.00",
                "value": "0.00",
                "selected": false,
                "header": false,
                "group": null,
                "metadata": {
                    "name": null,
                    "type": null
                }
            }
        ],
        "directions": {
            "asc": "asc",
            "ASC": "ASC",
            "DESC": "DESC",
            "desc": "desc"
        }
    },
    "status": [
        {
            "code": 0,
            "message": "Success"
        }
    ]
}