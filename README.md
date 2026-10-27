# Soccer: top-down 2 vs 2: student starting points

The game runs with normal controls, but its mechanics and artwork need student work. Improving one assigned feature is the goal; leaving the starter unchanged is not complete. Existing student artwork is preserved.

## Start today

1. Choose one of the four Ready cards on [your board](https://github.com/orgs/HomeschoolCoding/projects/1) with your team.
2. In [MakeCode Arcade](https://arcade.makecode.com), use **Import → Import URL** and your exact task branch URL below. Start with a fresh import, not an old browser copy of master.
3. Open JavaScript → Explorer → Files. Edit only your task file and check the repository and branch before every push.
4. Use your card's normal playtest to show what you changed.

| Task | File | Starting weakness | Import URL |
| --- | --- | --- | --- |
| [Goals: add a first-to-five finish and a fresh match](https://github.com/HomeschoolCoding/Soccer/issues/7) | `goals.ts` | Normal goals already award one point and reset kickoff, but the match never ends. It continues through five, ten or more goals without a winner. | `https://github.com/HomeschoolCoding/Soccer#codex-goals-and-score` |
| [Shots: aim at the attacking goal and add ball friction](https://github.com/HomeschoolCoding/Soccer/issues/3) | `physics.ts` | A automatically passes toward the other teammate, even when that is away from the goal. The ball also has no friction and keeps moving indefinitely. | `https://github.com/HomeschoolCoding/Soccer#codex-ball-physics` |
| [Player art: develop the student-made team shapes](https://github.com/HomeschoolCoding/Soccer/issues/2) | `art.ts` | The generated humanoid players have been removed. The student's original red and blue shapes from NewSprite are retained and fitted to 8 x 8; same-team players currently look identical. | `https://github.com/HomeschoolCoding/Soccer#codex-player-art` |
| [Pitch: turn the gray test area into a soccer arena](https://github.com/HomeschoolCoding/Soccer/issues/21) | `pitch.ts` | The generated grass stripes, field lines, circle, penalty areas and nets have been removed. Only gray space and two plain goal markers remain. | `https://github.com/HomeschoolCoding/Soccer#codex-pitch-design` |

## Normal controls

Arrows move and A kicks near the ball. A currently passes toward another teammate rather than shooting at the attacking goal, and the ball never slows down. Red players 1 + 3 should attack the right goal; blue players 2 + 4 should attack the left. Goals count normally, but there is no match winner or fresh-match score reset yet.

The pitch is a gray placeholder with two plain goal markers. The student's original NewSprite red/blue shapes are kept and fitted to 8 x 8; the art task develops these shapes and distinguishes teammates. The original student ball remains 6 x 6. All original branches and artwork remain preserved, including the student-created background branch.

## Multiplayer and finishing

The teacher helper in `main.ts` supplies four-player connection/disconnection and movement. Use simulator player buttons 2–4 for local testing. Native online play uses Share → Host a multiplayer game, then classmates join at https://aka.ms/a9 or the host link. Playing together is separate from editing a branch. Actual online sign-in testing remains for the teacher.

Commit and push to your task branch, then open a PR for review. While the revised baseline PR is open, target `codex-student-challenges`; after it merges, the teacher synchronizes branches and retargets student PRs to master. Never push directly to master. Stay in JavaScript and leave other students' files, `main.ts`, `pxt.json` and GitHub settings for the teacher.

The teacher should merge the revised baseline before student PRs. After a squash merge, synchronize master into task branches while preserving any student commits. Each card has specific before/after checks; the unchanged starter does not pass.
