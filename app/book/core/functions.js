
//   T A B L E   D E   N A V I G A T I O N   //

const iter_navigator = () => document.getElementById("navigator");

const max_scroll_height = () => document.body.scrollHeight;

const reveal_bottom_nav = function() {
    const navigator = iter_navigator();
    if (! navigator) return;
    const y_remaining = max_scroll_height() - (window.scrollY + window.innerHeight);
    const invisible_threshold = body.clientWidth * .175;
    const visible_threshold = body.clientWidth * .100;
    const new_opacity =
      y_remaining >= invisible_threshold ? 0
      : y_remaining <= visible_threshold ? 1
      : Math.pow( ((invisible_threshold - y_remaining)
        / (invisible_threshold - visible_threshold)), 2);
    navigator.style.opacity = new_opacity;
    navigator.classList[new_opacity > 0 ? "add" : "remove"]("visible")
};

window.addEventListener("resize", reveal_bottom_nav);
window.addEventListener("scroll", reveal_bottom_nav);
window.addEventListener("load", reveal_bottom_nav);

//   N O T I F I C A T I O N   //   + alertswitcher()

function notify(msg, duration=2000) {
  alert_box = document.getElementById('alert');
  alert_box.classList.add("visible");
  alert_box.innerHTML = msg;
  function toggle_alert() {alert_box.classList.toggle('slide');}
  toggle_alert();

  function eraser() {
    alert_box.classList.remove("visible");
    alert_box.removeEventListener("transitionend", eraser);
  }

  setTimeout(function() {
    alert_box.addEventListener("transitionend", eraser);
    toggle_alert();
    }, duration);
}


/*   N O T E S   */

function toggleNote(event) {
  let next = event.target.nextElementSibling;
    if (event.target && event.target.className == 'note-src') {
      // var next = event.target.nextElementSibling;
      if (next.style.display == "block") {
          next.style.display = "none";
      } else {
          next.style.display = "block";
      }
    }
    if (event.target && event.target.className == 'note') {
      if (event.target.style.display == "none") {
          event.target.style.display = "block";
      } else {
          event.target.style.display = "none";
      }
    }
    //mod for pp
    if (event.target && event.target.parentNode.className == 'note') {
      if (event.target.parentNode.style.display == "none") {
          event.target.parentNode.style.display = "block";
      } else {
          event.target.parentNode.style.display = "none";
      }
    }
    if (event.target && event.target.parentNode.parentNode.className == 'note') {
      if (event.target.parentNode.parentNode.style.display == "none") {
          event.target.parentNode.parentNode.style.display = "block";
      } else {
          event.target.parentNode.parentNode.style.display = "none";
      }
    }
}

document.addEventListener('click', toggleNote);



// toggle buttons
function setToggle(el) {
  const currentState = el.getAttribute('aria-pressed');
  el.setAttribute('aria-pressed', currentState === 'false');
}
// audit-chargement
const get_userPreferencesForScheme = () => localStorage.getItem("userPreferencesForScheme") === "true";
const get_night_switch = () => document.querySelector("#night_switch");
const get_userPreferencesForMargin = () => localStorage.getItem("userPreferencesForMargin") === "true";
const get_fullpage_switch = () => document.querySelector("#fullpage_switch");
const get_HTML = () => document.documentElement;

window.addEventListener("DOMContentLoaded", () => {

  const userPreferencesForScheme = get_userPreferencesForScheme()
      , night_switch = get_night_switch()
      , HTML = get_HTML();
  if (userPreferencesForScheme) {
    night_switch.setAttribute("aria-pressed", "true");
    HTML.setAttribute("dark", get_userPreferencesForScheme());
  }

  const userPreferencesForMargin = get_userPreferencesForMargin();
  if (userPreferencesForMargin) {
    localStorage.setItem("userPreferencesForMargin", "false");
    toggleFullPage();
  }
});

