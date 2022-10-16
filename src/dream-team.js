const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false;
  let arrTeamName = [];
  
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let str = members[i].trim();
      arrTeamName.push(str[0]);
    }
  }

  return arrTeamName.map((elem) => elem.toUpperCase()).sort().join("");
}

module.exports = {
  createDreamTeam,
};
