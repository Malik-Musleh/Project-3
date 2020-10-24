const users = [
  {
    email: "admin@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 1,
    userName:"ahmed",
    barthDay:"21/2/2000",
  },
  {
    email: "user1234@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
    userName:"muad",
    barthDay:"2/12/2000",
  },
  {
    email: "user2@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
    userName:"abd alfattah",
    barthDay:"21/2/2000",
  },
  {
    email: "user3@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
    "userName":"abed alrahman",
    "barthDay":"2/12/2000",
  },
  {
    email: "user4@gmail.com",
    //1234
    password: "$2b$10$x.JObfiH/zi3h8Ehhz/u4OqLJnlIL8BWvP1ekqfVWApB7aq4vHTR.",
    // password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",

    role_id: 2,
    userName:"mohammed",
    barthDay:"21/2/2000",
  },
  {
    email: "user5@gmail.com",
    password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
    role_id: 2,
    userName:"ahmed",
    barthDay:"2/2/2000",
  },
];

const roles = [
  {
    id: 1,
    type: "admin",
    permissions: ["r", "w", "u", "d"],
  },
  {
    id: 2,
    type: "user",
    permissions: ["r", "w"],
  },
];
const orders = [
  
        {id:"1",caregory:'jakets',name: "long",color: "white",price:90},
        {id:"2",caregory:'pants',name: "long",color: "white",price:90},
        {id:"3",caregory:'shoes',name: "long",color: "white",price:90},
        {id:"4",caregory:'jakets',name: "long",color: "white",price:90},
        {id:"5",caregory:'jakets',name: "long",color: "white",price:90},

]
module.exports = {
  users,
  roles,
  orders
}