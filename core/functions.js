
//   T A B L E   D E   N A V I G A T I O N   //

const iter_navigator = () => document.getElementById("navigator");

function maybe_relocate_switcher() {
    console.log(`relocating to ${window.innerHeight}`)
};

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


//   N O T I F I C A T I O N   //

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
