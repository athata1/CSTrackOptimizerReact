import { Track } from "./Track";
import { Database } from "./Database";

class Algorithm extends Track {

  constructor() {
    super("Algorithms");
    this.required = ["CS381"];
    this.elective = [...new Set(["CS352", "CS354", "CS373", "CS471", "CS314", "CS334", "CS353", "CS355", "CS448", "CS456", "CS483", "MA341", "MA353", "MA362", "MA366", "MA385", "MA421", "MA453"])];
    
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
    if (!courses.includes(Database.getInt("CS352")) && !courses.includes(Database.getInt("CS354"))) {
      output.push(["CS352", "CS354"])
    }
    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS471"))) {
      output.push(["CS373", "CS471"])
    }

    return output;
  }

  isCompleted(courses) {
    for (const course of this.required) {
      if (!courses.includes(course)) {
        return false;
      }
    }

    if(!courses.includes(Database.getInt("CS352")) && !courses.includes(Database.getInt("CS354"))) {
      return false;
    }
    if (!courses.includes(Database.getInt("CS373")) && !courses.includes(Database.getInt("CS471"))) {
      return false;
    }
    
    let matches = 0;
    if (courses.includes(Database.getInt("MA341")) || courses.includes(Database.getInt("MA353")) || courses.includes(Database.getInt("MA362"))
            || courses.includes(Database.getInt("MA366")) || courses.includes(Database.getInt("MA385")) || courses.includes(Database.getInt("MA421"))
            || courses.includes(Database.getInt("MA453"))) {
            matches++;
    }

    for (const s of this.elective) {
      if (s == Database.getInt("MA341") || s == Database.getInt("MA353") || s == Database.getInt("MA362")
                    || s == Database.getInt("MA366") || s == Database.getInt("MA385") || s == Database.getInt("MA421")
                    || s == Database.getInt("MA453"))
        continue;

      if (s == Database.getInt("CS352") || s == Database.getInt("CS354")) {
        continue;
      }

      if (s == Database.getInt("CS373") || s == Database.getInt("CS471")) {
        continue;
      }
      
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

export {Algorithm}