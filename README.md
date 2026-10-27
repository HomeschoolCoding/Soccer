# Soccer: top-down 2 vs 2

The approved starting point is merged into master. This game intentionally needs student implementation; unchanged starter behavior does not complete a task. Existing student artwork is preserved.

## Start class

1. Choose one of the 4 Ready tasks on [your board](https://github.com/orgs/HomeschoolCoding/projects/1) with the team.
2. Open [MakeCode Arcade](https://arcade.makecode.com), use **Import → Import URL**, and paste your exact task branch below. Use a fresh import; old browser copies do not update automatically.
3. Open JavaScript → Explorer → Files and select your one task file. Find **STUDENT TASK START** and **STUDENT TASK END**. Edit inside those comments and follow the **CHANGE THIS FIRST / WRITE / EDIT** notes. Before editing or pushing, check the repository and branch.
4. Make one small improvement, run your card's checks with a teammate, commit and push to your task branch. When ready today or next class, open a PR into **master** for teacher review.

| Task | File | Starting point | Import URL |
| --- | --- | --- | --- |
| [Shooting: implement B shots toward the attacking goal](https://github.com/HomeschoolCoding/Soccer/issues/7) | `shooting.ts` | B calls an empty shoot() function. Neither A nor body contact provides a working shot in the starter. | `https://github.com/HomeschoolCoding/Soccer#codex-goals-and-score` |
| [Passing: implement A passes and ball friction](https://github.com/HomeschoolCoding/Soccer/issues/3) | `passing.ts` | A calls an empty pass() function. Body contact cannot move the ball, and slow() has no friction yet. | `https://github.com/HomeschoolCoding/Soccer#codex-ball-physics` |
| [Player art: develop the student-made team shapes](https://github.com/HomeschoolCoding/Soccer/issues/2) | `art.ts` | The generated humanoid players have been removed. The student's original red and blue shapes from NewSprite are retained and fitted to 8 x 8; same-team players currently look identical. | `https://github.com/HomeschoolCoding/Soccer#codex-player-art` |
| [Pitch: turn the gray test area into a soccer arena](https://github.com/HomeschoolCoding/Soccer/issues/21) | `pitch.ts` | The generated grass stripes, field lines, circle, penalty areas and nets have been removed. Only gray space and two plain goal markers remain. | `https://github.com/HomeschoolCoding/Soccer#codex-pitch-design` |

## Controls and supplied setup

Arrows move, A is for passing, and B is for shooting. A and B deliberately do nothing until implemented. Walking into the ball never moves it.

Four-player connections, movement, goal counting, kickoff resets and ball/field boundaries are supplied. Player collisions do not push, kick or dribble the ball. There are no automatic kicks or extra test controls. The ball stays still until a student implements a pass or shot.

Passing and shooting are separate tasks and files. The passing task also implements friction. Shooting can be demonstrated before friction is ready. To test passing, connect a teammate: players 1 + 3 are red, players 2 + 4 blue. Red attacks right; blue attacks left.

The pitch is gray with two plain goal markers. The original student-made red/blue shapes are kept at 8 x 8, and the original ball art is kept at 6 x 6. The art student develops those shapes and distinguishes teammates. All original branches and artwork remain preserved, including the student-created background branch.

## Working together

Each task has its own file and prepared branch: `shooting.ts`, `passing.ts`, `art.ts`, `pitch.ts`. Leave teacher helpers, `main.ts`, `pxt.json`, other students' files and GitHub settings for the teacher. Stay in JavaScript. The branch contains the current classroom baseline, so you can start immediately. Only one student should claim a task branch at a time.

Use small commits and push progress to your branch. When you finish, open a PR into master and include your before/after demonstration. The teacher reviews and merges student changes. After other work is merged, coordinate with the teacher before pulling shared changes or resolving conflicts; never overwrite another student's work.

For simulator testing, connect players 2–4 with their player buttons. Native online play uses Share → Host a multiplayer game, then classmates join at https://aka.ms/a9 or the host link. Playing together is separate from editing code. Actual online sign-in testing remains for the teacher.
