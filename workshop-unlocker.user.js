// ==UserScript==
// @name        Unlock adult content of steam for Chinese region users
// @match       https://store.steampowered.com/account/preferences*
// @version     1.0.2
// @author      mokurin000
// @downloadURL https://cdn.jsdmirror.com/gh/mokurin000/sbeamWorkShop@main/workshop-unlocker.user.js
// ==/UserScript==

window.addEventListener('load', () => {
  const hidden_divs = document.querySelectorAll("div.account_setting_not_customer_facing");
  for (let div of hidden_divs) {
    div.setAttribute("class", "preference_row");
  }
  for (let id of [4,3]) {
    for (let suffix of ["store", "community"]) {
      const selector = `input#descriptor_${id}_${suffix}`;
      document.querySelector(selector).click();
    }
  }
}, false);
