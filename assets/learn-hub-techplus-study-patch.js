/**
 * Optional HTML merged after bundled Tech+ Markdown for selected lesson ids.
 * Loaded before learn-hub-app.js so the curriculum merge picks it up.
 */
window.LEARN_HUB_TECHPLUS_STUDY_PATCH = {
  "tech-sg-01-01":
    '<aside class="lh-pattern-block lh-pattern-block--meta" role="note">' +
    '<h4 class="lh-pattern-title">Objective-first study</h4>' +
    "<p>The sidebar groups this track by <strong>objective domain</strong> (numbered 1–12), then short <strong>Study</strong> steps. " +
    "Each step is one reading bite—use the <strong>Study map</strong> to jump, then try <strong>Quick practice</strong> (10, 15, 20, or all questions) on quiz steps.</p>" +
    "</aside>",
  "tech-sg-01-02":
    '<aside class="lh-pattern-block lh-pattern-block--pseudocode" role="note">' +
    '<h4 class="lh-pattern-title">Pseudocode (how you will see procedures)</h4>' +
    "<p>Pseudocode states intent without tying you to one programming language—common in certification objectives.</p>" +
    '<pre class="lh-pseudo-pre"><code>PROCEDURE UpgradeWorkstationRAM\n' +
    "  POWER_OFF workstation\n" +
    "  OPEN case_latch\n" +
    "  IF new_module.DDR_generation != slot.generation THEN\n" +
    "    ABORT \"DDR mismatch\"\n" +
    "  END IF\n" +
    "  SEAT module until retention_clips CLICK\n" +
    "  POWER_ON and RUN memory_self_test\n" +
    "END PROCEDURE</code></pre>" +
    "</aside>" +
    '<aside class="lh-pattern-block lh-pattern-block--tiers" role="note">' +
    '<h4 class="lh-pattern-title">Software &amp; support tiers (real workplaces)</h4>' +
    "<ul class=\"lh-tier-list\"><li><strong>Consumer / home</strong> — preinstalled apps, informal backups, single user.</li>" +
    "<li><strong>Small business</strong> — directory accounts, antivirus policy, break/fix vendor.</li>" +
    "<li><strong>Enterprise / regulated</strong> — change windows, ticketing + CMDB, centralized patch and logging.</li></ul>" +
    "</aside>" +
    '<aside class="lh-pattern-block lh-pattern-block--real" role="note">' +
    "<h4 class=\"lh-pattern-title\">Real-life tie-in</h4>" +
    "<p>A school district refreshes lab PCs: technicians verify DDR4 vs DDR5 on the purchase order, match keyed notches, seat modules evenly, then image the fleet overnight—exactly the kind of careful sequence exam items reward.</p>" +
    "</aside>",
};
