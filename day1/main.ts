export function processTask1(input: string): number {

    let leftNumbers: Array<number> = [];
    let rightNumbers: Array<number> = [];

    input.split("\n")
        .forEach((line) => {
            const [left, right] = line.split(/\s+/).map((x) => Number(x.trim()));
            leftNumbers.push(left);
            rightNumbers.push(right);
        });

    leftNumbers = leftNumbers.sort((a, b) => a - b);
    rightNumbers = rightNumbers.sort((a, b) => a - b);

    const total = rightNumbers.map((right, index) => Math.abs(right - leftNumbers[index]))
        .reduce((acc, curr) => acc + curr, 0);

    return total;
}

export function processTask2(input: string): number {

    const leftNumbers: Array<number> = [];
    const rightNumbers: Array<number> = [];

    input.split("\n")
        .forEach((line) => {
            const [left, right] = line.split(/\s+/).map((x) => Number(x.trim()));
            leftNumbers.push(left);
            rightNumbers.push(right);
        });

    const total = leftNumbers.map((left) => {
        const totalShownInRight = rightNumbers.filter((right) => right === left).length;
        return left * totalShownInRight;
    }).reduce((acc, curr) => acc + curr, 0);

    return total;
}