/*
 * Human EvoGen Mapper — application script (read-only copy)
 * The app runs entirely from index.html; this file is a copy of its <script> blocks,
 * kept so the code is easy to browse and counted in GitHub's language bar.
 * Not loaded by the page — edit index.html, not this file.
 */

        const startMya = 23, endMya = 0, leftMargin = 40, rightMargin = 980;
        const timelineWidth = rightMargin - leftMargin;
        const timelineY = 90;
        const PIN_HEAD_R = 4;
        const PIN_STEM_H = 10;
        const PIN_HEAD_Y = timelineY - PIN_STEM_H - PIN_HEAD_R;
        const GUIDE_LINE_TOP = timelineY + 8;
        const GUIDE_LINE_BOTTOM = 540;

        const masterBackingData = {
  "hominidae": {
    "markers": [
      {
        "age": 23,
        "x": 25
      },
      {
        "age": 5.3,
        "x": 420
      },
      {
        "age": 2.6,
        "x": 700
      },
      {
        "age": 0,
        "x": 980
      }
    ],
    "periods": [
      {
        "name": "Miocene",
        "start": 23,
        "end": 5.3,
        "xOffset": 0
      },
      {
        "name": "Pliocene",
        "start": 5.3,
        "end": 2.6,
        "xOffset": 0
      },
      {
        "name": "Pleistocene / Holocene",
        "start": 2.6,
        "end": 0,
        "xOffset": 0
      }
    ],
    "nodes": [
      {
        "id": "root",
        "label": "Miocene Ape",
        "mya": 15,
        "x": null,
        "y": 296,
        "isRoot": true,
        "extinct": true,
        "labelYOffset": 20,
        "labelXOffset": -40,
        "profile": {
          "scientificName": "Miocene Ape (Fossil Based AI Reconstruction)",
          "commonName": "Miocene Apes",
          "taxonomicClassification": "Order: Primates, Family: Proconsulidae",
          "geologicalAge": "15 MYA",
          "habitat": "Forests, Woodlands ",
          "diet": "Frugivorous ",
          "distinguishingFeatures": "• Grasping hands and feet adapted for climbing.\n• No external tail, unlike most monkeys.\n• Flexible shoulders and limbs suited to arboreal movement.",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Early%20Myocine%20Ape/Early%20Myocene%20Ape.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Early%20Myocine%20Ape/Early%20Myocene%20ape.png"
          ],
          "ancestor": "Other Miocene apes",
          "extinctionMya": 0
        }
      },
      {
        "id": "hom_spawn_1792036943759",
        "label": "Dryopithecus",
        "mya": 12.5,
        "x": null,
        "y": 342,
        "extinct": true,
        "labelYOffset": 0,
        "labelXOffset": 5,
        "profile": {
          "scientificName": "𝘋𝘳𝘺𝘰𝘱𝘪𝘵𝘩𝘦𝘤𝘶𝘴 sp.",
          "commonName": "Fossil Ape",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "12.5 MYA",
          "habitat": "Seasonal subtropical forests (Europe)",
          "diet": "Frugivorous (Fruit Eating)",
          "distinguishingFeatures": "• Long arms and powerful hands suited for climbing and \n• Ape-like face and teeth\n• May have Quadrupedal movement. ",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Dryopithecus/Dryopithecus.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Dryopithecus/Dryopithecus%20(Skull).png"
          ],
          "extinctionMya": 9.5,
          "ancestor": ""
        }
      },
      {
        "id": "hom_spawn_1792036993860",
        "label": "Sivapithecus",
        "mya": 12.7,
        "x": null,
        "y": 223,
        "extinct": true,
        "labelYOffset": 0,
        "labelXOffset": 5,
        "profile": {
          "scientificName": "𝘚𝘪𝘷𝘢𝘱𝘪𝘵𝘩𝘦𝘤𝘶𝘴 sp.",
          "commonName": "Orangutan-like fossil ape*",
          "taxonomicClassification": "Order: Primates, Family: Hominidae, Subfamily: Ponginae",
          "geologicalAge": "12.7 MYA",
          "habitat": "Forested environments",
          "diet": "Frugivorous",
          "distinguishingFeatures": "• Orangutan-like facial structure.\n• Powerful Jaws, thick molar enamel.\n• Limbs and body adapted for climbing.",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Sivapithechus/Sivapithecus.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Sivapithechus/Sivapithechus%20(Skull).png"
          ],
          "extinctionMya": 8.5,
          "ancestor": "Orangutan evolutionary lineage"
        }
      },
      {
        "id": "hom_spawn_1792037107508",
        "label": "Early Hominin Broad Lineage",
        "mya": 7,
        "x": null,
        "y": 328,
        "extinct": true,
        "labelYOffset": 15,
        "labelXOffset": -22,
        "profile": {
          "scientificName": "Early Hominins",
          "commonName": "Toumai, Ardi",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "7 MYA",
          "habitat": "Forests, Woodlands ",
          "diet": "Omnivorous ",
          "distinguishingFeatures": "• Small brain \n• Reduced canine teeth\n• Evidence of early bipedalism.",
          "status": "extant_extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Early%20Homonid%20Ancestor/Early%20homonin.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Early%20Homonid%20Ancestor/Early%20Homonin(Skull).png"
          ],
          "extinctionMya": 0,
          "ancestor": "Miocene Ape\n(Distant Ancestor)"
        }
      },
      {
        "id": "hom_spawn_1792040217124",
        "label": "Australopithecus",
        "mya": 4.2,
        "x": null,
        "y": 293,
        "extinct": true,
        "labelYOffset": 0,
        "labelXOffset": 0,
        "profile": {
          "scientificName": "𝘈𝘶𝘴𝘵𝘳𝘢𝘭𝘰𝘱𝘪𝘵𝘩𝘦𝘤𝘶𝘴 sp.",
          "commonName": "Southern ape",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "4.2 MYA",
          "habitat": "Woodlands, \nOpen grasslands",
          "diet": "Omnivorous",
          "distinguishingFeatures": "• Habitual bipedalism\n• Small brain (400–550 cc)\n• Long arms and curved fingers",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Australopithecus/Australopithecus.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Australopithecus/Australopithicus%20Skull.png"
          ],
          "extinctionMya": 2,
          "ancestor": ""
        }
      },
      {
        "id": "hom_spawn_1792040248110",
        "label": "Homo habilis",
        "mya": 2.4,
        "x": null,
        "y": 388,
        "extinct": true,
        "labelYOffset": -13,
        "labelXOffset": 0,
        "profile": {
          "scientificName": "𝘏𝘰𝘮𝘰 𝘩𝘢𝘣𝘪𝘭𝘪𝘴",
          "commonName": "Handy man",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "2.4 MYA",
          "habitat": "Open woodlands Grasslands",
          "diet": "Omnivorous",
          "distinguishingFeatures": "• Larger brain than australopithecines\n• Small face and teeth\n• Associated with early stone tools",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20Habilis/Homo%20Habilis.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20Habilis/Homo%20Habilis%20(Skull).png"
          ],
          "extinctionMya": 1.4,
          "ancestor": "Australopithecus"
        }
      },
      {
        "id": "hom_spawn_1792040343893",
        "label": "Homo erectus",
        "mya": 1.9,
        "x": null,
        "y": 446,
        "extinct": true,
        "labelYOffset": 13,
        "labelXOffset": -12,
        "profile": {
          "scientificName": "𝘏𝘰𝘮𝘰 𝘦𝘳𝘦𝘤𝘵𝘶𝘴",
          "commonName": "Upright man",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "1.9 MYA",
          "habitat": "Grasslands, Woodlands \nOpen habitats",
          "diet": "Omnivorous",
          "distinguishingFeatures": "• Fully upright body proportions\n• Long, low skull (600–1,100 cc)\n• Thick cranial bones and prominent brow ridges",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20erectus/Homo%20Erectus%20.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20erectus/Homo.erectus%20(Skull).png"
          ],
          "extinctionMya": 0,
          "ancestor": ""
        }
      },
      {
        "id": "hom_spawn_1792040481584",
        "label": "Homo neanderthalensis",
        "mya": 0.4,
        "x": null,
        "y": 419,
        "extinct": true,
        "labelYOffset": -16,
        "labelXOffset": -23,
        "profile": {
          "scientificName": "𝘏𝘰𝘮𝘰 𝘯𝘦𝘢𝘯𝘥𝘦𝘳𝘵𝘩𝘢𝘭𝘦𝘯𝘴𝘪𝘴",
          "commonName": "Neanderthal",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "0.4 MYA",
          "habitat": "Woodlands,\nOpen landscapes Cold environments",
          "diet": "Omnivorous",
          "distinguishingFeatures": "• Robust body, Large nasal aperture\n• Prominent brow ridges\n• Long, low skull with an occipital bun\n• Brain size 1,200–1,750 cc, \n",
          "status": "extinct",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20neanderthanlensis/Homo%20neanderthalensis.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20neanderthanlensis/Homo%20neanderthalensis%20(Skull).png"
          ],
          "extinctionMya": 0.04,
          "ancestor": ""
        }
      },
      {
        "id": "hom_spawn_1792040594423",
        "label": "Homo sapiens",
        "mya": 0.3,
        "x": null,
        "y": 467,
        "extinct": false,
        "labelYOffset": 0,
        "labelXOffset": 0,
        "profile": {
          "scientificName": "𝘏𝘰𝘮𝘰 𝘴𝘢𝘱𝘪𝘦𝘯𝘴",
          "commonName": "Modern Human",
          "taxonomicClassification": "Order: Primates, Family: Hominidae",
          "geologicalAge": "0.3 MYA",
          "habitat": "Global,\nAll terrestrial Environments",
          "diet": "Omnivorous",
          "distinguishingFeatures": "• High, rounded skull (1,200–1,600 cc)\n• Prominent chin\n• Reduced brow ridges",
          "status": "living",
          "emoji": "🦍",
          "images": [
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20sapiens/Homo%20sapiens.png",
            "https://raw.githubusercontent.com/Dray-Ashcroft/Homnid-EvoGen/refs/heads/main/Evolution%20Assets/Homo%20sapiens/Homo%20sapiens%20(Skull).png"
          ],
          "extinctionMya": 0,
          "ancestor": "Neanderthal"
        }
      }
    ],
    "edges": [
      {
        "parent": "root",
        "child": "hom_spawn_1792036943759",
        "style": "dotted"
      },
      {
        "parent": "root",
        "child": "hom_spawn_1792036993860",
        "style": "dotted"
      },
      {
        "parent": "root",
        "child": "hom_spawn_1792037107508",
        "style": "dotted"
      },
      {
        "parent": "hom_spawn_1792037107508",
        "child": "hom_spawn_1792040217124",
        "style": "dotted"
      },
      {
        "parent": "hom_spawn_1792037107508",
        "child": "hom_spawn_1792040248110",
        "style": "dotted"
      },
      {
        "parent": "hom_spawn_1792040248110",
        "child": "hom_spawn_1792040343893",
        "style": "dotted"
      },
      {
        "parent": "hom_spawn_1792040343893",
        "child": "hom_spawn_1792040481584",
        "style": "dotted"
      },
      {
        "parent": "hom_spawn_1792040343893",
        "child": "hom_spawn_1792040594423",
        "style": "dotted"
      }
    ]
  }
};

        let lineagesData = JSON.parse(JSON.stringify(masterBackingData));

        // ── Connection style (per edge): { parent, child, style?: 'solid' | 'dotted' }
        // Missing or unknown values are treated as 'solid', so older saved maps
        // load unchanged. The style is a visual annotation only (e.g. uncertain or
        // broad relationship) — it never implies direct ancestry.
        function getEdgeStyle(edge) {
            return (edge && edge.style === 'dotted') ? 'dotted' : 'solid';
        }

        function setEdgeStyle(parentId, childId, style) {
            const dataset = lineagesData[currentCladeId];
            const edge = dataset.edges.find(e => e.parent === parentId && e.child === childId);
            const next = style === 'dotted' ? 'dotted' : 'solid';
            if (!edge || getEdgeStyle(edge) === next) return;
            pushUndoSnapshot('Link style: ' + parentId + ' -> ' + childId);
            edge.style = next;
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(dataset));
            renderActiveCladeEngine();
        }

        function onEdgeStyleButton(btn) {
            setEdgeStyle(btn.dataset.parent, btn.dataset.child, btn.dataset.style);
        }

        // Selector rows for every connection that ends at this node (normally one: its parent link)
        function edgeStyleControlsHtml(nodeId) {
            const dataset = lineagesData[currentCladeId];
            if (!dataset) return '';
            return dataset.edges.filter(e => e.child === nodeId).map(e => {
                const parent = dataset.nodes.find(n => n.id === e.parent);
                const st = getEdgeStyle(e);
                const attrs = `data-parent="${escHtml(e.parent)}" data-child="${escHtml(e.child)}"`;
                return `<div class="edge-style-row">
                    <span class="edge-style-label">Link from ${escHtml(parent ? parent.label : e.parent)}</span>
                    <span class="edge-style-toggle" role="group" aria-label="Connection style">
                        <button type="button" class="edge-style-opt${st === 'solid' ? ' active' : ''}" aria-pressed="${st === 'solid'}" ${attrs} data-style="solid" onclick="onEdgeStyleButton(this)">━ Solid</button>
                        <button type="button" class="edge-style-opt${st === 'dotted' ? ' active' : ''}" aria-pressed="${st === 'dotted'}" ${attrs} data-style="dotted" onclick="onEdgeStyleButton(this)">┈ Dotted</button>
                    </span>
                </div>`;
            }).join('');
        }

        // Keep every open selector (dev panel, spawn fine-tune) in step with the data,
        // including after undo/redo or APPLY CHANGES.
        function refreshEdgeStyleHosts() {
            document.querySelectorAll('.edge-style-host').forEach(host => {
                host.innerHTML = host.dataset.node ? edgeStyleControlsHtml(host.dataset.node) : '';
            });
            const dataset = lineagesData[currentCladeId];
            const legendItem = document.getElementById('tsl-dotted-link-item');
            if (legendItem) legendItem.hidden = !(dataset && dataset.edges.some(e => getEdgeStyle(e) === 'dotted'));
        }
        let currentCladeId = "hominidae";
        let localSelectedNodeId = null;
        let isEvolutionTrackActive = false;
        let allocatedProfileTabs = new Set();

        function getXCoordinate(mya) {
            return leftMargin + ((startMya - mya) / (startMya - endMya)) * timelineWidth;
        }

        function resolveNodeXCoordinate(node, activeDataset) {
            const isLockEnabled = document.getElementById("lock-geological-scale").checked;
            const connectPinsOn = document.getElementById("connect-pins").checked;

            if (activeDataset.markers) {
                // Exact marker match when lock is enabled
                if (isLockEnabled) {
                    const exact = activeDataset.markers.find(m => m.age === node.mya);
                    if (exact && exact.x !== undefined && exact.x !== null) return exact.x;
                }

                // Interpolate between nearest markers when Connect Pins is ON
                if (connectPinsOn) {
                    const sorted = [...activeDataset.markers].sort((a, b) => b.age - a.age);
                    for (let i = 0; i < sorted.length - 1; i++) {
                        if (sorted[i].age >= node.mya && sorted[i+1].age <= node.mya) {
                            const t = (sorted[i].age - node.mya) / (sorted[i].age - sorted[i+1].age);
                            return sorted[i].x + t * (sorted[i+1].x - sorted[i].x);
                        }
                    }
                }
            }

            return (node.x !== undefined && node.x !== null) ? node.x : getXCoordinate(node.mya);
        }

        document.addEventListener("DOMContentLoaded", () => { renderActiveCladeEngine(); initAutosave(); });

        // ── AUTOSAVE (this browser only) ──
        // Keeps a copy of the on-screen tree every few seconds so closing or
        // refreshing the page never loses work. On the next open, if that copy
        // differs from the data built into this file, the user chooses to
        // restore or discard it — nothing is overwritten silently.
        // Storage can be unavailable (private mode, in-app previews): every
        // access is wrapped so the page works the same without it.
        const AUTOSAVE_KEY = 'human-evogen-mapper:autosave:v1';
        let autosaveActive = false, autosaveLast = '';

        function readAutosave() {
            try {
                const raw = localStorage.getItem(AUTOSAVE_KEY);
                if (!raw) return null;
                const d = JSON.parse(raw);
                const ok = d && d.data && typeof d.data === 'object' && Object.values(d.data).length > 0 &&
                    Object.values(d.data).every(c => c && Array.isArray(c.nodes) && Array.isArray(c.edges) && Array.isArray(c.markers) && Array.isArray(c.periods));
                return ok ? d : null;
            } catch (_) { return null; }
        }

        function writeAutosave(force) {
            if (!autosaveActive) return;
            let json;
            try { json = JSON.stringify(lineagesData); } catch (_) { return; }
            if (!force && json === autosaveLast) return;
            try {
                localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({ savedAt: new Date().toISOString(), data: lineagesData }));
                autosaveLast = json;
            } catch (_) { /* storage full or blocked — keep working without it */ }
        }

        function startAutosave() {
            if (autosaveActive) return;
            autosaveActive = true;
            writeAutosave(true);
            setInterval(() => writeAutosave(false), 3000);
            window.addEventListener('pagehide', () => writeAutosave(true));
            document.addEventListener('visibilitychange', () => { if (document.hidden) writeAutosave(true); });
        }

        function initAutosave() {
            const draft = readAutosave();
            if (!draft || JSON.stringify(draft.data) === JSON.stringify(masterBackingData)) { startAutosave(); return; }
            let when = '';
            try { when = new Date(draft.savedAt).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); } catch (_) {}
            const nodeCount = Object.values(draft.data).reduce((t, c) => t + c.nodes.length, 0);
            const bar = document.createElement('div');
            bar.id = 'autosave-restore-bar';
            bar.setAttribute('role', 'alertdialog');
            bar.innerHTML = `<span>Unsaved work found on this device${when ? ' (' + escHtml(when) + ')' : ''}: ${nodeCount} node${nodeCount === 1 ? '' : 's'}.</span>
                <span class="asr-btns"><button type="button" id="asr-restore">Restore</button><button type="button" id="asr-discard">Discard</button></span>`;
            document.body.appendChild(bar);
            document.getElementById('asr-restore').onclick = () => {
                Object.keys(draft.data).forEach(k => {
                    lineagesData[k] = JSON.parse(JSON.stringify(draft.data[k]));
                    masterBackingData[k] = JSON.parse(JSON.stringify(draft.data[k]));
                });
                undoStack = []; redoStack = []; updateUndoRedoUI();
                invalidateLineageColorCache();
                localSelectedNodeId = null;
                renderActiveCladeEngine();
                bar.remove(); startAutosave();
            };
            document.getElementById('asr-discard').onclick = () => {
                if (!confirm('Discard the unsaved work stored on this device? This cannot be undone.')) return;
                try { localStorage.removeItem(AUTOSAVE_KEY); } catch (_) {}
                bar.remove(); startAutosave();
            };
        }

        function handleScaleLockToggle() {
            const cb = document.getElementById("lock-geological-scale");
            const fb = document.getElementById("sync-feedback-text");
            fb.textContent = cb.checked ? "🟢 Geological Scale Locked" : "🟠 Geological Scale Unlocked";
            fb.style.color = cb.checked ? "#10b981" : "#f59e0b";
            renderActiveCladeEngine();
        }

        function handleConnectPinsToggle() { renderActiveCladeEngine(); }

        function applyMatrixChanges() {
            const textarea = document.getElementById("state-debugger");
            try {
                const parsed = JSON.parse(textarea.value);
                if (!parsed.nodes || !parsed.edges || !parsed.markers || !parsed.periods) throw new Error("Missing arrays");
                if (!confirm("Apply JSON changes? This will overwrite the current master state. Undo (Ctrl+Z) is available if needed.")) return;
                pushUndoSnapshot('Apply JSON');
                invalidateLineageColorCache();
                lineagesData[currentCladeId] = parsed;
                // Auto-persist into masterBackingData so RESET restores to this state
                masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(parsed));
                renderActiveCladeEngine();
                if (localSelectedNodeId) {
                    const n = parsed.nodes.find(n => n.id === localSelectedNodeId);
                    if (n) selectTaxonNode(n);
                }
            } catch(e) { alert("Invalid JSON structure"); }
        }

        function resetMatrixChanges() {
            pushUndoSnapshot('Reset');
            invalidateLineageColorCache();
            lineagesData[currentCladeId] = JSON.parse(JSON.stringify(masterBackingData[currentCladeId]));
            renderActiveCladeEngine();
            if (localSelectedNodeId) {
                const n = lineagesData[currentCladeId].nodes.find(n => n.id === localSelectedNodeId);
                if (n) selectTaxonNode(n);
            }
        }

        function refreshEditorTextArea() {
            document.getElementById("state-debugger").value = JSON.stringify(lineagesData[currentCladeId], null, 2);
        }

        function allocateProfileTab() {
            if (!localSelectedNodeId) return;
            const dataset = lineagesData[currentCladeId];
            const targetNode = dataset.nodes.find(n => n.id === localSelectedNodeId);
            if (!targetNode) return;
            const uid = `profile-tab-${targetNode.id}`;
            if (!allocatedProfileTabs.has(targetNode.id)) {
                allocatedProfileTabs.add(targetNode.id);
                const tabContainer = document.getElementById("workspace-tabs");
                const btn = document.createElement("button");
                btn.id = uid; btn.className = "tab-btn profile-tab-item";
                btn.innerHTML = `<span></span><span class="tab-close-icon" onclick="destroyProfileTab(event,'${targetNode.id}')">&times;</span>`;
                btn.querySelector('span').textContent = targetNode.label;
                btn.addEventListener("click", (e) => {
                    if (e.target.classList.contains("tab-close-icon")) return;
                    activateProfileViewContext(targetNode.id, targetNode.label);
                });
                tabContainer.appendChild(btn);
            }
            activateProfileViewContext(targetNode.id, targetNode.label);
        }

        function activateProfileViewContext(nodeId, nodeLabel) {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            const t = document.getElementById(`profile-tab-${nodeId}`);
            if (t) t.classList.add("active");
            document.getElementById("cladogram-view-wrapper").style.display = "none";
            const pw = document.getElementById("profile-view-wrapper");
            pw.style.display = "flex";
            pw.style.flexDirection = "column";
            document.getElementById("stat-active-clade").textContent = nodeLabel + " Profile";
            // Set activeProfileNodeId eagerly so isProfileViewActive() returns true immediately
            activeProfileNodeId = nodeId;
            activeProfileClade = currentCladeId;
            // Remove zoom-pan-active so touch-action:none doesn't bleed into the profile card
            const container = document.querySelector('.canvas-container');
            if (container) container.classList.remove('zoom-pan-active');
            // Hide zoom/pan controls — isProfileViewActive() is now reliable
            applyControlsRowVisibility();
            // Render the profile card (will overwrite activeProfileNodeId/Clade with same values)
            renderProfileCard(nodeId, currentCladeId);
        }

        function destroyProfileTab(event, nodeId) {
            event.stopPropagation();
            const t = document.getElementById(`profile-tab-${nodeId}`);
            const wasActive = t.classList.contains("active");
            t.remove(); allocatedProfileTabs.delete(nodeId);
            if (wasActive) {
                profileEditMode = false;
                switchLineageTab(currentCladeId);
            }
        }

        function toggleEvolutionTrack() {
            const btn = document.getElementById("evolution-track-btn");
            isEvolutionTrackActive = !isEvolutionTrackActive;
            btn.classList.toggle("active", isEvolutionTrackActive);
            renderActiveCladeEngine();
        }

        let gearHoldTimer = null;
        let gearProgressAnim = null;
        let isDevModeActive = false;

        function startGearHold(e) {
            e.preventDefault();
            // If already active, single click turns it off
            if (isDevModeActive) { disableDevMode(); return; }

            const circle = document.querySelector(".dev-gear-progress circle");
            const circumference = 2 * Math.PI * 15.5; // r=15.5
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;

            const duration = 2000;
            const startTime = performance.now();

            function animateProgress(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                circle.style.strokeDashoffset = circumference * (1 - progress);
                if (progress < 1) {
                    gearProgressAnim = requestAnimationFrame(animateProgress);
                }
            }
            gearProgressAnim = requestAnimationFrame(animateProgress);

            gearHoldTimer = setTimeout(() => {
                cancelAnimationFrame(gearProgressAnim);
                circle.style.strokeDashoffset = circumference;
                showDevModal();
            }, duration);
        }

        function cancelGearHold() {
            if (gearHoldTimer) { clearTimeout(gearHoldTimer); gearHoldTimer = null; }
            if (gearProgressAnim) { cancelAnimationFrame(gearProgressAnim); gearProgressAnim = null; }
            const circle = document.querySelector(".dev-gear-progress circle");
            const circumference = 2 * Math.PI * 15.5;
            circle.style.strokeDashoffset = circumference;
        }

        function showDevModal() {
            document.getElementById("dev-modal-overlay").classList.add("visible");
        }

        function closeDevModal() {
            document.getElementById("dev-modal-overlay").classList.remove("visible");
        }

        function enableDevMode() {
            closeDevModal();
            if (isSpawnModeActive) toggleSpawnMode(); // mutually exclusive with Spawn Mode
            isDevModeActive = true;
            const btn = document.getElementById("dev-gear-btn");
            btn.classList.add("dev-active");
            btn.title = "DEV ON";
            document.getElementById("developer-panel").classList.remove("collapsed");
            // Reveal the EDIT button immediately if a profile card is open
            if (activeProfileNodeId) renderProfileCard(activeProfileNodeId, activeProfileClade);
            showUndoStatus('⚙ Dev Mode ON');
        }

        function disableDevMode() {
            isDevModeActive = false;
            profileEditMode = false; // can't stay in an edit state that's no longer reachable
            const btn = document.getElementById("dev-gear-btn");
            btn.classList.remove("dev-active");
            btn.title = "DEV OFF";
            document.getElementById("developer-panel").classList.add("collapsed");
            // Hide the EDIT button and drop back to read-only if a profile card is open
            if (activeProfileNodeId) renderProfileCard(activeProfileNodeId, activeProfileClade);
            showUndoStatus('⚙ Dev Mode OFF');
        }

        // Legacy alias — keeps any other references working
        function switchLineageTab(targetClade) {
            closeProfileInfoPopover();
            currentCladeId = targetClade; localSelectedNodeId = null;
            // Clear profile state so isProfileViewActive() doesn't return stale true
            profileEditMode = false;
            activeProfileNodeId = null;
            activeProfileClade = null;
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            const t = document.getElementById(`tab-clade-${targetClade}`);
            if (t) t.classList.add("active");
            document.getElementById("profile-view-wrapper").style.display = "none";
            document.getElementById("cladogram-view-wrapper").style.display = "block";
            // Restore zoom-pan-active if pan/zoom is currently unlocked
            const container = document.querySelector('.canvas-container');
            if (container && !isPanZoomLocked) container.classList.add('zoom-pan-active');
            // Back on the cladogram canvas — zoom/pan controls are relevant again (if not toggled off)
            applyControlsRowVisibility();
            document.getElementById("stat-active-clade").textContent = targetClade;
            document.getElementById("node-meta-view").innerHTML = `<div class="instructions">Click any active node vector inside the cladogram canvas to balance structural coordinates.</div>`;
            renderActiveCladeEngine();
        }

        function calculateAncestralMap(selectedId, activeDataset) {
            const ancestorNodes = new Set(), ancestorEdges = new Set();
            if (!selectedId) return { ancestorNodes, ancestorEdges };
            let cur = selectedId;
            ancestorNodes.add(cur);
            while (cur !== "root") {
                const edge = activeDataset.edges.find(e => e.child === cur);
                if (!edge) break;
                ancestorEdges.add(`${edge.parent}->${edge.child}`);
                cur = edge.parent;
                ancestorNodes.add(cur);
            }
            return { ancestorNodes, ancestorEdges };
        }

        function renderActiveCladeEngine() {
            const gridGroup = document.getElementById("grid-group");
            const pinGuidesGroup = document.getElementById("pin-guides-group");
            const pinsGroup = document.getElementById("pins-group");
            const ticksContainer = document.getElementById("ticks-container");
            const periodsContainer = document.getElementById("periods-container");
            const edgesGroup = document.getElementById("edges-group");
            const nodesGroup = document.getElementById("nodes-group");
            const labelsGroup = document.getElementById("labels-group");

            ticksContainer.innerHTML = "";
            periodsContainer.innerHTML = "";
            const periodBands = document.getElementById("period-bands-group");
            if (periodBands) periodBands.innerHTML = "";
            pinGuidesGroup.innerHTML = "";
            pinsGroup.innerHTML = "";
            edgesGroup.innerHTML = "";
            nodesGroup.innerHTML = "";
            labelsGroup.innerHTML = "";

            while (gridGroup.children.length > 3) gridGroup.removeChild(gridGroup.lastChild);

            const activeDataset = lineagesData[currentCladeId];
            const connectPinsOn = document.getElementById("connect-pins").checked;
            const ns = "http://www.w3.org/2000/svg";

            // Resolve any age to X using actual marker positions when Connect Pins is ON
            const resolveAgeX = (age) => {
                if (connectPinsOn && activeDataset.markers) {
                    const exact = activeDataset.markers.find(m => m.age === age);
                    if (exact) return exact.x;
                    const sorted = [...activeDataset.markers].sort((a, b) => b.age - a.age);
                    for (let i = 0; i < sorted.length - 1; i++) {
                        if (sorted[i].age >= age && sorted[i+1].age <= age) {
                            const t = (sorted[i].age - age) / (sorted[i].age - sorted[i+1].age);
                            return sorted[i].x + t * (sorted[i+1].x - sorted[i].x);
                        }
                    }
                }
                return getXCoordinate(age);
            };

            // Update timeline bar to span first-to-last marker actual x values
            if (activeDataset.markers && activeDataset.markers.length >= 2) {
                const mSorted = [...activeDataset.markers].sort((a, b) => b.age - a.age);
                const bar = document.getElementById("timeline-bar");
                bar.setAttribute("x1", connectPinsOn ? mSorted[0].x : getXCoordinate(mSorted[0].age));
                bar.setAttribute("x2", connectPinsOn ? mSorted[mSorted.length-1].x : getXCoordinate(mSorted[mSorted.length-1].age));
            }

            if (activeDataset.markers && Array.isArray(activeDataset.markers)) {
                activeDataset.markers.forEach(marker => {
                    const x = (marker.x !== undefined && marker.x !== null) ? marker.x : getXCoordinate(marker.age);

                    // Guide line — only when Connect Pins is ON
                    if (connectPinsOn) {
                        const gl = document.createElementNS(ns, "line");
                        gl.setAttribute("x1", x); gl.setAttribute("y1", GUIDE_LINE_TOP);
                        gl.setAttribute("x2", x); gl.setAttribute("y2", GUIDE_LINE_BOTTOM);
                        gl.setAttribute("stroke", "var(--grid-line)");
                        gl.setAttribute("stroke-width", "1");
                        gl.setAttribute("stroke-dasharray", "4 4");
                        pinGuidesGroup.appendChild(gl);
                    }

                    // Pin stem
                    const stem = document.createElementNS(ns, "line");
                    stem.setAttribute("x1", x); stem.setAttribute("y1", PIN_HEAD_Y + PIN_HEAD_R);
                    stem.setAttribute("x2", x); stem.setAttribute("y2", timelineY);
                    stem.setAttribute("stroke", "var(--tick-line)");
                    stem.setAttribute("stroke-width", "1.5");
                    stem.setAttribute("stroke-linecap", "round");
                    pinsGroup.appendChild(stem);

                    // Pin head
                    const head = document.createElementNS(ns, "circle");
                    head.setAttribute("cx", x); head.setAttribute("cy", PIN_HEAD_Y);
                    head.setAttribute("r", PIN_HEAD_R);
                    head.setAttribute("fill", "#4b5563");
                    head.setAttribute("stroke", "#6b7280");
                    head.setAttribute("stroke-width", "1");
                    pinsGroup.appendChild(head);

                    // MYA label
                    const lbl = document.createElementNS(ns, "text");
                    lbl.setAttribute("x", x); lbl.setAttribute("y", PIN_HEAD_Y - PIN_HEAD_R - 4);
                    lbl.setAttribute("text-anchor", "middle");
                    lbl.setAttribute("class", "mya-label");
                    lbl.textContent = marker.age;
                    pinsGroup.appendChild(lbl);
                });
            }

            if (activeDataset.periods && Array.isArray(activeDataset.periods)) {
                const youngestEnd = Math.min(...activeDataset.periods.map(q => q.end));
                const PLOT_RIGHT_EDGE = 1140;   // where the dashed grid lines end
                activeDataset.periods.forEach((p, idx) => {
                    const sX = resolveAgeX(p.start);
                    // The youngest epoch runs on to the right edge: labels of recent taxa
                    // (e.g. Homo sapiens at 0.3 Mya) extend past the '0' mark.
                    const eX = (p.end === youngestEnd) ? Math.max(resolveAgeX(p.end), PLOT_RIGHT_EDGE) : resolveAgeX(p.end);
                    const finalX = sX + (eX - sX) / 2 + (p.xOffset || 0);
                    // Subtle alternating shade marks each epoch's span
                    if (periodBands && idx % 2 === 0) {
                        const band = document.createElementNS(ns, "rect");
                        band.setAttribute("x", Math.min(sX, eX)); band.setAttribute("width", Math.abs(eX - sX));
                        band.setAttribute("y", GUIDE_LINE_TOP); band.setAttribute("height", GUIDE_LINE_BOTTOM - GUIDE_LINE_TOP);
                        band.setAttribute("class", "period-band");
                        periodBands.appendChild(band);
                    }
                    const lbl = document.createElementNS(ns, "text");
                    // Sits between the timeline bar and the dotted line (y=145), not on it
                    lbl.setAttribute("x", finalX); lbl.setAttribute("y", timelineY + 42);
                    lbl.setAttribute("text-anchor", "middle");
                    lbl.setAttribute("class", "period-label");
                    lbl.textContent = p.name;
                    periodsContainer.appendChild(lbl);
                });
            }

            const isTrackingEffective = isEvolutionTrackActive && localSelectedNodeId !== null;
            const { ancestorNodes, ancestorEdges } = calculateAncestralMap(localSelectedNodeId, activeDataset);

            const lineageMap = computeLineageColorMap(activeDataset);
            const lineageColorOn = document.getElementById('lineage-color-toggle')
                ? document.getElementById('lineage-color-toggle').checked : true;
            const isolatedBranch = window._isolatedLineageBranch || null;

            activeDataset.edges.forEach(edge => {
                const pNode = activeDataset.nodes.find(n => n.id === edge.parent);
                const cNode = activeDataset.nodes.find(n => n.id === edge.child);
                if (pNode && cNode) {
                    const pX = resolveNodeXCoordinate(pNode, activeDataset);
                    const cX = resolveNodeXCoordinate(cNode, activeDataset);
                    const path = document.createElementNS(ns, "path");
                    path.setAttribute("d", `M ${pX} ${pNode.y} L ${cX} ${pNode.y} L ${cX} ${cNode.y}`);
                    const edgeKey = `${edge.parent}->${edge.child}`;
                    let cls = "edge-path active-lineage";
                    if (getEdgeStyle(edge) === 'dotted') cls += " edge-dotted";
                    if (isTrackingEffective) cls += ancestorEdges.has(edgeKey) ? " highlighted-track" : " faded-element";

                    const branchId = lineageMap.edgeBranch[edgeKey];
                    if (lineageColorOn && branchId && !isTrackingEffective) {
                        cls += " lineage-tinted";
                        path.style.setProperty('--lineage-color', lineageMap.colors[branchId]);
                        if (isolatedBranch && branchId !== isolatedBranch) cls += " faded-element";
                    }
                    path.setAttribute("class", cls);
                    edgesGroup.appendChild(path);
                }
            });

            activeDataset.nodes.forEach(node => {
                // Authoritative extinction source: the profile card's status field
                // (not the legacy node.extinct flag, which can drift out of sync).
                // Works identically for any clade since it
                // reads from each node's own profile.
                // Three-state Taxon Status: 'living' | 'extinct' | 'extant_extinct'
                const profileStatus = (node.profile && node.profile.status) ? node.profile.status : '';
                const profileIsExtinct = (profileStatus === 'extinct' || profileStatus === 'extant_extinct');
                const profileHasExtant = (profileStatus === 'living' || profileStatus === 'extant_extinct');

                const cx = resolveNodeXCoordinate(node, activeDataset);
                const circle = document.createElementNS(ns, "circle");
                circle.setAttribute("cx", cx); circle.setAttribute("cy", node.y);
                circle.setAttribute("r", node.isRoot ? "7" : "5.5");
                let cls = "cladogram-node";
                if (node.isRoot) cls += " root-node";
                if (profileIsExtinct) cls += " extinct-node";
                if (localSelectedNodeId === node.id) cls += " selected";
                if (isTrackingEffective && !ancestorNodes.has(node.id)) cls += " faded-element";

                const nodeBranchId = lineageMap.nodeBranch[node.id];
                if (lineageColorOn && nodeBranchId && !node.isRoot && !isTrackingEffective && localSelectedNodeId !== node.id) {
                    cls += " lineage-tinted";
                    circle.style.setProperty('--lineage-color', lineageMap.colors[nodeBranchId]);
                    if (isolatedBranch && nodeBranchId !== isolatedBranch) cls += " faded-element";
                }
                circle.setAttribute("class", cls);
                // Spawn Mode intercepts first; then Dev Mode drag; then normal select
                circle.addEventListener("mousedown", (e) => {
                    if (isSpawnModeActive) {
                        e.stopPropagation(); e.preventDefault();
                        handleSpawnNodeClick(node);
                        return;
                    }
                    if (!isDevModeActive) { selectTaxonNode(node); return; }
                    e.stopPropagation(); e.preventDefault();
                    startNodeDrag(e, node, circle);
                });
                circle.addEventListener("touchstart", (e) => {
                    if (isSpawnModeActive) {
                        e.stopPropagation(); e.preventDefault();
                        handleSpawnNodeClick(node);
                        return;
                    }
                    if (!isDevModeActive) return;
                    e.stopPropagation(); e.preventDefault();
                    startNodeDrag(e.touches[0], node, circle);
                }, { passive: false });
                nodesGroup.appendChild(circle);

                const text = document.createElementNS(ns, "text");
                text.setAttribute("x", cx + 12 + (node.labelXOffset || 0));
                text.setAttribute("y", node.y + 4 + (node.labelYOffset || 0));
                let lcls = `taxon-node-label${profileIsExtinct ? ' extinct' : ''}`;
                if (isTrackingEffective && !ancestorNodes.has(node.id)) lcls += " faded-element";
                if (lineageColorOn && nodeBranchId && !node.isRoot && !isTrackingEffective) {
                    lcls += " lineage-tinted";
                    text.style.setProperty('--lineage-color', lineageMap.colors[nodeBranchId]);
                    if (isolatedBranch && nodeBranchId !== isolatedBranch) lcls += " faded-element";
                }
                text.setAttribute("class", lcls);
                // Strip any pre-existing trailing dagger(s) from the stored label,
                // then append exactly one iff the profile status is extinct.
                // node.label itself is never mutated — this is display-only.
                const plainLabel = String(node.label || '')
                    .replace(/\s*\u2020+\s*$/u, '')
                    .trim();
                text.textContent = profileIsExtinct
                    ? `${plainLabel}\u2020`
                    : plainLabel;
                // Extant indicator: small green dot, rendered beside the dagger
                // when the status is 'extant_extinct', on its own when 'living'.
                if (profileHasExtant) {
                    const extantDot = document.createElementNS(ns, "tspan");
                    extantDot.setAttribute("class", "taxon-extant-dot");
                    extantDot.textContent = " \u25CF";
                    text.appendChild(extantDot);
                }
                labelsGroup.appendChild(text);
            });

            renderLineageLegend(lineageMap, activeDataset);

            document.getElementById("stat-total-nodes").textContent = activeDataset.nodes.length;
            document.getElementById("stat-total-edges").textContent = activeDataset.edges.length;
            refreshEditorTextArea();
            refreshEdgeStyleHosts();
        }

        function selectTaxonNode(node) {
            localSelectedNodeId = node.id;
            renderActiveCladeEngine();
            document.getElementById("node-meta-view").innerHTML = `
                <div class="stat-row"><span>Node Reference:</span><span class="stat-val">${node.id}</span></div>
                <div class="stat-row"><span>Timeline Age:</span><span class="stat-val" style="color:#eab308;">${node.mya} Mya</span></div>
                <div class="stat-row" style="margin-top:0.5rem;flex-direction:column;gap:0.25rem;">
                    <span style="font-size:0.75rem;color:var(--text-muted);align-self:flex-start;">Modify Label:</span>
                    <input type="text" id="node-rename-field" value="${escHtml(node.label)}" style="background:#090a0f;border:1px solid var(--panel-border);padding:0.4rem;border-radius:4px;color:#fff;font-size:0.8rem;width:100%;">
                </div>
                <div class="stat-row" style="margin-top:0.75rem;flex-direction:column;gap:0.25rem;">
                    <span style="font-size:0.75rem;color:var(--text-muted);align-self:flex-start;">Vertical Shift Grid (Y: ${node.y}px):</span>
                    <input type="range" id="node-y-slider" min="140" max="520" value="${node.y}" style="width:100%;accent-color:var(--accent);">
                </div>
                <div class="stat-row" style="margin-top:0.75rem;flex-direction:column;gap:0.25rem;">
                    <div style="display:flex;justify-content:space-between;width:100%;font-size:0.75rem;color:var(--text-muted);">
                        <span>Label X Offset:</span>
                        <span id="label-x-offset-val" style="font-weight:600;color:var(--profile-accent);">${node.labelXOffset||0}px</span>
                    </div>
                    <input type="range" id="node-label-x-offset-slider" min="-40" max="40" value="${node.labelXOffset||0}" style="width:100%;accent-color:var(--profile-accent);">
                </div>
                <div class="stat-row" style="margin-top:0.5rem;flex-direction:column;gap:0.25rem;">
                    <div style="display:flex;justify-content:space-between;width:100%;font-size:0.75rem;color:var(--text-muted);">
                        <span>Label Y Offset:</span>
                        <span id="label-offset-val" style="font-weight:600;color:var(--profile-accent);">${node.labelYOffset||0}px</span>
                    </div>
                    <input type="range" id="node-label-offset-slider" min="-40" max="40" value="${node.labelYOffset||0}" style="width:100%;accent-color:var(--profile-accent);">
                </div>
                <div class="stat-row edge-style-host" style="margin-top:0.75rem;flex-direction:column;gap:0.4rem;" data-node="${escHtml(node.id)}">${edgeStyleControlsHtml(node.id)}</div>
            `;
            const ri = document.getElementById("node-rename-field");
            let _renameUndoPushed = false;
            if (ri) ri.addEventListener("input", (e) => {
                if (!e.target.value.trim()) return;           // never leave a node nameless
                if (!_renameUndoPushed) { pushUndoSnapshot('Rename: ' + node.id); _renameUndoPushed = true; }
                node.label = e.target.value; renderActiveCladeEngine();
                const ot = document.getElementById(`profile-tab-${node.id}`);
                if (ot) ot.querySelector("span").textContent = node.label;
            });
            if (ri) ri.addEventListener("change", () => { _renameUndoPushed = false; commitWorkingCopy(); });
            const ys = document.getElementById("node-y-slider");
            let _yUndoPushed = false;
            ys.addEventListener("pointerdown", () => { _yUndoPushed = false; });
            ys.addEventListener("change", () => { _yUndoPushed = false; commitWorkingCopy(); });
            ys.addEventListener("input", (e) => {
                if (!_yUndoPushed) { pushUndoSnapshot('Move Y: ' + node.id); _yUndoPushed = true; }
                node.y = parseInt(e.target.value);
                if (node.isRoot) {
                    Object.values(lineagesData).forEach(d => { const r = d.nodes.find(n => n.isRoot); if (r) r.y = node.y; });
                }
                renderActiveCladeEngine();
            });
            const _lxSlider = document.getElementById("node-label-x-offset-slider");
            let _lxUndoPushed = false;
            _lxSlider.addEventListener("pointerdown", () => { _lxUndoPushed = false; });
            _lxSlider.addEventListener("change", () => { _lxUndoPushed = false; commitWorkingCopy(); });
            _lxSlider.addEventListener("input", (e) => {
                if (!_lxUndoPushed) { pushUndoSnapshot('LabelX: ' + node.id); _lxUndoPushed = true; }
                node.labelXOffset = parseInt(e.target.value);
                document.getElementById("label-x-offset-val").textContent = `${node.labelXOffset>0?'+':''}${node.labelXOffset}px`;
                renderActiveCladeEngine();
            });
            const _lySlider = document.getElementById("node-label-offset-slider");
            let _lyUndoPushed = false;
            _lySlider.addEventListener("pointerdown", () => { _lyUndoPushed = false; });
            _lySlider.addEventListener("change", () => { _lyUndoPushed = false; commitWorkingCopy(); });
            _lySlider.addEventListener("input", (e) => {
                if (!_lyUndoPushed) { pushUndoSnapshot('LabelY: ' + node.id); _lyUndoPushed = true; }
                node.labelYOffset = parseInt(e.target.value);
                document.getElementById("label-offset-val").textContent = `${node.labelYOffset>0?'+':''}${node.labelYOffset}px`;
                renderActiveCladeEngine();
            });
        }

        // Save a file to the device. The link is attached to the page before the
        // click and the blob URL is released later (revoking it immediately can
        // cancel the download on mobile browsers). In-app previews (e.g. a chat
        // app's file viewer) run the page in a sandboxed frame that blocks
        // downloads entirely — tell the user instead of failing silently.
        function saveBlobToDevice(blob, filename) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = filename; a.rel = 'noopener'; a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 60000);
            let framed = true;
            try { framed = window.self !== window.top; } catch (_) { framed = true; }
            showUndoStatus(framed
                ? '⚠ Preview mode may block saving. Open this page directly in Chrome to download ' + filename
                : '⬇ Saving ' + filename, framed ? 7000 : 2500);
        }

        function exportCurrentLayout() {
            const data = lineagesData[currentCladeId];
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            saveBlobToDevice(blob, `${currentCladeId}-layout.json`);
        }

        // Copy what is on screen (working copy) into the saved copy that HTML
        // snapshots, RESET and the leave-page warning use.
        function commitWorkingCopy() {
            Object.keys(lineagesData).forEach(k => {
                masterBackingData[k] = JSON.parse(JSON.stringify(lineagesData[k]));
            });
        }

        function saveCurrentLayoutToMaster() {
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            const btn = document.getElementById("save-master-btn");
            const orig = btn.textContent;
            btn.textContent = "✓ SAVED";
            btn.style.background = "#a78bfa";
            btn.style.color = "#07080d";
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.background = "";
                btn.style.color = "";
            }, 1800);
        }

        // Quote-aware scan for the matching closing brace of a JSON object
        // literal. Walks character-by-character, treating anything inside a
        // double-quoted string as inert (including escaped characters), so
        // curly braces typed into profile text (e.g. "see note {Smith 2019")
        // can never throw off the depth count.
        function findJsonObjectEnd(text, openBraceIdx) {
            let depth = 0, inString = false;
            for (let i = openBraceIdx; i < text.length; i++) {
                const ch = text[i];
                if (inString) {
                    if (ch === '\\') { i++; continue; } // skip escaped char (e.g. \" or \\)
                    if (ch === '"') inString = false;
                    continue;
                }
                if (ch === '"') { inString = true; continue; }
                if (ch === '{') depth++;
                else if (ch === '}') { depth--; if (depth === 0) return i; }
            }
            return -1;
        }

        function exportHtmlSnapshot() {
            // Close profile card if open — JS runtime state doesn't carry over
            if (isProfileViewActive()) closeProfileCard();
            // Export exactly what is on screen, including dev-panel edits
            commitWorkingCopy();

            // Remove all dynamically injected profile tab buttons from the DOM
            // before capturing outerHTML — they are runtime-only and would
            // reopen profile cards on load since allocatedProfileTabs starts empty.
            document.querySelectorAll('.profile-tab-item').forEach(el => el.remove());
            allocatedProfileTabs.clear();

            // Read the page's own markup straight from the DOM instead of
            // fetch()-ing it. fetch(window.location.href) is blocked by CORS
            // on file:// (the common case for a standalone HTML file), and
            // outerHTML avoids that entirely while still preserving the
            // <script> tag's literal source text (mutating JS variables at
            // runtime does not rewrite a <script> element's textContent).
            // Keep the runtime-only restore prompt out of the saved file
            const _asrBar = document.getElementById('autosave-restore-bar');
            const _asrNext = _asrBar ? _asrBar.nextSibling : null;
            if (_asrBar) _asrBar.remove();
            const sourceHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
            if (_asrBar) document.body.insertBefore(_asrBar, _asrNext);

            const serialized = JSON.stringify(masterBackingData, null, 2)
                .replace(/<\/script/gi, '<\\/script'); // prevent a literal "</script" in any
                                                          // profile text from closing the tag early
            const marker = "const masterBackingData = ";
            const start = sourceHtml.indexOf(marker);
            if (start === -1) { alert("Could not locate masterBackingData in source."); return; }

            const objStart = start + marker.length;
            const found = findJsonObjectEnd(sourceHtml, objStart);
            if (found === -1) { alert("Could not parse masterBackingData boundaries. Use EXPORT JSON to save your data instead."); return; }

            const snapshot = (sourceHtml.slice(0, objStart) +
                             serialized +
                             sourceHtml.slice(found + 1))
                             // Strip Dev Mode visual state so the exported file
                             // always opens with Dev Mode off, regardless of
                             // whether it was on at the time of export.
                             .replace('class="dev-gear-btn dev-active" title="DEV ON"', 'class="dev-gear-btn" title="DEV OFF"')
                             .replace('id="developer-panel" class="sidebar"', 'id="developer-panel" class="sidebar collapsed"');

            // Normalize checkbox states — browsers may not serialize the runtime
            // .checked property as a checked="" attribute in outerHTML, so the
            // snapshot could open with checkboxes incorrectly unchecked even though
            // they were on at export time. Explicitly inject the correct state.
            function normalizeCheckbox(html, id, isChecked) {
                // Build a pattern that matches the input tag for this id, with or without checked=""
                const withChecked = new RegExp('(id="' + id + '"[^>]*?)\\s+checked=""([^>]*?>)');
                const withoutChecked = new RegExp('(id="' + id + '"[^>]*?)([^>]*?>)(?!\\s*checked)');
                // First strip any existing checked, then add back only if needed
                let result = html.replace(withChecked, '$1$2');
                if (isChecked) result = result.replace(new RegExp('(id="' + id + '"[^>]*?)>'), '$1 checked="">');
                return result;
            }
            const finalSnapshot = normalizeCheckbox(
                normalizeCheckbox(snapshot, 'connect-pins', document.getElementById('connect-pins').checked),
                'lock-geological-scale', document.getElementById('lock-geological-scale').checked
            );

            const blob = new Blob([finalSnapshot], { type: "text/html" });
            saveBlobToDevice(blob, `cladogram-snapshot-${Date.now()}.html`);
        }

        // ══════════════════════════════════════════════════
        // PROFILE CARD SYSTEM
        // ══════════════════════════════════════════════════

        let activeProfileNodeId = null;
        let activeProfileClade = null;
        let profileEditMode = false;

        function getProfileNode() {
            if (!activeProfileNodeId || !activeProfileClade) return null;
            return lineagesData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
        }

        function getAncestorNode(nodeId, clade) {
            const dataset = lineagesData[clade];
            const edge = dataset.edges.find(e => e.child === nodeId);
            if (!edge) return null;
            return dataset.nodes.find(n => n.id === edge.parent) || null;
        }

        function escHtml(str) {
            return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        }

        // ── Supabase image storage ──
        // Profile images are stored as short paths (e.g. "Diapsid/Proterosuchus (Thecodont).png")
        // relative to this bucket, not full URLs — keeps the data/export small and images
        // always load fresh from Supabase on every page open.
        const SUPABASE_URL = 'https://ypminrbyqdlgysfitjst.supabase.co';
        const SUPABASE_BUCKET = 'Phylogenix DB';

        function buildImageUrl(path) {
            if (!path) return null;
            const trimmed = path.trim();
            if (!trimmed) return null;
            // Already a full URL (e.g. pasted directly, or from an older export) — use as-is
            if (/^https?:\/\//i.test(trimmed)) return trimmed;
            // Otherwise treat as a Supabase Storage path: encode each segment,
            // but keep the "/" folder separators intact
            const encodedPath = trimmed.split('/').map(encodeURIComponent).join('/');
            return `${SUPABASE_URL}/storage/v1/object/public/${encodeURIComponent(SUPABASE_BUCKET)}/${encodedPath}`;
        }

        // Shown when an <img> fails to load — instead of silently swapping to
        // the emoji with no trace, this surfaces the exact URL that failed
        // (tap to copy/inspect) and lets you retry without re-typing the path.
        // ── Profile-card image info popover ("Representative reconstruction") ──
        // Only one popover instance is ever open at a time; state is centralized
        // here so switching cards, toggling the button, or any close path
        // always leaves things in a clean, listener-free state.
        let profileInfoPopoverState = null;

        function bindProfileInfoPopover(root) {
            if (!root) return;
            const btn = root.querySelector('.pcf-info-btn');
            const popover = root.querySelector('.pcf-info-popover');
            if (!btn || !popover) return;

            // Note: the button's toggle and the close-button's click are wired
            // via inline onclick="" in the renderProfileCard() template (same
            // convention as the rest of this file's dynamically-built markup).
            // Only bind here what that markup doesn't already cover.

            // Clicks inside the popover itself should never bubble to the
            // document-level "click outside" handler.
            popover.addEventListener('click', function(e) { e.stopPropagation(); });

            // Desktop: pause the auto-close timer while hovered, resume on leave.
            popover.addEventListener('mouseenter', function() {
                const st = profileInfoPopoverState;
                if (st && st.popover === popover && st.timerId) {
                    clearTimeout(st.timerId);
                    st.timerId = null;
                    st.remainingMs -= (Date.now() - st.startedAt);
                    if (st.remainingMs < 0) st.remainingMs = 0;
                }
            });
            popover.addEventListener('mouseleave', function() {
                const st = profileInfoPopoverState;
                if (st && st.popover === popover && !st.timerId) {
                    startProfileInfoTimer(st.remainingMs > 0 ? st.remainingMs : 15000);
                }
            });
        }

        function startProfileInfoTimer(ms) {
            if (!profileInfoPopoverState) return;
            profileInfoPopoverState.startedAt = Date.now();
            profileInfoPopoverState.remainingMs = ms;
            profileInfoPopoverState.timerId = setTimeout(closeProfileInfoPopover, ms);
        }

        function openProfileInfoPopover(btn, popover) {
            // Only one open at a time — close any previous instance first
            // (also covers re-opening the same popover after it was closed).
            closeProfileInfoPopover();

            popover.hidden = false;
            btn.setAttribute('aria-expanded', 'true');

            const docClickHandler = function(e) {
                if (popover.contains(e.target) || e.target === btn) return;
                closeProfileInfoPopover();
            };
            const escHandler = function(e) {
                if (e.key === 'Escape') closeProfileInfoPopover();
            };
            // Capture phase so this reliably sees the click before other
            // handlers (e.g. the image frame's onclick) can stop propagation.
            document.addEventListener('click', docClickHandler, true);
            document.addEventListener('keydown', escHandler, true);

            profileInfoPopoverState = {
                btn, popover, docClickHandler, escHandler,
                timerId: null, remainingMs: 15000, startedAt: Date.now()
            };
            startProfileInfoTimer(15000);
        }

        function closeProfileInfoPopover() {
            if (!profileInfoPopoverState) return;
            const { btn, popover, timerId, docClickHandler, escHandler } = profileInfoPopoverState;
            if (timerId) clearTimeout(timerId);
            document.removeEventListener('click', docClickHandler, true);
            document.removeEventListener('keydown', escHandler, true);
            popover.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
            profileInfoPopoverState = null;
        }

        function toggleProfileInfoPopover(event, btn) {
            const popover = btn.nextElementSibling && btn.nextElementSibling.classList.contains('pcf-info-popover')
                ? btn.nextElementSibling
                : btn.closest('.pcf-img-frame').querySelector('.pcf-info-popover');
            if (!popover) return;
            if (profileInfoPopoverState && profileInfoPopoverState.popover === popover) {
                closeProfileInfoPopover();
            } else {
                openProfileInfoPopover(btn, popover);
            }
        }

        function onProfileImageError(imgEl) {
            const url = imgEl.dataset.imgUrl || '';
            const frame = imgEl.closest('.pcf-img-frame');
            if (!frame) return;
            // Replace only the image content — never the frame itself, so the
            // info button/popover (siblings of .pcf-img-content) survive a
            // failed image load.
            const content = frame.querySelector('.pcf-img-content') || frame;
            const node = getProfileNode();
            const emoji = (node && node.profile && node.profile.emoji) || '\u{1F98D}';
            content.innerHTML = `
                <div class="pcf-img-error">
                    <div class="pcf-img-error-emoji">${emoji}</div>
                    <div class="pcf-img-error-msg">Image failed to load</div>
                    <div class="pcf-img-error-url" title="${escHtml(url)}">${escHtml(url)}</div>
                    <button type="button" class="pcf-img-retry-btn" onclick="event.stopPropagation(); renderProfileCard(activeProfileNodeId, activeProfileClade);">&#8635; Retry</button>
                </div>`;
            console.warn('Profile image failed to load:', url);
        }

        function renderProfileCard(nodeId, clade) {
            // Rebuilding the card discards the old DOM (and its popover), so
            // detach any lingering document-level listeners/timers first —
            // otherwise switching organisms would leak a stale handler.
            closeProfileInfoPopover();

            activeProfileNodeId = nodeId;
            activeProfileClade = clade;

            const dataset = lineagesData[clade];
            const node = dataset.nodes.find(n => n.id === nodeId);
            if (!node) return;

            // Auto-inherit full template for any new/future node
            if (!node.profile) {
                node.profile = {
                    scientificName: node.label.replace(' \u2020',''),
                    commonName: '', taxonomicClassification: '',
                    geologicalAge: node.mya + ' MYA',
                    habitat: '', diet: '', distinguishingFeatures: '',
                    status: node.extinct ? 'extinct' : 'living', extinctionMya: 0,
                    ancestor: '', emoji: '\u{1F98D}', images: []
                };
            }
            // Backfill missing fields for older nodes
            const pDef = { scientificName: node.label.replace(' \u2020',''),
                commonName:'', taxonomicClassification:'', geologicalAge: node.mya + ' MYA',
                habitat:'', diet:'', distinguishingFeatures:'',
                status: node.extinct ? 'extinct' : 'living', extinctionMya: 0,
                ancestor: '', emoji:'\u{1F98D}', images:[] };
            Object.keys(pDef).forEach(k => { if (!(k in node.profile)) node.profile[k] = pDef[k]; });

            const p = node.profile;
            const statusValue = (p.status === 'extinct' || p.status === 'extant_extinct') ? p.status : 'living';
            const isExtinct = (statusValue === 'extinct' || statusValue === 'extant_extinct');
            // Chrono Horizon endpoint: only a purely-extinct taxon terminates at an
            // extinction date. 'living' and 'extant_extinct' both continue to the
            // present, so neither shows/requires the extinction-year field.
            const requiresExtinctionYear = (statusValue === 'extinct');
            const acNode = getAncestorNode(nodeId, clade);
            const acP = acNode ? (acNode.profile || {}) : {};

            // Two image slots, shown side by side (images[0] and images[1])
            const imgPaths = [0, 1].map(i => (p.images && p.images[i]) ? p.images[i] : null);
            const imgSlotHtml = (i) => {
                const path = imgPaths[i];
                const src = buildImageUrl(path);
                return `
        <div class="pcf-img-slot">
          <div class="pcf-img-frame${profileEditMode ? ' editable' : ''}${src ? ' has-image' : ''}"
               onclick="${profileEditMode ? `document.getElementById('img-url-input-${i}').focus()` : ''}">
            <div class="pcf-img-content">
            ${src
              ? `<img src="${escHtml(src)}" data-img-url="${escHtml(src)}" onerror="onProfileImageError(this)">`
              : `<div class="pcf-img-empty"><div class="pcf-img-empty-emoji">${escHtml(p.emoji || '\u{1F98D}')}</div><div class="pcf-img-empty-caption">No image set</div></div>`}
            </div>
          </div>
          <div class="pc-image-url-row">
            <input class="pc-image-url-input" id="img-url-input-${i}"
              placeholder="Image ${i + 1}: Folder/file.png or URL" value="${escHtml(path || '')}">
            <button class="pc-image-url-btn" onclick="applyImageUrl(${i})">SET</button>
          </div>
        </div>`;
            };
            const endColor = requiresExtinctionYear ? '#ef4444' : '#10b981';

            const html = `
<div class="profile-card${profileEditMode ? ' pc-editing' : ''}" id="active-profile-card">

  <!-- HEADER -->
  <div class="pcf-header">
    <div class="pcf-header-top">
      <textarea class="pc-editable pcf-name pcf-wrap-field" data-field="scientificName" rows="1"
        placeholder="Scientific name…" spellcheck="false">${escHtml(p.scientificName)}</textarea>
      ${profileEditMode
        ? `<div class="pcf-status-toggle">
             <button type="button" class="pcf-status-opt living${statusValue === 'living' ? ' active' : ''}" title="Extant" onclick="setProfileStatus('living')">&#128994; Extant</button>
             <button type="button" class="pcf-status-opt extinct${statusValue === 'extinct' ? ' active' : ''}" title="Extinct" onclick="setProfileStatus('extinct')">&#10060; Extinct</button>
             <button type="button" class="pcf-status-opt both${statusValue === 'extant_extinct' ? ' active' : ''}" title="Extant + Extinct" onclick="setProfileStatus('extant_extinct')">&#10060;&#128994; Both</button>
           </div>`
        : `<div class="pc-status-pill ${statusValue === 'extant_extinct' ? 'both' : (isExtinct ? 'extinct' : 'living')}">
             ${statusValue === 'extant_extinct' ? '&#10060;&#128994; Extant + Extinct' : (isExtinct ? '&#10060; Extinct' : '&#128994; Extant')}
           </div>`}
    </div>
    <textarea class="pc-editable pcf-subtitle pcf-wrap-field" data-field="taxonomicClassification" rows="1"
      placeholder="Taxonomic classification…" spellcheck="false">${escHtml(p.taxonomicClassification)}</textarea>
    ${profileEditMode
      ? `<label class="pcf-tree-label-row">
           <span class="pcf-fact-label">Tree label</span>
           <input class="pcf-tree-label-input" type="text" value="${escHtml(node.label)}"
             placeholder="Name shown on the cladogram…" oninput="onTreeLabelInput(event)">
         </label>`
      : ''}
    <div class="pc-edit-hint">&#9998; Click any field to edit</div>
  </div>

  <div class="pcf-body">

    <!-- IMAGES (two slots, side by side) -->
    <div class="pcf-image-block">
      <div class="pcf-img-pair">
        <button type="button" class="pcf-info-btn" aria-label="About these images" aria-expanded="false" onclick="event.stopPropagation(); toggleProfileInfoPopover(event, this);">i</button>
        <div class="pcf-info-popover" role="dialog" aria-modal="false" aria-label="Representative reconstruction" hidden>
          <button type="button" class="pcf-info-popover-close" aria-label="Close" onclick="event.stopPropagation(); closeProfileInfoPopover();">&times;</button>
          <p class="pcf-info-popover-title">Representative reconstruction</p>
          <p class="pcf-info-popover-body">These images are based on the oldest known or selected fossil record for this lineage. They are illustrative and do not represent the exact organism at the branching point or a confirmed direct ancestor.</p>
        </div>
        ${imgSlotHtml(0)}
        ${imgSlotHtml(1)}
      </div>
    </div>

    <div class="pcf-right-col">
      <!-- CHRONO HORIZON (horizontal bar) -->
      <div class="pcf-chrono-block">
        <div class="pcf-chrono-head">Chrono<br>Horizon</div>
        <div class="pcf-chrono-track">
          ${profileEditMode
            ? `<input class="pcf-chrono-input" type="number" min="0" max="23" step="0.1" inputmode="decimal"
                 value="${node.mya}" style="color:#10b981;" title="Chart spans 0–23 Mya"
                 oninput="onChronoOriginInput(event)">`
            : `<span class="pcf-chrono-tag" style="color:#10b981;">${escHtml(String(node.mya))}<span class="pcf-chrono-unit">Mya</span></span>`}
          <span class="pcf-chrono-dot" style="background:#10b981;"></span>
          <span class="pcf-chrono-line" style="background:linear-gradient(to right,#10b981,${endColor});"></span>
          <span class="pcf-chrono-dot" style="background:${endColor};"></span>
          ${requiresExtinctionYear
            ? (profileEditMode
                ? `<input class="pcf-chrono-input" type="number" min="0" step="0.1" inputmode="decimal"
                     value="${p.extinctionMya || 0}" style="color:${endColor};"
                     oninput="onChronoExtinctionInput(event)">`
                : `<span class="pcf-chrono-tag" style="color:${endColor};">${escHtml(String(p.extinctionMya || 0))}<span class="pcf-chrono-unit">Mya</span></span>`)
            : `<span class="pcf-chrono-tag" style="color:${endColor};">Present</span>`}
        </div>
      </div>

      <!-- KEY FACTS (two columns) -->
      <div class="pcf-facts-row">
        <div>
          <div class="pcf-fact-label">Phylogenetic relative</div>
          <textarea class="pc-editable pcf-fact-value" data-field="ancestor" placeholder="e.g. inferred phylogenetic relative or node name…">${escHtml(p.ancestor || (acNode ? (acP.scientificName || acNode.label.replace(' \u2020','')) : 'Unknown'))}</textarea>
        </div>
        <div>
          <div class="pcf-fact-label">Diet</div>
          <textarea class="pc-editable pcf-fact-value" data-field="diet" placeholder="e.g. Frugivore, Omnivore…">${escHtml(p.diet)}</textarea>
        </div>
      </div>
      <div class="pcf-facts-row">
        <div>
          <div class="pcf-fact-label">Common Name</div>
          <textarea class="pc-editable pcf-fact-value" data-field="commonName" placeholder="e.g. Chimpanzee…">${escHtml(p.commonName)}</textarea>
        </div>
        <div>
          <div class="pcf-fact-label">Habitat</div>
          <textarea class="pc-editable pcf-fact-value" data-field="habitat" placeholder="e.g. Tropical forest, Savanna…">${escHtml(p.habitat)}</textarea>
        </div>
      </div>

      <!-- DISTINGUISHING CHARACTERS -->
      <div class="pcf-features">
        <div class="pcf-features-label">Distinguishing Characters</div>
        <textarea class="pc-editable pcf-features-text" data-field="distinguishingFeatures"
          placeholder="Key morphological or behavioural features…"
          spellcheck="false">${escHtml(p.distinguishingFeatures)}</textarea>
      </div>
    </div>

  </div>

</div>`;

            document.getElementById('profile-card-container').innerHTML = html;
            document.getElementById('pc-toolbar-title').textContent =
                p.scientificName || node.label.replace(' \u2020','');

            // Wire the image-info button/popover for this freshly rendered card
            bindProfileInfoPopover(document.getElementById('active-profile-card'));

            // Edit toggle visibility driven by Dev Mode
            const editToggle = document.getElementById('pc-edit-toggle-btn');
            if (editToggle) {
                editToggle.classList.toggle('visible', isDevModeActive);
                editToggle.textContent = profileEditMode ? 'DONE EDITING' : 'EDIT';
                editToggle.classList.toggle('editing', profileEditMode);
            }

            // Auto-size all pcf-features-text textareas to fit their content
            // rAF ensures layout is complete before reading scrollHeight
            function autosizeTextarea(el) {
                el.style.height = 'auto';
                requestAnimationFrame(() => { el.style.height = el.scrollHeight + 'px'; });
            }
            document.querySelectorAll('.pcf-features-text, .pcf-fact-value, .pcf-wrap-field').forEach(el => { if (el.tagName === 'TEXTAREA') autosizeTextarea(el); });
            // Name / classification wrap visually but stay single-line values: no Enter, no pasted line breaks
            document.querySelectorAll('.pcf-wrap-field').forEach(el => {
                el.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); el.blur(); } });
                el.addEventListener('input', () => {
                    if (/[\r\n]/.test(el.value)) { el.value = el.value.replace(/[\r\n]+/g, ' '); el.dispatchEvent(new Event('change')); }
                });
            });

            // Wire all editable fields — read-only when not editing
            document.querySelectorAll('.pc-editable').forEach(el => {
                el.addEventListener('input', onProfileFieldInput);
                el.addEventListener('change', onProfileFieldInput);
                if (el.tagName === 'TEXTAREA') {
                    el.addEventListener('input', () => autosizeTextarea(el));
                }
                if (!profileEditMode) {
                    el.setAttribute('readonly', '');
                    el.setAttribute('disabled', '');
                    el.style.pointerEvents = 'none';
                } else {
                    el.removeAttribute('readonly');
                    el.removeAttribute('disabled');
                    el.style.pointerEvents = '';
                }
            });

            // Keep the Dev Panel's APPLY CHANGES textarea in sync — without this,
            // it can hold a stale snapshot from before this edit, and clicking
            // APPLY CHANGES would silently overwrite (erase) what you just did here.
            if (clade === currentCladeId) refreshEditorTextArea();
        }


        // Tree label = node.label, the name drawn on the cladogram. Kept separate
        // from profile.scientificName (the card title), as in Evo-Gen.
        function onTreeLabelInput(e) {
            const node = getProfileNode();
            if (!node) return;
            const val = e.target.value.trim();
            if (!val) return;   // never leave a node nameless
            if (!e.target._undoPushed) {
                pushUndoSnapshot('Tree label: ' + node.id);
                e.target._undoPushed = true;
                e.target.addEventListener('blur', () => { e.target._undoPushed = false; }, { once: true });
            }
            node.label = val;
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) masterNode.label = val;
            const tabText = document.querySelector('#profile-tab-' + CSS.escape(node.id) + ' span');
            if (tabText) tabText.textContent = val;
            if (activeProfileClade === currentCladeId) refreshEditorTextArea();
        }

        window.addEventListener('resize', () => {
            document.querySelectorAll('#active-profile-card textarea').forEach(el => {
                el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px';
            });
        });

        function onProfileFieldInput(e) {
            const node = getProfileNode();
            if (!node) return;
            const field = e.target.dataset.field;
            if (!field) return;
            // Push undo snapshot only on first keystroke per focus session
            if (!e.target._undoPushed) {
                pushUndoSnapshot('Edit profile.' + field + ': ' + node.id);
                e.target._undoPushed = true;
                e.target.addEventListener('blur', () => { e.target._undoPushed = false; }, { once: true });
            }
            node.profile[field] = e.target.value;
            // Sync masterBackingData immediately
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) masterNode.profile[field] = e.target.value;
        }

        // Extant / Extinct / Extant+Extinct toggle — keeps node.extinct (used by the
        // cladogram canvas for node color/label styling) in sync with the
        // profile's status field.
        function setProfileStatus(newStatus) {
            const node = getProfileNode();
            if (!node) return;
            if (node.profile.status === newStatus) return;
            pushUndoSnapshot('Status: ' + node.id);
            node.profile.status = newStatus;
            node.extinct = (newStatus === 'extinct' || newStatus === 'extant_extinct');
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) { masterNode.profile.status = newStatus; masterNode.extinct = node.extinct; }
            renderProfileCard(activeProfileNodeId, activeProfileClade);
        }

        // Chrono Horizon — origin point (node.mya, the same field that drives
        // the node's position on the main cladogram timeline)
        function onChronoOriginInput(e) {
            const node = getProfileNode();
            if (!node) return;
            const val = parseFloat(e.target.value);
            if (isNaN(val) || val < 0 || val > startMya) return;   // stay on the 0–23 Mya chart
            if (!e.target._undoPushed) {
                pushUndoSnapshot('Chrono origin: ' + node.id);
                e.target._undoPushed = true;
                e.target.addEventListener('blur', () => { e.target._undoPushed = false; }, { once: true });
            }
            node.mya = val;
            node.x = null; // recompute x from the geological scale at render time
            if (node.profile) node.profile.geologicalAge = val + ' MYA';
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) {
                masterNode.mya = val; masterNode.x = null;
                if (masterNode.profile) masterNode.profile.geologicalAge = val + ' MYA';
            }
        }

        // Chrono Horizon — extinction point (only meaningful while status is 'extinct')
        function onChronoExtinctionInput(e) {
            const node = getProfileNode();
            if (!node) return;
            const val = parseFloat(e.target.value);
            if (isNaN(val) || val < 0) return;
            if (!e.target._undoPushed) {
                pushUndoSnapshot('Chrono extinction: ' + node.id);
                e.target._undoPushed = true;
                e.target.addEventListener('blur', () => { e.target._undoPushed = false; }, { once: true });
            }
            node.profile.extinctionMya = val;
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) masterNode.profile.extinctionMya = val;
        }

        function toggleProfileEditMode() {
            profileEditMode = !profileEditMode;
            renderProfileCard(activeProfileNodeId, activeProfileClade);
        }

        function applyImageUrl(slot = 0) {
            const node = getProfileNode();
            if (!node) return;
            const input = document.getElementById('img-url-input-' + slot);
            if (!input) return;
            const url = input.value.trim();
            pushUndoSnapshot('Image ' + (slot + 1) + ' URL: ' + node.id);
            // Fill any gap with '' so the array never has holes (keeps JSON export clean)
            const setSlot = (arr) => { for (let k = 0; k < slot; k++) if (arr[k] == null) arr[k] = ''; arr[slot] = url; };
            if (!node.profile.images) node.profile.images = [];
            setSlot(node.profile.images);
            const masterNode = masterBackingData[activeProfileClade].nodes.find(n => n.id === activeProfileNodeId);
            if (masterNode) {
                if (!masterNode.profile.images) masterNode.profile.images = [];
                setSlot(masterNode.profile.images);
            }
            renderProfileCard(activeProfileNodeId, activeProfileClade);
        }

        function closeProfileCard() {
            profileEditMode = false;
            activeProfileNodeId = null;
            activeProfileClade = null;
            document.getElementById('profile-view-wrapper').style.display = 'none';
            document.getElementById('cladogram-view-wrapper').style.display = 'block';
            // Restore zoom-pan-active if pan/zoom is currently unlocked
            const container = document.querySelector('.canvas-container');
            if (container && !isPanZoomLocked) container.classList.add('zoom-pan-active');
            // Back on the cladogram canvas — zoom/pan controls are relevant again (if not toggled off)
            applyControlsRowVisibility();
            // Restore clade tab active state
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            const t = document.getElementById('tab-clade-' + currentCladeId);
            if (t) t.classList.add('active');
            document.getElementById('stat-active-clade').textContent = currentCladeId;
            // Pick up any status/timeline edits made in the profile card (node color, position)
            renderActiveCladeEngine();
        }

        // ══════════════════════════════════════════════════
        // DRAG-TO-REPOSITION NODES (Dev Mode Only)
        // ══════════════════════════════════════════════════

        let dragState = null;

        function getSVGPoint(clientX, clientY) {
            const svg = document.getElementById('cladogram-canvas');
            const pt = svg.createSVGPoint();
            pt.x = clientX; pt.y = clientY;
            return pt.matrixTransform(svg.getScreenCTM().inverse());
        }

        function getSnapX(svgX, activeDataset) {
            // Find nearest marker x within 18px
            if (!activeDataset.markers) return null;
            let nearest = null, nearestDist = 18;
            activeDataset.markers.forEach(m => {
                const mx = (m.x !== undefined && m.x !== null) ? m.x : getXCoordinate(m.age);
                const dist = Math.abs(svgX - mx);
                if (dist < nearestDist) { nearest = mx; nearestDist = dist; }
            });
            return nearest;
        }

        function startNodeDrag(e, node, circleEl) {
            const svgPt = getSVGPoint(e.clientX, e.clientY);
            const activeDataset = lineagesData[currentCladeId];

            pushUndoSnapshot('Drag: ' + node.id);
            dragState = {
                node,
                circleEl,
                startSVGX: svgPt.x,
                startSVGY: svgPt.y,
                startNodeY: node.y,
                startNodeX: resolveNodeXCoordinate(node, activeDataset),
                shiftHeld: e.shiftKey,
                moved: false
            };

            circleEl.classList.add('dragging');

            // Add snap indicator group
            const svg = document.getElementById('cladogram-canvas');
            let snapGroup = document.getElementById('drag-snap-group');
            if (!snapGroup) {
                snapGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                snapGroup.id = 'drag-snap-group';
                svg.appendChild(snapGroup);
            }
            snapGroup.innerHTML = '';

            document.addEventListener('mousemove', onNodeDragMove);
            document.addEventListener('mouseup', onNodeDragEnd);
            document.addEventListener('touchmove', onNodeDragTouchMove, { passive: false });
            document.addEventListener('touchend', onNodeDragEnd);
        }

        function onNodeDragTouchMove(e) {
            e.preventDefault();
            onNodeDragMove(e.touches[0]);
        }

        function onNodeDragMove(e) {
            if (!dragState) return;
            const svgPt = getSVGPoint(e.clientX, e.clientY);
            const activeDataset = lineagesData[currentCladeId];
            const { node, circleEl, startSVGX, startSVGY, startNodeY, startNodeX } = dragState;

            const dX = svgPt.x - startSVGX;
            const dY = svgPt.y - startSVGY;
            dragState.moved = Math.abs(dX) > 3 || Math.abs(dY) > 3;
            dragState.shiftHeld = e.shiftKey;

            // Always update Y
            const newY = Math.max(155, Math.min(540, Math.round(startNodeY + dY)));
            node.y = newY;

            // Update X only when Shift is held
            if (dragState.shiftHeld) {
                const rawX = startNodeX + dX;
                const snapped = getSnapX(rawX, activeDataset);
                const newX = snapped !== null ? snapped : Math.max(leftMargin, Math.min(rightMargin, Math.round(rawX)));
                node.x = newX;

                // Show snap indicator
                const snapGroup = document.getElementById('drag-snap-group');
                snapGroup.innerHTML = '';
                if (snapped !== null) {
                    const snapLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    snapLine.setAttribute('x1', snapped); snapLine.setAttribute('y1', '50');
                    snapLine.setAttribute('x2', snapped); snapLine.setAttribute('y2', '540');
                    snapLine.setAttribute('class', 'drag-snap-line');
                    snapGroup.appendChild(snapLine);
                }
            }

            // Live-update circle and label positions without full re-render
            circleEl.setAttribute('cx', node.x !== undefined && node.x !== null ? node.x : resolveNodeXCoordinate(node, activeDataset));
            circleEl.setAttribute('cy', node.y);

            // Update label text position
            const labelsGroup = document.getElementById('labels-group');
            const allLabels = labelsGroup.querySelectorAll('text');
            const nodeIdx = activeDataset.nodes.indexOf(node);
            if (allLabels[nodeIdx]) {
                const lx = resolveNodeXCoordinate(node, activeDataset) + 12 + (node.labelXOffset || 0);
                allLabels[nodeIdx].setAttribute('x', lx);
                allLabels[nodeIdx].setAttribute('y', node.y + 4 + (node.labelYOffset || 0));
            }

            // Redraw connected edges only
            redrawConnectedEdges(node, activeDataset);

            // Update dev panel Y display if node is selected
            const ySlider = document.getElementById('node-y-slider');
            if (ySlider && localSelectedNodeId === node.id) ySlider.value = newY;
        }

        function redrawConnectedEdges(node, activeDataset) {
            const ns = 'http://www.w3.org/2000/svg';
            const edgesGroup = document.getElementById('edges-group');
            const allPaths = edgesGroup.querySelectorAll('path');
            const nodeIdx = activeDataset.nodes.indexOf(node);

            activeDataset.edges.forEach((edge, idx) => {
                if (edge.parent !== node.id && edge.child !== node.id) return;
                const pNode = activeDataset.nodes.find(n => n.id === edge.parent);
                const cNode = activeDataset.nodes.find(n => n.id === edge.child);
                if (!pNode || !cNode) return;
                const pX = resolveNodeXCoordinate(pNode, activeDataset);
                const cX = resolveNodeXCoordinate(cNode, activeDataset);
                if (allPaths[idx]) {
                    allPaths[idx].setAttribute('d', `M ${pX} ${pNode.y} L ${cX} ${pNode.y} L ${cX} ${cNode.y}`);
                }
            });
        }

        function onNodeDragEnd(e) {
            if (!dragState) return;
            const { node, circleEl, moved } = dragState;

            circleEl.classList.remove('dragging');

            // Clear snap indicator
            const snapGroup = document.getElementById('drag-snap-group');
            if (snapGroup) snapGroup.innerHTML = '';

            document.removeEventListener('mousemove', onNodeDragMove);
            document.removeEventListener('mouseup', onNodeDragEnd);
            document.removeEventListener('touchmove', onNodeDragTouchMove);
            document.removeEventListener('touchend', onNodeDragEnd);

            if (moved) {
                // Sync root Y across both clades
                if (node.isRoot) {
                    Object.values(lineagesData).forEach(d => { const r = d.nodes.find(n => n.isRoot); if (r) r.y = node.y; });
                }
                // Persist to masterBackingData immediately
                masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
                // Full re-render to clean up
                renderActiveCladeEngine();
                // Re-select to refresh dev panel sliders
                if (localSelectedNodeId === node.id) selectTaxonNode(node);
            } else {
                // Pure click — select node
                selectTaxonNode(node);
            }

            dragState = null;
        }

        // ══════════════════════════════════════════════════
        // UNDO / REDO STACK ENGINE
        // ══════════════════════════════════════════════════

        const UNDO_MAX = 30;
        let undoStack = [];   // array of {clade, snapshot, description}
        let redoStack = [];
        let undoStatusTimer = null;

        // Call this BEFORE any mutation to capture previous state
        function pushUndoSnapshot(description) {
            const snapshot = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            undoStack.push({ clade: currentCladeId, snapshot, description });
            if (undoStack.length > UNDO_MAX) undoStack.shift();
            redoStack = []; // clear redo on new action
            updateUndoRedoUI();
        }

        function isProfileViewActive() {
            const pw = document.getElementById('profile-view-wrapper');
            return !!(activeProfileNodeId && pw && pw.style.display !== 'none');
        }

        // ── Nav controls (zoom toolbar + pan navigator) visibility ──
        // Hidden automatically in profile view (they don't act there) AND/OR
        // manually via the compass toggle button — either reason hides them.
        let navControlsVisible = false;

        function applyControlsRowVisibility() {
            const statusLegend = document.getElementById('taxon-status-legend');
            if (statusLegend) statusLegend.classList.toggle('hidden', isProfileViewActive());
            const controlsRow = document.getElementById('controls-row');
            if (!controlsRow) return;
            controlsRow.classList.toggle('hidden', isProfileViewActive() || !navControlsVisible);
        }

        // Unified legend (taxon status + lineages) — collapse / expand
        function toggleTaxonLegend() {
            const legend = document.getElementById('taxon-status-legend');
            if (!legend) return;
            const isCollapsed = legend.classList.toggle('collapsed');
            const btn = document.getElementById('tsl-toggle-btn');
            if (btn) btn.setAttribute('aria-expanded', String(!isCollapsed));
        }

        function toggleNavControls() {
            navControlsVisible = !navControlsVisible;
            const btn = document.getElementById('nav-controls-toggle-btn');
            if (btn) {
                btn.classList.toggle('nav-toggle-off', !navControlsVisible);
                btn.title = navControlsVisible ? 'Hide navigation controls' : 'Show navigation controls';
            }
            applyControlsRowVisibility();
        }

        // Undo/redo swap in fresh copies of the data. Re-point every open editor
        // (profile card, dev-panel profiler, spawn fine-tune) at the restored
        // nodes; otherwise they keep editing detached copies and edits vanish.
        function resyncUiAfterRestore() {
            const ds = lineagesData[currentCladeId];
            const exists = id => !!id && ds.nodes.some(n => n.id === id);
            if (spawnTargetNodeId) {
                if (exists(spawnTargetNodeId)) spawnOpenFineTune(ds.nodes.find(n => n.id === spawnTargetNodeId));
                else { spawnTargetNodeId = null; document.getElementById('spawn-fine-tune').classList.remove('visible'); }
            }
            if (isProfileViewActive()) {
                if (exists(activeProfileNodeId)) renderProfileCard(activeProfileNodeId, activeProfileClade);
                else closeProfileCard();   // the node this card showed no longer exists
                return;
            }
            if (exists(localSelectedNodeId)) {
                selectTaxonNode(ds.nodes.find(n => n.id === localSelectedNodeId));
            } else {
                localSelectedNodeId = null;
                document.getElementById("node-meta-view").innerHTML = `<div class="instructions">Click any active node vector inside the cladogram canvas to balance structural coordinates.</div>`;
                renderActiveCladeEngine();
            }
        }

        function undoAction() {
            if (undoStack.length === 0) return;
            const entry = undoStack.pop();
            // Save the correct clade's current state to redo stack (entry.clade, not currentCladeId)
            redoStack.push({
                clade: entry.clade,
                snapshot: JSON.parse(JSON.stringify(lineagesData[entry.clade])),
                description: entry.description
            });
            // Restore
            invalidateLineageColorCache();
            lineagesData[entry.clade] = JSON.parse(JSON.stringify(entry.snapshot));
            masterBackingData[entry.clade] = JSON.parse(JSON.stringify(entry.snapshot));
            // Switch tab if needed
            if (entry.clade !== currentCladeId) switchLineageTab(entry.clade);
            else resyncUiAfterRestore();
            showUndoStatus('↩ Undid: ' + entry.description);
            updateUndoRedoUI();
        }

        function redoAction() {
            if (redoStack.length === 0) return;
            const entry = redoStack.pop();
            // Save current state to undo stack
            undoStack.push({
                clade: currentCladeId,
                snapshot: JSON.parse(JSON.stringify(lineagesData[currentCladeId])),
                description: entry.description
            });
            // Restore
            lineagesData[entry.clade] = JSON.parse(JSON.stringify(entry.snapshot));
            masterBackingData[entry.clade] = JSON.parse(JSON.stringify(entry.snapshot));
            if (entry.clade !== currentCladeId) switchLineageTab(entry.clade);
            else resyncUiAfterRestore();
            showUndoStatus('↪ Redid: ' + entry.description);
            updateUndoRedoUI();
        }

        function updateUndoRedoUI() {
            const undoBtn = document.getElementById('undo-btn');
            const redoBtn = document.getElementById('redo-btn');
            if (!undoBtn || !redoBtn) return;
            undoBtn.disabled = undoStack.length === 0;
            redoBtn.disabled = redoStack.length === 0;
            undoBtn.classList.toggle('has-steps', undoStack.length > 0);
            redoBtn.classList.toggle('has-steps', redoStack.length > 0);
            undoBtn.title = undoStack.length > 0
                ? `Undo: ${undoStack[undoStack.length-1].description} (Ctrl+Z)` : 'Nothing to undo';
            redoBtn.title = redoStack.length > 0
                ? `Redo: ${redoStack[redoStack.length-1].description} (Ctrl+Y)` : 'Nothing to redo';
        }

        function showUndoStatus(msg, ms = 2500) {
            const bar = document.getElementById('undo-status-bar');
            if (!bar) return;
            bar.textContent = msg;
            bar.style.opacity = '1';
            if (undoStatusTimer) clearTimeout(undoStatusTimer);
            undoStatusTimer = setTimeout(() => { bar.style.opacity = '0'; }, ms);
        }

        // Keyboard shortcut: Ctrl+Z / Ctrl+Y / Ctrl+Shift+Z
        document.addEventListener('keydown', (e) => {
            if (!isDevModeActive && !isSpawnModeActive) return;
            const ctrl = e.ctrlKey || e.metaKey;
            if (ctrl && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undoAction(); }
            if (ctrl && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redoAction(); }
        });

        // ══════════════════════════════════════════════════
        // SEARCH / JUMP TO ORGANISM
        // ══════════════════════════════════════════════════

        let searchResults = [];
        let searchActiveIdx = -1;
        let searchBlurTimer = null;

        function buildSearchIndex() {
            const index = [];
            Object.keys(lineagesData).forEach(clade => {
                lineagesData[clade].nodes.forEach(node => {
                    const p = node.profile || {};
                    index.push({
                        id:           node.id,
                        clade:        clade,
                        label:        node.label,
                        scientificName: p.scientificName || node.label.replace(' †',''),
                        commonName:   p.commonName || '',
                        mya:          node.mya,
                        extinct:      node.extinct || false,
                        isRoot:       node.isRoot || false,
                        // Searchable blob
                        searchBlob:   [
                            node.label,
                            p.scientificName || '',
                            p.commonName || '',
                            p.taxonomicClassification || '',
                            p.habitat || '',
                            String(node.mya)
                        ].join(' ').toLowerCase()
                    });
                });
            });
            return index;
        }

        function highlightMatch(text, query) {
            if (!query) return escHtml(text);
            const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return escHtml(text).replace(
                new RegExp('(' + escaped + ')', 'gi'),
                '<em>$1</em>'
            );
        }

        function onSearchInput(query) {
            const clearBtn = document.getElementById('search-clear-btn');
            clearBtn.classList.toggle('visible', query.length > 0);

            if (!query.trim()) {
                closeSearchDropdown();
                return;
            }

            const q = query.trim().toLowerCase();
            const index = buildSearchIndex();
            searchResults = index.filter(item => item.searchBlob.includes(q)).slice(0, 12);
            searchActiveIdx = -1;
            renderSearchDropdown(query.trim());
        }

        function renderSearchDropdown(rawQuery) {
            const dropdown = document.getElementById('search-dropdown');
            if (searchResults.length === 0) {
                dropdown.innerHTML = `<div class="search-no-results">No organisms match "${escHtml(rawQuery)}"</div>`;
            } else {
                dropdown.innerHTML = searchResults.map((item, i) => {
                    const dotColor = item.isRoot ? '#eab308' : item.extinct ? '#ef4444' : '#10b981';
                    const cladeLabel = item.clade.toUpperCase();
                    const displayName = highlightMatch(item.scientificName || item.label, rawQuery);
                    const sub = item.commonName
                        ? `${escHtml(item.commonName)} · ${item.mya} Mya`
                        : `${item.mya} Mya · ${item.extinct ? 'Extinct' : 'Living'}`;
                    return `<div class="search-result-item${i === searchActiveIdx ? ' active' : ''}"
                                onmousedown="selectSearchResult(${i})">
                        <div class="search-result-dot" style="background:${dotColor};"></div>
                        <div class="search-result-main">
                            <div class="search-result-label">${displayName}</div>
                            <div class="search-result-sub">${sub}</div>
                        </div>
                        <div class="search-result-clade">${cladeLabel}</div>
                    </div>`;
                }).join('');
            }
            dropdown.classList.add('open');
        }

        function onSearchKeydown(e) {
            if (!document.getElementById('search-dropdown').classList.contains('open')) return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                searchActiveIdx = Math.min(searchActiveIdx + 1, searchResults.length - 1);
                renderSearchDropdown(document.getElementById('organism-search-input').value);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                searchActiveIdx = Math.max(searchActiveIdx - 1, 0);
                renderSearchDropdown(document.getElementById('organism-search-input').value);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const idx = searchActiveIdx >= 0 ? searchActiveIdx : 0;
                if (searchResults[idx]) selectSearchResult(idx);
            } else if (e.key === 'Escape') {
                clearSearch();
            }
        }

        function selectSearchResult(idx) {
            const result = searchResults[idx];
            if (!result) return;

            clearSearch();

            // Switch clade tab if needed
            if (result.clade !== currentCladeId) {
                switchLineageTab(result.clade);
            }

            // Small delay to allow render after tab switch
            setTimeout(() => {
                const dataset = lineagesData[result.clade];
                const node = dataset.nodes.find(n => n.id === result.id);
                if (!node) return;

                // Select the node (updates dev panel)
                selectTaxonNode(node);

                // Pulse-highlight the node circle on the canvas
                pulseSearchNode(result.id);

                // Scroll SVG canvas to centre on the node
                scrollCanvasToNode(node, result.clade);
            }, result.clade !== currentCladeId ? 120 : 0);
        }

        function pulseSearchNode(nodeId) {
            // Find the circle in the SVG and add pulse animation class
            const nodesGroup = document.getElementById('nodes-group');
            if (!nodesGroup) return;
            const circles = nodesGroup.querySelectorAll('circle');
            const dataset = lineagesData[currentCladeId];
            dataset.nodes.forEach((node, i) => {
                if (node.id === nodeId && circles[i]) {
                    circles[i].classList.add('search-highlight-pulse');
                    circles[i].addEventListener('animationend', () => {
                        circles[i].classList.remove('search-highlight-pulse');
                    }, { once: true });
                }
            });
        }

        function scrollCanvasToNode(node, clade) {
            // Centers the node using the zoom-pan transform system (replaces native scroll).
            const wrapper = document.getElementById('cladogram-view-wrapper');
            const svgEl = document.getElementById('cladogram-canvas');
            if (!wrapper || !svgEl) return;

            const dataset = lineagesData[clade];
            const nodeX = resolveNodeXCoordinate(node, dataset);
            const nodeY = node.y;

            const viewBox = svgEl.viewBox.baseVal;
            const wrapperRect = wrapper.getBoundingClientRect();
            // Base (unzoomed) scale of SVG content to wrapper pixels
            const baseScaleX = wrapperRect.width  / viewBox.width;
            const baseScaleY = wrapperRect.height / viewBox.height;
            const baseScale = Math.min(baseScaleX, baseScaleY);

            // Zoom in a bit for visibility, but don't exceed max
            const targetScale = Math.min(ZOOM_MAX, Math.max(zoomPanState.scale, 1.4));

            // Node position in wrapper-local pixels at scale=1
            const nodePixelX = nodeX * baseScale;
            const nodePixelY = nodeY * baseScale;

            // We want nodePixelX*targetScale + tx = wrapperRect.width/2
            zoomPanState.scale = targetScale;
            zoomPanState.tx = wrapperRect.width  / 2 - nodePixelX * targetScale;
            zoomPanState.ty = wrapperRect.height / 2 - nodePixelY * targetScale;

            applyZoomPanTransform(true);
        }

        function onSearchFocus() {
            if (searchBlurTimer) { clearTimeout(searchBlurTimer); searchBlurTimer = null; }
            const q = document.getElementById('organism-search-input').value;
            if (q.trim()) renderSearchDropdown(q.trim());
        }

        function onSearchBlur() {
            // Small delay so mousedown on result fires first
            searchBlurTimer = setTimeout(closeSearchDropdown, 180);
        }

        function closeSearchDropdown() {
            const dd = document.getElementById('search-dropdown');
            if (dd) dd.classList.remove('open');
            searchResults = [];
            searchActiveIdx = -1;
        }

        function clearSearch() {
            const input = document.getElementById('organism-search-input');
            const clearBtn = document.getElementById('search-clear-btn');
            if (input) input.value = '';
            if (clearBtn) clearBtn.classList.remove('visible');
            closeSearchDropdown();
        }

        // Global Ctrl+F / Cmd+F hijack to focus search
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                const input = document.getElementById('organism-search-input');
                if (input) { input.focus(); input.select(); }
            }
        });

        // ══════════════════════════════════════════════════
        // CLADE LINEAGE COLOR THEMING
        // ══════════════════════════════════════════════════

        const LINEAGE_PALETTE = [
            '#3b82f6', // blue
            '#10b981', // emerald
            '#f59e0b', // amber
            '#ec4899', // pink
            '#8b5cf6', // violet
            '#06b6d4', // cyan
            '#ef4444', // red
            '#84cc16', // lime
            '#f97316', // orange
            '#6366f1', // indigo
        ];

        let lineageColorCache = {}; // clade -> { nodeBranch, edgeBranch, colors }

        function computeLineageColorMap(activeDataset) {
            // Branch points = the first node(s) along each path from root that have
            // 2+ children (the first real evolutionary split). Single-child chains
            // (like root -> Sauropsida) are skipped so coloring starts where the
            // tree actually diverges, not at a single pass-through node.
            const cacheKey = currentCladeId + ':' + activeDataset.nodes.length + ':' + activeDataset.edges.length;
            if (lineageColorCache[cacheKey]) return lineageColorCache[cacheKey];

            const rootNode = activeDataset.nodes.find(n => n.isRoot);
            if (!rootNode) return { nodeBranch: {}, edgeBranch: {}, colors: {}, branchList: [] };

            const childrenOf = (id) => activeDataset.edges.filter(e => e.parent === id).map(e => e.child);

            // Walk down single-child chains from root until we hit the first
            // node with 2+ children — that node's children are the true branch roots.
            function findBranchPoint(startId) {
                let cur = startId;
                while (true) {
                    const kids = childrenOf(cur);
                    if (kids.length !== 1) return cur; // 0 or 2+ children: stop here
                    cur = kids[0];
                }
            }

            const branchPointId = findBranchPoint(rootNode.id);
            const branchRoots = childrenOf(branchPointId);

            const colors = {};
            branchRoots.forEach((childId, i) => {
                colors[childId] = LINEAGE_PALETTE[i % LINEAGE_PALETTE.length];
            });

            const nodeBranch = {};
            const edgeBranch = {};

            // Tag the pass-through chain from root to branchPoint with no color (neutral)
            // BFS from each branch root, tagging all descendants
            branchRoots.forEach(branchRootId => {
                const queue = [branchRootId];
                nodeBranch[branchRootId] = branchRootId;
                while (queue.length) {
                    const cur = queue.shift();
                    activeDataset.edges.forEach(e => {
                        if (e.parent === cur) {
                            const edgeKey = `${e.parent}->${e.child}`;
                            edgeBranch[edgeKey] = branchRootId;
                            if (!nodeBranch[e.child]) {
                                nodeBranch[e.child] = branchRootId;
                                queue.push(e.child);
                            }
                        }
                    });
                }
            });

            // Tag branchPoint -> branchRoot edges too
            branchRoots.forEach(branchRootId => {
                edgeBranch[`${branchPointId}->${branchRootId}`] = branchRootId;
            });

            const branchList = branchRoots.map(id => {
                const node = activeDataset.nodes.find(n => n.id === id);
                return { id, label: node ? node.label.replace(' †','') : id, color: colors[id] };
            });

            const result = { nodeBranch, edgeBranch, colors, branchList };
            lineageColorCache = { [cacheKey]: result };
            return result;
        }

        function renderLineageLegend(lineageMap, activeDataset) {
            const legend = document.getElementById('lineage-legend');
            if (!legend) return;

            const isolatedBranch = window._isolatedLineageBranch || null;

            legend.innerHTML = lineageMap.branchList.map(b => `
                <div class="lineage-legend-item${isolatedBranch && isolatedBranch !== b.id ? ' dimmed' : ''}"
                     onclick="toggleLineageIsolation('${b.id}')">
                    <span class="lineage-legend-dot" style="background:${b.color};"></span>
                    <span>${escHtml(b.label)}</span>
                </div>
            `).join('');
        }

        function toggleLineageIsolation(branchId) {
            window._isolatedLineageBranch = (window._isolatedLineageBranch === branchId) ? null : branchId;
            renderActiveCladeEngine();
        }

        function handleLineageColorToggle() {
            renderActiveCladeEngine();
        }

        // Invalidate color cache whenever topology changes (add/delete node, apply JSON, reset)
        function invalidateLineageColorCache() {
            lineageColorCache = {};
        }

        // ══════════════════════════════════════════════════
        // SPAWN MODE ENGINE
        // ══════════════════════════════════════════════════

        let isSpawnModeActive = false;
        let spawnAction = null;        // 'add' | 'label' | 'timeline'
        let spawnTargetNodeId = null;  // node currently targeted by fine-tune panel

        /* ── Toggle spawn mode on/off ── */
        function toggleSpawnMode() {
            isSpawnModeActive = !isSpawnModeActive;
            const btn  = document.getElementById('spawn-mode-btn');
            const tray = document.getElementById('spawn-tray');
            const stage = document.getElementById('zoom-pan-stage');

            btn.classList.toggle('spawn-active', isSpawnModeActive);
            tray.classList.toggle('visible', isSpawnModeActive);
            if (stage) stage.classList.toggle('spawn-mode-active', isSpawnModeActive);

            if (isSpawnModeActive && isDevModeActive) disableDevMode(); // mutually exclusive with Dev Mode

            if (!isSpawnModeActive) {
                spawnAction = null;
                spawnTargetNodeId = null;
                document.querySelectorAll('.spawn-action-pill').forEach(p => p.classList.remove('pill-active'));
                document.getElementById('spawn-fine-tune').classList.remove('visible');
            }
        }

        /* ── Select an action pill ── */
        function setSpawnAction(action) {
            spawnAction = spawnAction === action ? null : action;
            document.getElementById('spawn-pill-add').classList.toggle('pill-active', spawnAction === 'add');
            document.getElementById('spawn-pill-label').classList.toggle('pill-active', spawnAction === 'label');
            document.getElementById('spawn-pill-timeline').classList.toggle('pill-active', spawnAction === 'timeline');
            if (!spawnAction) {
                spawnTargetNodeId = null;
                document.getElementById('spawn-fine-tune').classList.remove('visible');
            }
        }

        /* ── Central node-click handler for Spawn Mode ── */
        function handleSpawnNodeClick(node) {
            if (!isSpawnModeActive || !spawnAction) return;
            if (spawnAction === 'add')      spawnHandleAddDelete(node);
            else if (spawnAction === 'label')    spawnHandleLabel(node);
            else if (spawnAction === 'timeline') spawnHandleTimeline(node);
        }

        // Parse a typed age: accepts "2.5" or "2,5"; null if not a number
        function parseMyaInput(str) {
            if (str === null || str === undefined) return null;
            const v = Number(String(str).trim().replace(',', '.'));
            return (String(str).trim() === '' || isNaN(v)) ? null : v;
        }

        // Validate an age for a node under `parentNode`. Returns true if OK to use.
        function confirmAgeAgainstParent(mya, parentNode, label) {
            if (mya === null || mya < 0 || mya > startMya) {
                alert('Please enter an age between 0 and ' + startMya + ' MYA (e.g. 2.5).');
                return false;
            }
            if (parentNode && mya > parentNode.mya) {
                return confirm(`${mya} MYA is OLDER than its parent "${parentNode.label}" (${parentNode.mya} MYA).\n\n` +
                    `A descendant is normally younger than its ancestor node. Use ${mya} MYA anyway?`);
            }
            return true;
        }

        // Pick a Y for a new child that doesn't sit on top of its siblings or
        // on nodes at a similar time position.
        function findFreeChildY(parentNode, childMya) {
            const ds = lineagesData[currentCladeId];
            const cx = resolveNodeXCoordinate({ mya: childMya, x: null }, ds);
            const siblings = new Set(ds.edges.filter(e => e.parent === parentNode.id).map(e => e.child));
            const near = ds.nodes.filter(n => siblings.has(n.id) || Math.abs(resolveNodeXCoordinate(n, ds) - cx) < 140);
            for (const off of [50, -50, 90, -90, 130, -130, 170, -170, 210, -210, 250, -250]) {
                const y = parentNode.y + off;
                if (y < 160 || y > 520) continue;
                if (!near.some(n => Math.abs(n.y - y) < 24)) return y;
            }
            return Math.min(520, parentNode.y + 50);
        }

        /* ── ADD / DELETE ── */
        function spawnHandleAddDelete(clickedNode) {
            const dataset = lineagesData[currentCladeId];
            const choice = confirm(
                `Node: "${clickedNode.label}"\n\n` +
                `OK  → add a new child node under this node.\n` +
                `Cancel → delete this node (and its edges).`
            );

            if (choice) {
                const labelRaw = prompt('Label for new node:', 'New Taxon');
                const label = labelRaw === null ? '' : labelRaw.trim();
                if (!label) return;
                const myaStr = prompt('Age (MYA) for new node:', String(Math.max(0, +(clickedNode.mya * 0.8).toFixed(1))));
                if (myaStr === null) return;
                const mya = parseMyaInput(myaStr);
                if (!confirmAgeAgainstParent(mya, clickedNode, clickedNode.label)) return;

                pushUndoSnapshot('Spawn Add: ' + label);
                invalidateLineageColorCache();

                const newId = currentCladeId.slice(0,3) + '_spawn_' + Date.now();
                const newNode = {
                    id: newId, label: label, mya: mya,
                    x: null,   // x is always derived from mya at render time — never hard-coded
                    y: findFreeChildY(clickedNode, mya),
                    extinct: false, labelYOffset: 0, labelXOffset: 0,
                    profile: {
                        scientificName: label, commonName: '', taxonomicClassification: '',
                        geologicalAge: mya + ' MYA', habitat: '', diet: '',
                        distinguishingFeatures: '', status: 'living', emoji: '🦍', images: []
                    }
                };

                dataset.nodes.push(newNode);
                dataset.edges.push({ parent: clickedNode.id, child: newId, style: 'solid' });
                masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(dataset));
                renderActiveCladeEngine();
                spawnOpenFineTune(newNode);

            } else {
                if (clickedNode.isRoot) { alert('The root node cannot be deleted.'); return; }

                const hasChildren = dataset.edges.some(e => e.parent === clickedNode.id);
                if (hasChildren) {
                    const ok = confirm(`"${clickedNode.label}" has children. Deleting it removes all descendants. Continue?`);
                    if (!ok) return;
                    const toDelete = new Set([clickedNode.id]);
                    let changed = true;
                    while (changed) {
                        changed = false;
                        dataset.edges.forEach(e => {
                            if (toDelete.has(e.parent) && !toDelete.has(e.child)) { toDelete.add(e.child); changed = true; }
                        });
                    }
                    pushUndoSnapshot('Spawn Delete tree: ' + clickedNode.id);
                    invalidateLineageColorCache();
                    dataset.nodes = dataset.nodes.filter(n => !toDelete.has(n.id));
                    dataset.edges = dataset.edges.filter(e => !toDelete.has(e.parent) && !toDelete.has(e.child));
                } else {
                    if (!confirm(`Delete "${clickedNode.label}"?\n\nOK → delete (you can Undo)\nCancel → keep it`)) return;
                    pushUndoSnapshot('Spawn Delete: ' + clickedNode.id);
                    invalidateLineageColorCache();
                    dataset.nodes = dataset.nodes.filter(n => n.id !== clickedNode.id);
                    dataset.edges = dataset.edges.filter(e => e.parent !== clickedNode.id && e.child !== clickedNode.id);
                }

                if (spawnTargetNodeId === clickedNode.id) {
                    spawnTargetNodeId = null;
                    document.getElementById('spawn-fine-tune').classList.remove('visible');
                }
                if (localSelectedNodeId === clickedNode.id) localSelectedNodeId = null;
                masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(dataset));
                renderActiveCladeEngine();
            }
        }

        /* ── LABEL NODE ── */
        function spawnHandleLabel(node) {
            const newLabel = prompt('Rename node:', node.label);
            if (newLabel === null || newLabel.trim() === '') return;
            pushUndoSnapshot('Spawn Label: ' + node.id);
            node.label = newLabel.trim();
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            renderActiveCladeEngine();
            spawnOpenFineTune(node);
        }

        /* ── ADJUST TIMELINE ──
           Only mutates node.mya and clears node.x so resolveNodeXCoordinate
           re-derives the position from the geological scale at render time.
           The timeline constants (startMya, endMya, leftMargin, rightMargin),
           zoom state, and pan transform are NEVER touched. */
        function spawnHandleTimeline(node) {
            const myaStr = prompt(
                `Timeline position for "${node.label}"\nCurrent: ${node.mya} MYA\n\nNew MYA value (higher = older):`,
                String(node.mya)
            );
            if (myaStr === null) return;
            const mya = parseMyaInput(myaStr);
            const tlDataset = lineagesData[currentCladeId];
            const tlParentEdge = tlDataset.edges.find(e => e.child === node.id);
            const tlParent = tlParentEdge ? tlDataset.nodes.find(n => n.id === tlParentEdge.parent) : null;
            if (!confirmAgeAgainstParent(mya, tlParent, node.label)) return;

            pushUndoSnapshot('Spawn Timeline: ' + node.id);
            node.mya = mya;
            node.x   = null;  // cleared — x will be computed by resolveNodeXCoordinate
            if (node.profile) node.profile.geologicalAge = mya + ' MYA';
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            renderActiveCladeEngine();
            spawnOpenFineTune(node);
        }

        /* ── Open fine-tune panel for a node ── */
        function spawnOpenFineTune(node) {
            spawnTargetNodeId = node.id;
            document.getElementById('spawn-ft-node-name').textContent = node.label;
            document.getElementById('spawn-ft-y').value   = node.y;
            document.getElementById('spawn-ft-y-val').textContent  = node.y;
            document.getElementById('spawn-ft-lx').value  = node.labelXOffset || 0;
            document.getElementById('spawn-ft-lx-val').textContent = (node.labelXOffset || 0);
            document.getElementById('spawn-ft-ly').value  = node.labelYOffset || 0;
            document.getElementById('spawn-ft-ly-val').textContent = (node.labelYOffset || 0);
            const ftEdgeHost = document.getElementById('spawn-ft-edge-style');
            ftEdgeHost.dataset.node = node.id;
            ftEdgeHost.innerHTML = edgeStyleControlsHtml(node.id);
            document.getElementById('spawn-fine-tune').classList.add('visible');
        }

        function _getSpawnTargetNode() {
            if (!spawnTargetNodeId) return null;
            return lineagesData[currentCladeId].nodes.find(n => n.id === spawnTargetNodeId) || null;
        }

        function onSpawnFtY(val) {
            const node = _getSpawnTargetNode(); if (!node) return;
            node.y = parseInt(val);
            document.getElementById('spawn-ft-y-val').textContent = val;
            if (node.isRoot) {
                Object.values(lineagesData).forEach(d => { const r = d.nodes.find(n => n.isRoot); if (r) r.y = node.y; });
            }
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            renderActiveCladeEngine();
        }

        function onSpawnFtLx(val) {
            const node = _getSpawnTargetNode(); if (!node) return;
            node.labelXOffset = parseInt(val);
            document.getElementById('spawn-ft-lx-val').textContent = val;
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            renderActiveCladeEngine();
        }

        function onSpawnFtLy(val) {
            const node = _getSpawnTargetNode(); if (!node) return;
            node.labelYOffset = parseInt(val);
            document.getElementById('spawn-ft-ly-val').textContent = val;
            masterBackingData[currentCladeId] = JSON.parse(JSON.stringify(lineagesData[currentCladeId]));
            renderActiveCladeEngine();
        }

        // ══════════════════════════════════════════════════
        // ZOOM AND PAN — Cladogram Canvas
        // ══════════════════════════════════════════════════

        const ZOOM_MIN = 0.5;
        const ZOOM_MAX = 4;
        let zoomPanState = { scale: 1, tx: 0, ty: 0 };
        let panStart = null;        // { startX, startY, startTx, startTy }
        let zoomHintTimer = null;
        let isPanZoomLocked = true; // locked by default — page scrolls normally until user opts in

        const ICON_LOCK_CLOSED = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"></rect><path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11"></path></svg>';
        const ICON_LOCK_OPEN = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"></rect><path d="M7.5 11V7.5a4.5 4.5 0 0 1 8.5-2"></path></svg>';

        function toggleZoomPanLock() {
            isPanZoomLocked = !isPanZoomLocked;
            const btn = document.getElementById('zoom-lock-btn');
            const badge = document.getElementById('pan-locked-badge');
            const stage = getStage();
            const container = document.querySelector('.canvas-container');

            if (isPanZoomLocked) {
                btn.classList.remove('unlocked');
                btn.innerHTML = ICON_LOCK_CLOSED;
                btn.title = 'Enable pan & zoom';
                if (stage) stage.classList.add('locked');
                if (container) container.classList.remove('zoom-pan-active');
                if (badge) {
                    badge.classList.add('visible');
                    setTimeout(() => badge.classList.remove('visible'), 1600);
                }
                panStart = null;
            } else {
                btn.classList.add('unlocked');
                btn.innerHTML = ICON_LOCK_OPEN;
                btn.title = 'Lock pan & zoom';
                if (stage) stage.classList.remove('locked');
                if (container) container.classList.add('zoom-pan-active');
                showZoomHint();
            }
        }

        function getStage() { return document.getElementById('zoom-pan-stage'); }

        function applyZoomPanTransform(animate) {
            const stage = getStage();
            if (!stage) return;
            stage.classList.toggle('no-transition', !animate);
            stage.style.transform =
                `translate(${zoomPanState.tx}px, ${zoomPanState.ty}px) scale(${zoomPanState.scale})`;
            const pctLabel = document.getElementById('zoom-pct-label');
            if (pctLabel) pctLabel.textContent = Math.round(zoomPanState.scale * 100) + '%';
        }

        function zoomCanvas(factor, centerX, centerY) {
            const wrapper = document.getElementById('cladogram-view-wrapper');
            const rect = wrapper.getBoundingClientRect();
            const cx = centerX !== undefined ? centerX - rect.left : rect.width / 2;
            const cy = centerY !== undefined ? centerY - rect.top  : rect.height / 2;

            const prevScale = zoomPanState.scale;
            let newScale = prevScale * factor;
            newScale = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, newScale));
            const appliedFactor = newScale / prevScale;

            // Keep the point under the cursor/finger stationary while zooming
            zoomPanState.tx = cx - (cx - zoomPanState.tx) * appliedFactor;
            zoomPanState.ty = cy - (cy - zoomPanState.ty) * appliedFactor;
            zoomPanState.scale = newScale;

            applyZoomPanTransform(true);
        }

        function resetZoomPan() {
            zoomPanState = { scale: 1, tx: 0, ty: 0 };
            applyZoomPanTransform(true);
        }

        function showZoomHint() {
            const hint = document.getElementById('zoom-hint');
            if (!hint) return;
            hint.classList.add('visible');
            if (zoomHintTimer) clearTimeout(zoomHintTimer);
            zoomHintTimer = setTimeout(() => hint.classList.remove('visible'), 2200);
        }

        // ── Mouse wheel zoom (desktop / trackpad) ──────────────────────────
        function onCanvasWheel(e) {
            // Only act when hovering the cladogram view (not profile card)
            if (document.getElementById('cladogram-view-wrapper').style.display === 'none') return;
            if (isPanZoomLocked) return; // let the page scroll normally while locked
            e.preventDefault();
            const factor = e.deltaY < 0 ? 1.1 : 0.9;
            zoomCanvas(factor, e.clientX, e.clientY);
        }

        // ── Mouse drag pan (desktop) ────────────────────────────────────────
        function onCanvasMouseDown(e) {
            if (document.getElementById('cladogram-view-wrapper').style.display === 'none') return;
            if (isPanZoomLocked) return; // pan disabled while locked
            // Don't pan if clicking a node (dragState/context menu handle that),
            // or if currently dragging a node
            if (dragState) return;
            if (e.target.closest && e.target.closest('.cladogram-node')) return;
            if (e.button !== 0) return;

            panStart = {
                startX: e.clientX, startY: e.clientY,
                startTx: zoomPanState.tx, startTy: zoomPanState.ty
            };
            getStage().classList.add('panning');
            document.addEventListener('mousemove', onCanvasMouseMove);
            document.addEventListener('mouseup', onCanvasMouseUp);
        }

        function onCanvasMouseMove(e) {
            if (!panStart) return;
            zoomPanState.tx = panStart.startTx + (e.clientX - panStart.startX);
            zoomPanState.ty = panStart.startTy + (e.clientY - panStart.startY);
            applyZoomPanTransform(false);
        }

        function onCanvasMouseUp() {
            panStart = null;
            const stage = getStage();
            if (stage) stage.classList.remove('panning');
            document.removeEventListener('mousemove', onCanvasMouseMove);
            document.removeEventListener('mouseup', onCanvasMouseUp);
        }

        // ── Touch: single-finger pan + double-tap reset (pinch-zoom removed — use the arrow navigator instead) ───────
        let lastTapTime = 0;

        function onCanvasTouchStart(e) {
            if (document.getElementById('cladogram-view-wrapper').style.display === 'none') return;

            if (e.touches.length === 1) {
                // Double-tap-to-reset always available
                const now = Date.now();
                if (now - lastTapTime < 320) {
                    resetZoomPan();
                    lastTapTime = 0;
                    return;
                }
                lastTapTime = now;

                // Single-finger pan is disabled while locked — this is the
                // "swipe moves the whole cladogram" issue; locking restores
                // normal single-finger page scroll behaviour.
                if (isPanZoomLocked) return;

                // Don't pan if touching a node (handled by node drag system)
                if (e.target.closest && e.target.closest('.cladogram-node')) return;
                if (dragState) return;

                panStart = {
                    startX: e.touches[0].clientX, startY: e.touches[0].clientY,
                    startTx: zoomPanState.tx, startTy: zoomPanState.ty
                };
                showZoomHint();
            }
        }

        function onCanvasTouchMove(e) {
            if (document.getElementById('cladogram-view-wrapper').style.display === 'none') return;
            if (e.touches.length === 1 && panStart) {
                e.preventDefault();
                zoomPanState.tx = panStart.startTx + (e.touches[0].clientX - panStart.startX);
                zoomPanState.ty = panStart.startTy + (e.touches[0].clientY - panStart.startY);
                applyZoomPanTransform(false);
            }
        }

        function onCanvasTouchEnd(e) {
            if (document.getElementById('cladogram-view-wrapper').style.display === 'none') return;
            if (e.touches.length === 0) panStart = null;
        }

        // ── Small arrow-pad navigator — pan the cladogram with discrete taps.
        // Works regardless of the pan/zoom lock state, since a button press
        // (unlike a swipe) can't be confused with normal page scrolling. ──
        const PAN_STEP = 90;
        function panCladogram(direction) {
            const deltas = { up: [0, PAN_STEP], down: [0, -PAN_STEP], left: [PAN_STEP, 0], right: [-PAN_STEP, 0] };
            const d = deltas[direction];
            if (!d) return;
            zoomPanState.tx += d[0];
            zoomPanState.ty += d[1];
            applyZoomPanTransform(true);
        }

        // ── Double-click reset (desktop) ────────────────────────────────────
        function onCanvasDoubleClick(e) {
            if (e.target.closest && e.target.closest('.cladogram-node')) return;
            resetZoomPan();
        }

        // ── Wire up all listeners once DOM is ready ─────────────────────────
        // Warn before closing/refreshing if any profile data has been filled
        window.addEventListener('beforeunload', (e) => {
            const hasFilled = Object.values(masterBackingData).some(clade =>
                clade.nodes.some(n => n.profile && (
                    n.profile.diet || n.profile.distinguishingFeatures ||
                    n.profile.commonName || n.profile.habitat ||
                    n.profile.taxonomicClassification ||
                    (n.profile.images && n.profile.images.length > 0)
                ))
            );
            if (hasFilled) {
                e.preventDefault();
                e.returnValue = '';
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.canvas-container');
            if (!container) return;

            container.addEventListener('wheel', onCanvasWheel, { passive: false });
            container.addEventListener('mousedown', onCanvasMouseDown);
            container.addEventListener('dblclick', onCanvasDoubleClick);

            container.addEventListener('touchstart', onCanvasTouchStart, { passive: false });
            container.addEventListener('touchmove', onCanvasTouchMove, { passive: false });
            container.addEventListener('touchend', onCanvasTouchEnd);
            container.addEventListener('touchcancel', onCanvasTouchEnd);

            // No auto-hint on load — pan/zoom is locked by default, so the
            // gesture hint only appears after the user explicitly unlocks it
            // (see showZoomHint() calls in toggleZoomPanLock).
        });

    

/* ── second script block ── */
/* Non-invasive display helpers. */
(function(){function ensure(){const c=document.querySelector('.canvas-container');if(!c)return;if(!document.getElementById('canvas-timeline-direction')){const d=document.createElement('div');d.id='canvas-timeline-direction';d.className='canvas-timeline-direction';d.textContent='Past  ←  time  →  Present';c.appendChild(d)}}function refresh(){ensure();const t=document.getElementById('tsl-lineage-items'),g=document.getElementById('tsl-lineage-group'),s=document.querySelectorAll('#lineage-legend .lineage-legend-item');if(t){const e=Array.from(s).map(i=>{const d=i.querySelector('.lineage-legend-dot'),col=d?getComputedStyle(d).backgroundColor:'#64748b';return '<span class="tsl-lineage-item"><i class="tsl-lineage-dot" style="background:'+col+'"></i>'+i.textContent.trim()+'</span>'}).join('');if(t.innerHTML!==e)t.innerHTML=e;if(g){g.style.display=e?'':'none';const sep=g.previousElementSibling;if(sep&&sep.classList.contains('tsl-sep'))sep.style.display=e?'':'none'}}document.querySelectorAll('#profile-card-container textarea.pcf-fact-value,#profile-card-container textarea.pcf-features-text').forEach(x=>{if(!x.value.trim()&&x.dataset.field!=='ancestor')x.placeholder='Not added yet'});const labs=document.querySelectorAll('#labels-group .taxon-node-label');document.querySelectorAll('#nodes-group .cladogram-node').forEach((n,i)=>{const label=labs[i]?labs[i].textContent.trim():'Taxon';n.setAttribute('aria-label',label+'. Open profile card.');if(!n.querySelector('title')){const x=document.createElementNS('http://www.w3.org/2000/svg','title');x.textContent=label+' — open profile card';n.appendChild(x)}})}document.addEventListener('DOMContentLoaded',()=>{refresh();new MutationObserver(()=>requestAnimationFrame(refresh)).observe(document.body,{childList:true,subtree:true})})})();
