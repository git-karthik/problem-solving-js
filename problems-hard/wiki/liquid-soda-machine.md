### Liquid in a Soda Machine

You are given an array of integers representing a range of requested soda in ml (milliliters). The soda machine has three buttons on it. Pressing the first button will dispense between 200ml and 205ml of soda. Pressing the second button dispenses between 300ml and 305ml. Pressing the third button dispenses between 400ml and 405ml.

Your solve function will be called with a desired milliliters of soda as an integer. Return true if the soda machine can dispense the given amount, false if not.

#### Requirements

Must return either true or false

#### Example #1

solve(605)

> true
> The target is 605 milliliters. This could be achieved by pressing the first button three times, or by pressing the second button twice

#### Example #2

solve(100)

> false
> The target is 100 milliliters. There aren't any combination of buttons we could press to dispense 100ml, so return false
