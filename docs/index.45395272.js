const e=document.getElementById("createUserBtn"),t=document.getElementById("inputUsername"),a=document.getElementById("inputPassword"),n=document.getElementById("displayUsernames"),s=document.getElementById("inputForMessages"),o=document.getElementById("postMessageBtn"),l=document.getElementById("messagesForUser"),d=document.getElementById("loginBtn"),i=document.getElementById("postedMessagesContainer"),u=document.getElementById("avatarIMGS"),r=document.getElementById("createUserDiv"),c=document.getElementById("postMessageContainer"),p=document.getElementById("loggedInAs"),m=document.getElementById("connectionErrorMsg");let g=document.getElementById("statusUpdatesContainer"),v=document.getElementById("profileInfoContainer");const y=document.getElementById("deleteAccBtn");t.value,a.value,s.value,u.value;async function f(){try{const e="https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json",t=await fetch(e);return await t.json()}catch(e){console.log(e+"Connection problem"),m.innerHTML="Connection problem. Try again later"}}let E={username:t.value,password:a.value,statusUpdates:[s.value],imageURL:u.value};async function b(){y.disabled=!1;const e=`https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${t.value}.json`,n={method:"PUT",body:JSON.stringify(E={username:t.value,password:a.value,statusUpdates:[],imageURL:u.value}),headers:{"Content-type":"application/json; charset=UTF-8"}},s=await f();if(t.value in s)return void console.log("User already exists");if(""===t.value||""===a.value)return l.innerText="Must write something in both fields.";const o=await fetch(e,n);await o.json();l.innerText="New user created. You may login."}async function w(){const e=await f();g.innerHTML="";for(const t in e){const a=e[t].statusUpdates;if(a&&0!==a.length){const e=document.createElement("p");e.innerText=`${t}: ${a}`,g?.appendChild(e)}}}async function U(){const e=await f(),t=Object.entries(e),a=document.getElementById("userNameContainer");a.innerHTML="",t.forEach((e=>{console.log("Checking username",e);const t=document.createElement("div");t.setAttribute("id","users"),t.innerText=`${e[0]}`,t.addEventListener("click",(()=>{h(Object.values(e)[1])})),a.appendChild(t)}))}function h(e){v.innerHTML=`\n<img id="profileIMG" src="${e.imageURL}"/><br>\n<div>Userprofile: </div><div id="selectedUser">${e.username}</div><br>\nMessages: ${e.statusUpdates||""}`}o.addEventListener("click",(e=>{e.preventDefault(),console.log(u.value)}));let I={username:t.value,password:a.value,statusUpdates:[s.value],imageURL:u.value};I.statusUpdates;async function B(){console.log("logging from postMessages",I.statusUpdates);const e=document.getElementById("inputForMessages"),t=document.getElementById("inputUsername"),a=document.getElementById("inputPassword"),n=`https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${t.value}.json`,s=(await f())[t.value];let o;"statusUpdates"in s?(o=s.statusUpdates,o.push(e.value)):o=[e.value];const l={method:"PUT",body:JSON.stringify(I={username:t.value,password:a.value,statusUpdates:o,imageURL:u.value}),headers:{"Content-type":"application/json; charset=UTF-8"}},d=await fetch(n,l),r=await d.json();console.log(r);let c=document.createElement("p");c.innerText=`${t.value}${e.value}`,i?.append(c),w(),U();const p=document.getElementById("selectedUser");console.log(p.textContent,t.value),p.textContent===r.username&&h(r)}async function T(){try{const e=`https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${document.getElementById("inputUsername").value}/statusUpdates.json`,t=await fetch(e),a=await t.json();let n;n=""===a?[]:"string"==typeof a?[a]:a}catch(e){console.log(e+"Connection problem"),m.innerHTML="Connection problem.Try again later."}}async function L(){const e=await fetch("https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json"),s=await e.json();t.value in s&&a.value===s[t.value].password?(o.disabled=!1,l.innerText="You've successfully logged in!",r.style.display="none",p.innerHTML=`You are logged in as: ${t.value} <img id="profileIMG" src="${u.value}"/>`,c.style.display="block",y.style.display="block",n.style.display="block",g.style.display="block",T(),U(),w()):l.innerText="Wrong username, wrong password or account does not exist."}let C={username:t.value,password:a.value,statusUpdates:[s.value],imageURL:u.value};async function M(){const e=`https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${t.value}.json`,n={method:"DELETE",body:JSON.stringify(C={username:t.value,password:a.value,statusUpdates:undefined,imageURL:u.value}),headers:{"Content-type":"application/json; charset=UTF-8"}},s=await fetch(e,n);await s.json();window.location.reload()}f(),d.addEventListener("click",(e=>{e.preventDefault(),L(),w()})),e.addEventListener("click",(e=>{e.preventDefault(),b()})),o.addEventListener("click",(e=>{e.preventDefault(),console.log("CHECKING POSTMSGBTN"),B()})),y.addEventListener("click",(e=>{e.preventDefault(),M()}));
//# sourceMappingURL=index.45395272.js.map