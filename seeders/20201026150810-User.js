'use strict';
var crypto = require('crypto-js');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let password = crypto.AES.encrypt("admin", "69i59j0i512j0i433i512j0i3l2j0i131i").toString();
    // const userTest = {
    //   username: "admin",
    //   phone: "0123123123",
    //   email: "admin@gmail.com",
    //   avt: '',
    //   password: password,
    //   permistion: 0
    // }
    // await queryInterface.bulkInsert('Users', [{...userTest}], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
