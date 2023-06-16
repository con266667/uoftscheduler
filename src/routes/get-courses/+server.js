import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

export async function POST({ request }) {
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    };

    // if (browser) {
    //     return new Response(JSON.stringify(test_data), init);
    // }

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
  
    var response = await fetch("https://api.easi.utoronto.ca/ttb/getCourses", requestOptions)
    var json = JSON.stringify(await response.json());
    return new Response(json, init);
}

const test_data = {
    "payload": {
        "pageableCourse": {
            "courses": [
                {
                    "id": "646fc5ecf5703e1545d7944c",
                    "name": "Inorganic Materials Chemistry and Processing",
                    "ucName": null,
                    "code": "MSE244H1",
                    "sectionCode": "F",
                    "campus": "St. George",
                    "sessions": [
                        "20239"
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
                                        "millisofday": 32400000
                                    },
                                    "end": {
                                        "day": 1,
                                        "millisofday": 43200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 46800000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                        },
                        {
                            "name": "LEC0101",
                            "type": "Lecture",
                            "teachMethod": "LEC",
                            "sectionNumber": "0101",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 72,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        }
                    ],
                    "duration": null,
                    "cmCourseInfo": {
                        "description": "Basic materials processing flowsheet including priIntroduction to atomic and molecular structures, acid-base and redox reactions, transition metal complexes, and detailed chemical properties of the main group elements in the periodic table. Examples of industrial practice in metal processing industry and energy generation/storage technologies. Hands-on qualitative and quantitative analyses of inorganic compounds, by both classical \"wet\" volumetric and instrumental methods.mary processing and recycling of materials. Materials and energy balance of individual units and of overall process flowsheets. Use of computer software for flowsheet evaluation. Translating process flowsheets to resource and utility requirements, capital/operating cost, and environmental impact of processing operations. Basics of equipment sizing, operation scheduling, and plant layout.",
                        "title": "Inorganic Materials Chemistry and Processing",
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
                            "Materials Science and Engineering"
                        ],
                        "cmPublicationSections": [
                            {
                                "section": "Materials Science and Engineering",
                                "subSections": null
                            }
                        ]
                    },
                    "created": "2023-06-16@06:55:57.363",
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
                    "id": "646fc5ecf5703e1545d7944d",
                    "name": "Communications I",
                    "ucName": null,
                    "code": "MSE294H1",
                    "sectionCode": "F",
                    "campus": "St. George",
                    "sessions": [
                        "20239"
                    ],
                    "sections": [
                        {
                            "name": "TUT0102",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0102",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 57600000
                                    },
                                    "end": {
                                        "day": 2,
                                        "millisofday": 61200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Jennifer",
                                    "lastName": "Lofgreen"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 36,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                            "name": "TUT0101",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0101",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 57600000
                                    },
                                    "end": {
                                        "day": 2,
                                        "millisofday": 61200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Jennifer",
                                    "lastName": "Lofgreen"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 36,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                        "millisofday": 54000000
                                    },
                                    "end": {
                                        "day": 2,
                                        "millisofday": 57600000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Jennifer",
                                    "lastName": "Lofgreen"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 72,
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
                                        "day": 2,
                                        "millisofday": 61200000
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
                                    "sessionCode": "20239",
                                    "repetition": "BI_WEEKLY",
                                    "repetitionTime": "FIRST_AND_THIRD_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Jennifer",
                                    "lastName": "Lofgreen"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                        "description": "This is part I of two laboratory, tutorial, and lecture courses building on the communication principles students learned in first year. Students will work in teams on open-ended design projects, and scaffolded assignments will provide students the opportunity to report on their projects in written reports, podium presentations, and poster presentations. The projects in this course are supported by laboratory exercises and tutorial activities.",
                        "title": "Communications I",
                        "levelOfInstruction": "undergraduate",
                        "prerequisitesText": null,
                        "corequisitesText": null,
                        "exclusionsText": "MSE298Y1H",
                        "recommendedPreparation": "<p>APS111H1, APS112H1</p>",
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
                    "created": "2023-06-16@06:55:57.363",
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
                    "maxCredit": 0.25,
                    "minCredit": 0.25,
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
                    "id": "646fc5ecf5703e1545d7944e",
                    "name": "Materials Paradigm at a Glance I",
                    "ucName": null,
                    "code": "MSE296H1",
                    "sectionCode": "F",
                    "campus": "St. George",
                    "sessions": [
                        "20239"
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
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 1,
                                        "millisofday": 46800000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "BI_WEEKLY",
                                    "repetitionTime": "FIRST_AND_THIRD_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Glenn",
                                    "lastName": "Hibbard"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 72,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 72,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        }
                    ],
                    "duration": null,
                    "cmCourseInfo": {
                        "description": "Materials come in all sorts of forms and exhibit a wide range of behaviors, yet there is more in common to their explanation than there is difference. MSE296 & MSE297 will put the threads from the second year curriculum into a common informational framework more reflective of the emerging state-space based materials paradigm. This course will meet on a biweekly basis. Credit is obtained by participating in in-class exercises.",
                        "title": "Materials Paradigm at a Glance I",
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
                    "created": "2023-06-16@06:55:57.363",
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
                    "maxCredit": 0.15,
                    "minCredit": 0.15,
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
                    "id": "646fc5ecf5703e1545d7945f",
                    "name": "Waves and Modern Physics",
                    "ucName": null,
                    "code": "PHY293H1",
                    "sectionCode": "F",
                    "campus": "St. George",
                    "sessions": [
                        "20239"
                    ],
                    "sections": [
                        {
                            "name": "LEC0102",
                            "type": "Lecture",
                            "teachMethod": "LEC",
                            "sectionNumber": "0102",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 1,
                                        "millisofday": 57600000
                                    },
                                    "end": {
                                        "day": 1,
                                        "millisofday": 61200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                },
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 57600000
                                    },
                                    "end": {
                                        "day": 2,
                                        "millisofday": 61200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                },
                                {
                                    "start": {
                                        "day": 5,
                                        "millisofday": 57600000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 61200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Young-June",
                                    "lastName": "Kim"
                                },
                                {
                                    "firstName": "Ania",
                                    "lastName": "Harlick"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 133,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "Y",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 133,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0104",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0104",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0109",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0109",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 5,
                                        "millisofday": 54000000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 57600000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
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
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 1,
                                        "millisofday": 46800000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                },
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 2,
                                        "millisofday": 46800000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                },
                                {
                                    "start": {
                                        "day": 4,
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 4,
                                        "millisofday": 46800000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [
                                {
                                    "firstName": "Young-June",
                                    "lastName": "Kim"
                                },
                                {
                                    "firstName": "Ania",
                                    "lastName": "Harlick"
                                }
                            ],
                            "currentEnrolment": 0,
                            "maxEnrolment": 133,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "Y",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 133,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0103",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0103",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0105",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0105",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
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
                                        "millisofday": 32400000
                                    },
                                    "end": {
                                        "day": 3,
                                        "millisofday": 43200000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                },
                                {
                                    "start": {
                                        "day": 3,
                                        "millisofday": 43200000
                                    },
                                    "end": {
                                        "day": 3,
                                        "millisofday": 54000000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 300,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 300,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0106",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0106",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
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
                                        "day": 4,
                                        "millisofday": 46800000
                                    },
                                    "end": {
                                        "day": 4,
                                        "millisofday": 50400000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0111",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0111",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 5,
                                        "millisofday": 46800000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 50400000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0102",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0102",
                            "meetingTimes": [
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0107",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0107",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 36000000
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
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0108",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0108",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 2,
                                        "millisofday": 36000000
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
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0110",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0110",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 5,
                                        "millisofday": 54000000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 57600000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        },
                        {
                            "name": "TUT0112",
                            "type": "Tutorial",
                            "teachMethod": "TUT",
                            "sectionNumber": "0112",
                            "meetingTimes": [
                                {
                                    "start": {
                                        "day": 5,
                                        "millisofday": 46800000
                                    },
                                    "end": {
                                        "day": 5,
                                        "millisofday": 50400000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 25,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 25,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        }
                    ],
                    "duration": null,
                    "cmCourseInfo": {
                        "description": "The first half of the semester will give an introduction to the basic ideas of classical oscillations and waves. Topics include simple harmonic motion, forced and damped harmonic motion, coupled oscillations, normal modes, the wave equation, travelling waves and reflection and transmission at interfaces. The second half of the semester will first give an introduction to Einstein's special relativity, including evidence for the frame-independence of the speed of light, time dilation, length contraction, causality, and the relativistic connection between energy and momentum. Then we will follow the historical development of quantum mechanics with the photo-electric and Compton effects, the Bohr atom, wave-particle duality, leading to Schrödinger's equation and wave functions with a discussion of their general properties and probabilistic interpretation.",
                        "title": "Waves and Modern Physics",
                        "levelOfInstruction": "undergraduate",
                        "prerequisitesText": "",
                        "corequisitesText": "MAT292H1",
                        "exclusionsText": "MIE333H1",
                        "recommendedPreparation": "MAT195H1",
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
                    "created": "2023-06-16@06:55:57.363",
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
                    "id": "646fc5ecf5703e1545d79465",
                    "name": "ENTREPRENEURSHIP AND SMALL BUS",
                    "ucName": null,
                    "code": "TEP234H1",
                    "sectionCode": "F",
                    "campus": "St. George",
                    "sessions": [
                        "20239"
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
                                    "sessionCode": "20239",
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
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 75,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "Y",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 75,
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
                                        "day": 3,
                                        "millisofday": 72000000
                                    },
                                    "end": {
                                        "day": 3,
                                        "millisofday": 75600000
                                    },
                                    "building": {
                                        "buildingCode": "",
                                        "buildingRoomNumber": "",
                                        "buildingRoomSuffix": "",
                                        "buildingUrl": null,
                                        "buildingName": null
                                    },
                                    "sessionCode": "20239",
                                    "repetition": "WEEKLY",
                                    "repetitionTime": "ONCE_A_WEEK"
                                }
                            ],
                            "firstMeeting": null,
                            "instructors": [],
                            "currentEnrolment": 0,
                            "maxEnrolment": 75,
                            "subTitle": "",
                            "cancelInd": "N",
                            "waitlistInd": "N",
                            "deliveryModes": [
                                {
                                    "session": "20239",
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
                                    "quantity": 75,
                                    "sequence": 1
                                }
                            ],
                            "linkedMeetingSections": null
                        }
                    ],
                    "duration": null,
                    "cmCourseInfo": {
                        "description": "Complementary Studies elective Part 1 of the 2 Part Entrepreneurship Program The age of enterprise has arrived. Strategic use of technology in all sorts of businesses makes the difference between success and failure for these firms. Wealth creation is a real option for many and the business atmosphere is ready for you! Increasingly, people are seeing the advantages of doing their own thing, in their own way, in their own time. Entrepreneurs can control their own lives, structure their own progress and be accountable for their own success - they can fail, but they cannot be fired! After all, engineers are the most capable people to be in the forefront of this drive to the business life of the 21st century. This course is the first of a series of two dealing with entrepreneurship and management of a small company. It is intended the student would take the follow-up course TEP432 as they progress toward their engineering degree. Therefore, it is advisable that the descriptions of both courses be studied, prior enrolling in this one. This is a limited enrolment course. If the number of students electing to take the course exceeds the class size limit, selection of the final group will be made on the basis of the \"Entrepreneur's Test\". A certificate will be awarded upon the successful completion of both courses, attesting to the student having passed this Entrepreneurial Course Series at the University of Toronto. The course is based on real life issues, not theoretical developments or untried options. Topics covered include: Who is an entrepreneur; Canadian business environment; Acquisitions; Different business types (retail, wholesale, manufacturing, and services); Franchising; Human resources, Leadership, Business Law; and many others. Several invited visitors provide the student with the opportunity to meet real entrepreneurs. There will be several assignments and a session project. Please note, the 5 hours per week would be used for whatever is needed at the time. Tutorials will not normally happen as the calendar indicates them.",
                        "title": "Entrepreneurship and Small Business",
                        "levelOfInstruction": "undergraduate",
                        "prerequisitesText": "",
                        "corequisitesText": "",
                        "exclusionsText": "CHE488H1/CIV488H1/ECE488H1/MIE488H1/MSE488H1/APS281H1",
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
                    "created": "2023-06-16@06:55:57.364",
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
            "total": 45,
            "page": 3,
            "pageSize": 20,
            "direction": null
        },
        "divisionalLegends": {
            "MUSIC": "<h2>Faculty of Music Legend</h2>\n<p></p>\n<p><b>Note: </b>All courses at the Faculty of Music are restricted to undergraduate students enrolled at the Faculty of Music.</p>\n<p></p>\n<h3>Enrolment Controls</h3>\n<p></p>\n<table><caption></caption>\n<tbody>\n<tr>\n<td>C</td>\n<td>Conditional</td>\n<td>Music students can enrol in the course; final confirmation will be based on an audition/interview during the first week of September.</td>\n</tr>\n<tr>\n<td>P</td>\n<td>Priority</td>\n<td>Priority Students enrolled in the specific program/year indicated will receive priority during the first round of enrolment. During the second round of enrolment, the remaining spaces, if any, will be available to all Music students.</td>\n</tr>\n<tr>\n<td>R</td>\n<td>Restricted</td>\n<td>The course is restricted to students in the specific program/year indicated at all times. Enrolment for other Music students is only an option by getting written permission from the instructor of the course. Instructors may require an audition/interview prior to giving permission.</td>\n</tr>\n<tr>\n<td>E</td>\n<td>Divisional Permission</td>\n<td>The Registrar&rsquo;s Office will add you to this course, once you have met the enrolment condition. This could include being enrolled in a certain program or year of study, a placement audition, or approval of a proposal.</td>\n</tr>\n</tbody>\n</table>\n<p></p>\n<h3>Delivery Methods</h3>\n<p></p>\n<table><caption></caption>\n<tbody>\n<tr>\n<td>In-Person</td>\n<td>A course is considered In-Person if it requires attendance at a specific location and time for all course activities.</td>\n</tr>\n<tr>\n<td>Online Synchronous</td>\n<td>Course may be completed fully online; some required real-time activities will be held online, as scheduled in the timetable.</td>\n</tr>\n<tr>\n<td>Online Asynchronous</td>\n<td>Course may be completed fully online without requirement for participation in scheduled, real-time activities.</td>\n</tr>\n</tbody>\n</table>\n<p>Note that is it possible for a course to have multiple modes of delivery; for example a combination of synchronous and asynchronous delivery. In addition, yearlong courses may have a different time scheduled for the winter-term classes. Please be mindful of these as you plan your course enrolment for the fall and winter terms.</p>\n<p></p>\n<h3>Course Codes</h3>\n<p>Course descriptions for Faculty of Music courses are available in the Faculty of Music Academic Calendar, which include a short summary of the course, any restrictions, and credit weight assigned for the course. They are organized by division:</p>\n<table><caption></caption>\n<tbody>\n<tr>\n<td>EMU</td>\n<td>Music Education courses</td>\n</tr>\n<tr>\n<td>HMU</td>\n<td>History &amp; Culture courses</td>\n</tr>\n<tr>\n<td>JMU</td>\n<td>Jazz courses</td>\n</tr>\n<tr>\n<td>MMU</td>\n<td>General Music courses</td>\n</tr>\n<tr>\n<td>OMU</td>\n<td>Operatic Performance courses</td>\n</tr>\n<tr>\n<td>PMU</td>\n<td>Performance courses</td>\n</tr>\n<tr>\n<td>SMU</td>\n<td>Music &amp; Health Science courses</td>\n</tr>\n<tr>\n<td>TMU</td>\n<td>Theory &amp; Composition courses</td>\n</tr>\n</tbody>\n</table>",
            "ERIN": "<table><caption>Legend 1</caption>\n<tbody>\n<tr>\n<td>\n<h4><b><span>Course Code</span></b></h4>\n</td>\n<td>\n<h4><b>Course Sections</b></h4>\n</td>\n</tr>\n<tr>\n<td>\n<table><caption>sub legend 1</caption>\n<tbody>\n<tr>\n<td><b><span style=\"color: #bd2d34;\">ANT102</span><span>H5F</span></b><br /><br /><span>The first 3 characters denote subject, the next 3 denote course number and course level.</span><br /><br /><span>ANT = Anthropology</span><br /><span>1** = First year course</span><br /><span>102 = Course number</span></td>\n<td><b><span>ANT102</span><span style=\"color: #bd2d34;\">H</span><span>5F</span></b><br /><br /><span>The next character denotes the credit value of the course.</span><br /><br /><span>H = Half credit course (0.5 credit)</span><br /><span>Y = Full credit course (1.0 credit)</span></td>\n<td><b><span>ANT102H</span><span style=\"color: #bd2d34;\">5</span><span>F</span></b><br /><br /><span>The next character denotes the campus.</span><br /><br /><span>1 = St. George Campus</span><br /><span>3 = Scarborough Campus</span><br /><span>5 = UTM Campus</span><br /><br /></td>\n<td><b><span>ANT102H5</span><span style=\"color: #bd2d34;\">F</span></b><br /><br /><span>The final character denotes the term.</span><br /><br /><span>F = First term course (Sept. to Dec.)</span><br /><span>S = Second term course (Jan. to Apr.)</span><br /><span>Y = Year course (Sept. to Apr.)</span></td>\n</tr>\n</tbody>\n</table>\n</td>\n<td><b><span style=\"color: #bd2d34;\">LEC</span><span>0101</span></b><br /><br /><span>The first 3 characters denote type of section.</span><br /><span>LEC = Lecture</span><br /><span>PRA = Practical (Lab)</span><br /><span>TUT = Tutorial</span><br /><br /><b><span>LEC</span><span style=\"color: #bd2d34;\">0101</span></b><br /><br /><span>The last four digits indicate the meeting section number.</span></td>\n</tr>\n</tbody>\n</table>\n<table><caption>Legend 2</caption>\n<thead>\n<tr>\n<td>\n<h4><b><span>Building Codes</span></b></h4>\n</td>\n<td>\n<h4><b><span>Distribution Credits</span></b></h4>\n</td>\n<td>\n<h4><b><span>Enrolment Controls</span></b></h4>\n</td>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><span>CC = Communication, Culture and Technology (CCT) Building</span><br /><span>DH = Deerfield Hall</span><br /><span>DV = Davis Building</span><br /><span>KN = Kaneff Building</span><br /><span>MN = Maanjiwe nendamowinan</span><br /><span>IB = Instructional Centre</span><br /><br /><span>SH = Sheridan College</span><br /><br /><span>ZZ = To be announced by your instructor</span><br /><br /><span>Please&nbsp;</span><a href=\"https://map.utoronto.ca/?id=1809#!ce/48514?ct/45469,48901?mc/43.548336,-79.6632?z/16?lvl/0\" target=\"_blank\">click here</a><span>&nbsp;for a map of UTM</span></td>\n<td><span>SCI = Science</span><br /><span>SSc = Social Science</span><br /><span>HUM = Humanities</span></td>\n<td><span>Specific enrolment controls for each section can be seen by clicking on \"Show Explanation\" link under the \"Enrolment </span><span>Controls\" section.</span><br /><br /><span>P = Priority. Some students are given priority access.</span><br /><br /><span>E = Enrolment on ACORN is disabled. Students must enrol through the department.</span><br /><br /><span>R = Restricted. Course is restricted at all times for specific students</span><br /><span>R1 = Restricted. Course is restricted at all times for specific students until specified date. After this date, enrolment is granted to additional groups of eligible students only.</span><br /><br /><span>A = Approval. Departmental approval is required</span><br /><span>AP = Departmental approval is required for enrolment. Some students are given priority access.</span><br /><span>AR = Departmental approval is required. Course is restricted at all times for specific students.</span></td>\n</tr>\n</tbody>\n</table>",
            "ARTSC": "<h2>Enrolment Controls<br /><br /></h2>\n<table><caption>\n<p class=\"text-left\"><b>Enrolment Controls</b></p>\n</caption>\n<tbody>\n<tr>\n<td><b>P</b></td>\n<td>Priority</td>\n<td>Some students are given priority access until a specific date.</td>\n</tr>\n<tr>\n<td><b>E</b></td>\n<td>Enrol at Department</td>\n<td>Students must contact the sponsoring Department to enrol.</td>\n</tr>\n<tr>\n<td><b>A</b></td>\n<td>Approval Required</td>\n<td><span>Approval from academic unit required for enrolment.</span></td>\n</tr>\n<tr>\n<td><b>AP</b></td>\n<td>Approval Required with Priority</td>\n<td><span>Some students are given priority access until a specific date and approval from academic unit required for enrolment.</span></td>\n</tr>\n<tr>\n<td><b>R1</b></td>\n<td>Restricted</td>\n<td>Course/section is restricted at all times for specific students.</td>\n</tr>\n<tr>\n<td><b>R2</b></td>\n<td>Restricted</td>\n<td>Course/section is restricted to a group of students until a specific date, after which time another group of students is also able to enrol.</td>\n</tr>\n<tr>\n<td><b>AR1</b></td>\n<td>Restricted with Approval</td>\n<td><span>Approval required from academic unit for enrolment, course is also restricted to specific student groups.</span></td>\n</tr>\n<tr>\n<td><b>AR2</b></td>\n<td>Restricted with Approval</td>\n<td><span>Approval required from academic unit for enrolment, course is also restricted to specific student groups until a specific date after which another group of students will be able to request enrolment.</span></td>\n</tr>\n</tbody>\n</table>\n<h2><br />Delivery Modes<br /><br /></h2>\n<h5>Visit the <a href=\"https://www.artsci.utoronto.ca/current/academics/course-planning\" target=\"_blank\">Course Planning page</a> on the A&amp;S website for additional delivery method and course planning details.<br /><br /><br /></h5>\n<table><caption>\n<p class=\"text-left\"><b>Delivery Methods</b></p>\n</caption>\n<tbody>\n<tr>\n<td><b>In Person</b></td>\n<td>This meeting section is in person. You will be required to attend this meeting section at a specific time and location. The course outline will provide specific details.</td>\n</tr>\n<tr>\n<td><b>Hybrid</b></td>\n<td>This meeting section includes in-person and online activities. You will be required to attend some activities in person at a specific time and location and some activities online (synchronous or asynchronous). The course outline will provide specific details.</td>\n</tr>\n<tr>\n<td><b>Online - Synchronous</b></td>\n<td>\n<p>This meeting section is online and requires attendance at a specific time for class activities.</p>\nNote: Online courses may require an in-person final assessment. For Y courses, both midterm tests and final assessments may be in person. The course outline will provide specific details.&nbsp;</td>\n</tr>\n<tr>\n<td><b>Asynchronous</b></td>\n<td>\n<p>This meeting section is online and does not require attendance at a specific time for class activities.</p>\nNote: Online courses may require an in-person final assessment. For Y courses, midterm tests and final assessments may be in person. The course outline will provide specific details.&nbsp;</td>\n</tr>\n</tbody>\n</table>",
            "ARCLA": "<h3><span style=\"color: #333333;\"><b>John H. Daniels Faculty of Architecture, Landscape Architecture and Design</b></span></h3>\n<table><caption><span style=\"color: #333333;\">Enrolment Controls</span></caption>\n<tbody>\n<tr>\n<td><span style=\"color: #333333;\">P</span></td>\n<td><span style=\"color: #333333;\">Priority</span></td>\n<td>\n<p><span style=\"color: #333333;\">Some students are given priority access until a specific date.&nbsp; See the enrolment controls information for which students may enrol as of the current date.&nbsp; Unless specific course notes indicate otherwise, enrolment in Priority courses will open as of: Friday, July 28 to all students registered in Arts and Science and Daniels; Wednesday, August 2nd to students registered in other St. George Campus undergraduate faculties; and, Friday, August 4th to students registered with University of Toronto Mississauga and University of Toronto Scarborough.</span></p>\n</td>\n</tr>\n<tr>\n<td><span style=\"color: #333333;\">E</span></td>\n<td><span style=\"color: #333333;\">Enrol through Daniels' Registrar's Office</span></td>\n<td><span style=\"color: #333333;\">Enrolment not available via ACORN.&nbsp; Enrolment details/deadlines can be found in course notes.</span></td>\n</tr>\n<tr>\n<td><span style=\"color: #333333;\">R</span></td>\n<td><span style=\"color: #333333;\">Restricted</span></td>\n<td><span style=\"color: #333333;\">Course/section is restricted at all times to students specified in the enrolment controls.</span></td>\n</tr>\n</tbody>\n</table>\n<h6><span style=\"color: #333333;\"><i><b>Undergraduate Calendar Course Information</b></i></span></h6>\n<p><span style=\"color: #333333;\"><a href=\"https://daniels.calendar.utoronto.ca/guide-program-course-descriptions#descriptions\" target=\"_blank\">Guide to Program &amp; Course Descriptions | Daniels Faculty (utoronto.ca)</a></span></p>\n<h6><span style=\"color: #333333;\"><i><b>Undergraduate Course Descriptions</b></i></span></h6>\n<p><span style=\"color: #333333;\"><a href=\"https://www.daniels.utoronto.ca/students/current-students/undergraduate/course-descriptions-timetables\" target=\"_blank\">Course Descriptions &amp; Timetables | Daniels (utoronto.ca)</a></span></p>\n<h6><span style=\"color: #333333;\"><i><b>Undergraduate Sessional Dates</b></i></span></h6>\n<p><span style=\"color: #333333;\"><a href=\"https://www.daniels.utoronto.ca/students/current-students/undergraduate/academic-dates-deadlines\" target=\"_blank\">2023-24 Sessional Dates | Daniels Faculty (utoronto.ca)</a></span></p>\n<p><span style=\"color: #333333;\">___________</span></p>\n<p><span style=\"color: #333333;\">This timetable does not yet include instructor or room information.&nbsp; Instructor and room information will be added as it becomes available.</span></p>"
        },
        "divisionalEnrolmentIndicators": {
            "APSC": []
        }
    },
    "status": [
        {
            "code": 0,
            "message": "Success"
        }
    ]
}