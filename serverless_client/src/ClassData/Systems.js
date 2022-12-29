import { Track } from "./Track";
import { Database } from "./Database";

class Systems extends Track {
  constructor() {
    super("Systems");
    this.required = ["CS352", "CS354", "CS422"];
    this.elective =[...new Set(["CS307", "CS334", "CS353", "CS381", "CS426", "CS448", "CS456", "CS489", "CS490-DSO", "CS490"])];
    let len = this.required.length;
    for (let i = 0; i < len; i++) {
      let course = this.required[0];
      Database.addCourse(course);
      this.required.push(Database.getInt(course));
      this.required.splice(0, 1);
    }

    len = this.elective.length;
    for (let i = 0; i < len; i++) {
      let course = this.elective[0];
      Database.addCourse(course);
      this.elective.push(Database.getInt(course));
      this.elective.splice(0, 1);
    }
  }

  getName() {
    return super.getName();
  }

  getUnfinishedRequirements(courses) {
    return [];
  }

  isCompleted(courses) {
    for (const s of this.required) {
      if (!courses.includes(s)) {
          return false;
      }
    }
    let matches = 0;
    for (const s of this.elective) {
        if (courses.includes(s))
            matches++;
        if (matches === 3)
            return true;
    }

    return false;
  }
}

export {Systems}