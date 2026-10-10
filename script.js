const sizes = [1, 1, 2, 3, 4];

function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const starField = document.createElement("div");
starField.id = "star-field";

for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");

    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    star.style.position = "absolute";
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.width = `${randomSize}px`;
    star.style.height = `${randomSize}px`;
    star.style.backgroundColor = "#FFFFFF";
    star.style.borderRadius = "50%";

    const animationGroup = Math.floor(i / 50) + 1;
    star.classList.add(`star${animationGroup}`);

    starField.appendChild(star);
}

document.body.prepend(starField);

 
//pop-up below 


const popup = document.querySelector("#popup0");
const popupImg = document.querySelector("#popup-img");
const popupTitle = document.querySelector("#popup-title");
const popupText = document.querySelector("#popup-text");
const closePopup = document.querySelector("#close-popup");

const milestoneData = [

      {
    title: "NASA's Chandra Adds X-ray Vision - Carina Nebula Composite",
    text: "This composite image combines James Webb Space Telescope infrared data with X-ray observations from NASA Chandra X-ray Observatory to reveal hidden details of the Carina Nebula Cosmic Cliffs. Combining Webb infrared dust structures with Chandra high energy vision offers a more complete view of how young stars interact with their surrounding environment.   Chandra X-ray data reveals over a dozen individual young stars, shown as pink specks, located in an outer star cluster. Aged between 1 and 2 million years old, these young stars glow much brighter in X-rays than older background stars, helping astronomers easily isolate nebula members from other Milky Way stars in the line of sight.   Additionally, diffuse pink X-ray emissions in the upper half of the view trace hot gas blown away by massive stars. This hot gas is driven by three extremely bright, massive stars located just outside the image frame.",
    image: "james weeb/2022/Cosmic-Cliffs.jpg",
  },

  {
    title: "Webb Captures Merging Galaxies IC 1623",
    text: "`This image from the James Webb Space Telescope depicts IC 1623, a pair of interacting galaxies colliding roughly 270 million light-years from Earth in the constellation Cetus. Their violent galaxy merger has ignited a starburst, producing new stars at a rate more than twenty times faster than the Milky Way galaxy.   While thick bands of dust previously blocked views from telescopes like Hubble, Webb pierced through using its MIRI, NIRSpec, and NIRCam instruments. Infrared sensitivity allowed astronomers to observe past the obscuring dust, revealing an extremely bright and compact core where the collision may be forming a supermassive black hole. The core's intensity causes Webb's signature eight-pronged diffraction spikes to appear across the image.`,",
    image: "/james weeb/2022/Webb Explores a Pair of Merging Galaxies.jpg",
  },

  {
    title: "title: A Wreath of Star Formation in NGC 7469",
    text: "`This image from the James Webb Space Telescope captures NGC 7469, a face-on spiral galaxy resembling a cosmic wreath. Despite the system being heavily shrouded in dust, Webb's infrared vision pierces through to reveal a vibrant ring of intense star formation closely surrounding the bright galactic core.   The galaxy's center glows exceptionally bright due to superheated gas and dust falling into its central supermassive black hole. This immense brightness interacts with the telescope's optical structure to create prominent diffraction spikes radiating from the core, set against a background sprinkled with distant spiral galaxies.`,",
    image: "/james weeb/2022/A-Wreath-of-Star-Formation .jpg"
  },

  {
    title: "The Crab Nebula Seen in New Light by NASA's Webb (NIRCam and MIRI)",
    text: "Located 6,500 light-years away, the Crab Nebula represents the expanding remains of a supernova star explosion. While previous observatories like Hubble have extensively studied this remnant, Webb's high resolution and infrared sensitivity using NIRCam and MIRI offer new clarity into its structural origin and composition.   The interior shell shows complex, large-scale loops of filaments studded with knots and clumps. Translucent ribbons of smoky white material line the remnant's interior, following diverse directions and sharply curving near certain regions, while a wispy ring encircles the core. Exterior curtains of red and orange material surround these features, offering vital clues about how supernova explosions shape circumstellar environments.`",
    image: "/james weeb/2023/The Crab Nebula.jpg"
  },

  {
    title: "Webb and Hubble Combine to Create Most Colorful View of Universe",
    text: "This panchromatic image combines visible light from NASAs Hubble Space Telescope and infrared vision from the James Webb Space Telescope to capture MACS0416, a massive galaxy cluster located 4.3 billion light-years from Earth. The color mapping reflects cosmic distances blue galaxies detected by Hubble are closer and undergoing intense star formation, while redder galaxies detected by Webb are farther away or shrouded in dust. Gravitational lensing by the cluster magnifies distant background objects, bending their light into distorted arcs. Within one of these magnified galaxies, astronomers identified an extraordinarily bright star nicknamed Mothra, which existed just 3 billion years after the Big Bang and has been magnified thousands of times by the clusters immense gravity.",
    image: "/james weeb/2023/panchromatic view of galaxy cluster .jpg"
  },

  {
    title: "Webb Reveals New Features in Heart of Milky Way",
    text: "This Near Infrared Camera image from the James Webb Space Telescope reveals unprecedented details of Sagittarius C, a star-forming region located about 300 light-years from the supermassive black hole at the center of the Milky Way. Capturing an estimated 500,000 stars across a 50 light-year span, Webbs view allows astronomers to study individual stars in an extreme cosmic environment only 25,000 light-years from Earth.   At the heart of the region, a cluster of protostars glows inside a dense dust cloud, including a central still-forming star over 30 times the mass of the Sun. Surrounding this cloud is a previously unseen region of ionized hydrogen gas, featuring intrigued needle-like structures oriented chaotically that astronomers plan to study further to better understand the origins of star formation. ",
    image: "/james weeb/2023/a cluster of baby stars glows through the cocoon of a dusty cloud..jpg"
  },

  {
    title: "Catching the Edge of the Phantom Galaxy",
    text: "This updated image from the James Webb Space Telescope features M74, also known as the Phantom Galaxy, captured using its NIRCam and MIRI instruments. The data provides astronomers with a clearer outlook on the spiral galaxy stellar nurseries and delicate dust distribution.   The glowing white galactic core displays detailed swirling structures that resemble water circling a drain, surrounded by pale blue light from nearby stars and dust. Beyond the center, deep red and orange spiral rings highlight complex filaments of dust framing large cavernous black bubbles throughout the galaxy.",
    image: "/james weeb/2024/Catching the edge of the phantom galaxy.jpg"
  },

  {
    title: "Sombrero Galaxy Dazzles in New Mid Infrared Image",
    text: "This mid-infrared view from the James Webb Space Telescopes MIRI instrument highlights new structural details in M104, also known as the Sombrero galaxy. Unlike visible-light images where its central core dominates the view, mid-infrared vision dims the core to reveal a smooth inner disk and the complex distribution of clumpy gas across its outer ring.   While dust serves as a primary building block for cosmic star formation, the Sombrero galaxy is not currently experiencing high rates of new star creation. Instead, Webb offers astronomers a rich target to analyze its vast existing stellar population, including tight groupings of stars known as globular clusters. ",
    image: "/james weeb/2024/Sombrero Galaxy .png"
  },

  {
    title: "NASA Missions Spot Cosmic Wreath Displaying Stellar Circle of Life",
    text: "This composite image combines infrared observations from the James Webb Space Telescope with X-ray data from NASAs Chandra X-ray Observatory to showcase star cluster NGC 602. Located roughly 200000 light-years from Earth in the Small Magellanic Cloud the cluster contains stars with very few heavy elements mimicking cosmic conditions from billions of years ago when the universe was much younger. Webb data highlights dark dense clouds of dust that form a wreath-like boundary around the cluster. Meanwhile Chandra X-ray data reveals young massive stars unleashing high-energy stellar winds into interstellar space alongside an extended X-ray glow produced by thousands of lower-mass stars throughout the region.",
    image: "/james weeb/2024/Spot Cosmic Wreath .jpg"
  },

  {
    title: "Webb Uncovers Possible Hidden Black Hole in Nearby Spiral Galaxy M83",
    text: "Webb provides a fresh perspective on spiral galaxy Messier 83 revealing evidence that suggests the presence of a supermassive black hole. While massive spiral galaxies often host an active galactic nucleus astronomers have struggled for decades to confirm one in M83. Webbs Mid-Infrared Instrument revealed highly ionized neon gas which serves as a key signature of a growing black hole. The MIRI view also captures detailed tendrils of gas dust and stars across the galaxy. Star-forming regions woven through the spiral arms appear bright while organic carbon molecules show where new stars and exoplanets are actively taking shape.",
    image: "/james weeb/2025/Webb uncovers possible hidden black hole in nearby spiral galaxy M83.jpg"
  },

  {
    title: "Dusty Wisps Round a Dusty Disc",
    text: "This image combines observations from Webb NIRCam and MIRI instruments with optical data from the Hubble Space Telescope to capture protostar IRAS 04302 located 525 light-years away in the Taurus star-forming region. Nicknamed the Butterfly Star this young star is surrounded by a planet-forming disc measuring 65 billion kilometers across which is several times the size of our solar system. A dense vertical streak of dusty gas cocoons the central star blotting out its intense light and allowing Webb to reveal two delicate reflection nebulae glowing on either side.",
    image: "/james weeb/2025/Dusty wisps round a dusty disc.jpg"
  },

  {
    title: "A Dance of Dwarf Galaxies",
    text: "Webb captured a pair of nearby interacting dwarf galaxies named NGC 4490 and NGC 4485 located about 24 million light-years away in the constellation Canes Venatici. Dwarf galaxies provide valuable insights into the early universe where young systems contained high amounts of gas relatively few stars and minimal elements heavier than helium. Observing these two merging dwarf galaxies allows astronomers to study how early cosmic structures grew and evolved. A bright red stream connects both galaxies marking regions of intense interaction where star formation and ionized gas clouds actively take shape.",
    image: "/james weeb/2025/A Dance of Dwarf Galaxies.jpg"
  },

  {
    title: "NASA Webb Hubble Share Most Comprehensive View of Saturn to Date",
    text: "Webb teamed up with the Hubble Space Telescope to observe Saturn across complementary wavelengths of light delivering a layered perspective of the ringed planet atmosphere. Combining Webb infrared data with Hubble visible light data highlights distinct atmospheric details across both views. In Webbs infrared perspective the horizontal bands range from dark orange near the poles to lighter tan near the equator while the planet water-ice rings glow exceptionally bright due to high reflectivity. These dual observations provide astronomers with valuable insight into Saturn atmospheric composition and ring dynamics.",
    image: "james weeb/2026/NASA Webb.jpg"
  },

  {
    title: "NASA Webb Uncovers Unusual Galaxy Shaped by Cosmic Collision",
    text: "Webbs mid-infrared view of Centaurus A reveals dusty structures and hidden activity shaped by a past galactic collision and an actively feeding central black hole. The telescope resolves millions of stars intricate filaments and glowing warm dust clouds across the center of the galaxy. Glowing red points mark dust-rich stars and stellar nurseries that provide essential raw materials for future generations of stars and planets. At the galactic core an active supermassive black hole shines brightly surrounded by complex structures sculpted by ongoing cosmic activity.",
    image: "/james weeb/2026/NASA Webb Uncovers Unusual.png"
  },

  {
    title: "NGC 1385",
    text: "NGC 1385 is a barred spiral galaxy packed with active star-forming regions located in the constellation Fornax. This composite multiwavelength observation combines X-ray data from NASAs Chandra X-ray Observatory with optical light from the Hubble Space Telescope and infrared views from the James Webb Space Telescope. Chandra X-rays highlight intense stellar nurseries and high-energy X-ray binaries while Hubble optical data brings out dusty spiral structures alongside Webbs vivid infrared observations of warm gas and dust. Comparing multiwavelength data across barred spirals helps astronomers map how local starbursts build up galactic mass over time.",
    image: "/james weeb/2026/NGC 1385 (Chandra + Hubble + Webb).jpg"
  }
];

