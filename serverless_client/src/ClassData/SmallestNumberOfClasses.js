import {Algorithm} from './Algorithms'
import {ComputationalScience} from './ComputationalScience'
import {ComputerGraphics} from './ComputerGraphics'
import {Database} from './Database'
import {Databases} from './Databases'
import {MachineIntelligence} from './MachineIntelligence'
import {ProgrammingLanguages} from './ProgrammingLanguage'
import {Security} from './Security'
import {Software} from './Software'
import {Systems} from './Systems'

let coursePrecedence = {};
coursePrecedence["CS307"] = 8;
coursePrecedence["CS348"] = 8;
coursePrecedence["CS352"] = 8;
coursePrecedence["CS354"] = 8;
coursePrecedence["CS355"] = 8;
coursePrecedence["CS373"] = 8;
coursePrecedence["CS380"] = 8;
coursePrecedence["CS381"] = 8;
coursePrecedence["CS390-CP2"] = 8;
coursePrecedence["CS407"] = 8;
coursePrecedence["CS408"] = 8;
coursePrecedence["CS422"] = 8;
coursePrecedence["CS426"] = 8;
coursePrecedence["CS448"] = 8;
coursePrecedence["CS471"] = 8;
coursePrecedence["CS497"] = 8;
coursePrecedence["CS514"] = 8;
coursePrecedence["CS578"] = 8;
coursePrecedence["CS580"] = 8;
coursePrecedence["CS591-SEC"] = 8;
coursePrecedence["CS502"] = 7;
coursePrecedence["CS334"] = 6;
coursePrecedence["CS503"] = 6;
coursePrecedence["CS536"] = 6;
coursePrecedence["CS573"] = 6;
coursePrecedence["CS555"] = 5;
coursePrecedence["CS314"] = 4;
coursePrecedence["CS391-LE1"] = 4;
coursePrecedence["CS397"] = 4;
coursePrecedence["CS473"] = 4;
coursePrecedence["CS478"] = 4;
coursePrecedence["CS515"] = 4;
coursePrecedence["CS526"] = 4;
coursePrecedence["CS529"] = 4;
coursePrecedence["CS535"] = 4;
coursePrecedence["CS590-CLS"] = 4;
coursePrecedence["CS591-RS1"] = 4;
coursePrecedence["CS520"] = 4;
coursePrecedence["CS523"] = 4;
coursePrecedence["CS528"] = 4;
coursePrecedence["CS530"] = 4;
coursePrecedence["CS560"] = 4;
coursePrecedence["CS584"] = 4;
coursePrecedence["CS590-DSP"] = 4;
coursePrecedence["CS615"] = 4;
coursePrecedence["CS565"] = 4;
coursePrecedence["CS390-CP1"] = 3;
coursePrecedence["CS390-SL2"] = 3;
coursePrecedence["CS456"] = 3;
coursePrecedence["CS490-LDA"] = 3;
coursePrecedence["CS510"] = 3;
coursePrecedence["CS541"] = 3;
coursePrecedence["CS569"] = 3;
coursePrecedence["CS579"] = 3;
coursePrecedence["CS543"] = 3;
coursePrecedence["CS500"] = 3;
coursePrecedence["CS500"] = 3;
coursePrecedence["CS500"] = 3;
coursePrecedence["CS501"] = 3;
coursePrecedence["CS590-FCS"] = 3;
coursePrecedence["CS490-CLC"] = 3;
coursePrecedence["CS525"] = 3;
coursePrecedence["CS527"] = 3;
coursePrecedence["CS577"] = 3;
coursePrecedence["CS590-CLC"] = 3;
coursePrecedence["CS590-VR0"] = 3;
coursePrecedence["CS690-DPL"] = 3;
coursePrecedence["CS591-BTP"] = 3;
coursePrecedence["CS390-CP3"] = 2;
coursePrecedence["CS390-LE1"] = 2;
coursePrecedence["CS531"] = 2;
coursePrecedence["CS590-RA"] = 2;
coursePrecedence["CS390-001"] = 2;
coursePrecedence["CS490-IOS"] = 2;
coursePrecedence["CS590-BTS"] = 2;
coursePrecedence["CS690-SML"] = 2;
coursePrecedence["CS490-VIZ"] = 2;
coursePrecedence["CS590-NCD"] = 2;
coursePrecedence["CS390-SL1"] = 2;
coursePrecedence["CS542"] = 2;
coursePrecedence["CS662"] = 2;
coursePrecedence["CS490-001"] = 2;
coursePrecedence["CS434"] = 2;
coursePrecedence["CS483"] = 2;
coursePrecedence["CS490-CP3"] = 2;
coursePrecedence["CS490-HCI"] = 2;
coursePrecedence["CS490-VR1"] = 2;
coursePrecedence["CS505"] = 2;
coursePrecedence["CS588"] = 2;
coursePrecedence["CS390-L01"] = 1;
coursePrecedence["CS390-L02"] = 1;
coursePrecedence["CS490-003"] = 1;
coursePrecedence["CS490-IDV"] = 1;
coursePrecedence["CS590-001"] = 1;
coursePrecedence["CS590-CAS"] = 1;
coursePrecedence["CS590-HLT"] = 1;
coursePrecedence["CS590-MSS"] = 1;
coursePrecedence["CS590-OSS"] = 1;
coursePrecedence["CS590-PAD"] = 1;
coursePrecedence["CS590-TDV"] = 1;
coursePrecedence["CS591-TA1"] = 1;
coursePrecedence["CS390-SLO"] = 1;
coursePrecedence["CS390-VRA"] = 1;
coursePrecedence["CS590-AML"] = 1;
coursePrecedence["CS590-B5G"] = 1;
coursePrecedence["CS590-MTK"] = 1;
coursePrecedence["CS590-SRS"] = 1;
coursePrecedence["CS390-006"] = 1;
coursePrecedence["CS391-001"] = 1;
coursePrecedence["CS490-002"] = 1;
coursePrecedence["CS490-LD"] = 1;
coursePrecedence["CS590-002"] = 1;
coursePrecedence["CS590-003"] = 1;
coursePrecedence["CS590-004"] = 1;
coursePrecedence["CS590-005"] = 1;
coursePrecedence["CS590-006"] = 1;
coursePrecedence["CS590-BB"] = 1;
coursePrecedence["CS590-DVC"] = 1;
coursePrecedence["CS590-MLG"] = 1;
coursePrecedence["CS590-RL"] = 1;
coursePrecedence["CS591-001"] = 1;
coursePrecedence["CS591-002"] = 1;
coursePrecedence["CS390-CP4"] = 1;
coursePrecedence["CS490-004"] = 1;
coursePrecedence["CS490-VR0"] = 1;
coursePrecedence["CS590-CGS"] = 1;
coursePrecedence["CS590-DE1"] = 1;
coursePrecedence["CS590-DE2"] = 1;
coursePrecedence["CS590-EAC"] = 1;
coursePrecedence["CS590-FDM"] = 1;
coursePrecedence["CS590-GML"] = 1;
coursePrecedence["CS590-HCC"] = 1;
coursePrecedence["CS590-ICS"] = 1;
coursePrecedence["CS590-MPL"] = 1;
coursePrecedence["CS590-PWD"] = 1;
coursePrecedence["CS590-RSS"] = 1;
coursePrecedence["CS635"] = 1;
coursePrecedence["CS592-ADS"] = 1;
coursePrecedence["CS592-AIS"] = 1;
coursePrecedence["CS592-AST"] = 1;
coursePrecedence["CS592-ATC"] = 1;
coursePrecedence["CS592-HAI"] = 1;
coursePrecedence["CS592-HLT"] = 1;
coursePrecedence["CS592-IRM"] = 1;
coursePrecedence["CS592-MLA"] = 1;
coursePrecedence["CS592-MLT"] = 1;
coursePrecedence["CS592-MML"] = 1;
coursePrecedence["CS592-PDP"] = 1;
coursePrecedence["CS592-SRA"] = 1;
coursePrecedence["CS592-TCC"] = 1;
coursePrecedence["CS592-VSS"] = 1;
coursePrecedence["CS593-ATA"] = 1;
coursePrecedence["CS390-0"] = 1;
coursePrecedence["CS390-OL1"] = 1;
coursePrecedence["CS390-OL2"] = 1;
coursePrecedence["CS390-OL5"] = 1;
coursePrecedence["CS390-OL6"] = 1;
coursePrecedence["CS490-LE1"] = 1;
coursePrecedence["CS490-OL1"] = 1;
coursePrecedence["CS490-OLH"] = 1;
coursePrecedence["CS590-AAA"] = 1;
coursePrecedence["CS590-AE"] = 1;
coursePrecedence["CS590-AI0"] = 1;
coursePrecedence["CS590-CDS"] = 1;
coursePrecedence["CS590-DCR"] = 1;
coursePrecedence["CS590-OL1"] = 1;
coursePrecedence["CS590-PAC"] = 1;
coursePrecedence["CS590-POD"] = 1;
coursePrecedence["CS590-SLA"] = 1;
coursePrecedence["CS590-TDA"] = 1;
coursePrecedence["CS390-GIS"] = 1;
coursePrecedence["CS390-WAP"] = 1;
coursePrecedence["CS439"] = 1;
coursePrecedence["CS440"] = 1;
coursePrecedence["CS490-ROB"] = 1;
coursePrecedence["CS490-SWS"] = 1;
coursePrecedence["CS571"] = 1;
coursePrecedence["CS592-009"] = 1;
coursePrecedence["CS592-BDS"] = 1;
coursePrecedence["CS592-DOM"] = 1;
coursePrecedence["CS592-NPS"] = 1;
coursePrecedence["CS592-PML"] = 1;
coursePrecedence["CS592-RSS"] = 1;
coursePrecedence["CS592-TMP"] = 1;
coursePrecedence["CS593-ACA"] = 1;
coursePrecedence["CS593-CLG"] = 1;
coursePrecedence["CS593-HAI"] = 1;
coursePrecedence["CS593-MLT"] = 1;
coursePrecedence["CS353"] = 1;
coursePrecedence["CS490-DSC"] = 1;
coursePrecedence["CS500"] = 1;
coursePrecedence["CS591-SYS"] = 1;
coursePrecedence["CS592-AGT"] = 1;
coursePrecedence["CS592-AIT"] = 1;
coursePrecedence["CS592-ATK"] = 1;
coursePrecedence["CS592-CAC"] = 1;
coursePrecedence["CS592-ICS"] = 1;
coursePrecedence["CS592-IML"] = 1;
coursePrecedence["CS592-IVZ"] = 1;
coursePrecedence["CS592-NIV"] = 1;
coursePrecedence["CS593-RL1"] = 1;
coursePrecedence["CS593-ROB"] = 1;
coursePrecedence["CS638"] = 1;

