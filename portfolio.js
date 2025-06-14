    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabname).classList.add("active-tab")
    };

     var sidemenu = document.getElementById("sidemenu");

     function openmenu(){
      sidemenu.style.right = "0";
     }
     function closemenu(){
      sidemenu.style.right = "-200px";
     }

    //  ==========typed js===========
    const typed = new Typed('.multiple-text', {
      strings: ['Fronted Developer', 'Full Stack Developer', 'APP Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop:true
    });
    
    // Skills
    const skills = [
  { name: "Python", level: 90 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 85 },
  { name: "App Dev", level: 70 },
  { name: "GitHub", level: 80 },
  { name: "SQL", level: 65 },
  { name: "React", level: 75 },
  { name: "Java", level: 60 },
  { name: "PowerBI", level: 55 },
  { name: "Data Analytics", level: 70 },
  { name: "Content Writing", level: 85 }
];

const rotator = document.getElementById('rotator');
const radius = 220;
const containerCenter = 240; // half of container width/height
const angleStep = 360 / skills.length;

skills.forEach((skill, i) => {
  const angle = angleStep * i;
  const rad = angle * (Math.PI / 180);
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  const div = document.createElement('div');
  div.className = 'skill-item';
  div.style.left = `${containerCenter + x - 55}px`;
  div.style.top = `${containerCenter + y - 55}px`;

  div.innerHTML = `
    <div class="skill-name">${skill.name}</div>
    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${skill.level}%;"></div>
    </div>
  `;

  rotator.appendChild(div);
});

    
  