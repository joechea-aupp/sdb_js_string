## Regix explain for part 3, regular expression

1. `/`: This is the starting delimiter of the regular expression.

2. `(?<miles>\d+)`: This part defines a named capturing group `miles` that matches one or more digits (`\d+`). The `?<miles>` syntax is used to name the capturing group as `miles`.

   - `(?<miles>`: Start of the named capturing group.
   - `\d+`: Matches one or more digits (0-9).

3. `\s*`: This part matches zero or more whitespace characters (`\s`). The `*` quantifier means zero or more occurrences.

4. `(?=miles)`: This is a positive lookahead assertion that checks if the next characters in the string are "miles" without including "miles" in the match itself.

   - `(?=`: Start of the positive lookahead assertion.
   - `miles`: The literal string "miles" that we're looking ahead for.

5. `/`: This is the ending delimiter of the regular expression.

6. `g`: This is a global flag that tells JavaScript to search for all matches in the input string, not just the first match.

In summary, this regex pattern will match sequences of digits followed by optional whitespace, but only if they are immediately followed by the string "miles" without including "miles" in the match. The named capturing group `miles` captures the digits matched.

For example, in the input string "10 miles, 20miles, 30 miles", this regex would match "10", "20", and "30", but not "20miles" because it doesn't have a space before "miles". The global flag `g` ensures that all such matches in the string are captured.

### Regix explan for part 4, regular expression

Replaces all occurrences of non-word characters (\W) or the characters "+", "\\\_", and "-" in the lowercase string with an empty string (removing them).

### Regix explain for part 5, regular expression

1. `/`: Starting delimiter of the regular expression.
2. `RKQ`: Matches the literal characters "RKQ".
3. `\d+`: Matches one or more digits (0-9).
4. `\-`: Matches a hyphen ("-") character.
5. `\d+`: Matches one or more digits (0-9).
6. `/`: Ending delimiter of the regular expression.
7. `g`: Global flag that indicates to search for all occurrences of the pattern in the string.

Putting it all together, the regular expression `/RKQ\d+\-\d+/g` will match patterns in the `message` string that follow the format "RKQ", one or more digits, a hyphen "-", and one or more digits.
