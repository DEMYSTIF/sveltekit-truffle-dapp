const fs = require("fs");
const Cert = artifacts.require("Cert");

module.exports = function (deployer) {
  deployer.deploy(Cert)
    .then((instance) => {
      const details = instance.constructor.class_defaults;
      // console.log(details);
      fs.writeFileSync('../sveltekit/src/lib/deployer.json', JSON.stringify(details, null, 4));
    })
    .catch((error) => {
      console.error(error);
    });
};