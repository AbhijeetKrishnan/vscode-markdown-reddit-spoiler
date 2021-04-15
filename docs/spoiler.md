# Exercise

> How might the tabular Dyna-Q algorithm shown on page 164 be modified
to handle stochastic environments? How might this modification perform poorly on
changing environments such as considered in this section? How could the algorithm be
modified to handle stochastic environments and changing environments?

>!Stochastic environment can be handled by recording frequencies with which state-reward pairs are visited from a given state-action pair. These define the probability distribution of the transition function which can be used to sample state-reward pairs given a state-action pair.!<

>!It will perform poorly because the distribution would be incorrect when the environment changes. This could be handled similarly to Dyna-Q+ by providing additional reward to transitions which have not been seen recently.!<

- planning is wasteful if exploring states that don't lead to goal state
- better to work backwards from the goal
- generally, we want to work backwards from any state who's value has changed (so that we can keep our environment model correct, and have better state estimates)
- could use variation in updates to prioritize which states to update first - update those states first which have experienced large fluctuations in value estimates
- what is the idea behind *prioritized sweeping*?
   >!The idea is to first update using simulated experience the value of those states which would produce the greatest magnitude of change in their value estimates. Using a priority queue, we order state/actions by their value changes ($R + \gamma Q(S', A') - Q(S, A)$). We then update the predecessors of the states by popping from the queue, and insert the predecessors back into the queue until the magnitude of the change falls below some threshold.!<
- backward updates focus on predecessors of goal/highly-frequented states as targets for updating
- >!*forward focusing*!< examines first the successors of highly-frequented states
- value-function updates can vary along the dimensions of (state-value vs. action-value), (expected vs. sample updates), and ($v_*$ vs. $v_\pi$)
- what are the various algos discussed so far along each of the dimensions? (Hint: *Think in terms of the backup diagrams*)
  $Q$ vs. $V$|$* vs. \pi$|expected vs. sample|Algorithm
  :-:|:-:|:-:|:-:
  $Q$|*|exp|q-value iteration
  $Q$|*|samp|q-learning
  $Q$|$\pi$|exp|q-policy evaluation
  $Q$|$\pi$|samp|Sarsa
  $V$|*|exp|value iteration
  $V$|*|samp|none
  $V$|$\pi$|exp|policy evaluation
  $V$|$\pi$|samp|TD(0)
- expected updates are >!better!< than sample updates because they are >!free from sampling error and thus less noisy!<
- expected updates require >!more!< computation than sample updates
- this can complicate parallel implementations because >!if an action is pruned, the rollout policy changes, and this change has to be communicated to all the other parallel rollout policies!<

<span class="md-spoiler" title="spoiler" onclick="this.classList.add('md-unhidenspoiler')"><span>$E=mc^2$</span></span>

$E=\text{ }$<span class="md-spoiler" title="spoiler" onclick="this.classList.add('md-unhidenspoiler')"><span>$mc^2$</span></span>

>!$E=mc^2$!<

$E=mc^2$