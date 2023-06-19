import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export async function POST({ request }) {
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    };

    // if (dev) {
    //     return new Response(JSON.stringify({payload: test_data.payload.sort((a,b)=>
    //         Math.random() - 0.5
    //     )}), init);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Content-Type", "application/json");

    var requestJson = await request.json()

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(requestJson),
    };
  
    var response = await fetch("https://api.easi.utoronto.ca/ttb/getCourses", requestOptions)
    var json = JSON.stringify(await response.json());
    return new Response(json, init);
}

const test_data = {
    "payload": [
        {
            "id": "63f91779d9f22a154f1ff8e5",
            "name": "Computer Fundamentals",
            "ucName": null,
            "code": "APS105H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "SF",
                                "buildingRoomNumber": "1013",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494481",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 35,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "220",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "220",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Kia",
                            "lastName": "Shakiba"
                        }
                    ],
                    "currentEnrolment": 35,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "SF",
                                "buildingRoomNumber": "3202",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494481",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 35,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "An introduction to computer systems and problem solving using computers. Topics include: the representation of information, programming techniques, programming style, basic loop structures, functions, arrays, strings, pointer-based data structures and searching and sorting algorithms. The laboratories reinforce the lecture topics and develops essential programming skills.",
                "title": "Computer Fundamentals",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Electrical and Computer Engineering",
                    "First Year"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "First Year",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.205",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "6400e4dbb2e77c6ad10d5d90",
            "name": "Fundamentals of Computer Programming",
            "ucName": null,
            "code": "APS106H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "220",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 92,
                    "maxEnrolment": 115,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 115,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "116",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "116",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "116",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Benjamin",
                            "lastName": "Kinsella"
                        }
                    ],
                    "currentEnrolment": 92,
                    "maxEnrolment": 115,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 115,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "150",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 92,
                    "maxEnrolment": 115,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 115,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "An introduction to computer systems and software. Topics include the representation of information, algorithms, programming languages, operating systems and software engineering. Emphasis is on the design of algorithms and their implementation in software. Students will develop a competency in the Python programming language. Laboratory exercises will explore the concepts of both Structure-based and Object-Oriented programming using examples drawn from mathematics and engineering applications.",
                "title": "Fundamentals of Computer Programming",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Chemical Engineering and Applied Chemistry",
                    "Civil Engineering",
                    "Materials Science and Engineering",
                    "Mechanical and Industrial Engineering",
                    "Mineral Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Chemical Engineering and Applied Chemistry",
                        "subSections": null
                    },
                    {
                        "section": "Civil Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Materials Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mineral Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.205",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91779d9f22a154f1ff8e6",
            "name": "Engineering Strategies & Practice II",
            "ucName": null,
            "code": "APS112H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 34,
                    "maxEnrolment": 50,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 49,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Benjamin",
                            "lastName": "Kinsella"
                        }
                    ],
                    "currentEnrolment": 34,
                    "maxEnrolment": 50,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 49,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "This course introduces and provides a framework for the design process, problem solving and project management. Students are introduced to communication as an integral component of engineering practice. The course is a vehicle for practicing team skills and developing communications skills. Building on the first course, this second course in the two Engineering Strategies and Practice course sequence introduces students to project management and to the design process in greater depth. Students work in teams on a term length design project. Students will write a series of technical reports and give a team based design project presentation.",
                "title": "Engineering Strategies & Practice II",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Chemical Engineering and Applied Chemistry",
                    "Civil Engineering",
                    "Electrical and Computer Engineering",
                    "Materials Science and Engineering",
                    "Mechanical and Industrial Engineering",
                    "Mineral Engineering",
                    "First Year"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Chemical Engineering and Applied Chemistry",
                        "subSections": null
                    },
                    {
                        "section": "Civil Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Materials Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mineral Engineering",
                        "subSections": null
                    },
                    {
                        "section": "First Year",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.205",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91e7cd9f22a154f1ff8f1",
            "name": "Calculus for Engineers I",
            "ucName": null,
            "code": "APS162H1",
            "sectionCode": "S",
            "campus": "St. George",
            "sessions": [
                "20235S"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Victoria Ann",
                            "lastName": "Kerr"
                        }
                    ],
                    "currentEnrolment": 3,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235S",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 3,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235S",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "This online-only course focuses on the fundamental tools of calculus and its connections to engineering. The topics include limits, differentiation, graphing, optimization problems, and definite and indefinite integrals. Problems combining calculus with geometry, linear algebra, statics, and mechanics will be examined.",
                "title": "Calculus for Engineers I",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "MAT186H1/MAT196H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.205",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "TUT",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91779d9f22a154f1ff8e7",
            "name": "Calculus for Engineers II",
            "ucName": null,
            "code": "APS163H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 13,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 36,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Victoria Ann",
                            "lastName": "Kerr"
                        }
                    ],
                    "currentEnrolment": 13,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "ASYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 36,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "This online-only course focuses on the fundamental tools of calculus and its connections to engineering. The topics include methods of integration, an introduction to differential equations, series and Taylor series, vector differentiation, and partial differentiation. Problems combining calculus with geometry, linear algebra, statics, and mechanics will be examined.",
                "title": "Calculus for Engineers II",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "APS162H1/MAT186H1",
                "corequisitesText": "",
                "exclusionsText": "MAT187H1/MAT197H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91e7cd9f22a154f1ff8f2",
            "name": "Introductory Chemistry from a Materials Perspective",
            "ucName": null,
            "code": "APS164H1",
            "sectionCode": "S",
            "campus": "St. George",
            "sessions": [
                "20235S"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Scott",
                            "lastName": "Ramsay"
                        }
                    ],
                    "currentEnrolment": 13,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235S",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 13,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235S",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "This online course is structured around the principle of structure-property relationship. This relationship refers to an understanding of the microstructure of a solid, that is, the nature of the bonds between atoms and the spatial arrangement of atoms, which permits the explanation of observed behaviour. Observed materials behaviour includes mechanical, electrical, magnetic, optical, and corrosive behaviour. Topics covered in this course include: structure of the atom, models of the atom, electronic configuration, the electromagnetic spectrum, band theory, atomic bonding, optical transparency of solids, magnetic properties, molecular bonding, hybridized orbitals, crystal systems, lattices and structures, crystallographic notation, imperfections in solids, reaction rates, activation energy, solid-state diffusion, materials thermodynamics, free energy, and phase equilibrium.",
                "title": "Introductory Chemistry from a Materials Perspective",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "TUT",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91e7cd9f22a154f1ff8f3",
            "name": "Applied Fundamentals of Deep Learning",
            "ucName": null,
            "code": "APS360H1",
            "sectionCode": "Y",
            "campus": "St. George",
            "sessions": [
                "20235"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Kaveh",
                            "lastName": "Hassani"
                        }
                    ],
                    "currentEnrolment": 96,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235",
                            "mode": "SYNIF"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "APSC",
                                "name": "Faculty of Applied Science & Engineering"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0102",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0102",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Kaveh",
                            "lastName": "Hassani"
                        }
                    ],
                    "currentEnrolment": 94,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235",
                            "mode": "SYNIF"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "APSC",
                                "name": "Faculty of Applied Science & Engineering"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "A basic introduction to the history, technology, programming and applications of the fast evolving field of deep learning. Topics to be covered may include neural networks, autoencoders/decoders, recurrent neural networks, natural language processing, and generative adversarial networks. Special attention will be paid to fairness and ethics issues surrounding machine learning. An applied approach will be taken, where students get hands-on exposure to the covered techniques through the use of state-of-the-art machine learning software frameworks.",
                "title": "Applied Fundamentals of Deep Learning",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "APS105H1/APS106H1/ESC180H1/CSC180H1; APS163/MAT187H1/ESC195H1; MAT185H1/MAT188H1",
                "corequisitesText": "",
                "exclusionsText": null,
                "recommendedPreparation": "CHE223H1/CME263H1/ECE302H1/MIE231H1/MIE236H1/MSE238H1/STA286H1/ECE286H1",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Minors in the Faculty of Applied Science and Engineering",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Electrical and Computer Engineering",
                    "Mechanical and Industrial Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "CDP",
                "name": "Cross-Disciplinary Programs Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91779d9f22a154f1ff8e8",
            "name": "Negotiations in an Engineering Context",
            "ucName": null,
            "code": "APS500H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Elham",
                            "lastName": "Marzi"
                        }
                    ],
                    "currentEnrolment": 15,
                    "maxEnrolment": 40,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "SGS",
                                "name": "School of Graduate Studies"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 15,
                            "sequence": 1
                        },
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 25,
                            "sequence": 2
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Instruction of concepts, theories, and research but most importantly the practice of negotiation skills. The course will cover all kinds of negotiations scenarios that individuals might face in the course of their careers as Engineers; this could include a range of single-issue single-party negotiations to multi-party multi-issues negotiations.",
                "title": "Negotiations in an Engineering Context",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "JRE420H1 or equivalent",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Minors in the Faculty of Applied Science and Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "CDP",
                "name": "Cross-Disciplinary Programs Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        },
                        {
                            "kind": "ELECTIVE",
                            "type": "Hum&SocSci",
                            "description": "Humanities & Social Sciences",
                            "code": "HSS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f9177dd9f22a154f1ff8e9",
            "name": "Electrical Fundamentals",
            "ucName": null,
            "code": "ECE110H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 74,
                    "maxEnrolment": 85,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 85,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "SF",
                                "buildingRoomNumber": "3202",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494481",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 74,
                    "maxEnrolment": 85,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 85,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "120",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "120",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "120",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "120",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Khoman",
                            "lastName": "Phang"
                        }
                    ],
                    "currentEnrolment": 74,
                    "maxEnrolment": 85,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 85,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "An overview of the physics of electricity and magnetism: Coulomb's law, Gauss' law, Ampere's law, Faraday's law. Physics of capacitors, resistors and inductors. An introduction to circuit analysis: resistive circuits, nodal and mesh analysis, 1st order RC and RL transient response and sinusoidal steady-state analysis.",
                "title": "Electrical Fundamentals",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Electrical and Computer Engineering",
                    "Materials Science and Engineering",
                    "Mechanical and Industrial Engineering",
                    "First Year"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Materials Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    },
                    {
                        "section": "First Year",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "642edf303292373c7fd82bac",
            "name": "Thesis",
            "ucName": null,
            "code": "ESC499Y1",
            "sectionCode": "Y",
            "campus": "St. George",
            "sessions": [
                "20235"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Lisa",
                            "lastName": "Romkey"
                        },
                        {
                            "firstName": "Alan",
                            "lastName": "Chong"
                        }
                    ],
                    "currentEnrolment": 3,
                    "maxEnrolment": 10,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 10,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Every student in Fourth Year Engineering Science is required to conduct a thesis on an approved subject under the supervision of any faculty member at the University of Toronto. The thesis provides students with an opportunity to conduct, document, and experience engineering related research as an undergraduate student. This course is structured to provide resources to support that process, in particular the documentation of research, through a series of lectures and workshops. While the final thesis document is the main deliverable, students are also required to submit a set of interim deliverables to support ongoing documentation and reflection.",
                "title": "Thesis",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "CHE499Y1",
                "recommendedPreparation": "ESC301H1",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Engineering Science"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Engineering Science",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "ESC",
                "name": "Division of Engineering Science"
            },
            "title": null,
            "maxCredit": 1,
            "minCredit": 1,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91780d9f22a154f1ff8ea",
            "name": "Fundamentals of Accounting and Finance",
            "ucName": null,
            "code": "JRE300H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 102,
                    "maxEnrolment": 120,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 120,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Scott",
                            "lastName": "Douglas"
                        }
                    ],
                    "currentEnrolment": 103,
                    "maxEnrolment": 120,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNIF"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "APSC",
                                "name": "Faculty of Applied Science & Engineering"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 120,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Complementary Studies elective Introduces a brief overview of essential concepts in accounting and corporate finance. The first part of the course covers the fundamentals of accounting. We start by exploring the basic language of accounting and the fundamental concepts of financial reporting. Students learn to read and analyze basic financial statements including the statements of financial position, comprehensive income, changes in equity, and cash flows. We then introduce key management accounting concepts and explore various methods of costing for decision-making. The second part of the course covers the fundamentals of corporate finance. In the second half, students will learn how to make financial projections and how to value complex investment opportunities. Following this, students learn various techniques for controlling risk and how to determine the appropriate cost of capital. Finally, the course considers issues in cash flow management and overviews project valuation as it relates to corporate mergers.",
                "title": "Fundamentals of Accounting and Finance",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "CHE375H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Minors in the Faculty of Applied Science and Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "CDP",
                "name": "Cross-Disciplinary Programs Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91780d9f22a154f1ff8eb",
            "name": "Markets and Competitive Strategy",
            "ucName": null,
            "code": "JRE410H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Steven Chuang",
                            "lastName": "Chuang"
                        }
                    ],
                    "currentEnrolment": 105,
                    "maxEnrolment": 120,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNIF"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "APSC",
                                "name": "Faculty of Applied Science & Engineering"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 120,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0103",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0103",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 30,
                    "maxEnrolment": 30,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 30,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0104",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0104",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 23,
                    "maxEnrolment": 30,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 30,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0102",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0102",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 24,
                    "maxEnrolment": 30,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 30,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 72000000
                            },
                            "building": {
                                "buildingCode": "",
                                "buildingRoomNumber": "",
                                "buildingRoomSuffix": "",
                                "buildingUrl": null,
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 28,
                    "maxEnrolment": 30,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "SYNC"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 30,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Complementary Studies elective Introduces the basic concepts, frameworks and methodologies useful to managers in crafting and executing entrepreneurial business strategies in technology-based companies. In the first part of the course, students gain an understanding of the external, internal, and dynamic environments of a business and the elements of a superior competitive position. In the second part, we focus on designing and delivering customer value, which involves strategic decisions about segmentation, targeting and positioning, and tactical decisions related to product introductions, marketing communications, distribution channels and pricing. In the third part of the course, we build on these fundamentals and examine challenges related to innovation and industry dynamics, such as industry life cycles, disruptive technologies, product renewal, and the relationship between R&D and commercialization.",
                "title": "Markets and Competitive Strategy",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Minors in the Faculty of Applied Science and Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.206",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "CDP",
                "name": "Cross-Disciplinary Programs Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91780d9f22a154f1ff8ec",
            "name": "People Management and Organizational Behaviour",
            "ucName": null,
            "code": "JRE420H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 54000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "370",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 54000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "370",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 34,
                    "maxEnrolment": 36,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 36,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "PRA0102",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0102",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 54000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "350",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 54000000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "350",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 30,
                    "maxEnrolment": 36,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 36,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 36000000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 50400000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 36000000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 50400000
                            },
                            "building": {
                                "buildingCode": "MY",
                                "buildingRoomNumber": "360",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494495",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Elham",
                            "lastName": "Marzi"
                        }
                    ],
                    "currentEnrolment": 64,
                    "maxEnrolment": 72,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "Y",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 72,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Complementary Studies elective This module spans three inter-related topics: leadership, people management and organization behaviour. It provides students with both the theory and practice in how to design, lead and manage organizations. Topics include theories of leadership, strategy, ethics, designing organizations for rapid change and differing cultural environments, communication, job design, managing and motivating people, fostering creativity, and team work. In addition to traditional lectures, exercises and case studies will be used throughout.",
                "title": "People Management and Organizational Behaviour",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "IRE260H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Minors in the Faculty of Applied Science and Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "CDP",
                "name": "Cross-Disciplinary Programs Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        },
                        {
                            "kind": "ELECTIVE",
                            "type": "Hum&SocSci",
                            "description": "Humanities & Social Sciences",
                            "code": "HSS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "6400ec576d28b05a28db054c",
            "name": "Calculus II",
            "ucName": null,
            "code": "MAT187H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "304",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 73,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "244",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 50400000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 57600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "244",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "GB",
                                "buildingRoomNumber": "244",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494473",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Janelle Patricia",
                            "lastName": "Resch"
                        }
                    ],
                    "currentEnrolment": 73,
                    "maxEnrolment": 100,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Topics include: techniques of integration, an introduction to mathematical modeling with differential equations, infinite sequences and series, Taylor series, parametric and polar curves, vector-valued functions, partial differentiation, and application to mechanics and other engineering problems.",
                "title": "Calculus II",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "APS162H1/MAT186H1",
                "corequisitesText": "",
                "exclusionsText": "APS163H1/MAT197H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Chemical Engineering and Applied Chemistry",
                    "Civil Engineering",
                    "Electrical and Computer Engineering",
                    "Materials Science and Engineering",
                    "Mechanical and Industrial Engineering",
                    "Mineral Engineering",
                    "First Year"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Chemical Engineering and Applied Chemistry",
                        "subSections": null
                    },
                    {
                        "section": "Civil Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Materials Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mineral Engineering",
                        "subSections": null
                    },
                    {
                        "section": "First Year",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "ERIN",
                        "name": "University of Toronto Mississauga"
                    },
                    "breadthTypes": [
                        {
                            "kind": "DISTRIBUTION",
                            "type": "Science",
                            "description": "Science",
                            "code": "Sci"
                        }
                    ]
                },
                {
                    "org": {
                        "code": "ARTSC",
                        "name": "Faculty of Arts and Science"
                    },
                    "breadthTypes": [
                        {
                            "kind": "BREADTH",
                            "type": "Physical Universe",
                            "description": "BR=5 The Physical and Mathematical Universes",
                            "code": "BR=5"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91e83d9f22a154f1ff8f4",
            "name": "Dynamics",
            "ucName": null,
            "code": "MIE100H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "MC",
                                "buildingRoomNumber": "252",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494474",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 39600000
                            },
                            "building": {
                                "buildingCode": "MC",
                                "buildingRoomNumber": "252",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494474",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 39600000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 46800000
                            },
                            "building": {
                                "buildingCode": "MC",
                                "buildingRoomNumber": "252",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494474",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Nazanin",
                            "lastName": "Khalili"
                        }
                    ],
                    "currentEnrolment": 91,
                    "maxEnrolment": 120,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 120,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "TUT0101",
                    "type": "Tutorial",
                    "teachMethod": "TUT",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 57600000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "MC",
                                "buildingRoomNumber": "252",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494474",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 91,
                    "maxEnrolment": 120,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 120,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "This course on Newtonian mechanics considers the interactions which influence 2-D, curvilinear motion. These interactions are described in terms of the concepts of force, work, momentum and energy. Initially the focus is on the kinematics and kinetics of particles. Then, the kinematics and kinetics of systems of particles and solid bodies are examined. Finally, simple harmonic motion is discussed. The occurrence of dynamic motion in natural systems, such as planetary motion, is emphasized. Applications to engineered systems are also introduced.",
                "title": "Dynamics",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "APS161H1",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Electrical and Computer Engineering",
                    "Mechanical and Industrial Engineering",
                    "First Year"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Electrical and Computer Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Mechanical and Industrial Engineering",
                        "subSections": null
                    },
                    {
                        "section": "First Year",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "AE1",
                "name": "Engineering First Year Office"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "640760386d28b05a28db05cc",
            "name": "Additive Manufacturing of Advanced Engineering Materials",
            "ucName": null,
            "code": "MSE468H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 61200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 61200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 61200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 61200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 46800000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 61200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Yu",
                            "lastName": "Zou"
                        }
                    ],
                    "currentEnrolment": 14,
                    "maxEnrolment": 15,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 15,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                },
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 4,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 4,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 5,
                                "millisofday": 32400000
                            },
                            "end": {
                                "day": 5,
                                "millisofday": 43200000
                            },
                            "building": {
                                "buildingCode": "WB",
                                "buildingRoomNumber": "130",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494460",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Yu",
                            "lastName": "Zou"
                        }
                    ],
                    "currentEnrolment": 14,
                    "maxEnrolment": 15,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 15,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "The one-week intensive course includes additive manufacturing (AM) process fundamentals, material properties, design rules, qualification methods, cost and value analysis, and industrial and consumer applications of AM. Particular emphasis will be placed on AM technologies for metals and other advanced materials (ceramics and composites), and related design principles and part performance. The AM techniques introduced in this course include, but are not limited, to selective laser melting, direct metal deposition, wire arc deposition, cold spray, powder binder jetting, electroplating, fused deposition modeling (FDM) and stereolithography (SLA). Lab activities (virtual / hands-on) involving both desktop and industrial-grade 3D printers for metals, ceramics and composites, addressing the full workflow from design to characterization. Several interactive case studies which deploy quantitative analysis tools discussed in lecture to solve a real or imagined market or business need. Virtual / in-person visits to local AM startups and an AM equipment provider/integrator. A multidisciplinary team of speakers including industry experts, and special guest speakers (some are U of T Alumni). This course provides students with a comprehensive understanding of AM technology, its applications, and its implications both now and in the future.",
                "title": "Additive Manufacturing of Advanced Engineering Materials",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": null,
                "corequisitesText": null,
                "exclusionsText": null,
                "recommendedPreparation": null,
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Materials Science and Engineering"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Materials Science and Engineering",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "MMS",
                "name": "Department of Materials Science and Engineering"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "ARTSC",
                        "name": "Faculty of Arts and Science"
                    },
                    "breadthTypes": [
                        {
                            "kind": "BREADTH",
                            "type": "Physical Universe",
                            "description": "BR=5 The Physical and Mathematical Universes",
                            "code": "BR=5"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91785d9f22a154f1ff8ed",
            "name": "Summer Co-op Work Term",
            "ucName": null,
            "code": "PEY300H1",
            "sectionCode": "Y",
            "campus": "Off Campus",
            "sessions": [
                "20235"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 167,
                    "maxEnrolment": 9999,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "AEINTCOOP",
                                "name": "PEY Co-op Program"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 9999,
                            "sequence": 1
                        },
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "ERIN",
                                "name": "University of Toronto Mississauga"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 100,
                            "sequence": 2
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": null,
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "PRA",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91785d9f22a154f1ff8ee",
            "name": "Professional Experience Year Co-op",
            "ucName": null,
            "code": "PEY400Y1",
            "sectionCode": "Y",
            "campus": "Off Campus",
            "sessions": [
                "20235"
            ],
            "sections": [
                {
                    "name": "PRA0101",
                    "type": "Practical",
                    "teachMethod": "PRA",
                    "sectionNumber": "0101",
                    "meetingTimes": [],
                    "firstMeeting": null,
                    "instructors": [],
                    "currentEnrolment": 835,
                    "maxEnrolment": 9999,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "AEINTCOOP",
                                "name": "PEY Co-op Program"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 9999,
                            "sequence": 1
                        },
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "",
                                "name": ""
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "",
                                "name": ""
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "ERIN",
                                "name": "University of Toronto Mississauga"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 9999,
                            "sequence": 2
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": null,
            "created": "2023-06-16@20:45:37.207",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "PRA",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "title": null,
            "maxCredit": 1,
            "minCredit": 1,
            "breadths": [],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63f91e88d9f22a154f1ff8f5",
            "name": "Positive Psychology for Engineers",
            "ucName": null,
            "code": "TEP444H1",
            "sectionCode": "F",
            "campus": "St. George",
            "sessions": [
                "20235F"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 1,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 1,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "OI",
                                "buildingRoomNumber": "2212",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494563",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "OI",
                                "buildingRoomNumber": "2212",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494563",
                                "buildingName": null
                            },
                            "sessionCode": "20235F",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Robin",
                            "lastName": "Sacks"
                        }
                    ],
                    "currentEnrolment": 106,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235F",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Humanities and Social Science elective Many disciplines have explored happiness - philosophy, anthropology, psychology, sociology, neurobiology, film, art and literature - to name a few. Why not engineering? During the first part of the course we will play catch-up, examining the scholarly and creative ways that people have attempted to understand what makes for a happy life. Then we turn our attention to our own domain-expertise, applying engineering concepts like \"balance\", \"flow\", \"amplitude\", \"dynamic equilibrium\"\"momentum\" and others to explore the ways that your technical knowledge can contribute to a deep understanding of happiness. This course is designed to challenge you academically as we analyze texts from a variety of disciplines, but it is also designed to challenge you personally to explore happiness as it relates to yourself, your own personal development and your success and fulfillment as an engineer. If the number of students electing to take the course exceeds the class size limit, selection of the final group will be made on the basis of an in-class assessment completed during the first class.",
                "title": "Positive Psychology for Engineers",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Minors in the Faculty of Applied Science and Engineering",
                    "ISTEP"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "ISTEP",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.208",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "ISTEP",
                "name": "Inst for Studies in Transdisciplinary Engin Educ & Practice"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        },
                        {
                            "kind": "ELECTIVE",
                            "type": "Hum&SocSci",
                            "description": "Humanities & Social Sciences",
                            "code": "HSS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        },
        {
            "id": "63fca99e6458260bf9d05a34",
            "name": "Positive Psychology for Engineers",
            "ucName": null,
            "code": "TEP444H1",
            "sectionCode": "S",
            "campus": "St. George",
            "sessions": [
                "20235S"
            ],
            "sections": [
                {
                    "name": "LEC0101",
                    "type": "Lecture",
                    "teachMethod": "LEC",
                    "sectionNumber": "0101",
                    "meetingTimes": [
                        {
                            "start": {
                                "day": 2,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 2,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "OI",
                                "buildingRoomNumber": "2212",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494563",
                                "buildingName": null
                            },
                            "sessionCode": "20235S",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        },
                        {
                            "start": {
                                "day": 3,
                                "millisofday": 54000000
                            },
                            "end": {
                                "day": 3,
                                "millisofday": 64800000
                            },
                            "building": {
                                "buildingCode": "OI",
                                "buildingRoomNumber": "2212",
                                "buildingRoomSuffix": "",
                                "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494563",
                                "buildingName": null
                            },
                            "sessionCode": "20235S",
                            "repetition": "WEEKLY",
                            "repetitionTime": "ONCE_A_WEEK"
                        }
                    ],
                    "firstMeeting": null,
                    "instructors": [
                        {
                            "firstName": "Robin",
                            "lastName": "Sacks"
                        }
                    ],
                    "currentEnrolment": 70,
                    "maxEnrolment": 150,
                    "subTitle": "",
                    "cancelInd": "N",
                    "waitlistInd": "N",
                    "deliveryModes": [
                        {
                            "session": "20235S",
                            "mode": "INPER"
                        }
                    ],
                    "currentWaitlist": 0,
                    "enrolmentInd": "",
                    "tbaInd": "N",
                    "openLimitInd": "N",
                    "notes": [],
                    "enrolmentControls": [
                        {
                            "yearOfStudy": "*",
                            "post": {
                                "code": "*",
                                "name": "All"
                            },
                            "subject": {
                                "code": "*",
                                "name": "All"
                            },
                            "subjectPost": {
                                "code": "*",
                                "name": "All"
                            },
                            "typeOfProgram": {
                                "code": "*",
                                "name": "All"
                            },
                            "designation": {
                                "code": "*",
                                "name": "All"
                            },
                            "primaryOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "associatedOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "secondOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "adminOrg": {
                                "code": "*",
                                "name": "All"
                            },
                            "collaborativeOrgGroupCode": "*",
                            "quantity": 150,
                            "sequence": 1
                        }
                    ],
                    "linkedMeetingSections": null
                }
            ],
            "duration": null,
            "cmCourseInfo": {
                "description": "Humanities and Social Science elective Many disciplines have explored happiness - philosophy, anthropology, psychology, sociology, neurobiology, film, art and literature - to name a few. Why not engineering? During the first part of the course we will play catch-up, examining the scholarly and creative ways that people have attempted to understand what makes for a happy life. Then we turn our attention to our own domain-expertise, applying engineering concepts like \"balance\", \"flow\", \"amplitude\", \"dynamic equilibrium\"\"momentum\" and others to explore the ways that your technical knowledge can contribute to a deep understanding of happiness. This course is designed to challenge you academically as we analyze texts from a variety of disciplines, but it is also designed to challenge you personally to explore happiness as it relates to yourself, your own personal development and your success and fulfillment as an engineer. If the number of students electing to take the course exceeds the class size limit, selection of the final group will be made on the basis of an in-class assessment completed during the first class.",
                "title": "Positive Psychology for Engineers",
                "levelOfInstruction": "undergraduate",
                "prerequisitesText": "",
                "corequisitesText": "",
                "exclusionsText": "",
                "recommendedPreparation": "",
                "note": null,
                "division": "Applied Science & Engineering, Faculty of",
                "breadthRequirements": null,
                "distributionRequirements": null,
                "publicationSections": [
                    "Applied Science and Engineering (Interdepartmental)",
                    "Certificate Programs in the Faculty of Applied Science and Engineering",
                    "Minors in the Faculty of Applied Science and Engineering",
                    "ISTEP"
                ],
                "cmPublicationSections": [
                    {
                        "section": "Applied Science and Engineering (Interdepartmental)",
                        "subSections": null
                    },
                    {
                        "section": "Certificate Programs in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "Minors in the Faculty of Applied Science and Engineering",
                        "subSections": null
                    },
                    {
                        "section": "ISTEP",
                        "subSections": null
                    }
                ]
            },
            "created": "2023-06-16@20:45:37.208",
            "modified": null,
            "lastSaved": 0,
            "primaryTeachMethod": "LEC",
            "faculty": {
                "code": "APSC",
                "name": "Faculty of Applied Science & Engineering"
            },
            "coSec": {
                "code": "",
                "name": null
            },
            "department": {
                "code": "ISTEP",
                "name": "Inst for Studies in Transdisciplinary Engin Educ & Practice"
            },
            "title": null,
            "maxCredit": 0.5,
            "minCredit": 0.5,
            "breadths": [
                {
                    "org": {
                        "code": "APSC",
                        "name": "Faculty of Applied Science & Engineering"
                    },
                    "breadthTypes": [
                        {
                            "kind": "ELECTIVE",
                            "type": "Compl Studies",
                            "description": "Complementary Studies",
                            "code": "CS"
                        },
                        {
                            "kind": "ELECTIVE",
                            "type": "Hum&SocSci",
                            "description": "Humanities & Social Sciences",
                            "code": "HSS"
                        }
                    ]
                }
            ],
            "notes": [],
            "cancelInd": "",
            "subscriptionTtb": false,
            "subscriptionOpenData": false,
            "tb1Active": false,
            "tb2Active": false,
            "fullyOnline": false
        }
    ],
    "status": [
        {
            "code": 0,
            "message": "Success"
        }
    ]
}