import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let name = variables.name;
  if (variables.name == null) name = "";
  let lastName = variables.lastName;
  if (variables.lastName == null) lastName = "";
  let position = variables.socialMediaPosition;
  if (variables.socialMediaPosition === "position-right") {
    position = "position-right";
  } else {
    position = "position-left";
  }
  let job = variables.role;
  if (
    variables.role != null &&
    variables.role != "Web Developer" &&
    variables.role != "Floor Planner"
  ) {
    job = "Technical Writter";
  } else if (variables.role != null && variables.role != "Web Developer") {
    job = "Floor Planner";
  } else if (variables.role != null) {
    job = "Web Developer";
  } else {
    job = "No trabaja";
  }

  let location = variables.city;
  if (
    variables.city != null &&
    variables.city != "Miami" &&
    variables.city != "Munich" &&
    variables.city != "Caracas"
  ) {
    location = "Toronto";
  } else if (
    variables.city != null &&
    variables.city != "Miami" &&
    variables.city != "Munich"
  ) {
    location = "Caracas";
  } else if (variables.city != null && variables.city != "Miami") {
    location = "Munich";
  } else if (variables.city != null) {
    location = "Miami";
  } else {
    location = "Fuera de la tierra";
  }

  let republic = variables.country;
  if (
    variables.country != null &&
    variables.country != "USA" &&
    variables.country != "Germany" &&
    variables.country != "Canada"
  ) {
    republic = "Venezuela";
  } else if (
    variables.country != null &&
    variables.country != "USA" &&
    variables.country != "Germany"
  ) {
    republic = "Canada";
  } else if (variables.country != null && variables.country != "USA") {
    republic = "Germany";
  } else if (variables.country != null) {
    republic = "USA";
  } else {
    republic = "Apatrida, Nomada libre";
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${job}</h2>
          <h3>${location}, ${republic}</h3>
          <ul class="${position}">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
