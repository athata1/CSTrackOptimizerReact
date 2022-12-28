class ComputerGraphics extends Track {
  constructor() {
    super("Computer Graphics");
    this.required = ["CS314", "CS334"];
    this.elective = [...new Set(["CS373", "CS434", "CS471", "CS352", "CS354", "CS381", "CS422", "CS456", "CS490-IDV"])];
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
    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS434"))
    && !courses.includes(Database.getInt("CS471")))
      output.push(["CS373","CS434", "CS471"]);

      return output;
  }

  isCompleted(courses) {
    for (const course of this.required) {
        if (!courses.includes(course)) {
            return false;
        }
    }

    let matches = 0;
    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS434"))
        && !courses.includes(Database.getInt("CS471")))
        return false;

    let count = -1;
    if (courses.includes(Database.getInt("CS373")))
        count++;
    if (courses.includes(Database.getInt("CS434")))
        count++;
    if (courses.includes(Database.getInt("CS471")))
        count++;
    matches += count;
    for (const s of this.elective) {
        if (s == Database.getInt("CS373") || s == Database.getInt("CS434") || s == Database.getInt("CS471"))
            continue;
        if (courses.includes(s)) {
            matches++;
            if (matches >= 3) {
                return true;
            }
        }
    }
    return matches >= 3;
    }
}