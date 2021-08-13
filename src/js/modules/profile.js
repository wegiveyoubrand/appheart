let profiles = document.querySelectorAll(".profile");
let profileContactShow = document.querySelector("button");

profiles.forEach((profile) => {
  profile.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault;
    profiles.forEach((profile) => {
      profile.classList.remove("contact");
    });

    profile.classList.add("contact");
  });
});
