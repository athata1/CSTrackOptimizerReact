class ComputationalScience extends Track {
  constructor() {
    super("Computational Science");
    this.required = ["CS314", "CS381"];
    this.elective = [... new Set(["MA266", "MA366", "CS373", "CS473", "CS478", "IE336", "ECE301", "CS352", "CS353", "CS354", "CS307", "CS422", "CS456", "CS471", "CS483", "CS514", "CS515", "CS520", "CS525", "IE335", "MA341", "MA440"])];

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
    let output = [];
    if (!courses.includes(Database.getInt("MA266")) && !courses.includes(Database.getInt("MA366")))
        output.push(["MA266", "MA366"]);

    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS473"))
            && !courses.includes(Database.getInt("CS478")) &&
            !courses.includes(Database.getInt("IE336")) && !courses.includes(Database.getInt("ECE301")))
        output.push(["CS373","CS473","CS478", "IE336", "ECE301"]);

    if (!courses.includes(Database.getInt("CS352")) && !courses.includes(Database.getInt("CS353")) && !courses.includes(Database.getInt("CS354")))
        output.push(["CS352", "CS353", "CS354"]);

    return output;
  }

  isCompleted(courses) {
    for (const course of this.required) {
      if (!courses.includes(course))
          return false;
    }

    let csCount = 0;
    for (const course of courses) {
      if (Database.getCourse(course).length >= 2 && new String(Database.getCourse(course).substring(0,2)).valueOf() == new String("CS").valueOf()) {
        csCount++;
      }
    }
    if (csCount < 4) {
      return false;
    }

    if (!courses.includes(Database.getInt("MA266")) && !courses.includes(Database.getInt("MA366")))
        return false;

    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS473"))
            && !courses.includes(Database.getInt("CS478")) &&
            !courses.includes(Database.getInt("IE336")) && !courses.includes(Database.getInt("ECE301")))
        return false;

    if (!courses.includes(Database.getInt("CS352")) && !courses.includes(Database.getInt("CS353")) && !courses.includes(Database.getInt("CS354")))
        return false;

    let matches = 0;
    for (const s of this.elective) {
        if (s == Database.getInt("MA366") || s == Database.getInt("MA266"))
            continue;
        if (s == (Database.getInt("CS373")) || s == (Database.getInt("CS473"))
                || s == (Database.getInt("CS478")) ||
                s == (Database.getInt("IE336")) || s ==Database.getInt("ECE301"))
            continue;

        if (s == (Database.getInt("CS352")) || s == (Database.getInt("CS353")) || s == (Database.getInt("CS354")))
            continue;

        if (courses.includes(s)) {
            matches++;
            if (matches >= 2)
                return true;
        }
    }
    return false;
  }
}