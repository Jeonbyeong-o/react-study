import { type } from "@testing-library/user-event/dist/type";

export default function 계산기() {
  let firstnum = 0;
  let b = null;
  let secondnum = 0;
  let fnum = 0;
  let snum = 0;
  let d = null;
  let fnum1 = 0;
  let snum2 = 0;
  let f = null;

  const a = (type) => {
    firstnum = parseFloat(document.getElementById("num1").value);
    b = type;
  };
  const val = () => {
    secondnum = parseFloat(document.getElementById("num2").value);
    let thirdnum = document.getElementById("num3");
    if (b === "+") {
      thirdnum.value = firstnum + secondnum;
    } else if (b === "-") {
      thirdnum.value = firstnum - secondnum;
    } else if (b === "*") {
      thirdnum.value = firstnum * secondnum;
    } else if (b === "/") {
      thirdnum.value = firstnum / secondnum;
    }
  };
  const c = (type) => {
    fnum = parseFloat(document.getElementById("num4").value);
    d = type;
    document.getElementById("num4").value = null;
  };
  const cal = () => {
    snum = parseFloat(document.getElementById("num4").value);
    let tnum = document.getElementById("num5");
    if (d === "+") {
      tnum.value = fnum + snum;
    }
    if (d === "-") {
      tnum.value = fnum - snum;
    }
    if (d === "*") {
      tnum.value = fnum * snum;
    }
    if (d === "/") {
      tnum.value = fnum / snum;
    }
  };
  const z = (type) => {
    fnum1 = parseFloat(document.getElementById("num6").value);
    f = type;
    document.getElementById("num6").value = null;
  };
  const x = () => {
    snum2 = parseFloat(document.getElementById("num6").value);
    let tnum3 = document.getElementById("num6");
    if (f === "+") {
      tnum3.value = fnum1 + snum2;
    }
    if (f === "-") {
      tnum3.value = fnum1 - snum2;
    }
    if (f === "*") {
      tnum3.value = fnum1 * snum2;
    }
    if (f === "/") {
      tnum3.value = fnum1 / snum2;
    }
  };
  return (
    <>
      <h4>인풋창3개 계산기</h4>
      <input type="number" id="num1" />
      <button
        onClick={() => {
          a("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          a("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          a("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          a("/");
        }}
      >
        /
      </button>
      <br />
      <input type="number" id="num2" />
      <button onClick={val}>=</button>
      <br />
      <input type="number" id="num3" disabled />
      <br />
      <br />
      <br />
      <h4>인풋창2개 계산기</h4>
      <input type="number" id="num4" />
      <br />
      <button
        onClick={() => {
          c("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          c("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          c("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          c("/");
        }}
      >
        /
      </button>
      <br />
      <button onClick={cal}>=</button>
      <br />
      <input type="number" id="num5" disabled />
      <br />
      <br />
      <br />
      <h4>인풋창1개 계산기</h4>
      <input type="number" id="num6" />
      <br />
      <button
        onClick={() => {
          z("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          z("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          z("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          z("/");
        }}
      >
        /
      </button>
      <button onClick={x}>=</button>
    </>
  );
}
