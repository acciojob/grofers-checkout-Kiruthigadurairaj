const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            // Select all elements with the class 'price'
            const prices = document.querySelectorAll(".price");

            // Calculate the total price
            let totalPrice = 0;
            prices.forEach(price => {
                totalPrice += parseFloat(price.textContent);
            });

            // Check if the total row already exists and remove it to avoid duplication
            const existingTotalRow = document.querySelector(".total-row");
            if (existingTotalRow) {
                existingTotalRow.remove();
            }

            // Create a new row for the total price
            const totalRow = document.createElement("tr");
            totalRow.classList.add("total-row");

            // Create a single cell for the total price
            const totalCell = document.createElement("td");
            totalCell.colSpan = 2; // Span across both columns
            totalCell.textContent = `Total Price: Rs ${totalPrice}`;
            totalCell.style.fontWeight = "bold";
            totalCell.style.textAlign = "center";

            // Append the total cell to the total row
            totalRow.appendChild(totalCell);

            // Append the total row to the table
            document.querySelector("table").appendChild(totalRow);
        };

        // Attach the click event listener to the button
        getSumBtn.addEventListener("click", getSum);