let prereqs = {};
prereqs["CS353"] = "CS352";
prereqs["CS422"] = "CS354";
prereqs["CS456"] = "CS352";
prereqs["CS407"] = "CS307";
prereqs["CS483"] = "CS381";
prereqs["CS434"] = "CS334";

class SmallestNumberOfClasses {
  constructor() {
    this.requiredCourses = [];
    this.totalElectives = [];
    this.trackList = [];
    this.removed = [];
    this.added = [];
    this.index = 0;
  }

  addTrack(index) {
    switch(index) {
      case 0:
        this.trackList.push(new Databases());
        break;
      case 1:
        this.trackList.push(new ComputationalScience());
        break;
      case 2:
        this.trackList.push(new ComputerGraphics());
        break;
      case 3:
        this.trackList.push(new Algorithm());
        break;
      case 4:
        this.trackList.push(new ProgrammingLanguages());
        break;
      case 5:
        this.trackList.push(new Software());
        break;
      case 6:
        this.trackList.push(new Systems());
        break;
      case 7:
        this.trackList.push(new Security());
        break;
      case 8:
        this.trackList.push(new MachineIntelligence());
        break;
      default:
        break;
      
    }
  }

  addCourse(course) {
    this.requiredCourses.push(Database.getInt(course));
    //this.totalElectives.splice(this.totalElectives.indexOf(Database.getInt(course), 1));
  }

