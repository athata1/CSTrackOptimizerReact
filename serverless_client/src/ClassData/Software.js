class Software extends Track {
  constructor() {
    super("Software");
    this.required = ["CS307", "CS381", "CS408", "CS407", ];
    this.elective = [...new Set(["CS348", "CS352", "CS353", "CS354", "CS373", "CS422", "CS426", "CS448", "CS456", "CS473", "CS489", "CS490-CLC", "CS490-DSO", "CS490-SWS", "CS510", "CS590-SRS", ])];
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
    if (!courses.includes(Database.getInt("CS354")) && !courses.includes(Database.getInt("CS352"))) {
      output.push(["CS352", "CS354"]);
    }

    return output;
  }

  isCompleted(courses) {
    for (const s of this.required) {
      if (!courses.includes(s)) {
          return false;
      }
    }

    if (courses.includes(Database.getInt(("CS354"))) && courses.includes(Database.getInt("CS352"))) {
        return true;
    }
    if (!courses.includes(Database.getInt("CS354")) && !courses.includes(Database.getInt("CS352"))) {
        return false;
    }

    for (const s of this.elective) {
        if (s == Database.getInt("CS354") || s == Database.getInt("CS352"))
            continue;
        if (courses.includes(s))
            return true;
    }

    return false;
  }
}