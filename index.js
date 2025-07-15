 const displayText = document.getElementById("display-text");
    const displayDiv = document.getElementById("display");
    let expression = "";

    document.querySelectorAll('.a').forEach(button => {
      button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === "c") {
          expression = "";
        } else if (value === "←") {
          expression = expression.slice(0, -1);
        } else if (value === "=") {
          try {
            expression = eval(expression).toString();
          } catch (err) {
            expression = "Error";
          }
        } else {
          // Prevent multiple decimal points in a single number segment
          const lastNumber = expression.split(/[\+\-\*\/]/).pop();
          if (value === "." && lastNumber.includes(".")) return;

          expression += value;
        }

        displayText.innerText = expression || "0";
         displayDiv.scrollTop = displayDiv.scrollHeight;
      });
    });