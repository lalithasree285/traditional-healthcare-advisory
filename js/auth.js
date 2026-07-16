/* ============================================================
   Traditional Healthcare Advisory — AUTH (client-side demo)
   Stores ALL signed-up accounts (name, username, password) in
   localStorage under "thca_users" (an object keyed by username).
   The currently logged-in username is stored under "thca_session".

   ⚠️ IMPORTANT: this is a FRONT-END ONLY prototype. Passwords are
   stored in plain text in the browser's localStorage — this is
   fine for a demo/learning project, but is NOT secure enough for
   a real production app. A real app needs a server that hashes
   passwords and checks them there, not in the browser.
   ============================================================ */

const THCA_USERS_KEY   = "thca_users";   // { username: {name, password} }
const THCA_SESSION_KEY = "thca_session"; // logged-in username (string)

function getAllUsers(){
  const raw = localStorage.getItem(THCA_USERS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveAllUsers(users){
  localStorage.setItem(THCA_USERS_KEY, JSON.stringify(users));
}

/* Registers a brand-new account. Returns {ok:true} or {ok:false, error} */
function signUpUser(name, username, password){
  name = (name || "").trim();
  username = (username || "").trim().toLowerCase();
  password = password || "";

  if(!name || !username || !password){
    return { ok:false, error:"Please fill in your name, username, and password." };
  }
  if(password.length < 4){
    return { ok:false, error:"Password must be at least 4 characters." };
  }

  const users = getAllUsers();
  if(users[username]){
    return { ok:false, error:"That username is already taken. Please choose another." };
  }

  users[username] = { name, password };
  saveAllUsers(users);
  localStorage.setItem(THCA_SESSION_KEY, username);
  return { ok:true };
}

/* Logs an existing account in. Returns {ok:true} or {ok:false, error} */
function loginUser(username, password){
  username = (username || "").trim().toLowerCase();
  password = password || "";

  const users = getAllUsers();
  const account = users[username];

  if(!account || account.password !== password){
    return { ok:false, error:"Incorrect username or password." };
  }

  localStorage.setItem(THCA_SESSION_KEY, username);
  return { ok:true };
}

/* Returns { username, name } for whoever is currently logged in, or null. */
function getCurrentUser(){
  const username = localStorage.getItem(THCA_SESSION_KEY);
  if(!username) return null;
  const users = getAllUsers();
  const account = users[username];
  if(!account) return null;
  return { username, name: account.name };
}

function logoutUser(){
  localStorage.removeItem(THCA_SESSION_KEY);
  window.location.href = "index.html";
}

function greetingWord(){
  const hour = new Date().getHours();
  if(hour < 12) return "Good Morning";
  if(hour < 17) return "Good Afternoon";
  return "Good Evening";
}

/* Call this at the top of any page that requires a logged-in user.
   Redirects to login.html if nobody is logged in. */
function requireUser(){
  const user = getCurrentUser();
  if(!user){
    window.location.href = "login.html";
    return null;
  }
  return user;
}

/* Renders the nav-bar user pill + logout button into el (a container). */
function renderNavUser(containerEl){
  const user = getCurrentUser();
  if(!containerEl) return;
  if(user){
    containerEl.innerHTML = `
      <span class="pill">👤 ${escapeHtml(user.name)}</span>
      <button class="logout" onclick="logoutUser()">Log out</button>
    `;
  } else {
    containerEl.innerHTML = `
      <a class="pill" href="login.html">🔐 Log In</a>
      <a class="pill" href="signup.html">✍️ Sign Up</a>
    `;
  }
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