// mode nuit
function toggleDarkMode() {
  const userPreferencesForScheme = get_userPreferencesForScheme();
  const night_switch = get_night_switch();
  const HTML = get_HTML();

  setToggle(night_switch);

  if (userPreferencesForScheme) {
    localStorage.setItem("userPreferencesForScheme", "false");
    HTML.removeAttribute("dark");
  } else {
    localStorage.setItem("userPreferencesForScheme", "true");
    HTML.setAttribute("dark", "true");
  }
  const top = document.querySelector('a.navtop'), prev = document.getElementById('prev'), next = document.getElementById('next'), nav  = document.getElementById('navigator');
  top.style = "display: none;"; prev.style = "display: none;"; next.style = "display: none;"; nav.style = "display: none;";
  setTimeout(function(){ top.style = "display: initial;"; prev.style = "display: initial;"; next.style = "display: initial;"; nav.style = "display: initial;"; }, 20);
}

// mode pleine page
function toggleFullPage() {
  const userPreferencesForMargin = get_userPreferencesForMargin();
  const fullpage_switch = get_fullpage_switch();
  const HTML = get_HTML();

  setToggle(fullpage_switch);

  if (userPreferencesForMargin) {
    bullet.classList.toggle("temporarystate");
    localStorage.setItem("userPreferencesForMargin", "false");
    HTML.removeAttribute("wide");
    document.querySelectorAll(".inside.note").forEach(element => {
      // element.init();
      element.classList.remove("inside");
      // element.classList.add("inside");
      element.classList.add("side");
    })
    setTimeout(function() {
      bullet.classList.toggle("temporarystate");
    }, 600);
  } else {
    bullet.classList.toggle("temporarystate");
    localStorage.setItem("userPreferencesForMargin", "true");
    HTML.setAttribute("wide", "true");
    document.querySelectorAll(".side.note").forEach(element => {
      element.classList.remove("side");
      element.classList.add("inside");
    })
    setTimeout(function() {
      bullet.classList.toggle("temporarystate");
    }, 600);
  }
}

// menu latéral
const get_bullet = () => document.querySelector("#bullet");
const get_menu = () => document.querySelector("#menu");
const get_body = () => document.querySelector("body");

const updateOpacity = function() {
  const bullet = get_bullet()
      , scrollPosition = window.scrollY
      , viewportHeight = window.innerHeight
      // , opacity = Math.max(0.1, 1 - (scrollPosition / viewportHeight));
      , opacity = Math.max(0.1, 1 - (scrollPosition / viewportHeight * 2));
    bullet.style.opacity = opacity;  
    // bullet.style.backgroundColor = `rgba(60, 179, 113, ${opacity})`;
};
window.addEventListener("scroll", updateOpacity);
window.addEventListener("resize", updateOpacity);

const toggleMenu = function(e) {
  const bullet = get_bullet()
      , menu = get_menu()
      , body = get_body();

  // click anychere on page
  if (body.classList.contains("menu_open")
  && e.target.id === "content") {
    body.classList.toggle("menu_open");
    setTimeout(function() {
      menu.style.visibility = "hidden";
    }, 600);
  }

  if (e.target === bullet) {
    body.classList.toggle("menu_open");
    if (body.classList.contains("menu_open")) {
      menu.style.visibility = "visible";
    } else {
      setTimeout(function() {
        menu.style.visibility = "hidden";
      }, 600);
    }
  }


};
document.addEventListener("click", toggleMenu);


window.onload = function () {
  const bullet = get_bullet();
  if (bullet) {
    bullet.addEventListener('mouseenter', () => bullet.classList.add('hovered'));
    bullet.addEventListener('mouseleave', () => bullet.classList.remove('hovered'));
  }
};


/*   K O N A M I   */

function onKonamiCode(cb) {
  var input = '';
  var key = '3838404037393739666513';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
  var sound = new Audio('core/sound.wav');
  var elmnts = document.querySelectorAll(".konami");

  sound.volume = 0.6;
  sound.play();

  for(var i = 0; i < elmnts.length; i++) {
  elmnts[i].style.display = "block";}

  notify("Konami code activated", 1500);
})