/* dot click*/

document.querySelectorAll(".timeline-dots").forEach((dot, index) => {

    dot.addEventListener("click", () => {

        const milestone = milestoneData[index];
        popupTitle.textContent = milestone.title;
        popupText.textContent = milestone.text;

        if (milestone.image !== "") {
            popupImg.src =milestone.image;
            popupImg.alt = milestone.title
            popupImg.style.display = "block";

        }
        else {
            popupImg.src = "";
            popupImg.alt = "";
            popupImg.style.display = "none";

        }

        popup.style.display ="flex";
        popup.setAttribute("aria-hidden" , "false");

    });

    });




    closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
});



/* click out */

popup.addEventListener("click", (event) => {

  if (event.target === popup) {

    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");

  }

});


/* esc key */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");

  }

});


/*star */

/* shooting star */


const shootingStar = document.querySelector(".shooting-star");

function shootStar() {

  const startTop = Math.random() * 55 + 10;

  shootingStar.style.top = startTop + "%";
  shootingStar.style.left = "-150px";

  shootingStar.animate(
    [
      {
        transform: "rotate(-35deg) translate(0, 0)",
        opacity: 0
      },

      {
        transform: "rotate(-35deg) translate(150px, 80px)",
        opacity: 1
      },

      {
        transform: "rotate(-35deg) translate(100vw, 55vh)",
        opacity: 0
      }
    ],
    {
      duration: 1600,
      easing: "linear"
    }
  );
}

   

