export default function 구구단출력end별찍기() {
  const 전체 = () => {
    for (let a = 1; a <= 9; a++) {
      document.write(a + "단");
      document.write("<br />");
      for (let b = 1; b <= 9; b++)
        document.write(a + "*" + b + "=" + a * b + "&nbsp");
      document.write("<br />");
    }
  };
  const 배수 = () => {
    for (let a = 1; a <= 9; a++) {
      if (a === 3 || a === 6 || a === 9) {
        document.write(a + "단");
        document.write("<br />");
        for (let b = 1; b <= 9; b++)
          document.write(a + "*" + b + "=" + a * b + "&nbsp");
        document.write("<br />");
      }
    }
  };
  const 별찍기1 = () => {
    for (let a = 1; a <= 5; a++) {
      document.write("*".repeat(a) + "<br />");
    }
  };
  const 별찍기2 = () => {
    for (let a = 5; a >= 0; a--) {
      document.write("*".repeat(a) + "<br />");
    }
  };
  const 별찍기3 = () => {
    for (let a = 1; a <= 5; a++)
      document.write("&nbsp".repeat(5 - a) + "*".repeat(a) + "<br />");
  };
  const 별찍기4 = () => {
    for (let a = 5; a >= 0; a--) {
      document.write("&nbsp".repeat(5 - a) + "*".repeat(a) + "<br />");
    }
  };

  return (
    <>
      <button type="button" onClick={전체}>
        구구단출력
      </button>
      <button type="button" onClick={배수}>
        3,6,9단 출력
      </button>
      <br />
      <button type="button" onClick={별찍기1}>
        별찍기연습1
      </button>
      <button type="button" onClick={별찍기2}>
        별찍기연습2
      </button>
      <button type="button" onClick={별찍기3}>
        별찍기연습3
      </button>
      <button type="button" onClick={별찍기4}>
        별찍기연습4
      </button>
    </>
  );
}
