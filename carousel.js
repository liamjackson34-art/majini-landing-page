// Member data - define once, use everywhere
const members = [ // Creates an array to store all band member information
  {
    name: 'Roger Bond', // The member's name
    role: 'Lead Vocals', // The member's role in the band
    image:
      'images/Roger.jpg', // Path to the member's image
    bio: 'The wild, shirtless lyrics of Roger Bond.', // Short biography/description
  },
  {
    name: 'Rory Parker', // The member's name
    role: 'Bass Guitar', // The member's role
    image:
      'images/Rory.jpg', // Path to the member's image
    bio: 'The bong-rattling bass of Rory Parker.', // Short biography
  },
  {
    name: 'Liam Jackson', // The member's name
    role: 'Drums', // The member's role
    image: 'images/Liam2.jpg', // Path to the member's image
    bio: 'And the competent drumming of Liam Jackson.', // Short biography
  },
  {
    name: 'Julian Zander', // The member's name
    role: 'Lead Guitar', // The member's role
    image:
      'images/Julian.jpg', // Path to the member's image
    bio: 'Julian\'s guitar riffs define our sound. His technical skill is matched.', // Short biography
  },
] // End of the members array

// Create member card HTML
function createMemberCard(member) { // Function that accepts one member object
  return ` // Returns a block of HTML as a template string
            <div class="member-card"> <!-- Main card container -->
                <img src="${member.image}" alt="${member.name}"> <!-- Displays the member's image -->
                <h4>${member.name}</h4> <!-- Displays the member's name -->
                <div class="role">${member.role}</div> <!-- Displays the member's role -->
                <p>${member.bio}</p> <!-- Displays the member's biography -->
            </div> <!-- End of member card -->
        `
}

// Render carousel based on screen size
function renderCarousel() { // Function to build both the carousel and grid layouts
  const carouselContent = document.getElementById('carouselContent') // Gets the carousel container from the HTML
  const membersGrid = document.getElementById('membersGrid') // Gets the desktop grid container

  const screenWidth = window.innerWidth // Gets the current width of the browser window
  let membersPerSlide = 1 // Default to showing one member per carousel slide

  // Determine members per slide based on screen size
  if (screenWidth >= 768) { // Checks if the screen is tablet-sized or larger
    membersPerSlide = 2 // Show two members per slide on larger screens
  }

  // Clear previous content
  carouselContent.innerHTML = '' // Removes any existing carousel content
  membersGrid.innerHTML = '' // Removes any existing grid content

  // Create carousel slides
  let slideIndex = 0 // Keeps track of which carousel slide is being created
  for (let i = 0; i < members.length; i += membersPerSlide) { // Loops through the members array
    const slide = members.slice(i, i + membersPerSlide) // Gets the members for the current slide

    // Create slide HTML
    let slideHTML = `<div class="carousel-item ${slideIndex === 0 ? 'active' : ''}">` // Starts the carousel slide and makes the first slide active

    if (membersPerSlide === 1) { // Checks if only one card should appear on each slide
      // Single card centered
      slideHTML += ` // Adds more HTML to the current slide
                    <div class="d-flex justify-content-center"> <!-- Uses Bootstrap Flexbox to centre the card -->
                        <div class="member-carousel-card"> <!-- Wrapper for the carousel card -->
                            ${createMemberCard(slide[0])} <!-- Inserts the HTML for the member card -->
                        </div> <!-- End of wrapper -->
                    </div> <!-- End of centring container -->
                `
    } else {
      // Multiple cards
      slideHTML = `<div class="carousel-item ${slideIndex === 0 ? 'active' : ''}"><div class="row g-4">` // Creates a Bootstrap row for two cards

      slide.forEach((member) => { // Loops through each member in the current slide
        slideHTML += `<div class="col-6">${createMemberCard(member)}</div>` // Adds each member card inside a half-width column
      })

      slideHTML += `</div></div>` // Closes the Bootstrap row and carousel item
    }

    carouselContent.innerHTML += slideHTML // Adds the completed slide to the carousel

    slideIndex++ // Moves to the next slide number
  }

  // Create grid for large screens
  members.forEach((member) => { // Loops through every band member
    membersGrid.innerHTML += ` // Adds each member card to the desktop grid
                <div class="col-lg-3 col-md-6"> <!-- Bootstrap column sizing -->
                    ${createMemberCard(member)} <!-- Inserts the member card -->
                </div> <!-- End of grid column -->
            `
  })
}

// Re-render on window resize
window.addEventListener('resize', renderCarousel) // Runs renderCarousel() whenever the browser window is resized

// Initial render
renderCarousel() // Runs the function once when the page first loads