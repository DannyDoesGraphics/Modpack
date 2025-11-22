- 1 tick (.idle(1)) between block placements, if seperated by time (if multiple blocks, ignore this)
- Fast particle animations
- Abide by the equation to calculate to a text's reading time
```js
function calculateTextDuration(text, isKeyframe) {
    const wordCount = text.split(/\s+/).length;
    const baseTime = 40; // 2 seconds minimum (40 ticks)
    const timePerWord = 6; // 300ms per word (6 ticks)
    const keyframeBuffer = isKeyframe ? 20 : 0; // Extra time for important text
    const maxTime = 140; // 7 seconds maximum (140 ticks)
    
    const calculatedTime = baseTime + (wordCount * timePerWord) + keyframeBuffer;
    return Math.min(calculatedTime, maxTime);
}
```
- Scene lengths should be overwhelmingly tied to text time and *most* of the scene time should fit within the calculated text times
 - Not the end of the world if it doesn't, but preferably have it do so