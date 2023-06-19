import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export let selectedCourses: Writable<any[]> = writable([]);
export let selectedOptimizations: Writable<string[]> = writable([]);
let loadedCourses = false;
let loadedOptimizations = false;

selectedCourses.subscribe((courses) => {
    if (browser && loadedCourses) localStorage.setItem('selectedCourses', JSON.stringify(courses));
});

selectedOptimizations.subscribe((sessions) => {
    if (browser && loadedCourses) localStorage.setItem('selectedOptimizations', JSON.stringify(sessions));
});

selectedCourses.update((courses) => {
    if (!browser) return courses;
    let selectedCourses = localStorage.getItem('selectedCourses');
    if (selectedCourses !== null) {
        loadedCourses = true;
        return JSON.parse(selectedCourses);
    }
    loadedCourses = true;
    return courses;
});

selectedOptimizations.update((sessions) => {
    if (!browser) return sessions;
    let selectedOptimizations = localStorage.getItem('selectedOptimizations');
    if (selectedOptimizations && sessions.length === 0) {
        loadedOptimizations = true;
        return JSON.parse(selectedOptimizations);
    }
    loadedOptimizations = true;
    return sessions;
});

export let courses: Writable<Record<string, any>> = writable({});