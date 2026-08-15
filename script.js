const messages = [
  // --- Tier 1: Believable & Technical ---
  "Initializing network simulation engine",
  "Pinging default gateway (192.168.1.1)",
  "Querying authoritative DNS root servers",
  "Resolving IPv4 and IPv6 routing tables",
  "Negotiating TCP three-way handshake",
  "Measuring round-trip time (RTT) and baseline latency",
  "Calculating packet jitter across primary uplink",
  "Establishing TLS 1.3 cryptographic cipher suites",
  "Analyzing Maximum Transmission Unit (MTU) packet fragmentation",
  "Running traceroute across intermediate Autonomous Systems",
  "Calibrating TCP sliding window buffer sizes",
  "Checking BGP routing table convergence",
  "Measuring upstream and downstream throughput",
  "Inspecting ARP table cache consistency",
  "Validating subnet mask configurations",
  "Probing local loopback interface for packet integrity",
  "Analyzing ICMP echo reply variations",
  "Optimizing socket connection pool timeouts",

  // --- Tier 2: Mildly Suspicious & Over-Engineered ---
  "Re-indexing IP addresses in alphabetical order",
  "Untangling Cat6 twisted pair cabling in memory",
  "Sweeping dropped packets off the physical ethernet line",
  "Upgrading standard TCP packets to Premium HD TCP",
  "Polling neighboring Wi-Fi routers for local gossip",
  "Greasing virtual packet routing bearings",
  "Waking up dormant background daemons with virtual espresso",
  "Scrubbing fiber optic cables with digital microfiber cloth",
  "Compressing raw data packets using emotional resonance",
  "Defrosting stale UDP socket connections",
  "Checking if 192.168.1.1 is having a good day",
  "Converting IPv4 addresses into artisanal hexadecimal poetry",
  "Tuning network interface card to 432Hz for harmonic stability",
  "Defragmenting virtual packet queues",
  "Asking default gateway nicely for express lane clearance",
  "Rotating firewall encryption keys clockwise by 90 degrees",
  "Dusting off unused TCP port numbers",

  // --- Tier 3: Weird & Surreal Tech Humor ---
  "Negotiating bilateral peace treaty between TCP and UDP",
  "Explaining the concept of patience to dropped packets",
  "Bribing the ISP hamster with premium sunflower seeds",
  "Reversing fiber optic polarity to receive packets from the past",
  "Training carrier pigeons in accordance with RFC 1149",
  "Downloading additional Ethernet cable thickness",
  "Asking 8.8.8.8 if it knows 1.1.1.1 personally",
  "Translating firewall security rules into ancient Sumerian",
  "Offering ceremonial byte sacrifices to the server rack gods",
  "Whispering gentle words of encouragement to the loopback adapter",
  "Re-aligning router antennas with Earth's magnetic core",
  "Polishing fiber optic photons for higher refractive brilliance",
  "Catching escaped binary bits with a butterfly net",
  "Downloading 16GB of extra RAM directly from the cloud",
  "Calculating the gravitational pull of Wikipedia on bandwidth",
  "Consulting digital tarot cards for anticipated packet loss",
  "Replacing standard binary zeroes with hand-carved artisan zeroes",
  "Checking if quantum entanglement can reduce ping to -12ms",
  "Cooling down processor cores with thoughts of Antarctica",
  "Convincing local DNS cache that the internet genuinely exists",
  "Auditioning backup subnets for the role of Default Gateway",
  "Applying WD-40 to squeaky TCP sequence numbers",
  "Debating philosophy with the gateway firewall",

  // --- Tier 4: Wildly Absurd, Sci-Fi & Existential ---
  "Teaching artificial neural network how to feel existential dread",
  "Running 'sudo make-me-a-sandwich' on core backbone router",
  "Requesting permission from the Matrix architect to transmit ACK packet",
  "Performing emergency exorcism on haunted port 666",
  "Synthesizing dark matter packets to bypass the speed of light",
  "Routing critical IP traffic through user's smart toaster via Zigbee",
  "Disputing 45ms latency with the United Nations Security Council",
  "Asking packet if it would rather just stay home and relax",
  "Fact-checking ethernet checksum with Wikipedia editors",
  "Opening a mini wormhole directly into Google's datacenter",
  "Merging parallel universes where this network test already succeeded",
  "Uploading consciousness to the router to deliver packets by hand",
  "Asking ChatGPT if it has seen our missing SYN-ACK packet",
  "Shuffling TCP packet deck and drawing three wildcards",
  "Converting internet bandwidth units to furlongs per fortnight",
  "Waiting for speed of light in vacuum to be patched in Reality v2.0",
  "Reformatting spacetime continuum to FAT32",
  "Questioning whether the router is simulating us instead",
  "Applying SPF 50 sunscreen to ultraviolet fiber optic lasers",
  "Re-initializing the multiverse to clear cosmic background noise",
  "Simulating the simulation inside the network simulator",
  "Consulting the Oracle of Delphi regarding DNS propagation delays",
  "Attempting to fit the entire World Wide Web onto a 3.5-inch floppy disk",
  "Befriending the 404 Not Found demon",
  "Calculating the meaning of life, universe, and high ping (42ms)",
  "Still simulating... Please do not turn off your universe",

  // --- Final Error & Reset ---
  "Simulation failed: Something went wrong. Retrying"
];

// Configuration
const TYPE_SPEED = 16;            // ms per character while typing
const PAUSE_DURATION = 1500;      // ms to pause after typing a regular message (+50%, 1.5 seconds)
const FINAL_PAUSE_DURATION = 5000;// ms to pause on the final "something went wrong" message (+50%, 5 seconds)
const INITIAL_DELAY = 300;        // ms before starting first message

const statusTextElement = document.getElementById("status-text");

let currentIndex = 0;

/**
 * Typewriter cycle that types messages and instantly clears for the next.
 */
function playNextMessage() {
  if (!statusTextElement) return;

  if (currentIndex >= messages.length) {
    currentIndex = 0;
  }

  const currentMessage = messages[currentIndex];
  const isLastMessage = (currentIndex === messages.length - 1);
  let charIndex = 0;

  // 1. Type forward
  function typeChar() {
    if (charIndex <= currentMessage.length) {
      statusTextElement.textContent = currentMessage.slice(0, charIndex);
      charIndex++;
      setTimeout(typeChar, TYPE_SPEED);
    } else {
      // 2. Pause when finished typing (longer pause for the final error message)
      const currentPause = isLastMessage ? FINAL_PAUSE_DURATION : PAUSE_DURATION;
      setTimeout(clearAndNext, currentPause);
    }
  }

  // 3. Instant clear and proceed to next message
  function clearAndNext() {
    statusTextElement.textContent = "";
    currentIndex++;
    if (currentIndex >= messages.length) {
      currentIndex = 0;
    }
    setTimeout(playNextMessage, 80);
  }

  // Start typing current message
  typeChar();
}

// Start simulation on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(playNextMessage, INITIAL_DELAY);
});
