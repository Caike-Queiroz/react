function sum(a, b) {
    return a + b;
}

export default function Subtitle() {
    let a = 3;
    let b = 5;

    return <h2 style={{color: "#e5e5e5"}}>It´s easy, like {a} + {b} is {sum(a, b)}</h2>
}