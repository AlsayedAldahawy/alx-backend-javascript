interface MajorCredits {
    credits : number & [__brand: "Majorcredits"];
}

interface MinorCredits {
    credits : number & [__brand: "Minororcredits"];
}

function sumMajorCredits(subject1 : MajorCredits, subject2 : MajorCredits) : MajorCredits {
    return {credits : subject1.credits + subject2.credits} as MajorCredits;
}

function sumMinorCredits(subject1 : MinorCredits, subject2 : MinorCredits) : MinorCredits {
    return {credits : subject1.credits + subject2.credits} as MinorCredits;
}

const major1: MajorCredits = { credits: 3 as MajorCredits['credits'] };
const major2: MajorCredits = { credits: 4 as MajorCredits['credits'] };

const minor1: MinorCredits = { credits: 5 as MinorCredits['credits'] };
const minor2: MinorCredits = { credits: 6 as MinorCredits['credits'] };


console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
