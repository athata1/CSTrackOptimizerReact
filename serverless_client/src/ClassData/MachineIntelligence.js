class MachineIntelligence extends Track {
  constructor() {
    super("Machine Intelligence");
    this.required = ["CS373", "CS381", "STAT416 or MA416 or STAT512", ];
    this.elective = [...new Set(["CS473", "CS314", "CS348", "CS352", "CS448", "CS456", "CS471", "CS483", "CS490-HCI", "CS490-LDA", "CS490-IDV", "CS577", "CS578", ])];
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
    if (!courses.includes(Database.getInt("CS471")) && !courses.includes(Database.getInt("CS473"))) {
      output.push(["CS471", "CS473"]);
    }

    return output;
  }

  isCompleted(courses) {
    for (const s of this.required) {
      if (!courses.includes(s)) {
          return false;
      }
    }

    let matches = 0;
    if (courses.includes(Database.getInt("CS471")) && courses.includes(Database.getInt("CS473"))) {
        matches++;
    }
    if (!courses.includes(Database.getInt("CS471")) && !courses.includes(Database.getInt("CS473"))) {
        return false;
    }

    for (const s of this.elective) {
        if (s == (Database.getInt("CS471")) || s == (Database.getInt("CS473")))
            continue;

        if (courses.includes(s))
            matches++;
        if (matches >= 2)
            return true;
    }

    return false;
  }
}