const { Users } = require("../../db")
const createUsers = async ({email}) => {
    const addUsers = await Users.findOrCreate({email});
    return addUsers;
}
module.exports = createUsers;