  addRequiredAndElectives() {
    this.trackList.forEach(track => {
      track.required.forEach(course => {
        if (!this.requiredCourses.includes(course))
          this.requiredCourses.push(course);
      });
    });

    this.trackList.forEach(track => {
      track.elective.forEach(course => {
        if (!this.requiredCourses.includes(course) && !this.totalElectives.includes(course))
          this.totalElectives.push(course);
      });
    });
    this.totalElectives = this.totalElectives.map((num) => Database.getCourse(num)).sort((a,b) => {
      let valA = 0;
      let valB = 0;
      if (a in coursePrecedence) {
        valA = coursePrecedence[a];
      }
      if (b in coursePrecedence) {
        valB = coursePrecedence[b];
      }
      if (valA != 0 && valB != 0 && Math.abs(valA - valB) <= 2) {
        return a.localeCompare(b);
      }
      if ((valA != 0 || valB != 0) && valA != valB)
        return valB - valA;
      return a.localeCompare(b);
    }).map(course => Database.getInt(course));
  }

  getAllCombinations(requirements, index, combinations, curr) {
    if (index == requirements.length) {
      let temp = curr.slice();
      for (let i = temp.length; i >= 0; i--) {
        if (temp.indexOf(temp[i]) != i) {
          temp.splice(i,1);
        }
      }
      combinations.push(temp);
      return;
    }

    for (const s of requirements[index]) {
      if (this.removed.includes(s)) {
        continue;
      }
      curr.push(s);
      this.getAllCombinations(requirements, index + 1, combinations, curr);
      curr.splice(index, 1);
    }
    return;
  }

  
  getNextUnfinishedRequirements() {
    for (let i = this.index; i < this.trackList.length; i++) {
      this.index = i + 1;
      let arr = this.trackList[i].getUnfinishedRequirements(this.requiredCourses);
      if (arr.length != 0)
        return arr;
    }
    return null;
  }

