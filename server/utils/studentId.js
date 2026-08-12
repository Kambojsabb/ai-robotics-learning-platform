function makeStudentId(classNumber,section,rollNumber){return `${classNumber}${String(section).toUpperCase()}${rollNumber}`}
function parseStudentId(id){const m=String(id).toUpperCase().match(/^(\d{1,2})([A-Z])(\d{1,3})$/);return m?{class:Number(m[1]),section:m[2],rollNumber:Number(m[3])}:null}
module.exports={makeStudentId,parseStudentId};
