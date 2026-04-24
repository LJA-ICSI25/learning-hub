/**
 * Tech+ (FC0-U71) weighted review — narrative content aligned to common exam emphasis
 * (approximate topic weights). Loaded before learn-hub-app.js.
 */
window.LEARN_HUB_TECH_WEIGHTED_CRAM_HTML = `
<div class="tech-prose lh-weighted-cram">
  <p class="lh-weighted-cram-lead"><strong>This lesson is a dense review sheet.</strong> Topic groupings below follow typical FC0-U71 emphasis (approximate percentages shown). Use the chapter study segments in the sidebar for depth; use this page for fast re-reads before a voucher attempt.</p>

  <h2>Infrastructure (about 24% of typical emphasis)</h2>
  <p><strong>Computing devices</strong> span smartphones, tablets, laptops, <strong>servers</strong> (more robust hardware for client services), workstations, IoT endpoints, and consoles. Know which form factor fits a scenario (always-on services → server; mobility → laptop/tablet; constrained sensors → IoT).</p>
  <p><strong>Internal components:</strong> The <strong>motherboard</strong> is the backbone bus connecting <strong>CPU</strong>, <strong>RAM</strong>, storage, expansion, and power delivery. <strong>RAM</strong> is volatile working memory; <strong>HDD / SSD / NVMe</strong> are non-volatile storage with different speed and cost profiles. A <strong>NIC</strong> provides Ethernet (or similar) connectivity; a <strong>GPU</strong> accelerates graphics and parallel workloads.</p>
  <p><strong>Storage types:</strong> Contrast <strong>volatile vs non-volatile</strong>; <strong>local</strong> (inside or attached to the device), <strong>network</strong> (NAS/SAN-style access), and <strong>cloud</strong> (provider-managed, accessed over the network). Exam items often test whether you pick the storage that matches latency, durability, and control requirements.</p>
  <p><strong>Peripherals:</strong> Printers, scanners, monitors, and similar devices need correct <strong>drivers</strong> so the OS can translate generic commands into vendor-specific behavior. Installation order-of-operations questions often hinge on “driver before heavy use” and verification prints/scans.</p>
  <p><strong>Interfaces:</strong> Match <strong>USB</strong> (general data/power), <strong>HDMI / DisplayPort</strong> (digital video), <strong>Ethernet</strong> (wired LAN), <strong>Bluetooth</strong> (short-range wireless peripherals), and <strong>NFC</strong> (tap-to-pair or light data exchange) to the scenario.</p>
  <p><strong>Virtualization and cloud models:</strong> A <strong>hypervisor</strong> hosts multiple guest OS instances on one machine. <strong>SaaS</strong> delivers ready-to-use applications; <strong>PaaS</strong> delivers a managed runtime/platform for your apps; <strong>IaaS</strong> gives you the most control over virtualized infrastructure. <strong>Hybrid</strong> mixes cloud and on-premises; <strong>on-premises</strong> means you own/operate the facility and stack.</p>
  <p><strong>Networking basics:</strong> <strong>LAN</strong> covers a site or building; <strong>WAN</strong> links broader geography. Hosts have <strong>IP</strong> (routable logical) and <strong>MAC</strong> (interface hardware) addresses. <strong>Routers</strong> forward between networks; <strong>switches</strong> forward frames inside a LAN; <strong>firewalls</strong> enforce policy between trust zones.</p>
  <p><strong>Wireless (802.11):</strong> Know that newer generations aim for higher throughput but real speed still drops with <strong>distance, interference, congestion, and band</strong> (2.4 vs 5 vs 6 GHz tradeoffs). Security settings pair with this domain on exams (WPA2/WPA3, strong passphrases).</p>

  <h2>Applications and software (about 18%)</h2>
  <p><strong>Operating systems</strong> appear across mobile, desktop, server, and embedded roles—pick the OS class that matches constraints (real-time / appliance / general-purpose).</p>
  <p><strong>OS pieces you should verbalize quickly:</strong> <strong>File systems</strong> such as <strong>NTFS</strong> vs <strong>FAT32</strong> (features vs compatibility), <strong>GUI vs command-line</strong> interfaces, built-in <strong>utilities</strong> (disk cleanup, defrag where relevant), and <strong>drivers</strong> bridging hardware to the kernel.</p>
  <p><strong>Software types:</strong> Productivity suites, collaboration tools, <strong>web browsers</strong>, and remote-support agents—know their purpose, not brand trivia.</p>
  <p><strong>Browser hygiene:</strong> <strong>Private browsing</strong> reduces local trail on <em>that</em> device but does not anonymize you to networks or servers; <strong>add-ons</strong> extend behavior but add risk; <strong>password managers</strong> improve uniqueness; <strong>cache clearing</strong> fixes stale assets and privacy on shared machines.</p>
  <p><strong>Artificial intelligence on Tech+:</strong> Be able to separate <strong>chatbots / assistants</strong> (interactive help) from <strong>generative</strong> (new content) vs <strong>predictive</strong> (classification/forecast) patterns—exam wording rewards tight definitions.</p>

  <h2>Security (about 19%)</h2>
  <p><strong>Device security:</strong> Anti-malware, host <strong>firewalls</strong>, <strong>patching</strong>, <strong>physical security</strong> (locks, cable anchors), and <strong>safe browsing</strong> habits form a layered baseline.</p>
  <p><strong>Password practices:</strong> Longer passphrases beat short complex ones; avoid <strong>reuse</strong> across sites; never share; use a <strong>password manager</strong> where policy allows.</p>
  <p><strong>Encryption:</strong> <strong>Data at rest</strong> (disk/file/volume), <strong>data in transit</strong> (TLS—think <strong>HTTPS</strong>), <strong>VPNs</strong> for tunneled transport, and mobile-device encryption settings. Questions often test whether you pick the control that matches the threat (sniffing on untrusted Wi-Fi → VPN/TLS, stolen laptop → full-disk encryption).</p>

  <h2>Tech concepts and terminology (about 13%)</h2>
  <p><strong>Computing basics:</strong> The <strong>IPOS</strong> story—<strong>input</strong>, <strong>processing</strong>, <strong>output</strong>, and <strong>storage</strong>—frames almost every “what happens first / where does data live” question.</p>
  <p><strong>Notational systems:</strong> Be fluent moving among <strong>binary, decimal, hexadecimal, and octal</strong> representations for small values and nibbles/bytes where the exam shows them.</p>
  <p><strong>Units:</strong> Storage ladder <strong>bit → byte → KB → MB → GB → TB</strong>; clock <strong>MHz / GHz</strong>; throughput <strong>bps, Mbps, Gbps</strong>. Watch whether the stem asks for <strong>capacity</strong> vs <strong>transfer rate</strong>.</p>
  <p><strong>Troubleshooting methodology:</strong> <strong>Identify</strong> the problem, <strong>theorize</strong> causes, <strong>test</strong> theories, <strong>plan</strong> a fix, <strong>implement</strong>, <strong>verify</strong>, and <strong>document</strong>—order questions punish “jump straight to reinstall” answers when a cheaper check should come first.</p>

  <h2>Software development concepts (about 13%)</h2>
  <p><strong>Languages:</strong> <strong>Compiled</strong> vs <strong>interpreted</strong> vs <strong>scripting</strong>; <strong>markup</strong> (structure, not Turing-complete logic the way exam frames it); <strong>assembly</strong> close to hardware.</p>
  <p><strong>Data types:</strong> <strong>char, strings, numeric integers/floats, Boolean</strong>—match literals and operations to the declared type story in the stem.</p>
  <p><strong>Core ideas:</strong> <strong>Variables vs constants</strong>, <strong>arrays</strong>, <strong>functions</strong>/<strong>methods</strong>, and <strong>objects</strong> as bundles of state + behavior. Trace <strong>branching</strong> and <strong>loops</strong> one iteration at a time on tricky questions.</p>
  <p><strong>Organization:</strong> <strong>Pseudocode</strong> and <strong>flowcharts</strong> communicate logic; <strong>object-oriented</strong> decomposition shows up as “model nouns as objects with responsibilities.”</p>

  <h2>Data and database fundamentals (about 13%)</h2>
  <p><strong>Value of data:</strong> Decisions, reporting, and (where allowed) monetization hinge on trustworthy, timely data—not just volume.</p>
  <p><strong>Database concepts:</strong> <strong>Relational</strong> (tables, strict schema) vs <strong>non-relational</strong> (flexible shapes for certain workloads). A <strong>table</strong> holds <strong>rows</strong> (records) and <strong>columns</strong> (fields). <strong>Primary keys</strong> uniquely identify a row; <strong>foreign keys</strong> reference other rows for integrity.</p>
  <p><strong>Use patterns:</strong> <strong>Queries</strong> retrieve subsets; <strong>reports</strong> summarize for people; <strong>scalability</strong> and <strong>cloud vs local</strong> trade control, latency, and OpEx.</p>
  <p><strong>Backups:</strong> File-level vs system images; <strong>local vs cloud</strong> targets; always pair backups with <strong>restore testing</strong>—a backup you have never restored is a hope, not a plan.</p>

  <p class="lh-weighted-cram-foot"><em>Topic weights (13% / 24% / 18% / 13% / 13% / 19%) match the official-style emphasis buckets used in this hub’s voucher scoring: each objective domain splits across those buckets, then each voucher question inherits a normalized weight. Your practice <strong>100–900</strong> estimate is <code>100 + round(800 × weighted correct fraction)</code> on the questions in the current run, where the fraction counts each item by that weight. CompTIA’s real exam uses a proprietary scaled score—this version is transparent and for study only. Align answers with official objective wording.</em></p>
</div>
`.trim();