function scheduleStar() {

  const delay = 15000;

  setTimeout(() => {

    shootStar();
    scheduleStar();

  }, delay);
}

scheduleStar();


/* whatweb */

const infoButton = document.querySelector(".controls-btn-info");
const whatweb = document.querySelector("#whatweb");
const whatwebClose = document.querySelector("#whatweb-close");

infoButton.addEventListener("click", () => {
  whatweb.style.display = "flex";
});

whatwebClose.addEventListener("click", () => {
  whatweb.style.display = "none";
});

whatweb.addEventListener("click", (event) => {
  if (event.target === whatweb) {
    whatweb.style.display = "none";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    whatweb.style.display = "none";
  }
});


/* api dont copy pls */





const pictureButton = document.getElementById("pic-of-day");
const APOD_API_KEY = "ic0czKRunSfcRoEX3woajEva2caYVvxczLgBgKHG";

pictureButton.addEventListener("click", async () => {
    const popup = document.getElementById("popup0");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const image = document.getElementById("popup-img");

    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");

    title.textContent = "Searching the universe...";
    text.textContent = "Fetching today's astronomy picture.";
    image.style.display = "none";
    image.removeAttribute("src");

    pictureButton.disabled = true;

    try {
        const response = await fetch(
            `https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=${encodeURIComponent(APOD_API_KEY)}`
        );

        if (!response.ok) {
            throw new Error(`NASA returned HTTP ${response.status}`);
        }

        const result = await response.json();
        const data = Array.isArray(result) ? result[0] : result;

        if (!data || !data.title) {
            throw new Error("NASA returned no usable entry");
        }

        title.textContent = data.title;

       
        const temp = document.createElement("div");
        temp.innerHTML =
            data.explanation || data.content?.rendered || "";

        temp.querySelectorAll("br").forEach(br => {
            br.replaceWith("\n");
        });

        temp.querySelectorAll("p").forEach(p => {
            p.append("\n\n");
        });

        const explanation = (temp.textContent || "")
            .replace(/\n{3,}/g, "\n\n")
            .trim()
            .replace(/^Explanation:\s*/i, "");

        if (data.media_type === "image" && (data.hdurl || data.url)) {
            text.textContent = explanation;

            const imageUrl = data.hdurl || data.url;

            image.onload = () => {
                image.style.display = "block";
            };

            image.onerror = () => {
                image.style.display = "none";
                text.textContent +=
                    "\n\nThe astronomy image could not be loaded.";
            };

            image.src = imageUrl;
        } else {
            image.style.display = "none";

            text.textContent =
                explanation +
                "\n\nToday's entry is not a still image." +
                (data.permalink
                    ? `\nView it on NASA: ${data.permalink}`
                    : data.url
                        ? `\nView it here: ${data.url}`
                        : "");
        }
    } catch (error) {
        console.error("APOD error:", error);

        title.textContent = "The universe is temporarily unavailable";
        text.textContent =
            "NASA's picture couldn't be loaded. Check your internet connection or try again later.";
    } finally {
        pictureButton.disabled = false;
    }
});















