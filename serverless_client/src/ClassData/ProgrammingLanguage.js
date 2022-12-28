import { Track } from "./Track";

class ProgrammingLanguages extends Track {
  constructor() {
    super("Programming Languages");
    this.required = ["CS352", "CS354", "CS456", ];
    this.elective = [...new Set(["CS307", "CS408", "CS348", "CS448", "CS353", "CS381", "CS426", "CS483", "CS560", "MA385", "MA453", ])];
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

  get Name() {
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

    if (courses.includes(Database.getInt("CS348")) || courses.includes(Database.getInt("CS448")))
        matches++;

    if (courses.includes(Database.getInt("MA385")) || courses.includes(Database.getInt("MA453")))
        matches++;

    if (matches >= 3)
        return true;
    for (const s of this.elective) {
        if (s == (Database.getInt("CS307")) || s == (Database.getInt("CS408")))
            continue;

        if (s == (Database.getInt("CS348")) || s == (Database.getInt("CS448")))
            continue;

        if (s == (Database.getInt("MA385")) || s == (Database.getInt("MA453")))
            continue;

        if (courses.includes(s))
            matches++;
        if (matches >= 3)
            return true;
    }

    return false;
  }
}

export {ProgrammingLanguages}