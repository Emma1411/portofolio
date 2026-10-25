import { education as rawEducation } from './education';
import { experience as rawExperience } from './experience';
import { projects as rawProjects } from './projects';
import type { TimelineEntry } from '../interfaces/content';

const byStartDesc = (a: TimelineEntry, b: TimelineEntry) => b.start.localeCompare(a.start);

export { profile } from './profile';
export { about } from './about';
export { skills } from './skills';
export const experience: TimelineEntry[] = [...rawExperience].sort(byStartDesc);
export const education: TimelineEntry[] = [...rawEducation].sort(byStartDesc);
export const projects = [...rawProjects].sort((a, b) => a.order - b.order);
export { pipeline } from './pipeline';