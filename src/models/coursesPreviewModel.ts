export interface CoursesPreview {
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  tags: Tag[];
  launchDate: string;
  status: Status;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: Meta;
}

export interface Meta {
  slug: string;
  skills?: string[];
  courseVideoPreview?: CourseVideoPreview;
  fullCourseProductId?: string;
  fullCourseProductFamily?: string;
}

export interface CourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export enum Status {
  Launched = "launched",
}

export enum Tag {
  Communication = "communication",
  LearningAbility = "learning ability",
  Productivity = "productivity",
  Psychology = "psychology",
}
