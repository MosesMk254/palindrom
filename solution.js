function solution(S) {
    const N = S.length;
    S = S.split('');
    
    for (let i = 0; i < (N + 1) / 2; i++) {
        let left = S[i];
        let right = S[N - 1 - i];

        if (left === '?' && right === '?') {
            S[i] = 'a';
            S[N - 1 - i] = 'a';
        } else if (left === '?') {
            S[i] = right;
        } else if (right === '?') {
            S[N - 1 - i] = left;
        } else if (left !== right) {
            return "NO";
        }
    }

    S = S.map(char => (char === '?' ? 'a' : char));
    
    return S.join('');
}


console.log(solution("?ab??a")); 
console.log(solution("bab??a"));  
console.log(solution("?a?"));     