  getMinClasses() {

    console.log(this.requiredCourses);
    for (const [key, value] of Object.entries(prereqs)) {
      Database.addCourse(value);
      Database.addCourse(key);
      if (this.requiredCourses.includes(Database.getInt(key))) {
        if (!(this.requiredCourses.includes(Database.getInt(value)))) {
          this.requiredCourses.push(Database.getInt(value));
        }
      }
    }

    let requirements = [];
    while (true) {
      let list = this.getNextUnfinishedRequirements();
      if (list == null) {
        break;
      }
      for (const requirement of list) {
          requirements.push(requirement);
      }
    }
    
    let queue = [];
    if (requirements.length != 0) {
      let comb = [];
      this.getAllCombinations(requirements, 0, comb, []);
      if (comb.length == 0) {
        return null;
      }
      comb = [...new Set(comb.map((obj) =>JSON.stringify(obj)))].map((json) => JSON.parse(json)).sort((a,b)=>a.length - b.length);

      let min = comb[0].length;
      for (let i = 0; i < comb.length; i++) {
        if (comb[i].length != min) {
          break;
        }
        let req = this.requiredCourses.slice();
        let elec = this.totalElectives.slice();
        for (const course of comb[i]) {
          req.push(Database.getInt(course));
          elec.splice(elec.indexOf(Database.getInt(course)),1);
        }
        queue.push([req,elec]);
      }
    }
    if (queue.length == 0) {
      queue.push([this.requiredCourses.slice(), this.totalElectives.slice()]);
    }
   
    for (const recElec of queue) {
      if (this.allCoursesSatisfied(recElec[0]))
        return recElec[0];
    }

   while (queue.length != 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let recElec = queue.shift();
        let currCourses = recElec[0];
        let remaining = recElec[1];
        for (const course of remaining) {
            let newCurr = currCourses.slice();
            if ((Database.getCourse(course) in prereqs) && !newCurr.includes(prereqs[Database.getCourse(course)])) {
              continue;
            }
            newCurr.push(course);
            if (this.allCoursesSatisfied(newCurr)) {
              return newCurr;
            }
            let newRemaining = remaining.slice();
            newRemaining.splice(newRemaining.indexOf(course),1);
            queue.push([newCurr,newRemaining]);
        }
      }
    }
    return null;
  }

  allCoursesSatisfied(courses) {
    for (const track of this.trackList) {
      if (!track.isCompleted(courses)) {
        return false;
      }
    }
    return true;
  }
}

export {SmallestNumberOfClasses}