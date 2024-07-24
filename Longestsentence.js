function solution(S) {
    let sentences = S.split(/[.?!]/);
    let maxWords = 0;

    for (let sentence of sentences) {
        let words = sentence.trim().split(/\s+/);

        let wordCount = words.filter(word => /[a-zA-Z]/.test(word)).length;
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }

    return maxWords;
}

console.log(solution("We test coders. Give us a try?"));
console.log(solution("Forget CVs..Save time . x x"));  