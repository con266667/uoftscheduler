import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export let selectedCourses: Writable<any[]> = writable([]);
export let selectedOptimizations: Writable<string[]> = writable([]);

selectedCourses.subscribe((courses) => {
    if (browser && courses.length > 0) localStorage.setItem('selectedCourses', JSON.stringify(courses));
});

selectedOptimizations.subscribe((sessions) => {
    if (browser && sessions.length > 0) localStorage.setItem('selectedSessions', JSON.stringify(sessions));
});

selectedCourses.update((courses) => {
    if (!browser) return courses;
    let selectedCourses = localStorage.getItem('selectedCourses');
    if (selectedCourses && courses.length === 0) {
        return JSON.parse(selectedCourses);
    }
    return courses;
});

selectedOptimizations.update((sessions) => {
    if (!browser) return sessions;
    let selectedSessions = localStorage.getItem('selectedSessions');
    if (selectedSessions && sessions.length === 0) {
        return JSON.parse(selectedSessions);
    }
    return sessions;
});

export let courses: Writable<Record<string, any>> = writable({});