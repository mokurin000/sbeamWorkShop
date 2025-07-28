// ==UserScript==
// @name        Remove restriction of steam workshop
// @name:zh-CN 移除steam创作工坊限制
// @description Unlock adult content of steam for Chinese region users
// @description:zh-CN 解除steam国区创作工坊内容限制
// @match       https://store.steampowered.com/account/preferences*
// @version     1.0.2
// @author      mokurin000
// @license MIT
// @downloadURL https://cdn.jsdmirror.cn/gh/mokurin000/sbeamWorkShop@master/workshop-unlock.user.js
// ==/UserScript==

window.addEventListener('load', () => {
  // locate hidden div block of secret control
  const hidden_divs = document.querySelectorAll("div.account_setting_not_customer_facing");
  
  // make them visible, optional
  for (let div of hidden_divs) {
    div.setAttribute("class", "preference_row");
  }
  
  // actually enable settings
  for (let id of [4, 3]) {
    for (let suffix of ["store", "community"]) {
      const selector = `input#descriptor_${id}_${suffix}`;
      document.querySelector(selector).click();
    }
  }
}, false);
