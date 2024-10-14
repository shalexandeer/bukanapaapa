export function removeSpecialCharacters(input: string): string {
  // Define the regular expression pattern for special characters
  const pattern = /[^\w\s]/gi; // Matches any character that is not alphanumeric or whitespace

  // Replace special characters with an empty string
  const result = input.replace(pattern, " ");

  return result;
}
