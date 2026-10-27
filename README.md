# Soccer: top-down 2 vs 2

A working four-player online starter for the October 27 class.

## Start today

1. Open [your board](https://github.com/orgs/HomeschoolCoding/projects/1) and agree one of the four Ready tasks with your team.
2. Open [MakeCode Arcade](https://arcade.makecode.com/), choose **Import → Import URL**, and paste your exact task branch URL from the table below. Sign in with your own GitHub account if needed.
3. Open JavaScript and **Explorer → Files**. Select your task's file. If the file explorer is collapsed, expand it to see the named files.
4. Run the simulator. Before editing or pushing, check that the GitHub view shows the correct repository **and your task branch**, not master.
5. Make one small change, playtest, commit and push to your branch, and open a pull request for the teacher.

| Choose a task | Your file | Import URL |
| --- | --- | --- |
| [Goals: scoring, first-to-five winner and match feedback](https://github.com/HomeschoolCoding/Soccer/issues/7) | `goals.ts` | `https://github.com/HomeschoolCoding/Soccer#codex/goals-and-score` |
| [Ball physics: tune friction, kicks and rebounds](https://github.com/HomeschoolCoding/Soccer/issues/3) | `physics.ts` | `https://github.com/HomeschoolCoding/Soccer#codex/ball-physics` |
| [Player art: small red and blue soccer teams](https://github.com/HomeschoolCoding/Soccer/issues/2) | `art.ts` | `https://github.com/HomeschoolCoding/Soccer#codex/player-art` |
| [Pitch: draw the top-down soccer arena](https://github.com/HomeschoolCoding/Soccer/issues/21) | `pitch.ts` | `https://github.com/HomeschoolCoding/Soccer#codex/pitch-design` |

The multiplayer and startup code are ready in `main.ts`. You do not need to edit that file or `pxt.json`. Each student edits one separate file so the team can work at the same time. These starters use the JavaScript editor.

## Play on separate computers

- The host opens the game and chooses **Share → Host a multiplayer game**. If the dialog first asks for a project name, continue to the multiplayer hosting option.
- Other players open [MakeCode's game lobby](https://aka.ms/a9) on their own computers and enter the host's code, or use the host's join link.
- The host starts the game. Up to four people, including the host, can play. The game runs in the host session; everyone sees the same screen. Joining a play session does not give somebody a separate copy to edit.
- To try new code, the host starts a fresh session after updating the project.

Arrow keys move in all directions; A kicks when close to the ball. In keyboard simulation A is normally Z/Space; focus the simulator first. Players 1 + 3 are red; 2 + 4 are blue.

Only connected players get characters. The host can test alone; other characters appear as players join. A disconnected player is removed and can rejoin.

## Finish your task

Run your card's checks with a teammate. Commit and push to your task branch, then open a PR to master and move the card to In Pull Request. While the teacher's starter PR is still under review, target `codex/classroom-multiplayer` if you need to open your task PR; retarget it to master once the starter is merged. Don't push directly to master or switch an old copy onto it by accident.

## Existing work

Original branches and history have been preserved. Source excerpts are in `student-work/`; the original full assets remain on their branches. The original student soccer ball is sampled into a 6 x 6 ball. The starter uses a fixed top-down pitch, 8 x 8 players, and no gravity or camera following.

[Official online multiplayer guide](https://arcade.makecode.com/multiplayer)

#### Metadata (used for search, rendering)

* for PXT/arcade
