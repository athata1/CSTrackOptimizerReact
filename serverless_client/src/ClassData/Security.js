import { Track } from "./Track";

class Security extends Track {
  constructor() {
    super("Security");
    this.required = ["CS354", "CS355", "CS426", ];
    this.elective = [...new Set(["CS307", "CS408", "CS348", "CS448", "CS473", "CS352", "CS353", "CS456", "CS373", "CS471", "CS381", "CS422", "CS489", "CS490-DSO", "CS490-SWS", ])];
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
      if (!courses.includes(s))
          return false;
    }
    let matches = 0;

    if (courses.includes(Database.getInt("CS307")) || courses.includes(Database.getInt("CS408")))
        matches++;

    if (courses.includes(Database.getInt("CS348"))
            || courses.includes(Database.getInt("CS448")) ||
            courses.includes(Database.getInt("CS473")))
        matches++;
    if (courses.includes(Database.getInt("CS352")))
        matches++;

    if (courses.includes(Database.getInt("CS353")) || courses.includes(Database.getInt("CS456")))
        matches++;

    if (courses.includes(Database.getInt("CS373")) || courses.includes(Database.getInt("CS471")))
        matches++;

    if (courses.includes(Database.getInt("CS381")))
        matches++;

    if (courses.includes(Database.getInt("CS422")))
        matches++;

    if (courses.includes(Database.getInt("CS489")) || courses.includes(Database.getInt("CS490-DSO")))
        matches++;

    if (courses.includes(Database.getInt("CS490-SWS")))
        matches++;

    return matches >= 3;
  }
}

export {Security}