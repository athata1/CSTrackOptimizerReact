import { Track } from "./Track";

class Databases extends Track {
  constructor() {
    super("Databases");
    this.required = ["CS348", "CS381", "CS448"];
    this.elective = [...new Set(["CS373", "CS473", "CS352", "CS353", "CS354", "CS355", "CS426", "CS373", "CS422", "CS471", "CS473", "CS478", "CS483", "CS490", "CS497", "EPICS411", "EPICS412"])];
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

    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS473"))) {
        output.push(["CS373", "CS473"]);
    }

    return output;
  }

  isCompleted(courses) {
    for (const course of this.required) {
      if (!courses.includes(course))
          return false;
    }


    //Requirements
    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS473"))) {
        return false;
    }

    //Category 1
    if (!courses.includes(Database.getInt("CS352")) && !courses.includes(Database.getInt("CS353")) && !courses.includes(Database.getInt("CS354")))
        return false;

    //Category 2
    if (!courses.includes(Database.getInt("CS355")) && !courses.includes(Database.getInt("CS426")))
        return false;

    //Category 3
    if (courses.includes(Database.getInt("CS373")) && courses.includes(Database.getInt("CS473"))) {
        return true;
    }

    if (courses.includes(Database.getInt("CS490")) || courses.includes(Database.getInt("CS497")) || courses.includes(Database.getInt("EPICS411"))
        || courses.includes(Database.getInt("EPICS412")))
        return true;

    if (!courses.includes(Database.getInt("CS422")) && !courses.includes(Database.getInt("CS471"))
            && !courses.includes(Database.getInt("CS478")) && !courses.includes(Database.getInt("CS483")))
        return false;

    return true;
  }
}

export {Databases}